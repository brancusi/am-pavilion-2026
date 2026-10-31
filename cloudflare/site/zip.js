// ZIP archives made on request from press images in R2, stored (not compressed) and streamed
// straight from the bucket. Copied from the media-handoff Worker (brancusi/media-handoff,
// worker/zip.js): press.json records each file's size and CRC-32, so every header is known
// before a byte is sent and the Worker never reads the images itself.

const U32 = 0xffffffff;

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

export function crc32(bytes) {
  let c = U32;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ U32) >>> 0;
}

class Out {   // a little-endian byte writer
  constructor(n) { this.b = new Uint8Array(n); this.v = new DataView(this.b.buffer); this.o = 0; }
  u16(x) { this.v.setUint16(this.o, x, true); this.o += 2; return this; }
  u32(x) { this.v.setUint32(this.o, x >>> 0, true); this.o += 4; return this; }
  u64(x) { this.v.setBigUint64(this.o, BigInt(x), true); this.o += 8; return this; }
  bytes(a) { this.b.set(a, this.o); this.o += a.length; return this; }
}

function dos(date) {   // MS-DOS time and date fields
  const d = date || new Date(Date.UTC(2026, 9, 20));
  return {
    time: (d.getUTCHours() << 11) | (d.getUTCMinutes() << 5) | (d.getUTCSeconds() >> 1),
    date: ((d.getUTCFullYear() - 1980) << 9) | ((d.getUTCMonth() + 1) << 5) | d.getUTCDate(),
  };
}

/** The archive as segments: [{bytes} | {key, size}], their total length and how many entries.
 *  entries: [{name, size, crc, key}] for R2 objects, or [{name, data: Uint8Array}] for small files made here.
 *  zip64At: the size past which ZIP64 is used (only lowered by the tests). */
export function plan(entries, { date, zip64At = U32 } = {}) {
  const enc = new TextEncoder(), { time, date: day } = dos(date);
  const segments = [], central = [];
  let offset = 0;
  for (const e of entries) {
    const name = enc.encode(e.name);
    const size = e.data ? e.data.length : e.size;
    const crc = e.data ? crc32(e.data) : e.crc;
    const big = size >= zip64At;
    const local = new Out(30 + name.length + (big ? 20 : 0));
    local.u32(0x04034b50).u16(big ? 45 : 20).u16(0x0800).u16(0).u16(time).u16(day).u32(crc)
      .u32(big ? U32 : size).u32(big ? U32 : size).u16(name.length).u16(big ? 20 : 0).bytes(name);
    if (big) local.u16(0x0001).u16(16).u64(size).u64(size);
    segments.push({ bytes: local.b });
    segments.push(e.data ? { bytes: e.data } : { key: e.key, size });
    central.push({ name, size, crc, offset, big });
    offset += local.b.length + size;
  }
  const cdStart = offset;
  for (const c of central) {
    const far = c.offset >= zip64At;
    const xs = (c.big ? 16 : 0) + (far ? 8 : 0);
    const h = new Out(46 + c.name.length + (xs ? 4 + xs : 0));
    h.u32(0x02014b50).u16(45).u16(c.big || far ? 45 : 20).u16(0x0800).u16(0).u16(time).u16(day).u32(c.crc)
      .u32(c.big ? U32 : c.size).u32(c.big ? U32 : c.size).u16(c.name.length).u16(xs ? 4 + xs : 0)
      .u16(0).u16(0).u16(0).u32(0).u32(far ? U32 : c.offset).bytes(c.name);
    if (xs) { h.u16(0x0001).u16(xs); if (c.big) h.u64(c.size).u64(c.size); if (far) h.u64(c.offset); }
    segments.push({ bytes: h.b });
    offset += h.b.length;
  }
  const cdSize = offset - cdStart, n = central.length;
  const z64 = n >= 0xffff || cdStart >= zip64At || cdSize >= zip64At;
  if (z64) {
    const r = new Out(56 + 20);
    r.u32(0x06064b50).u64(44).u16(45).u16(45).u32(0).u32(0).u64(n).u64(n).u64(cdSize).u64(cdStart);
    r.u32(0x07064b50).u32(0).u64(offset).u32(1);
    segments.push({ bytes: r.b });
    offset += r.b.length;
  }
  const end = new Out(22);
  end.u32(0x06054b50).u16(0).u16(0).u16(z64 ? 0xffff : n).u16(z64 ? 0xffff : n)
    .u32(z64 ? U32 : cdSize).u32(z64 ? U32 : cdStart).u16(0);
  segments.push({ bytes: end.b });
  offset += 22;
  return { segments, length: offset, count: n };
}

/** Write bytes [start, end] of the planned archive into `writable`, reading R2 objects from `bucket`. */
export async function send(bucket, { segments }, start, end, writable) {
  let at = 0;
  try {
    for (const s of segments) {
      const len = s.bytes ? s.bytes.length : s.size;
      const from = Math.max(start, at), to = Math.min(end + 1, at + len);   // the part of this segment wanted
      if (from < to) {
        if (s.bytes) {
          const w = writable.getWriter();
          await w.write(s.bytes.subarray(from - at, to - at));
          w.releaseLock();
        } else {
          const obj = await bucket.get(s.key, from - at === 0 && to - at === len ? {} : { range: { offset: from - at, length: to - from } });
          if (!obj) throw new Error(`missing in the bucket: ${s.key}`);
          await obj.body.pipeTo(writable, { preventClose: true });
        }
      }
      at += len;
      if (at > end) break;
    }
    await writable.close();
  } catch (err) {
    console.error("zip:", err);
    await writable.abort(err).catch(() => {});
  }
}

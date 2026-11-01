// 10 · Big Red. The 8 : 3 slab is laid down in three dimensions out of the
// mark, then cut: into units, carried pieces, a crib, Euclid's squares.
Grounds.register({
  id: 'big-red',
  create: function (env) {
    var G = Grounds, phone = !!env.phone;
    // The work turns through a full circle about 7 units across, so fit that
    // circle (about 18 cells wide, 10 deep, 3 high) to the stage.
    var St = env.stage, sc = Math.min(24, (St.w - 40) / 18, (St.h - 60) / 14);
    var iso = new G.Iso(env, { cx: St.x + St.w / 2, cy: St.y + St.h - 30 - 5 * sc, s: sc });
    var CAP = ['cut into 24 units', 'one block', 'four pieces, carried', 'units, briefly', 'improvised cuts', 'eight bars, a crib', 'Euclid: 3, 3, 2, 1, 1'];
    var cur = null, old = null, inst;

    function piece(x, y, w, d, c, t) {
      t = t || {};
      return { x: x, y: y, z: 0, w: w, d: d, h: 1, c: c,
        tx: t.x != null ? t.x : x, ty: t.y != null ? t.y : y, tz: t.z || 0,
        tw: t.w || w, td: t.d || d, th: t.h || 1, ph: Math.random() * 6.28 };
    }
    function spread(p, f) {
      var cx = p.x + p.w / 2, cy = p.y + p.d / 2;
      p.tx = p.x + cx * f; p.ty = p.y + cy * f;
      return p;
    }
    // Guillotine cuts of [x0,x1]×[y0,y1] into whole-unit rectangles.
    function cut(x0, y0, x1, y1, out, depth) {
      var w = x1 - x0, d = y1 - y0;
      if (depth > 3 || (w <= 2 && d <= 2) || (Math.random() < 0.25 && depth > 1)) { out.push([x0, y0, w, d]); return; }
      if (w >= d && w > 1) { var m = x0 + 1 + G.irand(w - 1); cut(x0, y0, m, y1, out, depth + 1); cut(m, y0, x1, y1, out, depth + 1); }
      else if (d > 1) { var n = y0 + 1 + G.irand(d - 1); cut(x0, y0, x1, n, out, depth + 1); cut(x0, n, x1, y1, out, depth + 1); }
      else out.push([x0, y0, w, d]);
    }
    function build(k) {
      var ps = [], i, j;
      if (k === 0 || k === 3) {
        for (i = 0; i < 8; i++) for (j = 0; j < 3; j++) {
          var c = k === 3 && (i + j) % 3 === 0 ? 'paper' : 'red';
          ps.push(k === 0 ? spread(piece(i - 4, j - 1.5, 1, 1, c), 0.16) : piece(i - 4, j - 1.5, 1, 1, c));
        }
      }
      if (k === 1) ps.push(piece(-4, -1.5, 8, 3, 'red'));
      if (k === 2) for (i = 0; i < 4; i++) ps.push(piece(-4 + i * 2, -1.5, 2, 3, 'red', { x: -6.5 + i * 3.4 }));
      if (k === 4) {
        var parts = []; cut(0, 0, 8, 3, parts, 0);
        for (i = 0; i < parts.length; i++) {
          var q = parts[i];
          ps.push(spread(piece(q[0] - 4, q[1] - 1.5, q[2], q[3], i % 3 === 0 ? G.other(env) : 'red'), 0.3));
        }
      }
      if (k === 5) {
        for (i = 0; i < 8; i++) {
          var L = Math.floor(i / 3), m = i % 3, even = L % 2 === 0;
          ps.push(piece(i - 4, -1.5, 1, 3, 'red', even ? { x: -1.5 + m, y: -1.5, z: L, w: 1, d: 3 } : { x: -1.5, y: -1.5 + m, z: L, w: 3, d: 1 }));
        }
      }
      if (k === 6) {
        var sq = [[0, 0, 3], [3, 0, 3], [6, 0, 2], [6, 2, 1], [7, 2, 1]], gx = [-5.2, -1.6, 2, 4.6, 6];
        for (i = 0; i < sq.length; i++) {
          var s = sq[i];
          ps.push(piece(s[0] - 4, s[1] - 1.5, s[2], s[2], i % 2 ? 'paper' : 'red', { x: gx[i], y: -1.5, h: s[2] }));
        }
      }
      return { ps: ps, k: k };
    }
    function pose(p, m, t, k, sp, settled) {
      var o = {
        x: G.lerp(p.x, p.tx, m), y: G.lerp(p.y, p.ty, m), z: G.lerp(p.z, p.tz, m),
        w: G.lerp(p.w, p.tw, m), d: G.lerp(p.d, p.td, m), h: G.lerp(p.h, p.th, m), a: 1
      };
      if (settled && k === 2) o.z += 0.7 * Math.abs(Math.sin(t * 0.005 * sp + p.ph));
      if (settled && k === 3) { var u = Math.max(0, Math.sin(t * 0.0018 * sp + p.ph)); u = u * u * u; o.z += u * 1.6; o.a = 1 - u * 0.55; }
      return o;
    }

    inst = {
      caption: '',
      state: function (k, src, t) {
        var sp = env.speed || 1;
        if (cur) old = { g: cur.g, last: cur.last || [], tOut: t };
        var g = build(k);
        cur = { g: g, tIn: t + 300 / sp, src: src >= 0 && src < 9 ? src : 4, last: [] };
        cur.tA = cur.tIn + (g.ps.length * 90 + 650) / sp;
        cur.tB = cur.tA + 950 / sp;
        inst.caption = 'Big Red · 8 : 3 · ' + (CAP[k] || CAP[0]);
      },
      frame: function (t, dt) {
        if (!cur) return;
        var sp = env.speed || 1, i, g = cur.g, n = g.ps.length, flying = [];
        iso.turn += (dt || 16) * 0.00009 * sp;
        iso.floor(6, 0.12);
        if (old) {
          var dto = t - old.tOut, on = old.last.length;
          for (i = 0; i < on; i++) {
            var u = G.clamp((dto - (on - 1 - i) * 25 / sp) / (380 / sp)), o = old.last[i];
            if (!o || u >= 1) continue;
            iso.box(o.x, o.y, o.z + G.lift(u) * 5, o.w, o.d, o.h, o.c, (1 - u) * o.a);
          }
          if (dto > (on * 25 + 420) / sp) old = null;
        }
        var m = G.smooth((t - cur.tA) / (950 / sp)), settled = t > cur.tB;
        for (i = 0; i < n; i++) {
          var p = g.ps[i], f = (t - cur.tIn - i * 90 / sp) / (450 / sp);
          if (f <= 0) continue;
          if (f < 1) { flying.push({ p: p, f: G.place(f) }); continue; }
          var q = pose(p, m, t, g.k, sp, settled), ins = 0.05;
          iso.box(q.x + ins, q.y + ins, q.z, q.w - 2 * ins, q.d - 2 * ins, q.h * 0.96, p.c, q.a);
          cur.last[i] = { x: q.x + ins, y: q.y + ins, z: q.z, w: q.w - 2 * ins, d: q.d - 2 * ins, h: q.h * 0.96, c: p.c, a: q.a };
        }
        iso.flush();
        var sz = Math.max(6, Math.round(sc * 0.7));
        for (i = 0; i < flying.length; i++) {
          var fp = flying[i].p, P = iso.proj(fp.x + fp.w / 2, fp.y + fp.d / 2, 1);
          G.fly(env, { x: P[0] - sz / 2, y: P[1] - sz / 2, w: sz, h: sz, c: fp.c }, cur.src, flying[i].f);
        }
        var pd = G.clamp((t - cur.tB) / (800 / sp));
        if (pd <= 0) return;
        if (g.k === 5) {
          iso.dim([1.5, -1.5, 0], [1.5, -1.5, 3], [0.8, -0.8, 0], '3', pd);
          iso.dim([-1.5, 1.5, 0], [1.5, 1.5, 0], [0, 0.8, 0], '3', pd);
        } else {
          iso.dim([-4, 1.5, 0], [4, 1.5, 0], [0, 1.4, 0], '8', pd);
          iso.dim([4, -1.5, 0], [4, 1.5, 0], [1.4 + (g.k === 6 ? 2.6 : g.k === 2 ? 3.2 : 0), 0, 0], '3', pd);
        }
        if (pd >= 1) {
          var R = iso.proj(0, 4.6, 0);
          G.label(env, R[0], R[1], g.k === 6 ? '8/3 = [2; 1, 2]' : g.k === 5 ? '8 bars × 3 = 24' : '8 : 3 = 2.667', true);
          if (g.k === 6 && !phone) {
            for (i = 0; i < n; i++) {
              var sp6 = g.ps[i], T = iso.proj(sp6.tx + sp6.tw / 2, sp6.ty + sp6.td / 2, sp6.th + 0.5);
              G.label(env, T[0], T[1], String(sp6.tw), true);
            }
          }
        }
      }
    };
    return inst;
  }
});

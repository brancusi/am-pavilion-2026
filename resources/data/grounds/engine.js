// Living grounds: the shared engine. Pieces load later, one file each, and
// call Grounds.register({ id, create(env) }).
//
// create(env) returns { state(k, src, t), frame(t, dt), caption }:
//   state  the ground changed to STATES[k]; src is the mark tile (0–8) that
//          releases it. env.k and env.st are already updated.
//   frame  draw the whole field (the canvas was cleared). t in ms.
//   caption one short line for the readout (the system in play), optional.
//
// env: { ctx, W, H, phone, k, st, src, mark: {x, y, s, tile, gap, u},
//        text: {x, y, w, h}, stage: {x, y, w, h}, speed }. mark.u is a 13th
// of the logo's side. text is the extent of the words; stage is the free
// area a work is built in (between text and mark side by side; the band
// under the mark when phone, i.e. the mark sits below the text).
(function () {
  var G = window.Grounds = window.Grounds || { pieces: {}, waiting: {} };
  G.register = function (p) {
    G.pieces[p.id] = p;
    var w = G.waiting[p.id];
    if (w) { delete G.waiting[p.id]; w.forEach(function (f) { f(p); }); }
  };

  G.STATES = [
    { k: 'yellow', g: '#eac54f', on: '#1b1a17', w: 'The Unit', l: 'Each block is resolved on its own before it joins anything. Color is embedded in the material, not painted on.' },
    { k: 'red', g: '#bf3b2f', on: '#fffcf5', w: 'Touch', l: 'Form is thought through by hand, one block at a time.' },
    { k: 'blue', g: '#2d5287', on: '#fffcf5', w: 'Hand', l: 'In Venice everything arrives on foot or by boat, carried by hand.' },
    { k: 'turquoise', g: '#4aaab0', on: '#1b1a17', w: 'Ephemeral', l: 'A stack stands for a day, then becomes the next one.' },
    { k: 'pink', g: '#ec8e9a', on: '#1b1a17', w: 'Improvise', l: 'The block is a tool for improvisation, for rhythm, for play.' },
    { k: 'brick', g: '#a28670', on: '#1b1a17', w: 'Stack', l: 'One block on another: the oldest way to build.' },
    { k: 'ink', g: '#1b1a17', on: '#f5f0e4', w: 'Tune', l: '“You tune into simplicity, blocks of colour.” Zadik Zadikian' }
  ];
  G.HEX = { yellow: '#eac54f', red: '#bf3b2f', blue: '#2d5287', turquoise: '#4aaab0', pink: '#ec8e9a', brick: '#a28670', ink: '#1b1a17', paper: '#f5f0e4' };
  G.PIGS = ['red', 'blue', 'yellow', 'turquoise', 'pink', 'brick', 'paper', 'ink'];
  G.TILES = [['red', 't'], ['blue', 'h'], ['yellow', 'e'], ['turquoise', 's'], ['red', 't'], ['pink', 'u'], ['brick', 'd'], ['blue', 'i'], ['ink', 'o']];
  G.PHI = (1 + Math.sqrt(5)) / 2;

  G.clamp = function (t) { return t < 0 ? 0 : t > 1 ? 1 : t; };
  G.place = function (t) { t = G.clamp(t); return 1 - Math.pow(1 - t, 4); };
  G.lift = function (t) { t = G.clamp(t); return t * t * t; };
  G.smooth = function (t) { t = G.clamp(t); return t * t * (3 - 2 * t); };
  G.lerp = function (a, b, t) { return a + (b - a) * t; };
  G.rand = function (a, b) { return a + Math.random() * (b - a); };
  G.irand = function (n) { return (Math.random() * n) | 0; };
  G.pick = function (a) { return a[(Math.random() * a.length) | 0]; };
  G.shuffle = function (a) { for (var i = a.length - 1; i > 0; i--) { var j = (Math.random() * (i + 1)) | 0, s = a[i]; a[i] = a[j]; a[j] = s; } return a; };
  G.stateOf = function (key) { for (var i = 0; i < G.STATES.length; i++) if (G.STATES[i].k === key) return i; return 0; };
  // A pigment other than the ground's, so it shows.
  G.other = function (env) { var c; do { c = G.pick(G.PIGS); } while (c === env.st.k); return c; };

  var rgbCache = {};
  G.rgb = function (hex) {
    if (rgbCache[hex]) return rgbCache[hex];
    var n = parseInt(hex.slice(1), 16);
    return (rgbCache[hex] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]);
  };
  // f < 1 darkens, f > 1 lightens toward paper.
  G.shade = function (hex, f) {
    var c = G.rgb(hex), p = G.rgb('#fffcf5'), r = [0, 0, 0];
    for (var i = 0; i < 3; i++) r[i] = f <= 1 ? c[i] * f : c[i] + (p[i] - c[i]) * (f - 1);
    return 'rgb(' + (r[0] | 0) + ',' + (r[1] | 0) + ',' + (r[2] | 0) + ')';
  };

  G.tile = function (env, i) {
    var m = env.mark;
    return { x: m.x + (i % 3) * (m.tile + m.gap), y: m.y + ((i / 3) | 0) * (m.tile + m.gap), s: m.tile };
  };
  G.inRect = function (r, x, y, pad) { pad = pad || 0; return x > r.x - pad && x < r.x + r.w + pad && y > r.y - pad && y < r.y + r.h + pad; };
  // True over the text column or the mark, where the field steps aside.
  G.sheltered = function (env, x, y, pad) {
    var m = env.mark;
    return G.inRect(env.text, x, y, pad) || G.inRect({ x: m.x, y: m.y, w: m.s, h: m.s }, x, y, pad) ||
      (env.credit ? G.inRect(env.credit, x, y, pad) : false);
  };

  // A block in pigment c; one the colour of the ground is drawn as an outline.
  G.block = function (env, x, y, w, h, c, alpha) {
    var ctx = env.ctx;
    if (alpha != null) ctx.globalAlpha = alpha;
    if (c === env.st.k) { ctx.globalAlpha *= 0.6; ctx.strokeStyle = env.st.on; ctx.lineWidth = 1; ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1); }
    else { ctx.fillStyle = G.HEX[c] || c; ctx.fillRect(x, y, w, h); }
    ctx.globalAlpha = 1;
  };
  // Block r ({x, y, w, h, c} in px) on its way out of tile src; f 0 → 1.
  G.fly = function (env, r, src, f, alpha) {
    var t = G.tile(env, src), cx = t.x + t.s / 2, cy = t.y + t.s / 2, s0 = t.s * 0.3;
    var X = cx - s0 / 2 + (r.x - cx + s0 / 2) * f, Y = cy - s0 / 2 + (r.y - cy + s0 / 2) * f;
    G.block(env, X, Y, s0 + (r.w - s0) * f, s0 + (r.h - s0) * f, r.c, alpha);
  };

  G.mono = function (env, small) {
    var size = (env.phone ? 9 : 11) - (small ? 1 : 0);
    env.ctx.font = '500 ' + size + "px 'IBM Plex Mono', monospace";
    return size;
  };
  // A label on a chip of the ground colour, so it reads over lines.
  G.label = function (env, cx, cy, text, small) {
    var ctx = env.ctx, size = G.mono(env, small), w = ctx.measureText(text).width + 8, h = size + 6;
    ctx.fillStyle = env.st.g; ctx.fillRect(cx - w / 2, cy - h / 2, w, h);
    ctx.fillStyle = env.st.on; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, cx, cy + 0.5);
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
  };
  G.text = function (env, x, y, text, align, small) {
    var ctx = env.ctx;
    G.mono(env, small); ctx.fillStyle = env.st.on; ctx.textAlign = align || 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
    ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
  };
  // A dimension line from a to b at `at` (px), drawn to progress p, with
  // slashed ticks and its label once nearly drawn.
  G.dim = function (env, o, a, b, at, text, p) {
    p = p == null ? 1 : G.clamp(p);
    if (p <= 0) return;
    var ctx = env.ctx, k = 4, m = a + (b - a) * p;
    ctx.strokeStyle = env.st.on; ctx.lineWidth = 1;
    ctx.beginPath();
    if (o === 'h') {
      ctx.moveTo(a, at); ctx.lineTo(m, at);
      ctx.moveTo(a - k, at + k); ctx.lineTo(a + k, at - k);
      if (p >= 1) { ctx.moveTo(b - k, at + k); ctx.lineTo(b + k, at - k); }
    } else {
      ctx.moveTo(at, a); ctx.lineTo(at, m);
      ctx.moveTo(at - k, a + k); ctx.lineTo(at + k, a - k);
      if (p >= 1) { ctx.moveTo(at - k, b + k); ctx.lineTo(at + k, b - k); }
    }
    ctx.stroke();
    if (p > 0.7 && text) G.label(env, o === 'h' ? (a + b) / 2 : at, o === 'h' ? at : (a + b) / 2, text);
  };
  G.line = function (env, x1, y1, x2, y2, dash, alpha) {
    var ctx = env.ctx;
    ctx.save(); ctx.strokeStyle = env.st.on; ctx.lineWidth = 1; ctx.globalAlpha = alpha == null ? 0.7 : alpha;
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.restore();
  };

  G.PAT = {
    glider: [[1, 0], [2, 1], [0, 2], [1, 2], [2, 2]],
    rpent: [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]],
    acorn: [[1, 0], [3, 1], [0, 2], [1, 2], [4, 2], [5, 2], [6, 2]],
    lwss: [[1, 0], [4, 0], [0, 1], [0, 2], [4, 2], [0, 3], [1, 3], [2, 3], [3, 3]],
    block: [[0, 0], [1, 0], [0, 1], [1, 1]],
    blinker: [[0, 0], [1, 0], [2, 0]]
  };
  // Life on a torus. Cells hold a pigment index + 1 (0 is empty); a birth
  // takes the commonest pigment among its parents.
  G.Life = function (cols, rows, rule) {
    this.c = cols; this.r = rows;
    this.a = new Uint8Array(cols * rows); this.b = new Uint8Array(cols * rows);
    this.age = new Uint16Array(cols * rows);
    this.setRule(rule || 'B3/S23');
  };
  G.Life.prototype.setRule = function (rule) {
    var m = /B(\d*)\/S(\d*)/.exec(rule) || [0, '3', '23'];
    this.rule = rule; this.born = []; this.surv = [];
    for (var i = 0; i < 9; i++) { this.born[i] = m[1].indexOf(String(i)) >= 0; this.surv[i] = m[2].indexOf(String(i)) >= 0; }
  };
  G.Life.prototype.idx = function (i, j) { i = ((i % this.c) + this.c) % this.c; j = ((j % this.r) + this.r) % this.r; return j * this.c + i; };
  G.Life.prototype.get = function (i, j) { return this.a[this.idx(i, j)]; };
  G.Life.prototype.set = function (i, j, v) { var n = this.idx(i, j); this.a[n] = v; if (!v) this.age[n] = 0; };
  G.Life.prototype.stamp = function (pat, i, j, v, flip) {
    for (var n = 0; n < pat.length; n++) {
      var dx = pat[n][0], dy = pat[n][1];
      if (flip & 1) dx = -dx;
      if (flip & 2) dy = -dy;
      this.set(i + dx, j + dy, v);
    }
  };
  G.Life.prototype.clear = function () { this.a.fill(0); this.age.fill(0); };
  G.Life.prototype.step = function () {
    var c = this.c, r = this.r, a = this.a, b = this.b, cnt = new Uint8Array(9), alive = 0;
    for (var j = 0; j < r; j++) {
      var jm = ((j - 1 + r) % r) * c, j0 = j * c, jp = ((j + 1) % r) * c;
      for (var i = 0; i < c; i++) {
        var im = (i - 1 + c) % c, ip = (i + 1) % c, n = 0, v;
        cnt.fill(0);
        v = a[jm + im]; if (v) { n++; cnt[v]++; }
        v = a[jm + i]; if (v) { n++; cnt[v]++; }
        v = a[jm + ip]; if (v) { n++; cnt[v]++; }
        v = a[j0 + im]; if (v) { n++; cnt[v]++; }
        v = a[j0 + ip]; if (v) { n++; cnt[v]++; }
        v = a[jp + im]; if (v) { n++; cnt[v]++; }
        v = a[jp + i]; if (v) { n++; cnt[v]++; }
        v = a[jp + ip]; if (v) { n++; cnt[v]++; }
        var me = a[j0 + i];
        if (me) { b[j0 + i] = this.surv[n] ? me : 0; }
        else if (this.born[n]) { var best = 1; for (var q = 2; q < 9; q++) if (cnt[q] > cnt[best]) best = q; b[j0 + i] = best; }
        else b[j0 + i] = 0;
        if (b[j0 + i]) { alive++; this.age[j0 + i] = me ? Math.min(65535, this.age[j0 + i] + 1) : 0; }
        else this.age[j0 + i] = 0;
      }
    }
    this.a = b; this.b = a; this.alive = alive;
    return alive;
  };
  G.pig = function (v) { return G.PIGS[v - 1]; };
  G.code = function (key) { return G.PIGS.indexOf(key) + 1; };

  // Isometric boxes, turned by `turn` about the origin, drawn far to near.
  G.Iso = function (env, o) { this.env = env; this.cx = o.cx; this.cy = o.cy; this.s = o.s; this.turn = o.turn || 0; this.list = []; };
  G.Iso.prototype.proj = function (x, y, z) {
    var c = Math.cos(this.turn), s = Math.sin(this.turn), rx = x * c - y * s, ry = x * s + y * c;
    return [this.cx + (rx - ry) * 0.866 * this.s, this.cy + (rx + ry) * 0.5 * this.s - z * this.s];
  };
  G.Iso.prototype.box = function (x, y, z, w, d, h, c, alpha) { this.list.push({ x: x, y: y, z: z, w: w, d: d, h: h, c: c, a: alpha == null ? 1 : alpha }); };
  G.Iso.prototype.flush = function () {
    var env = this.env, ctx = env.ctx, cs = Math.cos(this.turn), sn = Math.sin(this.turn), self = this, i;
    var depth = function (b) { var mx = b.x + b.w / 2, my = b.y + b.d / 2; return (mx * cs - my * sn) + (mx * sn + my * cs) + (b.z + b.h / 2) * 0.35; };
    this.list.sort(function (p, q) { return depth(p) - depth(q); });
    var N = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    for (i = 0; i < this.list.length; i++) {
      var b = this.list[i];
      if (b.a <= 0) continue;
      var P = [[b.x, b.y], [b.x + b.w, b.y], [b.x + b.w, b.y + b.d], [b.x, b.y + b.d]];
      var hollow = b.c === env.st.k, hex = G.HEX[b.c] || b.c;
      ctx.globalAlpha = b.a * (hollow ? 0.6 : 1);
      ctx.lineWidth = 1; ctx.lineJoin = 'round';
      for (var f = 0; f < 4; f++) {
        var nx = N[f][0] * cs - N[f][1] * sn, ny = N[f][0] * sn + N[f][1] * cs;
        if (nx + ny <= 0) continue;
        var A = P[f], B = P[(f + 1) % 4];
        var q = [self.proj(A[0], A[1], b.z), self.proj(B[0], B[1], b.z), self.proj(B[0], B[1], b.z + b.h), self.proj(A[0], A[1], b.z + b.h)];
        self.poly(q, hollow ? null : G.shade(hex, nx - ny > 0 ? 0.74 : 0.88), hollow ? env.st.on : null);
      }
      var top = P.map(function (p) { return self.proj(p[0], p[1], b.z + b.h); });
      this.poly(top, hollow ? null : G.shade(hex, 1.06), hollow ? env.st.on : null);
    }
    ctx.globalAlpha = 1;
    this.list = [];
  };
  G.Iso.prototype.poly = function (q, fill, stroke) {
    var ctx = this.env.ctx;
    ctx.beginPath(); ctx.moveTo(q[0][0], q[0][1]);
    for (var i = 1; i < q.length; i++) ctx.lineTo(q[i][0], q[i][1]);
    ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = fill; ctx.stroke(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.stroke(); }
  };
  // A hairline floor lattice, n cells either side of the origin.
  G.Iso.prototype.floor = function (n, alpha) {
    var ctx = this.env.ctx;
    ctx.save(); ctx.strokeStyle = this.env.st.on; ctx.globalAlpha = alpha == null ? 0.18 : alpha; ctx.lineWidth = 1;
    ctx.beginPath();
    for (var i = -n; i <= n; i++) {
      var a = this.proj(i, -n, 0), b = this.proj(i, n, 0), c = this.proj(-n, i, 0), d = this.proj(n, i, 0);
      ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.moveTo(c[0], c[1]); ctx.lineTo(d[0], d[1]);
    }
    ctx.stroke(); ctx.restore();
  };
  // A dimension in world space: from p to q (each [x, y, z]), offset by o.
  G.Iso.prototype.dim = function (p, q, o, text, prog) {
    prog = prog == null ? 1 : G.clamp(prog);
    if (prog <= 0) return;
    var env = this.env, ctx = env.ctx;
    var A = this.proj(p[0] + o[0], p[1] + o[1], p[2] + o[2]), B = this.proj(q[0] + o[0], q[1] + o[1], q[2] + o[2]);
    var M = [A[0] + (B[0] - A[0]) * prog, A[1] + (B[1] - A[1]) * prog];
    ctx.strokeStyle = env.st.on; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(M[0], M[1]);
    ctx.moveTo(A[0] - 4, A[1] + 4); ctx.lineTo(A[0] + 4, A[1] - 4);
    if (prog >= 1) { ctx.moveTo(B[0] - 4, B[1] + 4); ctx.lineTo(B[0] + 4, B[1] - 4); }
    ctx.stroke();
    if (prog > 0.7 && text) G.label(env, (A[0] + B[0]) / 2, (A[1] + B[1]) / 2, text);
  };
})();

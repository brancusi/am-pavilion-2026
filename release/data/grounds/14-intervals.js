// 14 · Intervals: blocks leave the mark, fall and stack into columns whose
// heights sound musical ratios: octave 2 : 1, fifth 3 : 2, fourth 4 : 3…
(function () {
  var G = window.Grounds, PI = Math.PI;
  var CFG = [
    { r: [1, 1, 1], cap: '1 : 1 : 1 · unison' },
    { r: [2, 1], cap: '2 : 1 · the octave' },
    { r: [3, 2], cap: '3 : 2 · the fifth' },
    { r: [4, 3], cap: '4 : 3 · the fourth, restacked', eph: true },
    { r: null, cap: '1 … 6 · overtones, improvised order' },
    { r: [4, 5, 6], cap: '4 : 5 : 6 · the major triad' },
    { r: [1, 2, 3, 4, 5, 6, 7], cap: '1 : 2 : 3 : 4 : 5 : 6 : 7 · the overtone series', paper: true }
  ];
  // The stage, less room for the height dimension (left), the ratio labels
  // (below) and the column numbers (above).
  var region = function (env) {
    var S = env.stage;
    return { x0: S.x + 28, x1: S.x + S.w - 20, base: S.y + S.h - 36, top: S.y + 26 };
  };
  var build = function (env, k, t) {
    var cfg = CFG[k] || CFG[0], sp = env.speed || 1, R = region(env);
    var r = cfg.r ? cfg.r.slice() : G.shuffle([1, 2, 3, 4, 5, 6]);
    var C = r.length, maxN = Math.max.apply(null, r), mult = Math.max(1, Math.floor(12 / maxN)), gap = 8;
    var cw = Math.min(72, (R.x1 - R.x0 - (C - 1) * gap) / C);
    var u = Math.min((R.base - R.top) / (maxN * mult), 56);
    var x0 = R.x0 + (R.x1 - R.x0 - (C * cw + (C - 1) * gap)) / 2;
    var cols = [], blocks = [], i, j, order = 0;
    for (i = 0; i < C; i++) {
      var c = cfg.paper ? 'paper' : G.other(env), n = r[i] * mult;
      cols.push({ x: x0 + i * (cw + gap), n: r[i], h: n * u, c: c, top: n - 1 });
      for (j = 0; j < n; j++) blocks.push({ col: i, j: j, c: (Math.floor(j / mult) % 2 && !cfg.paper) ? (c === 'paper' ? 'ink' : 'paper') : c });
    }
    // Round robin, bottom up: each column grows at once, like a chord held.
    var maxRows = maxN * mult;
    for (j = 0; j < maxRows; j++) for (i = 0; i < blocks.length; i++) if (blocks[i].j === j) blocks[i].o = order++;
    var delay = 70 / sp, dur = 620 / sp, t0 = t + 200 / sp;
    blocks.forEach(function (b) {
      var col = cols[b.col];
      b.r = { x: col.x + 1.5, y: R.base - (b.j + 1) * u + 1.5, w: cw - 3, h: u - 3, c: b.c };
      b.t0 = t0 + b.o * delay;
    });
    return { cfg: cfg, R: R, cols: cols, blocks: blocks, u: u, cw: cw, mult: mult, dur: dur, tBuilt: t0 + blocks.length * delay + dur, nextEph: 0 };
  };
  // A block falling out of tile src: across, then down under gravity.
  var fall = function (env, b, src, f, alpha) {
    var tl = G.tile(env, src), s0 = tl.s * 0.3, sx = tl.x + tl.s / 2 - s0 / 2, sy = tl.y + tl.s / 2 - s0 / 2;
    var x = G.lerp(sx, b.r.x, G.smooth(f)), y = G.lerp(sy, b.r.y, f * f) - Math.sin(PI * f) * 90;
    G.block(env, x, y, G.lerp(s0, b.r.w, G.place(f)), G.lerp(s0, b.r.h, G.place(f)), b.r.c, alpha);
  };

  G.register({
    id: 'intervals',
    create: function (env) {
      var cur = null, old = null;
      var api = {
        caption: '',
        state: function (k, src, t) {
          if (cur) { old = cur; old.tOut = t; }
          cur = build(env, k, t); cur.src = src;
          api.caption = cur.cfg.cap;
        },
        frame: function (t) {
          if (!cur) return;
          var sp = env.speed || 1, i;
          if (old) {
            var n0 = old.blocks.length;
            for (i = 0; i < n0; i++) {
              var q = G.lift((t - old.tOut - (n0 - 1 - old.blocks[i].o) * 10 / sp) / (360 / sp));
              if (q < 1) fall(env, old.blocks[i], old.src, 1 - q);
            }
            if (t - old.tOut > (360 + n0 * 10) / sp) old = null;
          }
          if (cur.cfg.eph && t > cur.tBuilt && t > cur.nextEph) {
            var col = G.irand(cur.cols.length), top = null;
            for (i = 0; i < cur.blocks.length; i++) { var bb = cur.blocks[i]; if (bb.col === col && (!top || bb.j > top.j)) top = bb; }
            if (top && t - top.t0 > cur.dur) top.t0 = t;
            cur.nextEph = t + 650 / sp;
          }
          for (i = 0; i < cur.blocks.length; i++) {
            var b = cur.blocks[i], f = G.clamp((t - b.t0) / cur.dur);
            if (f > 0) fall(env, b, cur.src, f);
          }
          var p = (t - cur.tBuilt) / (800 / sp);
          if (p <= 0) return;
          var R = cur.R, C = cur.cols.length, tallest = 0;
          for (i = 0; i < C; i++) {
            var c = cur.cols[i], y = R.base - c.h, cx = c.x + cur.cw / 2;
            tallest = Math.max(tallest, c.h);
            G.line(env, c.x, y, c.x + (R.x1 + 12 - c.x) * G.clamp(p - i * 0.08), y, [2, 4], 0.45);
            if (p > 0.6) G.label(env, cx, y - 12, String(c.n), true);
            if (C <= 4 && i > 0 && p > 0.8) {
              var a = cur.cols[i - 1];
              G.line(env, a.x + cur.cw / 2, R.base + 10, cx, R.base + 10, null, 0.8);
              G.label(env, (a.x + cur.cw / 2 + cx) / 2, R.base + 22, a.n + ' : ' + c.n, true);
            }
          }
          G.dim(env, 'v', R.base - tallest, R.base, cur.cols[0].x - 16, '× ' + Math.round(tallest / cur.u), p);
        }
      };
      return api;
    }
  });
})();

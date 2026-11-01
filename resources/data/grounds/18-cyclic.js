// 18 · Cyclic: each pigment consumes the one before it. A cell takes the
// next colour in the cycle when enough neighbours already have it; order
// arrives as waves and spirals. Each ground changes range, threshold and
// the number of colours, and the new rule spreads out of the source tile.
(function () {
  var G = window.Grounds;
  var RULES = [
    { r: 1, t: 1, c: 7, m: 'N', cap: 'r1 · t1 · 7 colours' },
    { r: 1, t: 1, c: 14, m: 'N', cap: 'r1 · t1 · 14 colours' },
    { r: 2, t: 2, c: 6, m: 'N', cap: 'r2 · t2 · 6 colours · squarish' },
    { r: 3, t: 10, c: 2, m: 'N', cap: 'r3 · t10 · 2 colours · amoeba' },
    { r: 3, t: 5, c: 8, m: 'M', cap: 'r3 · t5 · 8 colours · spirals' },
    { r: 1, t: 3, c: 3, m: 'M', cap: 'r1 · t3 · 3 colours' },
    { r: 3, t: 4, c: 5, m: 'N', cap: 'r3 · t4 · 5 colours · stripes' }
  ];
  var WALL = 255;

  G.register({
    id: 'cyclic',
    create: function (env) {
      var C = env.phone ? 12 : 16;
      var cols = Math.ceil(env.W / C), rows = Math.ceil(env.H / C), N = cols * rows;
      var a = new Uint8Array(N), b = new Uint8Array(N), i, j, q;
      // Only the stage turns; the words, the mark and the rest stay still.
      var S = env.stage, i0 = Math.ceil(S.x / C), j0 = Math.ceil(S.y / C), i1 = Math.floor((S.x + S.w) / C) - 1, j1 = Math.floor((S.y + S.h) / C) - 1;
      for (j = 0; j < rows; j++) for (i = 0; i < cols; i++) {
        if (i < i0 || i > i1 || j < j0 || j > j1 || G.sheltered(env, i * C + C / 2, j * C + C / 2, 6)) a[j * cols + i] = WALL;
      }
      var rule = RULES[0], offs = [], fills = [], buckets = [], last = 0, wave = null, first = true;

      function neighbourhood(r, m) {
        var o = [];
        for (var dy = -r; dy <= r; dy++) for (var dx = -r; dx <= r; dx++) {
          if (!dx && !dy) continue;
          if (m === 'N' && Math.abs(dx) + Math.abs(dy) > r) continue;
          o.push([dx, dy]);
        }
        return o;
      }
      function step() {
        var c = rule.c, t = rule.t, no = offs.length;
        for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
          var p = y * cols + x, s = a[p];
          if (s === WALL) { b[p] = WALL; continue; }
          var nx = (s + 1) % c, n = 0;
          for (var o = 0; o < no; o++) {
            var xx = x + offs[o][0], yy = y + offs[o][1];
            if (xx < 0 || yy < 0 || xx >= cols || yy >= rows) continue;
            if (a[yy * cols + xx] === nx && ++n >= t) break;
          }
          b[p] = n >= t ? nx : s;
        }
        var sw = a; a = b; b = sw;
        if (wave) {
          var r0 = wave.r, r1 = wave.r + 2;
          for (var y2 = Math.max(0, (wave.j - r1) | 0); y2 < Math.min(rows, wave.j + r1 + 1); y2++) {
            for (var x2 = Math.max(0, (wave.i - r1) | 0); x2 < Math.min(cols, wave.i + r1 + 1); x2++) {
              var d = Math.sqrt((x2 - wave.i) * (x2 - wave.i) + (y2 - wave.j) * (y2 - wave.j)), p2 = y2 * cols + x2;
              if (d >= r0 && d < r1 && a[p2] !== WALL) a[p2] = (Math.random() * rule.c) | 0;
            }
          }
          wave.r = r1;
          if (wave.r > cols + rows) wave = null;
        }
      }

      var self = {
        caption: '',
        state: function (k, src) {
          rule = RULES[k] || RULES[0];
          offs = neighbourhood(rule.r, rule.m);
          var others = G.PIGS.filter(function (c) { return c !== env.st.k; });
          fills = [];
          for (var s = 0; s < rule.c; s++) {
            // With many colours, every other one stays ground: calmer, and
            // the waves read as bands.
            if (s === 0 || (rule.c >= 5 && s % 2)) { fills.push(null); continue; }
            var hex = G.HEX[others[(s - 1 + k) % others.length]];
            fills.push(s > others.length ? G.shade(hex, 0.78) : hex);
          }
          for (q = 0; q < N; q++) if (a[q] !== WALL) a[q] = first ? (Math.random() * rule.c) | 0 : a[q] % rule.c;
          var tl = G.tile(env, src);
          wave = { i: (tl.x + tl.s / 2) / C, j: (tl.y + tl.s / 2) / C, r: 0 };
          first = false;
          self.caption = rule.cap;
        },
        frame: function (t) {
          var ctx = env.ctx, s;
          if (t - last > 70 / (env.speed || 1)) { last = t; step(); }
          for (s = 0; s < rule.c; s++) { buckets[s] = buckets[s] || []; buckets[s].length = 0; }
          for (q = 0; q < N; q++) { var v = a[q]; if (v !== WALL && v < rule.c) buckets[v].push(q); }
          for (s = 1; s < rule.c; s++) {
            var bk = buckets[s];
            if (!bk.length || !fills[s]) continue;
            ctx.fillStyle = fills[s];
            ctx.beginPath();
            for (q = 0; q < bk.length; q++) ctx.rect((bk[q] % cols) * C + 1, ((bk[q] / cols) | 0) * C + 1, C - 2, C - 2);
            ctx.fill();
          }
          if (wave && wave.r > 1) {
            // The new rule's front, out of the source tile, seen in the stage.
            var cx = wave.i * C, cy = wave.j * C, R = wave.r * C;
            ctx.save(); ctx.beginPath(); ctx.rect(S.x, S.y, S.w, S.h); ctx.clip();
            ctx.strokeStyle = env.st.on; ctx.globalAlpha = 0.7; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
            var lx = Math.max(S.x + 8, Math.min(S.x + S.w - 8, cx)), ly = Math.max(S.y + 12, Math.min(S.y + S.h - 12, cy));
            var ex = cx - R;
            if (ex > S.x && ex < S.x + S.w) G.dim(env, 'h', ex, Math.min(S.x + S.w, lx === cx ? cx : S.x + S.w), ly, 'r ' + Math.round(wave.r));
          }
        }
      };
      return self;
    }
  });
})();

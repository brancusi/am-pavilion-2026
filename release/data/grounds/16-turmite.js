// 16 · Turmite: ants walk out of the source tile, turning by the colour
// under them; each ground is a different string of turns.
(function () {
  var G = window.Grounds;
  var RULES = ['RL', 'LRRL', 'RLR', 'LLRR', 'RRLLLRLLLRRR', 'LRRRRRLLR', 'RRLL'];
  var ANTS = [1, 1, 2, 1, 3, 2, 1];
  var DX = [0, 1, 0, -1], DY = [-1, 0, 1, 0];

  G.register({
    id: 'turmite',
    create: function (env) {
      var C = env.phone ? 10 : 12;
      var cols = Math.ceil(env.W / C), rows = Math.ceil(env.H / C), N = cols * rows;
      var cell = new Uint8Array(N), wall = new Uint8Array(N), i, j;
      // Ants walk only in the stage; everything else is a wall.
      var S = env.stage, i0 = Math.ceil(S.x / C), j0 = Math.ceil(S.y / C), i1 = Math.floor((S.x + S.w) / C) - 1, j1 = Math.floor((S.y + S.h) / C) - 1;
      for (j = 0; j < rows; j++) for (i = 0; i < cols; i++) {
        if (i < i0 || i > i1 || j < j0 || j > j1 || G.sheltered(env, i * C + C / 2, j * C + C / 2, 6)) wall[j * cols + i] = 1;
      }
      var rule = RULES[0], pal = [], ants = [], box = null, t0 = 0, old = null;
      var buckets = [];

      function palette() {
        var others = G.PIGS.filter(function (c) { return c !== env.st.k; }), p = [null];
        for (var s = 1; s < 13; s++) p[s] = others[(s - 1 + env.k) % others.length];
        return p;
      }
      function grow(i, j) {
        if (!box) { box = { a: i, b: i, c: j, d: j }; return; }
        if (i < box.a) box.a = i; if (i > box.b) box.b = i;
        if (j < box.c) box.c = j; if (j > box.d) box.d = j;
      }
      function step(ant) {
        var n = rule.length, at = ant.j * cols + ant.i, s = cell[at] % n;
        ant.d = (ant.d + (rule.charAt(s) === 'R' ? 1 : 3)) % 4;
        cell[at] = (s + 1) % n;
        if (cell[at]) grow(ant.i, ant.j);
        var ni = ant.i + DX[ant.d], nj = ant.j + DY[ant.d];
        if (ni < 0 || nj < 0 || ni >= cols || nj >= rows || wall[nj * cols + ni]) { ant.d = (ant.d + 2) % 4; return; }
        ant.i = ni; ant.j = nj;
      }
      function paint(grid, p, n, alpha) {
        var ctx = env.ctx, s, q;
        for (s = 0; s < 13; s++) buckets[s] = buckets[s] || [], buckets[s].length = 0;
        for (q = 0; q < N; q++) { var v = grid[q]; if (v && v < 13) buckets[v].push(q); }
        ctx.globalAlpha = alpha;
        for (s = 1; s < n && s < 13; s++) {
          var b = buckets[s];
          if (!b.length || !p[s]) continue;
          ctx.fillStyle = G.HEX[p[s]];
          ctx.beginPath();
          for (q = 0; q < b.length; q++) ctx.rect((b[q] % cols) * C + 1, ((b[q] / cols) | 0) * C + 1, C - 2, C - 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      var self = {
        caption: '',
        state: function (k, src, t) {
          if (t0) old = { cell: cell.slice(), pal: pal, n: rule.length, t: t };
          rule = RULES[k] || RULES[0];
          pal = palette();
          cell.fill(0); box = null; t0 = t;
          // Start at the stage cell nearest the source tile.
          var tl = G.tile(env, src), ci = Math.min(i1, Math.max(i0, ((tl.x + tl.s / 2) / C) | 0)), cj = Math.min(j1, Math.max(j0, ((tl.y + tl.s / 2) / C) | 0));
          ants = [];
          for (var a = 0; a < (ANTS[k] || 1); a++) {
            var ai = Math.min(i1, Math.max(i0, ci - a * 4)), aj = cj;
            if (wall[aj * cols + ai]) { ai = (i0 + i1) >> 1; aj = (j0 + j1) >> 1; }
            ants.push({ i: ai, j: aj, d: (a + k) % 4, ox: tl.x + tl.s / 2, oy: tl.y + tl.s / 2 });
          }
          self.caption = rule + ' · ' + ants.length + (ants.length > 1 ? ' ants' : ' ant');
        },
        frame: function (t) {
          var ctx = env.ctx, el = t - t0, a, n;
          var steps = Math.round(Math.min(36, 3 + el / 120) * (env.speed || 1));
          for (n = 0; n < steps; n++) for (a = 0; a < ants.length; a++) step(ants[a]);
          if (old) {
            var fa = 1 - (t - old.t) / 700;
            if (fa <= 0) old = null; else paint(old.cell, old.pal, old.n, fa);
          }
          paint(cell, pal, rule.length, 1);
          ctx.fillStyle = env.st.on;
          for (a = 0; a < ants.length; a++) {
            // A thread from the source tile to its ant while it sets out.
            if (el < 1800) G.line(env, ants[a].ox, ants[a].oy, ants[a].i * C + C / 2, ants[a].j * C + C / 2, [3, 4], 0.6 * (1 - el / 1800));
            ctx.fillStyle = env.st.on; ctx.fillRect(ants[a].i * C, ants[a].j * C, C, C);
          }
          // Measure what is painted now (cells can turn back to empty).
          if (box && t - (self.boxAt || 0) > 400) {
            self.boxAt = t;
            var bx = null;
            for (var q = 0; q < N; q++) if (cell[q]) {
              var qi = q % cols, qj = (q / cols) | 0;
              if (!bx) bx = { a: qi, b: qi, c: qj, d: qj };
              else { if (qi < bx.a) bx.a = qi; if (qi > bx.b) bx.b = qi; if (qj < bx.c) bx.c = qj; if (qj > bx.d) bx.d = qj; }
            }
            if (bx) box = bx;
          }
          if (box && box.b > box.a + 2 && box.d > box.c + 2) {
            var x0 = box.a * C, x1 = (box.b + 1) * C, y0 = box.c * C, y1 = (box.d + 1) * C;
            var hy = y0 - 14 > S.y ? y0 - 14 : y1 + 14, vx = x0 - 14 > S.x ? x0 - 14 : x1 + 14;
            ctx.globalAlpha = 0.85;
            G.dim(env, 'h', x0, x1, hy, (box.b - box.a + 1) + '');
            G.dim(env, 'v', y0, y1, vx, (box.d - box.c + 1) + '');
            ctx.globalAlpha = 1;
          }
        }
      };
      return self;
    }
  });
})();

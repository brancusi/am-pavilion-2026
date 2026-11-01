// 17 · Sandpile: blocks drop on the source tile one by one; a cell that
// holds too many topples onto its neighbours. Each ground changes who the
// neighbours are, and the pile's fractal changes with it.
(function () {
  var G = window.Grounds;
  var VN = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  var RULES = [
    { nb: VN, th: 4, drop: 'point', cap: '4 → topple' },
    { nb: [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]], th: 8, drop: 'point', cap: '8 → topple · Moore' },
    { nb: [[1, 1], [1, -1], [-1, 1], [-1, -1]], th: 4, drop: 'point', cap: '4 → topple · diagonal' },
    { nb: VN, th: 4, drop: 'scatter', cap: '4 → topple · scattered' },
    { nb: VN, th: 4, drop: 'three', cap: '4 → topple · three sources' },
    { nb: [[0, 1], [0, 1], [-1, 0], [1, 0]], th: 4, drop: 'point', cap: '4 → topple · 2 fall' },
    { nb: [[2, 0], [-2, 0], [0, 2], [0, -2]], th: 4, drop: 'point', cap: '4 → topple · leap 2' }
  ];

  G.register({
    id: 'sandpile',
    create: function (env) {
      var C = env.phone ? 7 : 9;
      var cols = Math.ceil(env.W / C), rows = Math.ceil(env.H / C), N = cols * rows;
      var h = new Uint16Array(N), wall = new Uint8Array(N), stack = [], buckets = [], i, j;
      // The pile lives in the stage; grains that topple off it are lost.
      var S = env.stage, i0 = Math.ceil(S.x / C), j0 = Math.ceil(S.y / C), i1 = Math.floor((S.x + S.w) / C) - 1, j1 = Math.floor((S.y + S.h) / C) - 1;
      for (j = 0; j < rows; j++) for (i = 0; i < cols; i++) {
        if (i < i0 || i > i1 || j < j0 || j > j1 || G.sheltered(env, i * C + C / 2, j * C + C / 2, 6)) wall[j * cols + i] = 1;
      }
      var rule = RULES[0], pal = [], srcs = [], area = null, t0 = 0, old = null, grains = 0, feed = [];
      // Where a tile's grains land: across from it, in the middle of the stage.
      function landing(tl) {
        var cx = tl.x + tl.s / 2, cy = tl.y + tl.s / 2;
        if (env.phone) return [Math.min(S.x + S.w - 24, Math.max(S.x + 24, cx)), S.y + S.h / 2];
        return [S.x + S.w / 2, Math.min(S.y + S.h - 24, Math.max(S.y + 24, cy))];
      }

      function cellAt(x, y) {
        var ci = Math.min(cols - 1, Math.max(0, (x / C) | 0)), cj = Math.min(rows - 1, Math.max(0, (y / C) | 0));
        return cj * cols + ci;
      }
      function add(q) {
        if (q < 0 || q >= N || wall[q]) return;
        h[q]++; grains++;
        if (h[q] === rule.th) stack.push(q);
      }
      function topple(limit) {
        var nb = rule.nb, th = rule.th, ops = 0;
        while (stack.length && ops < limit) {
          var q = stack.pop();
          if (h[q] < th) continue;
          h[q] -= th; ops++;
          var qi = q % cols, qj = (q / cols) | 0;
          for (var n = 0; n < nb.length; n++) {
            var ni = qi + nb[n][0], nj = qj + nb[n][1];
            if (ni < 0 || nj < 0 || ni >= cols || nj >= rows) continue;
            var r = nj * cols + ni;
            if (wall[r]) continue;
            h[r]++;
            if (h[r] === th) stack.push(r);
          }
          if (h[q] >= th) stack.push(q);
        }
      }
      function paint(grid, p, alpha) {
        var ctx = env.ctx, s, q;
        for (s = 0; s < 13; s++) { buckets[s] = buckets[s] || []; buckets[s].length = 0; }
        for (q = 0; q < N; q++) { var v = grid[q]; if (v) buckets[v < 12 ? v : 12].push(q); }
        ctx.globalAlpha = alpha;
        for (s = 1; s < 13; s++) {
          var b = buckets[s];
          if (!b.length || !p[s]) continue;
          ctx.fillStyle = G.HEX[p[s]];
          ctx.beginPath();
          for (q = 0; q < b.length; q++) ctx.rect((b[q] % cols) * C + 0.5, ((b[q] / cols) | 0) * C + 0.5, C - 1, C - 1);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }
      // How far the pile reaches along the source row, in cells.
      function reach() {
        if (!srcs.length) return 0;
        var q = srcs[0], qi = q % cols, row = q - qi, a = qi, b = qi;
        while (a > 0 && h[row + a - 1]) a--;
        while (b < cols - 1 && h[row + b + 1]) b++;
        return { a: a, b: b, j: (q / cols) | 0 };
      }

      var self = {
        caption: '',
        state: function (k, src, t) {
          if (t0) old = { h: h.slice(), pal: pal, t: t };
          rule = RULES[k] || RULES[0];
          var others = G.PIGS.filter(function (c) { return c !== env.st.k; });
          pal = [null];
          for (var s = 1; s < 13; s++) pal[s] = others[(s - 1 + k) % others.length];
          h.fill(0); stack.length = 0; grains = 0; t0 = t;
          var tls = [G.tile(env, src)];
          if (rule.drop === 'three') tls.push(G.tile(env, (src + 3) % 9), G.tile(env, (src + 7) % 9));
          feed = tls.map(function (tl) { var L = landing(tl); return { x0: tl.x + tl.s / 2, y0: tl.y + tl.s / 2, x1: L[0], y1: L[1] }; });
          srcs = feed.map(function (f) { return cellAt(f.x1, f.y1); });
          var ar = Math.min(S.w, S.h) * 0.3;
          area = { x: feed[0].x1 - ar / 2, y: feed[0].y1 - ar / 2, s: ar };
          self.caption = rule.cap;
        },
        frame: function (t) {
          var sp = env.speed || 1, n = Math.max(1, Math.round(7 * sp));
          if (stack.length < 4000) {
            for (var g = 0; g < n; g++) {
              if (rule.drop === 'scatter' && area) add(cellAt(area.x + Math.random() * area.s, area.y + Math.random() * area.s));
              else add(srcs[g % srcs.length]);
            }
          }
          topple(24000);
          if (old) {
            var fa = 1 - (t - old.t) / 700;
            if (fa <= 0) old = null; else paint(old.h, old.pal, fa);
          }
          paint(h, pal, 1);
          // Grains on their way from the tile to the pile.
          var ctx = env.ctx, gs = env.phone ? 4 : 5;
          for (var fi = 0; fi < feed.length; fi++) {
            var f = feed[fi];
            G.line(env, f.x0, f.y0, f.x1, f.y1, [2, 5], 0.35);
            for (var d = 0; d < 6; d++) {
              var u = ((t * 0.0011 * sp) + d / 6) % 1;
              G.block(env, f.x0 + (f.x1 - f.x0) * u - gs / 2, f.y0 + (f.y1 - f.y0) * u - gs / 2, gs, gs, pal[1 + (d % 3)] || 'paper');
            }
          }
          var r = reach();
          if (r && r.b - r.a > 6) {
            var y = (r.j + 1) * C + (r.b - r.a) * C / 2 + 16;
            if (y > S.y + S.h - 8) y = r.j * C - (r.b - r.a) * C / 2 - 16;
            if (y > S.y + 8 && y < S.y + S.h - 8) {
              env.ctx.globalAlpha = 0.85;
              G.dim(env, 'h', r.a * C, (r.b + 1) * C, y, 'Ø ' + (r.b - r.a + 1) + ' · ' + grains + ' blocks');
              env.ctx.globalAlpha = 1;
            }
          }
        }
      };
      return self;
    }
  });
})();

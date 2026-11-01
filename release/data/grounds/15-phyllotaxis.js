// 15 · Phyllotaxis: block n leaves the source tile at n turns of the
// divergence angle, at radius c√n (Vogel). Yellow uses the golden angle;
// the other colours step through its Fibonacci convergents, 1/2 … 8/21,
// so spokes tighten into spirals as the fraction nears 1/φ².
(function () {
  var G = window.Grounds, PI = Math.PI, FIBS = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
  var GOLD = 1 / (G.PHI * G.PHI);
  var CFG = [
    { turn: GOLD, m: 8, cap: 'θ = 360° / φ² = 137.5° · the golden angle', deg: '137.5°' },
    { turn: 1 / 2 + 0.003, m: 2, cap: '1/2 turn · 180° · two ranks, a hair off', deg: '180°', ar: [1.3, 0.75] },
    { turn: 1 / 3 + 0.002, m: 3, cap: '1/3 turn · 120° · three spokes, a hair off', deg: '120°' },
    { turn: 2 / 5, m: 5, cap: '2/5 turn · 144° · five spokes, turning', deg: '144°', spin: 0.00012 },
    { turn: 3 / 8, m: 8, cap: '3/8 turn · 135° · eight spokes', deg: '135°', jitter: true },
    { turn: 5 / 13, m: 8, cap: '5/13 turn · 138.46° · nearly golden', deg: '138.5°', ar: [1.3, 0.65] },
    { turn: 8 / 21, m: 8, cap: '8/21 turn · 137.14° · Fibonacci index in red', deg: '137.1°', paper: true }
  ];
  var isFib = function (n) { return FIBS.indexOf(n) >= 0; };

  G.register({
    id: 'phyllotaxis',
    create: function (env) {
      // The flower opens in the middle of the stage; each block flies there
      // from the source tile.
      var S = env.stage, N = env.phone ? 160 : 420, rMax = Math.min(S.w, S.h) / 2 - 8, c = rMax / Math.sqrt(N);
      var CX = S.x + S.w / 2, CY = S.y + S.h / 2;
      var cur = null, old = null;
      var build = function (k, src, t) {
        var cfg = CFG[k] || CFG[0], sp = env.speed || 1, tl = G.tile(env, src), cols = [], i;
        for (i = 0; i < cfg.m; i++) { var p = G.PIGS[i % G.PIGS.length]; cols.push(p === env.st.k ? 'ink' : p); }
        if (env.st.k === 'ink') for (i = 0; i < cols.length; i++) if (cols[i] === 'ink') cols[i] = 'paper';
        return { cfg: cfg, cols: cols, tile: { x: tl.x, y: tl.y, w: tl.s, h: tl.s }, ox: tl.x + tl.s / 2, oy: tl.y + tl.s / 2, cx: CX, cy: CY, tIn: t + 200 / sp, delay: 9 / sp, dur: 520 / sp, seed: Math.random() * 10 };
      };
      var pos = function (s, n, t) {
        var sp = env.speed || 1, a = 2 * PI * n * s.cfg.turn + (s.cfg.spin ? t * s.cfg.spin * sp : 0), r = c * Math.sqrt(n);
        if (s.cfg.jitter) r += Math.sin(t * 0.002 * sp + n * 1.7 + s.seed) * c * 0.18;
        return [s.cx + r * Math.cos(a), s.cy + r * Math.sin(a), a, r];
      };
      var sizeOf = function (n) { return c * 0.82 * (0.4 + 0.6 * Math.sqrt(n / N)); };
      var colourOf = function (s, n) { return s.cfg.paper ? (isFib(n) ? 'red' : 'paper') : s.cols[n % s.cols.length]; };
      var draw = function (s, t, out) {
        var sp = env.speed || 1, ar = s.cfg.ar || [1, 1];
        for (var n = 1; n <= N; n++) {
          var f;
          if (out) f = 1 - G.lift((t - s.tOut - (N - n) * 0.8 / sp) / (360 / sp));
          else f = G.place((t - s.tIn - n * s.delay) / s.dur);
          if (f <= 0) continue;
          var P = pos(s, n, t), x = s.ox + (P[0] - s.ox) * f, y = s.oy + (P[1] - s.oy) * f;
          if (x < -40 || x > env.W + 40 || y < -40 || y > env.H + 40) continue;
          // Clear of the words, the mark and the credit, except the hollow
          // source tile the blocks come out of.
          if (G.sheltered(env, x, y, 10) && !G.inRect(s.tile, x, y, 0)) continue;
          var z = sizeOf(n) * (0.35 + 0.65 * f), w = z * ar[0], h = z * ar[1];
          G.block(env, x - w / 2, y - h / 2, w, h, colourOf(s, n));
        }
      };
      var measure = function (s, t, p) {
        var ctx = env.ctx, i;
        if (p <= 0) return;
        // The divergence: rays to two neighbours, and the angle between.
        var A = pos(s, 34, t), B = pos(s, 35, t), q = G.clamp(p * 1.5);
        G.line(env, s.cx, s.cy, s.cx + (A[0] - s.cx) * q, s.cy + (A[1] - s.cy) * q, [3, 4], 0.8);
        G.line(env, s.cx, s.cy, s.cx + (B[0] - s.cx) * q, s.cy + (B[1] - s.cy) * q, [3, 4], 0.8);
        var d = B[2] - A[2];
        while (d > PI) d -= 2 * PI;
        while (d < -PI) d += 2 * PI;
        if (Math.abs(Math.abs(d) - PI) < 1e-6) d = PI;
        ctx.save(); ctx.strokeStyle = env.st.on; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(s.cx, s.cy, Math.min(46, rMax * 0.4), A[2], A[2] + d * G.clamp(p * 1.5 - 0.3), d < 0); ctx.stroke(); ctx.restore();
        if (p > 0.6) {
          var mid = A[2] + d / 2, lx = s.cx + Math.cos(mid) * Math.min(70, rMax * 0.6), ly = s.cy + Math.sin(mid) * Math.min(70, rMax * 0.6);
          if (!G.sheltered(env, lx, ly, 16) || G.inRect(s.tile, lx, ly, -12)) G.label(env, lx, ly, 'θ = ' + s.cfg.deg);
        }
        // Fibonacci indices, which the golden angle lines up near one ray.
        if (p > 0.4) for (i = 4; i < FIBS.length; i++) {
          var n = FIBS[i];
          if (n > N) break;
          var P = pos(s, n, t), off = sizeOf(n) * 0.5 + 10;
          var x = P[0] + Math.cos(P[2]) * off, y = P[1] + Math.sin(P[2]) * off;
          if (x < 10 || x > env.W - 10 || y < 10 || y > env.H - 10 || G.sheltered(env, x, y, 14)) continue;
          if (G.clamp(p * 2 - 0.8 - i * 0.05) > 0) G.label(env, x, y, String(n), true);
        }
      };
      var api = {
        caption: '',
        state: function (k, src, t) {
          if (cur) { old = cur; old.tOut = t; }
          cur = build(k, src, t);
          api.caption = cur.cfg.cap;
        },
        frame: function (t) {
          if (!cur) return;
          var sp = env.speed || 1;
          if (old) {
            draw(old, t, true);
            if (t - old.tOut > (360 + N * 0.8) / sp) old = null;
          }
          draw(cur, t, false);
          measure(cur, t, (t - cur.tIn - N * cur.delay - cur.dur) / (900 / sp));
        }
      };
      return api;
    }
  });
})();

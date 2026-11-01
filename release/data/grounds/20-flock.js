// 20 · Flock: 81 blocks leave the source tile and flock like starlings over
// the lagoon, then pour back into the mark, nine to a tile, and scatter
// again. Each ground changes how the flock thinks.
(function () {
  var G = window.Grounds;
  var PARAMS = [
    { sep: 1.4, ali: 1.0, coh: 1.0, max: 3.0, wander: 0.2, cap: 'separate · align · cohere' },
    { sep: 2.4, ali: 0.6, coh: 0.5, max: 5.5, wander: 0.3, cap: 'fast · wide spacing' },
    { sep: 1.2, ali: 2.4, coh: 0.6, max: 2.6, wander: 0.1, drift: 1, cap: 'procession · aligned' },
    { sep: 1.0, ali: 0.4, coh: 0.3, max: 2.4, wander: 1.6, cap: 'loose · wandering' },
    { sep: 1.6, ali: 0.8, coh: 0.9, max: 4.2, wander: 0.4, jolt: 1, cap: 'improvised bursts' },
    { sep: 1.8, ali: 0.5, coh: 0.4, max: 3.2, wander: 0.2, fall: 1, cap: 'gravity · stacking' },
    { sep: 1.2, ali: 1.2, coh: 0.6, max: 3.4, wander: 0.1, swirl: 1, cap: 'vortex about the mark' }
  ];
  // One flight, a settle and a hold fit inside a colour's 7 s.
  var FLY = 3400, SETTLE = 1600, HOLD = 1400;

  G.register({
    id: 'flock',
    create: function (env) {
      var N = 81, R = env.phone ? 44 : 62, P = PARAMS[0], phase = 'flock', ph0 = 0, lastJolt = 0, boids = [], i;
      var m = env.mark, sub = m.tile / 3;
      for (i = 0; i < N; i++) {
        var ti = (i / 9) | 0, si = i % 9, tl = G.tile(env, ti);
        var shapes = [[1, 1], [2, 1], [1, 2], [3, 1], [1, 1]], sh = shapes[i % shapes.length], base = sub * 0.42;
        boids.push({
          x: 0, y: 0, vx: 0, vy: 0, c: G.TILES[ti][0],
          tx: tl.x + (si % 3) * sub + 1, ty: tl.y + ((si / 3) | 0) * sub + 1, ts: sub - 2,
          fw: base * sh[0], fh: base * sh[1], w: base, h: base
        });
      }
      function burst(x, y, power) {
        for (var b = 0; b < N; b++) {
          var o = boids[b], a = Math.random() * Math.PI * 2, s = G.rand(1.5, 4.5) * power;
          if (x != null) { o.x = x + G.rand(-6, 6); o.y = y + G.rand(-6, 6); }
          o.vx = Math.cos(a) * s; o.vy = Math.sin(a) * s;
        }
      }
      function steer(dt) {
        var sp = (env.speed || 1) * dt / 16.7, cx = m.x + m.s / 2, cy = m.y + m.s / 2, T = env.text, pad = 24;
        for (var a = 0; a < N; a++) {
          var o = boids[a], sx = 0, sy = 0, ax = 0, ay = 0, gx = 0, gy = 0, n = 0, best = 1e9;
          o.near = -1;
          for (var b = 0; b < N; b++) {
            if (a === b) continue;
            var p = boids[b], dx = p.x - o.x, dy = p.y - o.y, d2 = dx * dx + dy * dy;
            if (d2 > R * R) continue;
            if (d2 < best) { best = d2; o.near = b; }
            n++; ax += p.vx; ay += p.vy; gx += p.x; gy += p.y;
            if (d2 < R * R * 0.18 && d2 > 0.01) { sx -= dx / d2; sy -= dy / d2; }
          }
          var fx = 0, fy = 0;
          if (n) {
            fx += (ax / n - o.vx) * 0.05 * P.ali + (gx / n - o.x) * 0.0016 * P.coh + sx * 9 * P.sep;
            fy += (ay / n - o.vy) * 0.05 * P.ali + (gy / n - o.y) * 0.0016 * P.coh + sy * 9 * P.sep;
          }
          fx += G.rand(-1, 1) * 0.12 * P.wander; fy += G.rand(-1, 1) * 0.12 * P.wander;
          if (P.drift) fx += 0.04;
          if (P.fall) fy += 0.05;
          if (P.swirl) { var rx = o.x - cx, ry = o.y - cy, rd = Math.sqrt(rx * rx + ry * ry) + 1; fx += -ry / rd * 0.12 - rx / rd * 0.02; fy += rx / rd * 0.12 - ry / rd * 0.02; }
          if (o.x > T.x - pad && o.x < T.x + T.w + pad && o.y > T.y - pad && o.y < T.y + T.h + pad) {
            if (env.phone) fy += 0.6; else fx += 0.6;
          }
          var Cr = env.credit;
          if (Cr && o.x > Cr.x - pad && o.x < Cr.x + Cr.w + pad && o.y > Cr.y - pad) fy -= 0.6;
          // The stage is home: a gentle pull back into it.
          var S = env.stage;
          if (o.x < S.x) fx += 0.05; if (o.x > S.x + S.w) fx -= 0.05;
          if (o.y < S.y) fy += 0.05; if (o.y > S.y + S.h) fy -= 0.05;
          var e = 30;
          if (o.x < e) fx += 0.3; if (o.x > env.W - e) fx -= 0.3;
          if (o.y < e) fy += 0.3; if (o.y > env.H - e) fy -= P.fall ? 0.9 : 0.3;
          o.vx += fx * sp; o.vy += fy * sp;
          var v = Math.sqrt(o.vx * o.vx + o.vy * o.vy), mx = P.max;
          if (v > mx) { o.vx *= mx / v; o.vy *= mx / v; }
          o.x += o.vx * sp; o.y += o.vy * sp;
          if (P.drift && o.x > env.W + 10) o.x = S.x;
          o.w += (o.fw - o.w) * 0.08; o.h += (o.fh - o.h) * 0.08;
        }
      }
      function settle(f) {
        for (var a = 0; a < N; a++) {
          var o = boids[a], k = 0.06 + 0.22 * f;
          o.x += (o.tx + o.ts / 2 - o.x) * k; o.y += (o.ty + o.ts / 2 - o.y) * k;
          o.w += (o.ts - o.w) * k; o.h += (o.ts - o.h) * k;
          o.vx *= 0.8; o.vy *= 0.8;
        }
      }

      var lastT = 0;
      var self = {
        caption: '',
        state: function (k, src, t) {
          P = PARAMS[k] || PARAMS[0];
          var tl = G.tile(env, src);
          burst(tl.x + tl.s / 2, tl.y + tl.s / 2, 1.2);
          phase = 'flock'; ph0 = t;
          self.caption = P.cap + ' · 81 blocks';
        },
        frame: function (t) {
          var ctx = env.ctx, dt = Math.min(50, lastT ? t - lastT : 16.7), sp = env.speed || 1, el = t - ph0, a;
          lastT = t;
          if (phase === 'flock') {
            if (P.jolt && t - lastJolt > 650 / sp) { lastJolt = t; for (a = 0; a < N; a += 3) { boids[a].vx += G.rand(-3, 3); boids[a].vy += G.rand(-3, 3); } }
            steer(dt);
            if (el > FLY / sp) { phase = 'settle'; ph0 = t; }
          } else if (phase === 'settle') {
            settle(G.clamp(el / (SETTLE / sp)));
            if (el > SETTLE / sp) { phase = 'hold'; ph0 = t; }
          } else if (phase === 'hold') {
            settle(1);
            if (el > HOLD / sp) { phase = 'flock'; ph0 = t; burst(null, null, 1.6); }
          }
          if (phase === 'flock') {
            ctx.save(); ctx.strokeStyle = env.st.on; ctx.globalAlpha = 0.28; ctx.lineWidth = 1; ctx.beginPath();
            for (a = 0; a < N; a++) { var o = boids[a]; if (o.near >= 0 && o.near > a) { var q = boids[o.near]; ctx.moveTo(o.x, o.y); ctx.lineTo(q.x, q.y); } }
            ctx.stroke(); ctx.restore();
          }
          for (a = 0; a < N; a++) { var b = boids[a]; G.block(env, b.x - b.w / 2, b.y - b.h / 2, b.w, b.h, b.c); }
          if (phase === 'hold' || phase === 'settle') {
            var p = phase === 'hold' ? 1 : G.clamp((el / (SETTLE / sp) - 0.5) * 2);
            env.ctx.globalAlpha = 0.9;
            G.dim(env, 'h', m.x, m.x + m.s, m.y - 16, '3 × 3 · 81', p);
            G.dim(env, 'v', m.y, m.y + m.tile, m.x > 40 ? m.x - 16 : m.x + m.s + 16, '1', p);
            env.ctx.globalAlpha = 1;
          }
        }
      };
      return self;
    }
  });
})();

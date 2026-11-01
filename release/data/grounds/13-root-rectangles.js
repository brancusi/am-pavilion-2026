// 13 · Root rectangles: from a square, swing the diagonal down with the
// compass. Each swing adds a strip, and the strips shrink: √2 − 1, √3 − √2…
// Turquoise builds φ from the half square instead.
(function () {
  var G = window.Grounds, PI = Math.PI;
  var CFG = [
    { n: 2, cap: '1 : √2 · swing the diagonal' },
    { n: 5, cap: '√1 · √2 · √3 · √4 · √5' },
    { n: 3, cap: '1 : √3 · two swings' },
    { phi: true, cap: 'φ = (1 + √5) / 2 · from the half square' },
    { n: 7, cap: '√n, n = 1 … 7 · improvised colour' },
    { n: 4, cap: '√4 = 2 · the double square' },
    { n: 7, cap: '√7 · seven rectangles, one diagonal each', paper: true }
  ];
  // Lay the rectangle along the stage's long side: rising on a tall stage
  // (desktop), lying down on a wide one (the band under the mark).
  var frameOf = function (env, span) {
    var S = env.stage, base = S.y + S.h - 34;
    var ah = Math.min(S.h - 80, (S.w - 48) / span), av = Math.min(S.w - 96, (S.h - 80) / span, (S.h * 0.7) / span, 220);
    if (av > ah) return { o: 'v', x0: S.x + (S.w - av) / 2 - 16, base: base, a: av };
    return { o: 'h', x0: S.x + (S.w - ah * span) / 2 + 8, base: base, a: ah };
  };
  var colour = function (env, cfg, i) {
    if (cfg.paper) return 'paper';
    if (cfg.n === 7) return G.other(env);
    var seq = ['red', 'blue', 'yellow', 'turquoise', 'pink', 'brick', 'paper'];
    var c = seq[i % seq.length];
    return c === env.st.k ? 'ink' : c;
  };

  var build = function (env, k, t) {
    var cfg = CFG[k] || CFG[0], sp = env.speed || 1, T = 1000 / sp, items = [];
    var span = cfg.phi ? G.PHI : Math.sqrt(cfg.n);
    var F = frameOf(env, span), a = F.a, x0 = F.x0, b = F.base, v = F.o === 'v', t0 = t + 200 / sp, i;
    var blk = function (x, y, w, h, c, at) { items.push({ kind: 'b', r: { x: x + 1, y: y + 1, w: w - 2, h: h - 2, c: c }, t0: at }); };
    blk(x0, b - a, a, a, colour(env, cfg, 0), t0);
    if (cfg.phi) {
      var w1 = a * (G.PHI - 1), t1 = t0 + T * 0.6;
      if (!v) {
        items.push({ kind: 'l', x1: x0 + a / 2, y1: b, x2: x0 + a / 2, y2: b - a, t0: t1, dash: true });
        items.push({ kind: 'l', x1: x0 + a / 2, y1: b, x2: x0 + a, y2: b - a, t0: t1 + T * 0.3 });
        items.push({ kind: 'a', cx: x0 + a / 2, cy: b, r: a * Math.sqrt(5) / 2, a0: Math.atan2(-a, a / 2), a1: 0, anti: false, t0: t1 + T * 0.6 });
        blk(x0 + a, b - a, w1, w1, colour(env, cfg, 1), t1 + T * 1.2);
        blk(x0 + a + w1 - (a - w1), b - a + w1, a - w1, a - w1, colour(env, cfg, 2), t1 + T * 1.5);
        blk(x0 + a, b - a + w1, w1 - (a - w1), a - w1, colour(env, cfg, 3), t1 + T * 1.8);
        items.push({ kind: 't', x: x0 + a + w1 / 2, y: b - a - 14, text: 'φ − 1', t0: t1 + T * 2 });
      } else {
        items.push({ kind: 'l', x1: x0, y1: b - a / 2, x2: x0 + a, y2: b - a / 2, t0: t1, dash: true });
        items.push({ kind: 'l', x1: x0, y1: b - a / 2, x2: x0 + a, y2: b - a, t0: t1 + T * 0.3 });
        items.push({ kind: 'a', cx: x0, cy: b - a / 2, r: a * Math.sqrt(5) / 2, a0: Math.atan2(-a / 2, a), a1: -PI / 2, anti: true, t0: t1 + T * 0.6 });
        var top = b - a * G.PHI;
        blk(x0, top, w1, w1, colour(env, cfg, 1), t1 + T * 1.2);
        blk(x0 + w1, top + w1 - (a - w1), a - w1, a - w1, colour(env, cfg, 2), t1 + T * 1.5);
        blk(x0 + w1, top, a - w1, w1 - (a - w1), colour(env, cfg, 3), t1 + T * 1.8);
        items.push({ kind: 't', x: x0 + a / 2, y: top + w1 / 2, text: 'φ − 1', t0: t1 + T * 2 });
      }
    } else {
      for (i = 2; i <= cfg.n; i++) {
        var p = Math.sqrt(i - 1), q = Math.sqrt(i), ts = t0 + T * (0.6 + (i - 2) * 1.1);
        if (!v) {
          items.push({ kind: 'l', x1: x0, y1: b, x2: x0 + a * p, y2: b - a, t0: ts, dash: true });
          items.push({ kind: 'a', cx: x0, cy: b, r: a * q, a0: Math.atan2(-a, a * p), a1: 0, anti: false, t0: ts + T * 0.3 });
          blk(x0 + a * p, b - a, a * (q - p), a, colour(env, cfg, i - 1), ts + T * 0.75);
          items.push({ kind: 't', x: x0 + a * (p + q) / 2, y: b - a / 2, text: '√' + i, t0: ts + T * 0.95, small: true });
        } else {
          items.push({ kind: 'l', x1: x0, y1: b, x2: x0 + a, y2: b - a * p, t0: ts, dash: true });
          items.push({ kind: 'a', cx: x0, cy: b, r: a * q, a0: Math.atan2(-a * p, a), a1: -PI / 2, anti: true, t0: ts + T * 0.3 });
          blk(x0, b - a * q, a, a * (q - p), colour(env, cfg, i - 1), ts + T * 0.75);
          items.push({ kind: 't', x: x0 + a / 2, y: b - a * (p + q) / 2, text: '√' + i, t0: ts + T * 0.95, small: true });
        }
      }
    }
    var tEnd = 0;
    for (i = 0; i < items.length; i++) tEnd = Math.max(tEnd, items[i].t0);
    return { cfg: cfg, F: F, span: span, items: items, tEnd: tEnd + T * 0.6, T: T };
  };

  G.register({
    id: 'root-rectangles',
    create: function (env) {
      var cur = null, old = null;
      var draw = function (s, t, out) {
        var ctx = env.ctx, sp = env.speed || 1, n = s.items.length;
        for (var i = 0; i < n; i++) {
          var it = s.items[i], f;
          if (out) f = 1 - G.lift((t - s.tOut - (n - 1 - i) * 30 / sp) / (380 / sp));
          else f = G.place((t - it.t0) / (s.T * 0.55));
          if (f <= 0) continue;
          if (it.kind === 'b') G.fly(env, it.r, s.src, f);
          else if (it.kind === 'l') G.line(env, it.x1, it.y1, it.x1 + (it.x2 - it.x1) * f, it.y1 + (it.y2 - it.y1) * f, it.dash ? [3, 4] : null, 0.85);
          else if (it.kind === 'a') {
            ctx.save(); ctx.strokeStyle = env.st.on; ctx.lineWidth = 1; ctx.globalAlpha = 0.9;
            ctx.beginPath(); ctx.arc(it.cx, it.cy, it.r, it.a0, it.a0 + (it.a1 - it.a0) * f, it.anti); ctx.stroke();
            if (f >= 1) { ctx.beginPath(); ctx.arc(it.cx, it.cy, 2.5, 0, 2 * PI); ctx.fillStyle = env.st.on; ctx.fill(); }
            ctx.restore();
          } else if (it.kind === 't' && f > 0.6) G.label(env, it.x, it.y, it.text, it.small);
        }
      };
      var api = {
        caption: '',
        state: function (k, src, t) {
          if (cur) { old = cur; old.tOut = t; }
          cur = build(env, k, t); cur.src = src;
          api.caption = cur.cfg.cap;
        },
        frame: function (t) {
          if (!cur) return;
          var sp = env.speed || 1;
          if (old) {
            draw(old, t, true);
            if (t - old.tOut > (380 + old.items.length * 30) / sp) old = null;
          }
          draw(cur, t, false);
          var p = (t - cur.tEnd) / (700 / sp), F = cur.F, a = F.a;
          if (p > 0) {
            var label = cur.cfg.phi ? 'φ' : '√' + cur.cfg.n;
            if (F.o === 'h') {
              G.dim(env, 'h', F.x0, F.x0 + a * cur.span, F.base + 22, label, p);
              G.dim(env, 'v', F.base - a, F.base, F.x0 - 16, '1', p - 0.2);
            } else {
              G.dim(env, 'h', F.x0, F.x0 + a, F.base + 22, '1', p);
              G.line(env, F.x0 + a + 6, F.base - a * cur.span, F.x0 + a + 6 + 12 * G.clamp(p), F.base - a * cur.span, null, 0.9);
              if (p > 0.8) G.text(env, F.x0 + a + 22, F.base - a * cur.span, label, 'left');
            }
          }
        }
      };
      return api;
    }
  });
})();

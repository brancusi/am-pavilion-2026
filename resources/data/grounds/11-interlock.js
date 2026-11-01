// 11 · Interlock: each course turns a quarter on the one below, so the
// stack holds itself. Courses are drawn bottom to top, one flush each.
(function () {
  var G = window.Grounds;
  var row = function (lengths, y, c) {
    var out = [], x = -1.5;
    for (var i = 0; i < lengths.length; i++) { out.push({ x: x, y: y, w: lengths[i], d: 1, c: c }); x += lengths[i]; }
    return out;
  };
  var PARTS = [[3], [1, 2], [2, 1], [1, 1, 1]];
  var PLANS = [
    { n: 4, cap: '1 : 1 · nine units a course', rl: '1 : 1', wl: '3', hx: 1.5, hy: 1.5, spin: 0.00006,
      layer: function (L, env) { var o = []; for (var j = 0; j < 3; j++) for (var i = 0; i < 3; i++) o.push({ x: -1.5 + i, y: -1.5 + j, w: 1, d: 1, c: G.other(env) }); return o; } },
    { n: 3, cap: '8 : 3 · the slab, crossed', rl: '8 : 3', wl: '8', hx: 4, hy: 1.5, spin: 0.00005,
      layer: function (L) { return [{ x: -4, y: -1.5, w: 8, d: 3, c: L === 1 ? 'paper' : 'red' }]; } },
    { n: 6, cap: '3 : 1 · carried in, course by course', rl: '3 : 1', wl: '3', hx: 1.5, hy: 1.5, spin: 0.00007, enter: 'slide',
      layer: function (L, env) { var c = G.other(env); return [0, 1, 2].map(function (j) { return { x: -1.5, y: -1.5 + j, w: 3, d: 1, c: j === 1 ? c : (L % 2 ? 'paper' : 'blue') }; }); } },
    { n: 5, cap: 'quarter turn · rebuilt while it stands', rl: '3 : 1', wl: '3', hx: 1.5, hy: 1.5, spin: 0.00009, ephemeral: true,
      layer: function (L, env) { return [0, 1, 2].map(function (j) { return { x: -1.5, y: -1.5 + j, w: 3, d: 1, c: G.other(env) }; }); } },
    { n: 6, cap: 'improvised courses · each twisted 7.5°', rl: '1 · 2 · 3', wl: '3', hx: 1.5, hy: 1.5, spin: 0.00004, twist: 0.13,
      layer: function (L, env) { var o = []; for (var j = 0; j < 3; j++) o = o.concat(row(G.pick(PARTS), -1.5 + j, G.other(env))); return o; } },
    { n: 9, cap: 'flag stack · nine courses, quarter turn', rl: '3 · 3 · 3', wl: '3', hx: 1.5, hy: 1.5, spin: 0.00006,
      layer: function (L) { var c = L < 3 ? 'yellow' : L < 6 ? 'blue' : 'red'; return [0, 1, 2].map(function (j) { return { x: -1.5, y: -1.5 + j, w: 3, d: 1, c: c }; }); } },
    { n: 7, cap: '7 · 6 · 5 · 4 · 3 · 2 · 1 · a crossed stair', rl: '7 : 1', wl: '7', hx: 2.1, hy: 0.5, spin: 0.00007,
      layer: function (L) { var len = (7 - L) * 0.6; return [{ x: -len / 2, y: -0.5, w: len, d: 1, c: 'paper' }]; } }
  ];
  // Fit to the stage: a floor 5 either way spans ~17.3 cells across and 10
  // down; the tallest stack (nine courses and its label) stands ~10 above.
  var stage = function (env) {
    var S = env.stage, s = Math.min(26, S.w / 19, S.h / 17);
    return { cx: S.x + S.w / 2, cy: S.y + S.h - 5.6 * s, s: s };
  };

  G.register({
    id: 'interlock',
    create: function (env) {
      var cur = null, old = null, st = stage(env);
      var iso = new G.Iso(env, { cx: st.cx, cy: st.cy, s: st.s });
      var build = function (k, t) {
        var plan = PLANS[k] || PLANS[0], sp = env.speed || 1, items = [], i = 0;
        for (var L = 0; L < plan.n; L++) {
          var lay = plan.layer(L, env);
          for (var j = 0; j < lay.length; j++) {
            var b = lay[j], x = b.x, y = b.y, w = b.w, d = b.d;
            if (L % 2) { x = -(b.y + b.d); y = b.x; w = b.d; d = b.w; }
            items.push({ x: x + 0.04, y: y + 0.04, z: L, w: w - 0.08, d: d - 0.08, h: 0.96, c: b.c, L: L, j: j, i: i++ });
          }
        }
        var delay = 90 / sp, dur = 520 / sp;
        return { plan: plan, items: items, layers: plan.n, tIn: t + 200 / sp, delay: delay, dur: dur, tBuilt: t + 200 / sp + items.length * delay + dur };
      };
      var draw = function (s, t, out, base) {
        var sp = env.speed || 1, n = s.items.length;
        for (var L = 0; L < s.layers; L++) {
          iso.turn = base + (s.plan.twist || 0) * L;
          for (var i = 0; i < n; i++) {
            var b = s.items[i];
            if (b.L !== L) continue;
            var a = 1, dz = 0, dx = 0, f;
            if (out) {
              var q = G.lift((t - s.tOut - (n - 1 - i) * 14 / sp) / (420 / sp));
              if (q >= 1) continue;
              dz = q * 7; a = 1 - q;
            } else {
              f = G.place((t - s.tIn - i * s.delay) / s.dur);
              if (s.plan.ephemeral && t > s.tBuilt && b.L >= s.layers - 2) {
                var ph = ((t - s.tBuilt) / (2600 / sp) + (b.L === s.layers - 1 ? 0 : 0.5) + b.j * 0.08) % 1;
                f = ph < 0.4 ? 1 - G.lift(ph / 0.4) : G.place((ph - 0.4) / 0.6);
              }
              if (f <= 0) continue;
              if (s.plan.enter === 'slide') dx = (1 - f) * 9; else dz = (1 - f) * 6;
              a = Math.min(1, f * 3);
            }
            iso.box(b.x + dx, b.y, b.z + dz, b.w, b.d, b.h, b.c, a);
          }
          iso.flush();
        }
      };
      var api = {
        caption: '',
        state: function (k, src, t) {
          if (cur) { old = cur; old.tOut = t; }
          cur = build(k, t);
          api.caption = cur.plan.cap;
        },
        frame: function (t) {
          if (!cur) return;
          var sp = env.speed || 1, base = t * cur.plan.spin * sp + 0.5;
          iso.turn = base; iso.floor(5, 0.14);
          if (old) {
            draw(old, t, true, t * old.plan.spin * sp + 0.5);
            if (t - old.tOut > 420 / sp + old.items.length * 14 / sp) old = null;
          }
          draw(cur, t, false, base);
          var p = (t - cur.tBuilt) / (700 / sp);
          if (p > 0) {
            var pl = cur.plan, R = Math.max(pl.hx, pl.hy) + 0.7;
            iso.turn = base;
            iso.dim([-pl.hx, pl.hy + 0.6, 0], [pl.hx, pl.hy + 0.6, 0], [0, 0, 0], pl.wl, p);
            iso.dim([R, -R, 0], [R, -R, cur.layers], [0, 0, 0], String(cur.layers), p - 0.2);
            if (p > 0.8) { var top = iso.proj(0, 0, cur.layers + 1.2); G.label(env, top[0], top[1], pl.rl); }
          }
        }
      };
      return api;
    }
  });
})();

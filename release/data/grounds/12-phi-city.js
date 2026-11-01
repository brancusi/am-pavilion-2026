// 12 · φ city: a 13 × 8 golden rectangle cut into its Fibonacci squares;
// each square is a plot, and each colour raises the plots by another law.
// The golden spiral is drawn across the rooftops once they stand.
(function () {
  var G = window.Grounds, PI = Math.PI, HS = 0.6;
  var SQ = [[0, 0, 8], [8, 0, 5], [10, 5, 3], [8, 6, 2], [8, 5, 1], [9, 5, 1]];
  var ARCS = [[8, 8, 8, PI, 1.5 * PI, 0], [8, 5, 5, -PI / 2, 0, 1], [10, 5, 3, 0, PI / 2, 2], [10, 6, 2, PI / 2, PI, 3], [9, 6, 1, PI, 1.5 * PI, 4], [9, 6, 1, -PI / 2, 0, 5]];
  var FIB = [1, 2, 3, 5, 8];
  var MODES = [
    { cap: 'φ · the plan, 13 : 8', h: function () { return 1; } },
    { cap: 'height = side · 1 · 1 · 2 · 3 · 5 · 8', h: function (q) { return q[2]; } },
    { cap: '104 units = 8² + 5² + 3² + 2² + 1² + 1² = 13 × 8', units: true },
    { cap: 'heights breathe, each at its own period', h: function (q, t, sp) { return q[2] * (0.55 + 0.45 * Math.sin(t * 0.0011 * sp / Math.sqrt(q[2]) + q[2])); } },
    { cap: 'heights drawn at random from 1, 2, 3, 5, 8', h: function (q) { return q.rh; } },
    { cap: 'stepped · each course inset', stepped: true },
    { cap: 'harmonic · height ∝ 1 / side', h: function (q) { return 8 / q[2]; } }
  ];
  // Fit to the stage: a floor 7 either way spans ~24 cells across and 14
  // down; the tallest plots (4.8) and the turning plan add ~6 above.
  var stage = function (env) {
    var S = env.stage, s = Math.min(26, S.w / 25, S.h / 20);
    return { cx: S.x + S.w / 2, cy: S.y + S.h - 7.4 * s, s: s };
  };
  // Footprints that can't overlap on the ground: draw the one behind first.
  var before = function (a, b, c, s) {
    var e = 1e-6;
    if (a.x + a.w <= b.x + e) return c + s > 0;
    if (b.x + b.w <= a.x + e) return c + s < 0;
    if (a.y + a.d <= b.y + e) return c - s > 0;
    if (b.y + b.d <= a.y + e) return c - s < 0;
    return false;
  };
  var order = function (groups, turn) {
    var c = Math.cos(turn), s = Math.sin(turn), rest = groups.slice(), out = [];
    var key = function (g) { var mx = g.x + g.w / 2, my = g.y + g.d / 2; return (mx * c - my * s) + (mx * s + my * c); };
    if (groups.length > 12) return rest.sort(function (p, q) { return key(p) - key(q); });
    while (rest.length) {
      var pick = -1;
      for (var i = 0; i < rest.length && pick < 0; i++) {
        var free = true;
        for (var j = 0; j < rest.length; j++) if (j !== i && before(rest[j], rest[i], c, s)) { free = false; break; }
        if (free) pick = i;
      }
      if (pick < 0) { pick = 0; for (var k = 1; k < rest.length; k++) if (key(rest[k]) < key(rest[pick])) pick = k; }
      out.push(rest[pick]); rest.splice(pick, 1);
    }
    return out;
  };

  G.register({
    id: 'phi-city',
    create: function (env) {
      var st = stage(env), iso = new G.Iso(env, { cx: st.cx, cy: st.cy, s: st.s });
      var cur = null, old = null;
      var build = function (k, t) {
        var mode = MODES[k] || MODES[0], sp = env.speed || 1, groups = [];
        var fib = G.shuffle(FIB.slice().concat([1]));
        SQ.forEach(function (q, n) {
          var c = k === 6 ? 'paper' : G.other(env);
          var sq = [q[0] - 6.5, q[1] - 4, q[2]];
          sq.rh = fib[n % fib.length];
          if (mode.units) {
            for (var i = 0; i < q[2]; i++) for (var j = 0; j < q[2]; j++)
              groups.push({ x: sq[0] + i, y: sq[1] + j, w: 1, d: 1, sq: sq, n: n, c: c, unit: true });
          } else groups.push({ x: sq[0], y: sq[1], w: q[2], d: q[2], sq: sq, n: n, c: c });
        });
        // Smallest plots first when carried in unit by unit; largest first otherwise.
        var seq = groups.map(function (g, i) { return i; });
        if (mode.units) G.shuffle(seq);
        groups.forEach(function (g, i) { g.o = seq[i]; });
        var delay = (mode.units ? 22 : 160) / sp, dur = (mode.units ? 420 : 760) / sp;
        return { k: k, mode: mode, groups: groups, tIn: t + 200 / sp, delay: delay, dur: dur, tBuilt: t + 200 / sp + groups.length * delay + dur, spin: 0.00005 + k * 0.000006 };
      };
      var heightOf = function (s, g, t) {
        if (s.mode.units) return 1;
        if (s.mode.stepped) return Math.min(5, Math.ceil(g.sq[2] / 1.6)) * 1;
        return s.mode.h(g.sq, t, env.speed || 1);
      };
      var draw = function (s, t, out, turn) {
        var sp = env.speed || 1, gs = order(s.groups, turn), n = gs.length;
        iso.turn = turn;
        for (var i = 0; i < n; i++) {
          var g = gs[i], f;
          if (out) f = 1 - G.lift((t - s.tOut - (n - 1 - g.o) * (s.mode.units ? 3 : 40) / sp) / (420 / sp));
          else f = G.place((t - s.tIn - g.o * s.delay) / s.dur);
          if (f <= 0) continue;
          var h = heightOf(s, g, t) * HS;
          if (g.unit) {
            iso.box(g.x + 0.05, g.y + 0.05, out ? 0 : (1 - f) * 5, 0.9, 0.9, h * (out ? f : 1), g.c, Math.min(1, f * 3));
          } else if (s.mode.stepped) {
            var levels = Math.min(5, Math.ceil(g.sq[2] / 1.6));
            for (var l = 0; l < levels; l++) {
              var q = G.clamp(f * levels - l);
              if (q <= 0) continue;
              var ins = l * g.w * 0.11 + 0.06;
              iso.box(g.x + ins, g.y + ins, l * HS, g.w - 2 * ins, g.d - 2 * ins, HS * q, l % 2 ? 'paper' : g.c);
            }
          } else {
            iso.box(g.x + 0.06, g.y + 0.06, 0, g.w - 0.12, g.d - 0.12, Math.max(0.02, h * f), g.c);
          }
          iso.flush();
        }
      };
      var spiral = function (s, t, turn, p) {
        if (p <= 0) return;
        var ctx = env.ctx;
        iso.turn = turn;
        ctx.strokeStyle = env.st.on; ctx.lineWidth = 1.5;
        for (var a = 0; a < ARCS.length; a++) {
          var q = G.clamp(p * ARCS.length - a);
          if (q <= 0) continue;
          var A = ARCS[a], g = null;
          for (var i = 0; i < s.groups.length; i++) if (s.groups[i].n === A[5]) { g = s.groups[i]; break; }
          if (!g) continue;
          var z = heightOf(s, g, t) * HS + 0.02;
          ctx.beginPath();
          for (var m = 0; m <= 18; m++) {
            var th = A[3] + (A[4] - A[3]) * q * m / 18;
            var P = iso.proj(A[0] - 6.5 + A[2] * Math.cos(th), A[1] - 4 + A[2] * Math.sin(th), z);
            if (m) ctx.lineTo(P[0], P[1]); else ctx.moveTo(P[0], P[1]);
          }
          ctx.stroke();
        }
        ctx.lineWidth = 1;
      };
      var api = {
        caption: '',
        state: function (k, src, t) {
          if (cur) { old = cur; old.tOut = t; }
          cur = build(k, t);
          api.caption = cur.mode.cap;
        },
        frame: function (t) {
          if (!cur) return;
          var sp = env.speed || 1, turn = 0.6 + t * cur.spin * sp;
          iso.turn = turn; iso.floor(7, 0.12);
          if (old) {
            draw(old, t, true, 0.6 + t * old.spin * sp);
            if (t - old.tOut > (420 + old.groups.length * (old.mode.units ? 3 : 40)) / sp) old = null;
          }
          draw(cur, t, false, turn);
          var p = (t - cur.tBuilt) / (1100 / sp);
          if (p > 0) {
            spiral(cur, t, turn, p);
            iso.turn = turn;
            iso.dim([-6.5, 4.7, 0], [6.5, 4.7, 0], [0, 0, 0], '13', p * 1.4);
            iso.dim([7.2, -4, 0], [7.2, 4, 0], [0, 0, 0], '8', p * 1.4 - 0.2);
            if (p > 0.9) { var L = iso.proj(-6.5, -4.6, 0); G.label(env, L[0], L[1], '13 : 8 ≈ φ = 1.618…'); }
          }
        }
      };
      return api;
    }
  });
})();

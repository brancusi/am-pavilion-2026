// 19 · Division: the field is cut like a sheet of plywood, always the
// largest piece first, by the ground's ratio, until the pieces are units.
// The cuts are drawn and measured, then the pieces fly out of the source.
(function () {
  var G = window.Grounds;
  var PHI = G.PHI;
  var IV = [[1, 2, '1 : 2'], [2, 3, '2 : 3'], [3, 4, '3 : 4'], [4, 5, '4 : 5'], [5, 6, '5 : 6']];
  var NAMES = ['1 : 1 · squares cut off', '3 : 8 · the slab', '1 : √2 · halving', '1 : φ · golden cut', 'just intervals', '1 : 2 · thirds', '1/n · harmonic strips'];

  // Cut rect r by system k; returns { parts, cuts: [{x1,y1,x2,y2}], f, label }.
  function cut(r, k) {
    var horiz = r.w >= r.h, L = horiz ? r.w : r.h, S = horiz ? r.h : r.w, fs = [], label = '', i;
    if (k === 0) {
      if (L / S < 1.15) { fs = [0.5]; label = '1 : 1'; } else { fs = [S / L]; label = '1 : 1'; }
    } else if (k === 1) { fs = [3 / 11]; label = '3 : 8'; }
    else if (k === 2) { fs = [0.5]; label = '1 : 1'; }
    else if (k === 3) { fs = [1 / PHI]; label = 'φ : 1'; }
    else if (k === 4) { var iv = G.pick(IV); fs = [Math.random() < 0.5 ? iv[0] / (iv[0] + iv[1]) : iv[1] / (iv[0] + iv[1])]; label = iv[2]; }
    else if (k === 5) { fs = [1 / 3]; label = '1 : 2'; }
    else { var n = 2 + G.irand(6); for (i = 1; i < n; i++) fs.push(i / n); label = '1/' + n; }
    var parts = [], cuts = [], prev = 0;
    fs.push(1);
    for (i = 0; i < fs.length; i++) {
      var a = prev * L, b = fs[i] * L;
      parts.push(horiz ? { x: r.x + a, y: r.y, w: b - a, h: r.h } : { x: r.x, y: r.y + a, w: r.w, h: b - a });
      if (i < fs.length - 1) cuts.push(horiz ? { x1: r.x + b, y1: r.y, x2: r.x + b, y2: r.y + r.h } : { x1: r.x, y1: r.y + b, x2: r.x + r.w, y2: r.y + b });
      prev = fs[i];
    }
    return { parts: parts, cuts: cuts, label: label, horiz: horiz, at: horiz ? r.x + fs[0] * L : r.y + fs[0] * L, r: r };
  }

  function plan(env, k) {
    // The sheet is the stage, inset so the first measures fit beside it.
    var S = env.stage, F = { x: S.x + 20, y: S.y + 20, w: Math.max(40, S.w - 28), h: Math.max(40, S.h - 28) };
    var leaves = [F], cuts = [], measures = [], target = env.phone ? 22 : 34, minS = env.mark.u * 1.4, guard = 0;
    while (leaves.length < target && guard++ < 200) {
      var bi = -1, ba = 0;
      for (var i = 0; i < leaves.length; i++) {
        var l = leaves[i], ar = l.w * l.h;
        if (Math.min(l.w, l.h) > minS && ar > ba) { ba = ar; bi = i; }
      }
      if (bi < 0) break;
      var res = cut(leaves[bi], k);
      leaves.splice.apply(leaves, [bi, 1].concat(res.parts));
      for (var c = 0; c < res.cuts.length; c++) cuts.push(res.cuts[c]);
      if (measures.length < 3) measures.push(res);
    }
    var rects = leaves.map(function (l) {
      return { x: l.x + 3, y: l.y + 3, w: Math.max(2, l.w - 6), h: Math.max(2, l.h - 6), c: Math.random() < 0.22 ? env.st.k : G.other(env) };
    });
    return { F: F, cuts: cuts, rects: rects, measures: measures };
  }

  G.register({
    id: 'division',
    create: function (env) {
      var cur = null, old = null;
      function drawCuts(p, t0, sp, alpha) {
        for (var i = 0; i < p.cuts.length; i++) {
          var q = G.place((t0 - i * 80 / sp) / (260 / sp));
          if (q <= 0) break;
          var c = p.cuts[i];
          G.line(env, c.x1, c.y1, G.lerp(c.x1, c.x2, q), G.lerp(c.y1, c.y2, q), null, 0.55 * alpha);
        }
      }
      var self = {
        caption: '',
        state: function (k, src, t) {
          if (cur) old = { p: cur.p, src: cur.src, t: t };
          cur = { p: plan(env, k), src: src, t: t };
          self.caption = NAMES[k] || '';
        },
        frame: function (t) {
          var sp = env.speed || 1, ctx = env.ctx, i;
          if (old) {
            var dt0 = t - old.t, n0 = old.p.rects.length;
            for (i = 0; i < n0; i++) {
              var f0 = 1 - G.lift((dt0 - (n0 - 1 - i) * 12 / sp) / (380 / sp));
              if (f0 > 0) G.fly(env, old.p.rects[i], old.src, f0);
            }
            if (dt0 < 300) drawCuts(old.p, 1e9, 1, 1 - dt0 / 300);
            if (dt0 > (380 + n0 * 12) / sp) old = null;
          }
          var p = cur.p, dt = t - cur.t - 320 / sp;
          ctx.save(); ctx.strokeStyle = env.st.on; ctx.globalAlpha = 0.35 * G.clamp(dt / 300); ctx.lineWidth = 1;
          ctx.strokeRect(p.F.x + 0.5, p.F.y + 0.5, p.F.w - 1, p.F.h - 1); ctx.restore();
          drawCuts(p, dt, sp, 1);
          var start = p.cuts.length * 40 / sp;
          for (i = 0; i < p.rects.length; i++) {
            var f = G.place((dt - start - i * 45 / sp) / (650 / sp));
            if (f > 0) G.fly(env, p.rects[i], cur.src, f);
          }
          var mp = G.clamp((dt - start - (p.rects.length * 45 + 600) / sp) / (700 / sp));
          if (mp > 0) {
            ctx.globalAlpha = 0.9;
            for (i = 0; i < p.measures.length; i++) {
              var m = p.measures[i], r = m.r, q = G.clamp(mp * 1.5 - i * 0.25);
              if (m.horiz) {
                var y = r.y - 10 < p.F.y - 4 ? r.y + 12 : r.y - 10;
                G.dim(env, 'h', r.x, m.at, i === 0 ? p.F.y - 14 : y, m.label, q);
              } else {
                var x = i === 0 && !env.phone ? p.F.x - 14 : r.x + 12;
                G.dim(env, 'v', r.y, m.at, x, m.label, q);
              }
            }
            ctx.globalAlpha = 1;
          }
        }
      };
      return self;
    }
  });
})();

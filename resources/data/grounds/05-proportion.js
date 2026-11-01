// 05 Proportion: the logo is the 13-square. Each colour builds blocks in
// one system of ratios out of its tile, then measures them, over a faint
// field of Life that the blocks feed as they land.
Grounds.register({
  id: 'proportion',
  create: function (env) {
    var G = Grounds, m = env.mark, u = m.u, PI = Math.PI;
    var TU = m.tile / u, STEP = (m.tile + m.gap) / u;
    var SYSTEMS = ['1 : 1 · the unit', '8 : 3 · the slab', '1 : √2 · halving', 'φ · golden section', 'just intervals', '2 : 1 · running bond', '1 … 7 · harmonic steps'];
    var C = env.phone ? 10 : 14, cols = Math.ceil(env.W / C), rows = Math.ceil(env.H / C);
    var life = new G.Life(cols, rows, 'B3/S23'), lastStep = 0;
    var cur = null, old = null, self;
    var px = function (x) { return m.x + x * u; }, py = function (y) { return m.y + y * u; };
    // Side by side, works grow left of the mark. Stacked (phone), the same
    // drawing turns a quarter so they grow below it: (x, y) → (y, 13 − x).
    var turn = env.phone;
    var T = function (x, y) { return turn ? [y, 13 - x] : [x, y]; };

    function gen(k) {
      var rects = [], dims = [], arcs = [], texts = [], lines = [], i, x, y;
      var r = function (x, y, w, h, c, ins) {
        ins = ins == null ? 0.12 : ins;
        if (turn) { var x2 = y, y2 = 13 - x - w; x = x2; y = y2; var t = w; w = h; h = t; }
        rects.push({ x: px(x + ins), y: py(y + ins), w: (w - 2 * ins) * u, h: (h - 2 * ins) * u, c: c || G.other(env) });
      };
      if (k === 0) {
        for (x = -2; x < 0; x++) for (y = 0; y < 3; y++) r(x * STEP, y * STEP, TU, TU, null, 0);
        for (x = -2; x < 3; x++) r(x * STEP, 3 * STEP, TU, TU, null, 0);
        dims.push(['h', -2 * STEP, 13, 3 * STEP + TU + 0.9, '5'], ['v', 0, 3 * STEP + TU, -2 * STEP - 0.9, '4'], ['h', -2 * STEP, -2 * STEP + TU, -0.9, '1 : 1']);
      }
      if (k === 1) {
        r(-8, 13.6, 8, 3, 'red', 0.1); r(0.4, 13.6, 8, 3, 'red', 0.1);
        r(-7.6, 12.1, 1.5, 1.5); r(-6.1, 12.1, 1.5, 1.5); r(-4.6, 12.1, 1.5, 1.5); r(-6.1, 10.6, 1.5, 1.5);
        dims.push(['h', -8, 0, 17.4, '8'], ['v', 13.6, 16.6, -8.9, '3']);
        texts.push([4.4, 17.5, '8 : 3']);
      }
      if (k === 2) {
        r(-8, 1.686, 8, 5.657); r(-8, 7.343, 4, 5.657); r(-4, 7.343, 4, 2.828); r(-4, 10.172, 2, 2.828);
        r(-2, 10.172, 2, 1.414); r(-2, 11.586, 1, 1.414); r(-1, 11.586, 1, 1.414);
        dims.push(['v', 1.686, 13, -8.9, '√2'], ['h', -8, 0, 0.8, '1']);
        texts.push([-4, 4.5, '1 : √2 = 1.414']);
      }
      if (k === 3) {
        r(-8, 0, 8, 8); r(-8, 8, 5, 5); r(-3, 10, 3, 3); r(-2, 8, 2, 2); r(-3, 8, 1, 1); r(-3, 9, 1, 1);
        arcs.push([0, 13, 13, 0, -PI / 2], [0, 8, 8, -PI / 2, -PI], [-3, 8, 5, PI, PI / 2], [-3, 10, 3, PI / 2, 0], [-2, 10, 2, 0, -PI / 2], [-2, 9, 1, -PI / 2, -PI], [-2, 9, 1, PI, PI / 2]);
        dims.push(['h', -8, 13, -0.9, '21'], ['v', 0, 13, -8.9, '13']);
        texts.push([6.5, 14.4, '21 : 13 → φ = 1.618…']);
      }
      if (k === 4) {
        var iv = G.shuffle([[1, '1:1'], [1 / 2, '2:1'], [2 / 3, '3:2'], [3 / 4, '4:3'], [4 / 5, '5:4'], [5 / 6, '6:5']]);
        for (i = 0; i < iv.length; i++) { var h = 13 * iv[i][0]; r(-8 + i * 1.35, 13 - h, 1.1, h, null, 0); texts.push([-8 + i * 1.35 + 0.55, 13 - h - 0.7, iv[i][1], true]); }
        dims.push(['v', 0, 13, -8.9, '1']);
        texts.push([-4, 14.2, 'just intervals']);
      }
      if (k === 5) {
        for (var row = 0; row < 6; row++) {
          y = 13 - (row + 1) * 2;
          var c = row < 2 ? 'yellow' : row < 4 ? 'blue' : 'red';
          if (row % 2 === 0) { r(-8, y, 4, 2, c); r(-4, y, 4, 2, c); }
          else { r(-8, y, 2, 2, c); r(-6, y, 4, 2, c); r(-2, y, 2, 2, c); }
        }
        dims.push(['h', -8, -4, 13.9, '2'], ['v', 11, 13, -8.9, '1']);
        texts.push([-4, 15.3, '2 : 1 · running bond']);
      }
      if (k === 6) {
        var sw = 8 / 7;
        for (i = 0; i < 7; i++) { var sh = (i + 1) * 1.5; r(-8 + i * sw, 13 - sh, sw, sh, 'paper', 0.08); }
        for (i = 1; i <= 7; i++) lines.push([0, 13 / i, -0.7 - (i - 1) * 0.62, i === 1 ? '1' : '1/' + i]);
        dims.push(['v', 2.5, 13, -8.9, '7'], ['h', -8, -8 + sw, 13.9, '1']);
        texts.push([-4, 15.3, '1 · 2 · 3 · 4 · 5 · 6 · 7']);
      }
      if (turn) {
        dims = dims.map(function (d) { return d[0] === 'h' ? ['v', 13 - d[2], 13 - d[1], d[3], d[4]] : ['h', d[1], d[2], 13 - d[3], d[4]]; });
        arcs = arcs.map(function (A) { var c = T(A[0], A[1]); return [c[0], c[1], A[2], A[3] - PI / 2, A[4] - PI / 2]; });
        texts = texts.map(function (q) { var c = T(q[0], q[1]); return [c[0], c[1], q[2], q[3]]; });
        lines = [];
      }
      return { rects: rects, dims: dims, arcs: arcs, texts: texts, lines: lines };
    }
    // Landing blocks leave their outline in the Life field.
    function feed(rc) {
      var i0 = Math.floor(rc.x / C), j0 = Math.floor(rc.y / C), i1 = Math.floor((rc.x + rc.w) / C), j1 = Math.floor((rc.y + rc.h) / C), v = G.code(rc.c);
      for (var i = i0; i <= i1; i++) { if (Math.random() < 0.5) life.set(i, j0 - 1, v); if (Math.random() < 0.5) life.set(i, j1 + 1, v); }
      for (var j = j0; j <= j1; j++) { if (Math.random() < 0.5) life.set(i0 - 1, j, v); if (Math.random() < 0.5) life.set(i1 + 1, j, v); }
    }
    function measure(g, p, alpha) {
      if (p <= 0) return;
      var ctx = env.ctx, i;
      ctx.globalAlpha = alpha; ctx.strokeStyle = env.st.on; ctx.lineWidth = 1;
      for (i = 0; i < g.arcs.length; i++) {
        var q = G.clamp(p * g.arcs.length - i), A = g.arcs[i];
        if (q <= 0) continue;
        ctx.beginPath(); ctx.arc(px(A[0]), py(A[1]), A[2] * u, A[3], A[3] + (A[4] - A[3]) * q, A[4] < A[3]); ctx.stroke();
      }
      for (i = 0; i < g.dims.length; i++) {
        var d = g.dims[i];
        if (d[0] === 'h') G.dim(env, 'h', px(d[1]), px(d[2]), py(d[3]), d[4], p * 1.4 - i * 0.2);
        else G.dim(env, 'v', py(d[1]), py(d[2]), px(d[3]), d[4], p * 1.4 - i * 0.2);
      }
      ctx.lineWidth = 2;
      for (i = 0; i < g.lines.length; i++) {
        var ln = g.lines[i], q2 = G.clamp(p * 1.6 - i * 0.1);
        if (q2 <= 0) continue;
        var x1 = px(ln[0]), x2 = x1 + (px(ln[1]) - x1) * q2, yy = py(ln[2]);
        ctx.strokeStyle = env.st.on; ctx.beginPath(); ctx.moveTo(x1, yy); ctx.lineTo(x2, yy); ctx.stroke();
        if (q2 >= 1) G.text(env, x2 + 6, yy, ln[3], 'left', true);
      }
      ctx.lineWidth = 1;
      if (p > 0.6) for (i = 0; i < g.texts.length; i++) G.label(env, px(g.texts[i][0]), py(g.texts[i][1]), g.texts[i][2], g.texts[i][3]);
      ctx.globalAlpha = 1;
    }

    self = {
      caption: '',
      state: function (k, src, t) {
        if (cur) old = { g: cur.g, src: cur.src, t: t };
        cur = { g: gen(k), src: src, t: t + 320, fed: 0 };
        self.caption = SYSTEMS[k];
      },
      frame: function (t) {
        var ctx = env.ctx, sp = env.speed, i;
        if (t - lastStep > 140 / sp) { lastStep = t; life.step(); }
        ctx.fillStyle = env.st.on; ctx.globalAlpha = 0.16;
        for (i = 0; i < life.a.length; i++) if (life.a[i]) { var x = (i % cols) * C, y = ((i / cols) | 0) * C; if (!G.sheltered(env, x, y, 4)) ctx.fillRect(x + 3, y + 3, C - 6, C - 6); }
        ctx.globalAlpha = 1;
        if (old) {
          var R = old.g.rects, n0 = R.length, dt0 = t - old.t;
          for (i = 0; i < n0; i++) { var f0 = 1 - G.lift((dt0 - (n0 - 1 - i) * 18 / sp) / (380 / sp)); if (f0 > 0) G.fly(env, R[i], old.src, f0); }
          if (dt0 < 260) measure(old.g, 1, 1 - dt0 / 260);
          if (dt0 > (380 + n0 * 18) / sp) old = null;
        }
        if (!cur) return;
        var g = cur.g, n = g.rects.length, dt = t - cur.t;
        for (i = 0; i < n; i++) {
          var f = G.place((dt - i * 60 / sp) / (650 / sp));
          if (f > 0) G.fly(env, g.rects[i], cur.src, f);
          if (f >= 1 && cur.fed <= i) { cur.fed = i + 1; feed(g.rects[i]); }
        }
        measure(g, G.clamp((dt - (n * 60 + 500) / sp) / (900 / sp)), 0.9);
      }
    };
    return self;
  }
});

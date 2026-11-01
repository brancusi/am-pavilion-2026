// 03 Assembly: units fly out of the source tile on arcs and build the works,
// then fly home when the colour changes.
Grounds.register({
  id: 'assembly',
  create: function (env) {
    var G = Grounds;
    // Sized so the widest work (16 units) and the tallest (14) fit the stage.
    var S = env.stage, C = Math.max(6, Math.floor(Math.min(30, S.w / 17, (S.h - 40) / 15))), U = Math.round(C * 0.86);
    var WIDE = { 0: 9, 1: 16, 2: 16, 3: 16, 4: 16, 5: 12, 6: 10 };
    var X0 = S.x, FLOOR = S.y + S.h - 28;
    var cur = null, old = null, self;
    var NAMES = ['The unit · 9 × 9', 'Big Red Bed · 8 : 3', 'Carried by hand', 'Tower · stands, then falls', 'Improvised drop', 'Flag stack · 2 : 1 bricks', 'Seven Steps · 1 … 7'];

    function at(i, j, w, h, c, d) { return { x: X0 + i * C, y: FLOOR - (j + h) * C, w: w * C - (C - U), h: h * C - (C - U), c: c, d: d, i: i }; }
    function build(k) {
      var list = [], i, j, n = 0;
      X0 = Math.round(S.x + (S.w - WIDE[k] * C) / 2);
      if (k === 0) for (j = 0; j < 9; j++) for (i = 0; i < 9; i++) list.push(at(i, j, 1, 1, G.TILES[(2 - ((j / 3) | 0)) * 3 + ((i / 3) | 0)][0], (n++) * 14));
      if (k === 1) for (j = 0; j < 6; j++) for (i = 0; i < 16; i++) list.push(at(i, j, 1, 1, 'red', (n++) * 9));
      if (k === 2) for (i = 0; i < 12; i++) list.push(at(i * 1.6, 0, 1, 1, G.other(env), i * 80));
      if (k === 3) for (j = 0; j < 14; j++) for (i = 0; i < 2; i++) list.push(at(i, j, 1, 1, j % 2 ? 'turquoise' : G.other(env), (n++) * 40));
      if (k === 5) for (j = 0; j < 6; j++) {
        var c = j < 2 ? 'yellow' : j < 4 ? 'blue' : 'red';
        if (j % 2 === 0) for (i = 0; i < 12; i += 2) list.push(at(i, j, 2, 1, c, (n++) * 45));
        else { list.push(at(0, j, 1, 1, c, (n++) * 45)); for (i = 1; i < 11; i += 2) list.push(at(i, j, 2, 1, c, (n++) * 45)); list.push(at(11, j, 1, 1, c, (n++) * 45)); }
      }
      if (k === 6) for (i = 0; i < 7; i++) for (j = 0; j <= i; j++) list.push(at(i * 1.5, j, 1, 1, 'paper', (n++) * 30));
      return list;
    }
    function maxD(list) { var m = 0; for (var i = 0; i < list.length; i++) m = Math.max(m, list[i].d); return m; }
    function pos(u, src, f) {
      var t = G.tile(env, src), sx = t.x + t.s / 2, sy = t.y + t.s / 2, s0 = t.s * 0.3;
      var tx = u.x + u.w / 2, ty = u.y + u.h / 2, mx = (sx + tx) / 2, my = Math.min(sy, ty) - 120 - Math.abs(tx - sx) * 0.15;
      var a = (1 - f) * (1 - f), b = 2 * (1 - f) * f, c = f * f;
      var w = s0 + (u.w - s0) * f, h = s0 + (u.h - s0) * f;
      return [a * sx + b * mx + c * tx - w / 2, a * sy + b * my + c * ty - h / 2, w, h];
    }
    function drawUnit(u, src, f, dx, dy, alpha) {
      var p = pos(u, src, f);
      G.block(env, p[0] + (dx || 0), p[1] + (dy || 0), p[2], p[3], u.c, alpha);
    }

    self = {
      caption: '',
      state: function (k, src, t) {
        if (cur) old = { list: cur.list, src: cur.src, t: t };
        cur = { k: k, src: src, t: t + 250, list: build(k), next: 0, heights: new Array(16).fill(0) };
        self.caption = NAMES[k];
      },
      frame: function (t) {
        var ctx = env.ctx, i, sp = env.speed;
        if (old) {
          var dt0 = t - old.t, done = true, L = old.list.length;
          for (i = 0; i < L; i++) {
            var f0 = 1 - G.lift((dt0 - (L - 1 - i) * 6 / sp) / (420 / sp));
            if (f0 > 0) { done = false; drawUnit(old.list[i], old.src, f0); }
          }
          if (done && dt0 > 400) old = null;
        }
        if (!cur) return;
        var dt = t - cur.t;
        if (cur.k === 4 && !cur.full && cur.list.length < 64 && dt > cur.next) {
          cur.next = dt + 240 / sp;
          var w = G.pick([1, 1, 2, 3]), h = G.pick([1, 1, 2]), i0 = G.irand(16 - w + 1), base = 0;
          for (i = i0; i < i0 + w; i++) base = Math.max(base, cur.heights[i]);
          if (base + h <= 12) { for (i = i0; i < i0 + w; i++) cur.heights[i] = base + h; cur.list.push(at(i0, base, w, h, G.other(env), dt * sp)); }
          else cur.full = true;
        }
        var end = maxD(cur.list) / sp + 700 / sp, settled = dt - end;
        var tower = cur.k === 3 && settled > 900, theta = 0;
        if (tower) theta = Math.min(Math.PI / 2, 0.0000045 * sp * sp * Math.pow(settled - 900, 2));
        if (tower) { ctx.save(); var px = X0 + 2 * C - (C - U), py = FLOOR; ctx.translate(px, py); ctx.rotate(theta); ctx.translate(-px, -py); }
        for (i = 0; i < cur.list.length; i++) {
          var u = cur.list[i], f = G.place((dt - u.d / sp) / (700 / sp));
          if (f <= 0) continue;
          var dx = 0, dy = 0;
          if (cur.k === 2 && f >= 1) {
            var span = 16 * C, run = (dt - u.d / sp - 700 / sp) * 0.06 * sp;
            dx = ((u.i * C + run) % span) - u.i * C;
            dy = -Math.abs(Math.sin(t * 0.007 * sp + u.i)) * C * 0.7;
          }
          drawUnit(u, cur.src, f, dx, dy);
        }
        if (tower) ctx.restore();
        // Measure the work once it stands.
        var p = G.clamp((settled - 300) / 700);
        if (p > 0 && cur.k !== 2 && cur.k !== 4 && !(cur.k === 3 && theta > 0.02)) {
          var wC = { 0: 9, 1: 16, 3: 2, 5: 12, 6: 10 }[cur.k], hC = { 0: 9, 1: 6, 3: 14, 5: 6, 6: 7 }[cur.k];
          var lab = { 0: ['9', '9'], 1: ['8', '3'], 3: ['1', '7'], 5: ['6', '3'], 6: ['7', '7'] }[cur.k];
          ctx.globalAlpha = 0.9;
          G.dim(env, 'h', X0, X0 + wC * C - (C - U), FLOOR + 16, lab[0], p);
          G.dim(env, 'v', FLOOR - hC * C, FLOOR, Math.max(8, X0 - 16), lab[1], p);
          ctx.globalAlpha = 1;
        }
      }
    };
    return self;
  }
});

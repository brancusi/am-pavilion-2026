// 04 Axonometric: the works as voxels, set down from above and turning
// slowly on a hairline floor.
Grounds.register({
  id: 'axonometric',
  create: function (env) {
    var G = Grounds;
    // A floor 6 cells either way spans 21 cells across and 12 down; the
    // tallest work stands 8 above it.
    var S = env.stage, sc = Math.min(26, S.w / 22, S.h / 21);
    var iso = new G.Iso(env, { cx: S.x + S.w / 2, cy: S.y + S.h - 6.5 * sc, s: sc });
    var cur = null, old = null, self, g = 0.06;
    var NAMES = ['The unit · 3 × 3', 'Big Red Bed · 8 × 3 × 1', 'Carried by hand', 'Ephemeral · built, unbuilt', 'Improvised', 'Interlock · a quarter turn a layer', 'Seven Steps · 1 … 7'];

    function build(k) {
      var L = [], i, j, n = 0;
      var add = function (x, y, z, w, d, h, c) { L.push({ x: x, y: y, z: z, w: w, d: d, h: h, c: c, i: n, d0: (n++) * 60 }); };
      if (k === 0) for (j = 0; j < 3; j++) for (i = 0; i < 3; i++) add(-2.7 + i * 1.8, -2.7 + j * 1.8, 0, 1.6, 1.6, 1.6, G.TILES[j * 3 + i][0]);
      if (k === 1) for (j = 0; j < 3; j++) for (i = 0; i < 8; i++) add(-4 + i, -1.5 + j, 0, 1, 1, 1, 'red');
      if (k === 2) for (i = 0; i < 9; i++) add(-7 + i * 1.6, -0.5, 0, 1, 1, 1, G.other(env));
      if (k === 3) for (j = 0; j < 8; j++) for (i = 0; i < 4; i++) add(-1 + (i & 1), -1 + (i >> 1), j, 1, 1, 1, j % 2 ? 'turquoise' : G.other(env));
      if (k === 5) for (j = 0; j < 6; j++) {
        var c = j < 2 ? 'yellow' : j < 4 ? 'blue' : 'red';
        for (i = 0; i < 3; i++) { if (j % 2) add(-1.5 + i, -1.5, j, 1, 3, 1, c); else add(-1.5, -1.5 + i, j, 3, 1, 1, c); }
      }
      if (k === 6) for (i = 0; i < 7; i++) add(-4.5 + i * 1.3, -0.5, 0, 1, 1, i + 1, 'paper');
      return L;
    }
    function improvised() {
      var L = [], h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (var n = 0; n < 26; n++) {
        var w = G.pick([1, 1, 2]), d = G.pick([1, 1, 2]), x = G.irand(5 - w), y = G.irand(5 - d), z = 0, a, b;
        for (a = x; a < x + w; a++) for (b = y; b < y + d; b++) z = Math.max(z, h[b * 4 + a]);
        if (z > 5) continue;
        for (a = x; a < x + w; a++) for (b = y; b < y + d; b++) h[b * 4 + a] = z + 1;
        L.push({ x: x - 2, y: y - 2, z: z, w: w, d: d, h: 1, c: G.other(env), i: n, d0: n * 120 });
      }
      return L;
    }
    function put(u, f, dx, dz, alpha) {
      if (f <= 0) return;
      iso.box(u.x + g + (dx || 0), u.y + g, u.z + (dz || 0) + (1 - f) * 7, u.w - 2 * g, u.d - 2 * g, u.h - g, u.c, Math.min(1, f * 1.6) * (alpha == null ? 1 : alpha));
    }

    self = {
      caption: '',
      state: function (k, src, t) {
        if (cur) old = { list: cur.list, t: t };
        cur = { k: k, t: t + 250, list: k === 4 ? improvised() : build(k), round: 0 };
        self.caption = NAMES[k];
      },
      frame: function (t) {
        var sp = env.speed, i;
        iso.turn = t * 0.00009 * sp;
        iso.floor(6);
        if (old) {
          var dt0 = t - old.t;
          for (i = 0; i < old.list.length; i++) { var u0 = old.list[i], l = G.lift((dt0 - u0.i * 10 / sp) / (500 / sp)); if (l < 1) iso.box(u0.x + g, u0.y + g, u0.z + l * 9, u0.w - 2 * g, u0.d - 2 * g, u0.h - g, u0.c, 1 - l); }
          if (dt0 > 500 / sp + old.list.length * 10 / sp) old = null;
        }
        if (!cur) { iso.flush(); return; }
        var dt = t - cur.t, local = dt, out = 0;
        if (cur.k === 3 || cur.k === 4) {
          var period = 6800 / sp, r = Math.floor(dt / period);
          if (cur.k === 4 && r !== cur.round) { cur.round = r; cur.list = improvised(); }
          local = dt - r * period;
          out = G.lift((local - 5000 / sp) / (900 / sp));
        }
        for (i = 0; i < cur.list.length; i++) {
          var u = cur.list[i], f = G.place((local - u.d0 / sp) / (650 / sp)), dx = 0, dz = 0;
          if (cur.k === 2 && f >= 1) {
            var run = (dt - u.d0 / sp) * 0.0012 * sp;
            dx = ((u.x + 7 + run) % 14) - (u.x + 7);
            dz = Math.abs(Math.sin(t * 0.006 * sp + u.i)) * 0.8;
          }
          if (out > 0) { dz += out * 6; put(u, f, dx, dz, 1 - out); }
          else put(u, f, dx, dz);
        }
        iso.flush();
        var p = G.clamp((dt - (cur.list.length * 60 + 900) / sp) / (700 / sp));
        if (p > 0) {
          env.ctx.globalAlpha = 0.9;
          if (cur.k === 0) { iso.dim([-2.7, 2.7, 0], [2.5, 2.7, 0], [0, 0.9, 0], '3', p); }
          if (cur.k === 1) { iso.dim([-4, 1.5, 0], [4, 1.5, 0], [0, 0.9, 0], '8', p); iso.dim([4, -1.5, 0], [4, 1.5, 0], [0.9, 0, 0], '3', p); }
          if (cur.k === 5) { iso.dim([-1.5, 1.5, 0], [-1.5, 1.5, 6], [-0.6, 0.6, 0], '6', p); iso.dim([-1.5, 1.5, 0], [1.5, 1.5, 0], [0, 0.9, 0], '3', p); }
          if (cur.k === 6) { iso.dim([4.5, 0.5, 0], [4.5, 0.5, 7], [0.8, 0.6, 0], '7', p); iso.dim([-4.5, 0.5, 0], [4.5, 0.5, 0], [0, 0.9, 0], '1 · 1.3 · 7', p); }
          env.ctx.globalAlpha = 1;
        }
      }
    };
    return self;
  }
});

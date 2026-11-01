// 09 · Seven Steps. Seven columns rise one unit at a time out of the mark,
// measured 1 to 7; each ground arranges the steps another way.
Grounds.register({
  id: 'seven-steps',
  create: function (env) {
    var G = Grounds, phone = !!env.phone;
    // A floor 6 either way (about 21 cells across, 12 deep) under steps up
    // to 7 high, fitted to the stage.
    var St = env.stage, sc = Math.min(24, (St.w - 40) / 21, (St.h - 40) / 20);
    var iso = new G.Iso(env, { cx: St.x + St.w / 2, cy: St.y + St.h - 20 - 6 * sc, s: sc });
    var CAP = ['1 · 2 · 3 · 4 · 5 · 6 · 7', 'seven steps · two deep', 'a spiral · 1 → 7', '1 … 7 … 1', 'improvised order', '7 + 7 · a corner', 'harmonic · 1 to 7'];
    var cur = null, old = null, inst;

    function build(k) {
      var cols = [], i, cubes = [];
      var col = function (x, y, h, c) { cols.push({ x: x, y: y, h: h, c: c }); };
      if (k === 0) for (i = 0; i < 7; i++) col(i - 3, 0, i + 1, 'paper');
      if (k === 1) for (i = 0; i < 7; i++) { col(i - 3, -1, i + 1, 'red'); col(i - 3, 0, i + 1, 'red'); }
      if (k === 2) {
        var ring = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1]];
        for (i = 0; i < 7; i++) col(ring[i][0] - 0.5, ring[i][1] - 0.5, i + 1, i % 2 ? 'blue' : 'paper');
      }
      if (k === 3) for (i = 0; i < 13; i++) col(i - 6.5, 0, 7 - Math.abs(i - 6), 'paper');
      if (k === 4) {
        var hs = G.shuffle([1, 2, 3, 4, 5, 6, 7]);
        for (i = 0; i < 7; i++) col(i - 3, 0, hs[i], G.other(env));
      }
      if (k === 5) {
        for (i = 0; i < 7; i++) col(i - 3, 1, i + 1, null);
        for (i = 0; i < 6; i++) col(3, -5 + i, i + 1, null);
      }
      if (k === 6) for (i = 0; i < 7; i++) col(i - 3, 0, i + 1, 'paper');
      var FLAG = ['red', 'red', 'blue', 'blue', 'yellow', 'yellow', 'brick'];
      for (i = 0; i < cols.length; i++) {
        for (var z = 0; z < cols[i].h; z++) cubes.push({ x: cols[i].x, y: cols[i].y, z: z, c: cols[i].c || FLAG[Math.min(6, z)], o: z * 20 + i });
      }
      // Bottom course first, then upward: a stair is built the way it is climbed.
      cubes.sort(function (a, b) { return a.o - b.o; });
      var b = { x0: 1e9, x1: -1e9, y0: 1e9, y1: -1e9, z1: 0 };
      cols.forEach(function (c) {
        b.x0 = Math.min(b.x0, c.x); b.x1 = Math.max(b.x1, c.x + 1);
        b.y0 = Math.min(b.y0, c.y); b.y1 = Math.max(b.y1, c.y + 1); b.z1 = Math.max(b.z1, c.h);
      });
      return { cubes: cubes, cols: cols, b: b, k: k };
    }

    inst = {
      caption: '',
      state: function (k, src, t) {
        if (cur) old = { g: cur.g, tOut: t };
        var sp = env.speed || 1, g = build(k);
        cur = { g: g, tIn: t + 300 / sp, src: src >= 0 && src < 9 ? src : 4 };
        cur.tDone = cur.tIn + (g.cubes.length * 55 + 700) / sp;
        inst.caption = 'Seven Steps · ' + (CAP[k] || CAP[0]);
      },
      frame: function (t, dt) {
        if (!cur) return;
        var sp = env.speed || 1, i, g = cur.g, n = g.cubes.length, flying = [];
        iso.turn = -0.15 + 0.38 * Math.sin(t * 0.00022 * sp);
        iso.floor(6, 0.12);
        if (old) {
          var og = old.g, on = og.cubes.length, dto = t - old.tOut;
          for (i = 0; i < on; i++) {
            var u = G.clamp((dto - (on - 1 - i) * 10 / sp) / (360 / sp));
            if (u >= 1) continue;
            var oc = og.cubes[i];
            iso.box(oc.x + 0.04, oc.y + 0.04, oc.z + G.lift(u) * 5, 0.92, 0.92, 0.96, oc.c, 1 - u);
          }
          if (dto > (on * 10 + 400) / sp) old = null;
        }
        for (i = 0; i < n; i++) {
          var c = g.cubes[i], t0 = cur.tIn + i * 55 / sp, f = (t - t0) / (420 / sp);
          if (f <= 0) continue;
          if (f < 1) { flying.push({ c: c, f: G.place(f) }); continue; }
          var drop = 1 - G.place((t - t0 - 420 / sp) / (180 / sp));
          iso.box(c.x + 0.04, c.y + 0.04, c.z + drop * 0.6, 0.92, 0.92, 0.96, c.c);
        }
        iso.flush();
        var sz = Math.max(5, Math.round(sc * 0.7));
        for (i = 0; i < flying.length; i++) {
          var fc = flying[i].c, P = iso.proj(fc.x + 0.5, fc.y + 0.5, fc.z + 1);
          G.fly(env, { x: P[0] - sz / 2, y: P[1] - sz / 2, w: sz, h: sz, c: fc.c }, cur.src, flying[i].f);
        }
        var p = G.clamp((t - cur.tDone) / (800 / sp)), b = g.b;
        if (p <= 0) return;
        iso.dim([b.x0, b.y1, 0], [b.x1, b.y1, 0], [0, 0.7, 0], String(Math.round(b.x1 - b.x0)), p);
        iso.dim([b.x1, b.y0, 0], [b.x1, b.y0, b.z1], [0.7, -0.7, 0], String(b.z1), p);
        if (p >= 1 && (g.k === 0 || g.k === 6 || g.k === 4) && !phone) {
          for (i = 0; i < g.cols.length; i++) {
            var cl = g.cols[i], T = iso.proj(cl.x + 0.5, cl.y + 0.5, cl.h + 0.55);
            G.label(env, T[0], T[1], g.k === 6 ? (cl.h === 1 ? '1' : '1/' + cl.h) : String(cl.h), true);
          }
        }
      }
    };
    return inst;
  }
});

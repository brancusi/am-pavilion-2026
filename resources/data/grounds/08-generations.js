// 08 · Generations. Each generation of Life is a layer; time is stacked into
// a tower that sinks as it grows, so the newest moment is always on top.
Grounds.register({
  id: 'generations',
  create: function (env) {
    var G = Grounds;
    var RULES = ['B3/S23', 'B36/S23', 'B3678/S34678', 'B2/S', 'B3/S12345', 'B3/S45678', 'B368/S245'];
    var phone = !!env.phone, S = phone ? 10 : 12, L = phone ? 7 : 9, HZ = 0.45;
    // Fit the tower to the stage: the floor is 2h across its diagonal
    // (1.73·h·s either side) and h·s deep either way; the stack rises above.
    var St = env.stage, hh = S / 2, zmax = L * HZ + 2.4;
    var sc = Math.min(24, (St.w - 40) / (3.464 * hh), (St.h - 44) / (2 * hh + zmax));
    var iso = new G.Iso(env, { cx: St.x + St.w / 2, cy: St.y + St.h - 22 - hh * sc, s: sc });
    var life = new G.Life(S, S, RULES[0]);
    var layers = [], tStep = 0, lastSeed = 0, fliers = [], inst, q;
    for (q = 0; q < S * S; q++) if (Math.random() < 0.3) life.a[q] = 1 + G.irand(8);

    function seed(t, mine) {
      var c = (S / 2) | 0;
      life.stamp(G.pick([G.PAT.rpent, G.PAT.glider, G.PAT.acorn]), c - 2 + G.irand(3), c - 2 + G.irand(3), mine, G.irand(4));
      life.stamp(G.PAT.glider, G.irand(S), G.irand(S), G.code(G.other(env)), G.irand(4));
      lastSeed = t;
    }
    function push(t) {
      life.step();
      if ((life.alive || 0) < 5 && t - lastSeed > 600) seed(t, G.code(G.other(env)));
      layers.unshift(new Uint8Array(life.a));
      while (layers.length > L + 1) layers.pop();
      tStep = t;
    }

    inst = {
      caption: '',
      state: function (k, src, t) {
        life.setRule(RULES[k] || 'B3/S23');
        var s = src >= 0 && src < 9 ? src : 4;
        seed(t, G.code(G.TILES[s][0]));
        var top = iso.proj(0, 0, L * HZ + 1.5), sz = Math.max(6, Math.round(sc * 0.9));
        for (var n = 0; n < 5; n++) {
          fliers.push({ r: { x: top[0] - sz / 2 + G.rand(-20, 20), y: top[1] - sz / 2 + G.rand(-10, 10), w: sz, h: sz, c: n % 2 ? G.TILES[s][0] : G.other(env) }, t0: t + n * 70 });
        }
        inst.caption = (RULES[k] || 'B3/S23') + ' · ' + S + ' × ' + S + ' · time stacked';
      },
      frame: function (t, dt) {
        var sp = env.speed || 1, stepMs = 380 / sp;
        if (!layers.length || t - tStep > stepMs) push(t);
        iso.turn += (dt || 16) * 0.00012 * sp;
        var p = G.clamp((t - tStep) / stepMs), h = S / 2;
        iso.floor(h, 0.14);
        for (var i = 0; i < layers.length; i++) {
          var lay = layers[i], z = (L - i - p) * HZ, a = 1;
          if (i === 0) z += (1 - G.place(p * 1.6)) * 2.2;
          if (i === L) a = 1 - p;
          if (z < -HZ) continue;
          var alpha = a * (0.45 + 0.55 * (1 - i / (L + 1)));
          for (var n = 0; n < lay.length; n++) {
            var v = lay[n];
            if (!v) continue;
            var c = G.pig(v);
            if (!c) continue;
            iso.box((n % S) - h + 0.07, ((n / S) | 0) - h + 0.07, Math.max(0, z), 0.86, 0.86, HZ * 0.8, c, alpha);
          }
        }
        iso.flush();
        for (i = fliers.length - 1; i >= 0; i--) {
          var fl = fliers[i];
          if (t < fl.t0) continue;
          var f = G.place((t - fl.t0) / (520 / sp));
          if (f >= 1) { fliers.splice(i, 1); continue; }
          G.fly(env, fl.r, env.src >= 0 && env.src < 9 ? env.src : 4, f, 1 - f * 0.4);
        }
        iso.dim([h, -h, 0], [h, -h, L * HZ], [0.9, -0.9, 0], 't = ' + L, 1);
        iso.dim([-h, h, 0], [h, h, 0], [0, 1.1, 0], String(S), 1);
      }
    };
    return inst;
  }
});

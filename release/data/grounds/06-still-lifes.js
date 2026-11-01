// 06 · Still lifes. Life runs until a pattern stops changing; what stops is
// solid, and gets measured.
Grounds.register({
  id: 'still-lifes',
  create: function (env) {
    var G = Grounds;
    var RULES = ['B3/S23', 'B36/S23', 'B3/S23', 'B3678/S34678', 'B3/S12345', 'B3/S45678', 'B368/S245'];
    var NAMES = ['Life', 'HighLife', 'Life', 'Day & Night', 'Maze', 'Coral', 'Move'];
    var cell = env.phone ? 12 : 16, cols = Math.ceil(env.W / cell), rows = Math.ceil(env.H / cell);
    var life = new G.Life(cols, rows, RULES[0]);
    var mask = new Uint8Array(cols * rows), free = [], n, i, j;
    for (j = 0; j < rows; j++) for (i = 0; i < cols; i++) {
      n = j * cols + i;
      mask[n] = G.sheltered(env, i * cell + cell / 2, j * cell + cell / 2, 12) ? 1 : 0;
      if (!mask[n]) free.push(n);
    }
    // A soup to start: Life settles it into still lifes within seconds.
    for (n = 0; n < free.length; n++) if (Math.random() < 0.16) life.a[free[n]] = 1 + G.irand(8);
    var last = 0, lastScan = 0, lastSeed = 0, fliers = [], found = [], inst;
    var pats = [G.PAT.glider, G.PAT.rpent, G.PAT.acorn, G.PAT.lwss];

    function clearMask() {
      var a = life.a;
      for (var q = 0; q < a.length; q++) if (mask[q]) { a[q] = 0; life.age[q] = 0; }
    }
    function launch(i, j, v, t) {
      fliers.push({ r: { x: i * cell, y: j * cell, w: cell * 3, h: cell * 3, c: G.pig(v) }, t0: t });
    }
    function seed(t) {
      var src = env.src >= 0 && env.src < 9 ? env.src : 4;
      var tl = G.tile(env, src), mine = G.code(G.TILES[src][0]);
      var j0 = Math.floor((tl.y + tl.s / 2) / cell);
      var right = !env.phone && Math.random() < 0.4;
      var i0 = right ? Math.floor((env.mark.x + env.mark.s) / cell) + 3 : Math.floor(env.mark.x / cell) - 4;
      for (var q = 0; q < 4; q++) {
        var ii = right ? i0 + G.irand(5) : i0 - G.irand(9), jj = j0 - 6 + G.irand(12);
        var v = q % 2 ? mine : G.code(G.other(env));
        life.stamp(G.pick(pats), ii, jj, v, G.irand(4));
        launch(ii, jj, v, t + q * 90);
      }
      lastSeed = t;
    }
    function seedRandom(t) {
      if (!free.length) return;
      var m = free[G.irand(free.length)];
      life.stamp(G.PAT.acorn, m % cols, (m / cols) | 0, G.code(G.other(env)), G.irand(4));
      lastSeed = t;
    }
    function gcd(a, b) { while (b) { var r = a % b; a = b; b = r; } return a || 1; }
    // Connected solid cells (alive and unchanged for 8 generations).
    function scan(t) {
      var a = life.a, age = life.age, seen = new Uint8Array(a.length), comps = [], stack = [];
      for (var s = 0; s < a.length; s++) {
        if (seen[s] || !a[s] || age[s] < 8 || mask[s]) continue;
        var c = { i0: 1e9, j0: 1e9, i1: -1, j1: -1, n: 0 };
        stack.length = 0; stack.push(s); seen[s] = 1;
        while (stack.length) {
          var m = stack.pop(), mi = m % cols, mj = (m / cols) | 0;
          c.n++;
          if (mi < c.i0) c.i0 = mi; if (mi > c.i1) c.i1 = mi;
          if (mj < c.j0) c.j0 = mj; if (mj > c.j1) c.j1 = mj;
          for (var dj = -1; dj <= 1; dj++) for (var di = -1; di <= 1; di++) {
            var ni = mi + di, nj = mj + dj;
            if (ni < 0 || nj < 0 || ni >= cols || nj >= rows) continue;
            var nn = nj * cols + ni;
            if (!seen[nn] && a[nn] && age[nn] >= 8 && !mask[nn]) { seen[nn] = 1; stack.push(nn); }
          }
        }
        var w = c.i1 - c.i0 + 1, h = c.j1 - c.j0 + 1;
        if (c.n < 4 || w > 22 || h > 22) continue;
        var x0 = c.i0 * cell, y0 = c.j0 * cell, x1 = (c.i1 + 1) * cell, y1 = (c.j1 + 1) * cell;
        if (y0 < 24 || x0 < 24 || x1 > env.W - 24 || y1 > env.H - 40) continue;
        if (G.sheltered(env, x0 - 16, y0 - 16, 4) || G.sheltered(env, x1, y1 + 16, 4) || G.sheltered(env, x0 - 16, y1, 4)) continue;
        comps.push(c);
      }
      comps.sort(function (p, q) { return (q.i1 - q.i0 + 1) * (q.j1 - q.j0 + 1) - (p.i1 - p.i0 + 1) * (p.j1 - p.j0 + 1); });
      var next = comps.slice(0, env.phone ? 2 : 4);
      for (var q = 0; q < next.length; q++) {
        next[q].t = t;
        for (var o = 0; o < found.length; o++) {
          var f = found[o];
          if (f.i0 === next[q].i0 && f.j0 === next[q].j0 && f.i1 === next[q].i1 && f.j1 === next[q].j1) next[q].t = f.t;
        }
      }
      found = next;
    }

    inst = {
      caption: '',
      state: function (k, src, t) {
        life.setRule(RULES[k] || 'B3/S23');
        // Thin out the oldest growth so the new law has room.
        var a = life.a;
        for (var q = 0; q < a.length; q++) if (a[q] && life.age[q] > 120 && Math.random() < 0.5) { a[q] = 0; life.age[q] = 0; }
        seed(t);
        found = [];
        inst.caption = (NAMES[k] || 'Life') + ' · ' + (RULES[k] || 'B3/S23') + ' · still lifes measured';
      },
      frame: function (t, dt) {
        var sp = env.speed || 1, ctx = env.ctx;
        if (t - last > 120 / sp) {
          last = t; life.step(); clearMask();
          if ((life.alive || 0) < 40 && t - lastSeed > 1200) seedRandom(t);
        }
        if (t - lastScan > 1400) { lastScan = t; scan(t); }
        var a = life.a, age = life.age;
        for (var q = 0; q < a.length; q++) {
          var v = a[q];
          if (!v) continue;
          var x = (q % cols) * cell, y = ((q / cols) | 0) * cell, c = G.pig(v);
          if (!c) continue;
          if (age[q] >= 8) G.block(env, x, y, cell, cell, c, 1);
          else G.block(env, x + 3, y + 3, cell - 6, cell - 6, c, 0.55);
        }
        for (q = fliers.length - 1; q >= 0; q--) {
          var fl = fliers[q], f = G.place((t - fl.t0) / (520 / sp));
          if (t < fl.t0) continue;
          if (f >= 1) { fliers.splice(q, 1); continue; }
          G.fly(env, fl.r, env.src >= 0 && env.src < 9 ? env.src : 4, f);
        }
        for (q = 0; q < found.length; q++) {
          var m = found[q], p = G.clamp((t - m.t) / 700);
          var x0 = m.i0 * cell, y0 = m.j0 * cell, x1 = (m.i1 + 1) * cell, y1 = (m.j1 + 1) * cell;
          var w = m.i1 - m.i0 + 1, h = m.j1 - m.j0 + 1, g = gcd(w, h);
          G.line(env, x0 - 3, y0 - 3, x1 + 3, y0 - 3, [2, 3], 0.6 * p);
          G.line(env, x1 + 3, y0 - 3, x1 + 3, y1 + 3, [2, 3], 0.6 * p);
          G.line(env, x1 + 3, y1 + 3, x0 - 3, y1 + 3, [2, 3], 0.6 * p);
          G.line(env, x0 - 3, y1 + 3, x0 - 3, y0 - 3, [2, 3], 0.6 * p);
          ctx.globalAlpha = 0.9;
          G.dim(env, 'h', x0, x1, y0 - 12, String(w), p);
          G.dim(env, 'v', y0, y1, x0 - 12, String(h), p);
          ctx.globalAlpha = 1;
          if (p >= 1) G.label(env, (x0 + x1) / 2, y1 + 14, (w / g) + ' : ' + (h / g), true);
        }
      }
    };
    return inst;
  }
});

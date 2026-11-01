// 02 Accretion: walkers drift until they touch the structure and stick
// (diffusion-limited aggregation), inside the stage. Each colour seeds a
// new place to grow from; the last structure unbuilds newest-first.
Grounds.register({
  id: 'accretion',
  create: function (env) {
    var G = Grounds, S = env.stage;
    var C = env.phone ? 8 : 12, cols = Math.ceil(env.W / C), rows = Math.ceil(env.H / C);
    var i0 = Math.ceil(S.x / C), j0 = Math.ceil(S.y / C), i1 = Math.floor((S.x + S.w) / C) - 1, j1 = Math.floor((S.y + S.h) / C) - 1;
    var CAP = Math.round((i1 - i0 + 1) * (j1 - j0 + 1) * 0.22), NW = env.phone ? 120 : 220, STRATA = 40;
    var grid = new Int16Array(cols * rows), col = new Uint8Array(cols * rows);
    var gen = 0, cells = [], old = [], walkers = [], drift = [0, 0], pal = [], self;
    var NAMES = ['floor', 'two walls', 'a spine', 'diagonal', 'seven points', 'seven steps', 'ceiling'];
    var free = function (i, j) { return i >= i0 && i <= i1 && j >= j0 && j <= j1 && !G.sheltered(env, i * C + C / 2, j * C + C / 2, 4); };

    function stick(i, j) {
      if (!free(i, j)) return;
      var n = j * cols + i;
      if (grid[n] === gen) return;
      grid[n] = gen; col[n] = G.code(pal[((cells.length / STRATA) | 0) % pal.length]);
      cells.push(n);
    }
    function seed(k) {
      var i, j, mid = (i0 + i1) >> 1, w = i1 - i0, h = j1 - j0;
      if (k === 0) { for (i = i0; i <= i1; i++) stick(i, j1); drift = [0, 0.25]; }
      if (k === 1) { for (j = j0; j <= j1; j++) { stick(i0, j); stick(i1, j); } drift = [0, 0]; }
      if (k === 2) { for (j = j0; j <= j1; j++) stick(mid, j); drift = [0, 0]; }
      if (k === 3) { for (i = 0; i <= w; i++) stick(i0 + i, j1 - Math.round(i * h / Math.max(1, w))); drift = [0.12, 0.12]; }
      if (k === 4) { for (var p = 0; p < 7; p++) stick(i0 + 2 + G.irand(Math.max(1, w - 3)), j0 + 2 + G.irand(Math.max(1, h - 3))); drift = [0, 0]; }
      if (k === 5) { var sw = Math.max(1, Math.floor(w / 7)); for (var s = 0; s < 7; s++) for (j = 0; j <= Math.round((s + 1) * h / 9); j++) stick(i0 + s * sw + (sw >> 1), j1 - j); drift = [0, 0.2]; }
      if (k === 6) { for (i = i0; i <= i1; i++) stick(i, j0); drift = [0, -0.25]; }
      if (!cells.length) stick(mid, j1);
    }
    function spawn(w) {
      for (var tries = 0; tries < 12; tries++) {
        w[0] = i0 + Math.random() * (i1 - i0 + 1); w[1] = j0 + Math.random() * (j1 - j0 + 1);
        if (free(w[0] | 0, w[1] | 0)) return;
      }
    }
    for (var q = 0; q < NW; q++) { var w = [0, 0]; spawn(w); walkers.push(w); }

    self = {
      caption: '',
      state: function (k) {
        old = old.concat(cells); cells = []; gen++;
        pal = G.shuffle(G.PIGS.filter(function (c) { return c !== env.st.k; }));
        seed(k);
        self.caption = 'DLA · from ' + NAMES[k];
      },
      frame: function (t, dt) {
        var ctx = env.ctx, i, n;
        for (n = 0; n < 24 && old.length; n++) { var o = old.pop(); if (grid[o] !== gen) grid[o] = 0; }
        var steps = Math.max(1, Math.round(6 * env.speed));
        if (cells.length < CAP) for (i = 0; i < walkers.length; i++) {
          var w = walkers[i];
          for (var s = 0; s < steps; s++) {
            w[0] += (Math.random() - 0.5) * 2 + drift[0]; w[1] += (Math.random() - 0.5) * 2 + drift[1];
            var a = w[0] | 0, b = w[1] | 0;
            if (!free(a, b)) { spawn(w); break; }
            var hit = false;
            for (var e = -1; e <= 1 && !hit; e++) for (var f = -1; f <= 1; f++) {
              var aa = a + e, bb = b + f;
              if (aa >= 0 && aa < cols && bb >= 0 && bb < rows && grid[bb * cols + aa] === gen) { hit = true; break; }
            }
            // Sticking only some of the time keeps the growth branching.
            if (hit && Math.random() < 0.45) { stick(a, b); spawn(w); break; }
          }
        }
        for (n = 0; n < grid.length; n++) {
          if (!grid[n]) continue;
          G.block(env, (n % cols) * C + 1, ((n / cols) | 0) * C + 1, C - 2, C - 2, G.pig(col[n]) || 'paper', grid[n] === gen ? 1 : 0.45);
        }
        if (cells.length < CAP) {
          ctx.fillStyle = env.st.on; ctx.globalAlpha = 0.35;
          for (i = 0; i < walkers.length; i++) ctx.fillRect(walkers[i][0] * C - 1.5, walkers[i][1] * C - 1.5, 3, 3);
          ctx.globalAlpha = 1;
        }
      }
    };
    return self;
  }
});

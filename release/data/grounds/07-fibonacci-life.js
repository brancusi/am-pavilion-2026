// 07 · Fibonacci Life. One rule, B3/S23, on a lattice whose rows and columns
// take the proportions of the ground: cells of different dimension.
Grounds.register({
  id: 'fibonacci-life',
  create: function (env) {
    var G = Grounds, R2 = Math.SQRT2;
    var SEQ = [
      { s: [1], l: ['1'], cap: '1 : 1 · the unit' },
      { s: [8, 3], l: ['8', '3'], cap: '8 : 3 · the slab' },
      { s: [1, R2, 2, 2 * R2], l: ['1', '√2', '2', '2√2'], cap: '1 : √2 · halving' },
      { s: [1, 1, 2, 3, 5, 8, 5, 3, 2, 1], l: ['1', '1', '2', '3', '5', '8', '5', '3', '2', '1'], cap: 'φ · 1 1 2 3 5 8' },
      { s: [1, 3 / 2, 4 / 3, 5 / 4, 6 / 5], l: ['1', '3:2', '4:3', '5:4', '6:5'], cap: 'just intervals' },
      { s: [2, 1], l: ['2', '1'], cap: '2 : 1 · running bond' },
      { s: [1, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6, 1 / 7], l: ['1', '½', '⅓', '¼', '⅕', '⅙', '⅐'], cap: '1/n · harmonic' }
    ];
    var phone = !!env.phone;
    // The lattice fills the stage, leaving room for its labels: column terms
    // above, row terms to the right (desktop) and a dimension below.
    var S = env.stage;
    var rx0 = S.x, rx1 = S.x + S.w - (phone ? 0 : 24);
    var ry0 = S.y + 18, ry1 = S.y + S.h - 22;
    var N = phone ? 14 : 20, M = phone ? 8 : 26;
    var life = new G.Life(N, M, 'B3/S23');
    var seq = SEQ[0], fromX, fromY, toX, toY, tc = 0, last = 0, lastSeed = 0, fliers = [], inst, q;

    function edges(s, n, a, b, off) {
      var e = new Float32Array(n + 1), sum = 0, i;
      for (i = 0; i < n; i++) sum += s[(i + off) % s.length];
      e[0] = a;
      for (i = 0; i < n; i++) e[i + 1] = e[i] + (b - a) * s[(i + off) % s.length] / sum;
      return e;
    }
    fromX = toX = edges([1], N, rx0, rx1, 0);
    fromY = toY = edges([1], M, ry0, ry1, 0);
    var curX = new Float32Array(N + 1), curY = new Float32Array(M + 1);
    function mix(t) {
      var p = G.smooth((t - tc) / (900 / (env.speed || 1)));
      for (var i = 0; i <= N; i++) curX[i] = fromX[i] + (toX[i] - fromX[i]) * p;
      for (var j = 0; j <= M; j++) curY[j] = fromY[j] + (toY[j] - fromY[j]) * p;
    }
    function shelter() {
      var a = life.a;
      for (var j = 0; j < M; j++) for (var i = 0; i < N; i++) {
        var x = (curX[i] + curX[i + 1]) / 2, y = (curY[j] + curY[j + 1]) / 2;
        if (G.sheltered(env, x, y, 6)) { a[j * N + i] = 0; life.age[j * N + i] = 0; }
      }
    }
    function find(e, v) { for (var i = 0; i < e.length - 1; i++) if (v >= e[i] && v < e[i + 1]) return i; return v < e[0] ? 0 : e.length - 2; }
    function seed(t) {
      var src = env.src >= 0 && env.src < 9 ? env.src : 4;
      var tl = G.tile(env, src), mine = G.code(G.TILES[src][0]);
      // Side by side the mark is to the right of the lattice; stacked, above it.
      var i0 = phone ? find(toX, tl.x + tl.s / 2) + 2 : find(toX, env.mark.x - 2) - 2;
      var j0 = phone ? 3 : find(toY, tl.y + tl.s / 2);
      for (var n = 0; n < 3; n++) {
        var i = Math.max(1, Math.min(N - 3, i0 - G.irand(4))), j = Math.max(1, Math.min(M - 3, j0 - 3 + G.irand(6)));
        var v = n === 1 ? G.code(G.other(env)) : mine;
        life.stamp(n === 2 ? G.PAT.rpent : G.PAT.glider, i, j, v, G.irand(4));
        var ci = Math.min(N - 1, i), cj = Math.min(M - 1, j);
        fliers.push({ r: { x: toX[ci], y: toY[cj], w: toX[ci + 1] - toX[ci], h: toY[cj + 1] - toY[cj], c: G.pig(v) }, t0: t + n * 110 });
      }
      lastSeed = t;
    }
    // A soup to begin.
    for (q = 0; q < N * M; q++) if (Math.random() < 0.24) life.a[q] = 1 + G.irand(8);

    inst = {
      caption: '',
      state: function (k, src, t) {
        mix(t);
        fromX = new Float32Array(curX); fromY = new Float32Array(curY);
        seq = SEQ[k] || SEQ[0];
        toX = edges(seq.s, N, rx0, rx1, 0);
        toY = edges(seq.s, M, ry0, ry1, Math.floor(seq.s.length / 2));
        tc = t;
        seed(t);
        inst.caption = 'B3/S23 · ' + seq.cap;
      },
      frame: function (t, dt) {
        var sp = env.speed || 1, i, j;
        mix(t);
        if (t - last > 140 / sp) {
          last = t; life.step(); shelter();
          if ((life.alive || 0) < 14 && t - lastSeed > 1500) {
            life.stamp(G.pick([G.PAT.acorn, G.PAT.rpent]), 2 + G.irand(N - 8), 2 + G.irand(M - 6), G.code(G.other(env)), G.irand(4));
            lastSeed = t;
          }
        }
        // The lattice itself, so its proportions read before anything lives.
        var ctx = env.ctx;
        ctx.save(); ctx.strokeStyle = env.st.on; ctx.globalAlpha = 0.14; ctx.lineWidth = 1; ctx.beginPath();
        for (i = 0; i <= N; i++) { ctx.moveTo(Math.round(curX[i]) + 0.5, ry0); ctx.lineTo(Math.round(curX[i]) + 0.5, ry1); }
        for (j = 0; j <= M; j++) { ctx.moveTo(rx0, Math.round(curY[j]) + 0.5); ctx.lineTo(rx1, Math.round(curY[j]) + 0.5); }
        ctx.stroke(); ctx.restore();
        var a = life.a;
        for (j = 0; j < M; j++) for (i = 0; i < N; i++) {
          var v = a[j * N + i];
          if (!v) continue;
          var c = G.pig(v);
          if (!c) continue;
          var x = curX[i], y = curY[j], w = curX[i + 1] - x, h = curY[j + 1] - y, ins = Math.min(2, w / 6, h / 6);
          G.block(env, x + ins, y + ins, w - 2 * ins, h - 2 * ins, c, life.age[j * N + i] > 4 ? 1 : 0.7);
        }
        for (i = fliers.length - 1; i >= 0; i--) {
          var fl = fliers[i];
          if (t < fl.t0) continue;
          var f = G.place((t - fl.t0) / (560 / sp));
          if (f >= 1) { fliers.splice(i, 1); continue; }
          G.fly(env, fl.r, env.src >= 0 && env.src < 9 ? env.src : 4, f);
        }
        // Each column labelled with its term; a row scale on desktop.
        var p = G.clamp((t - tc) / (1100 / sp));
        if (p > 0.6) {
          for (i = 0; i < N && i < seq.s.length * 2; i++) {
            if (curX[i + 1] - curX[i] < 14) continue;
            G.text(env, (curX[i] + curX[i + 1]) / 2, ry0 - 12, seq.l[i % seq.l.length], 'center', true);
          }
          if (!phone) {
            var off = Math.floor(seq.s.length / 2);
            for (j = 0; j < M && j < seq.s.length * 2; j++) {
              if (curY[j + 1] - curY[j] < 12) continue;
              G.text(env, rx1 + 8, (curY[j] + curY[j + 1]) / 2, seq.l[(j + off) % seq.l.length], 'left', true);
            }
          }
        }
        var n0 = Math.min(N, seq.s.length);
        G.dim(env, 'h', curX[0], curX[n0], ry1 + 12, n0 > 1 ? seq.cap.split(' · ')[0] : '1', p);
      }
    };
    return inst;
  }
});

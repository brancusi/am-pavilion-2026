// 01 Life: one rule per pigment. The source tile releases patterns; the
// text column and the mark keep them as outlines.
Grounds.register({
  id: 'life',
  create: function (env) {
    var G = Grounds;
    var RULES = ['B3/S23', 'B36/S23', 'B3678/S34678', 'B2/S', 'B3/S12345', 'B3/S45678', 'B368/S245'];
    var NAMES = ['Conway', 'HighLife', 'Day & Night', 'Seeds', 'Maze', 'Coral', 'Morley'];
    var C = env.phone ? 26 : 40, cols = Math.ceil(env.W / C), rows = Math.ceil(env.H / C);
    var life = new G.Life(cols, rows, RULES[0]), last = 0, lastSeed = 0, self;
    for (var n = 0; n < cols * rows * 0.16; n++) life.set(G.irand(cols), G.irand(rows), G.code(G.other(env)));

    function release(src) {
      var t = G.tile(env, src), i = Math.floor((t.x + t.s / 2) / C), j = Math.floor((t.y + t.s / 2) / C);
      var pats = ['glider', 'rpent', 'acorn', 'lwss'];
      for (var q = 0; q < 4; q++) life.stamp(G.PAT[pats[q]], i + (q & 1 ? 3 : -5), j + (q & 2 ? 3 : -5), G.code(G.other(env)), q);
    }
    self = {
      caption: '',
      state: function (k, src) {
        life.setRule(RULES[k] || RULES[0]);
        self.caption = NAMES[k] + ' · ' + RULES[k];
        release(src);
      },
      frame: function (t) {
        var ctx = env.ctx, step = 120 / env.speed;
        if (t - last > step) {
          last = t;
          var alive = life.step();
          if (alive < cols * rows * 0.05 || t - lastSeed > 2400) {
            lastSeed = t;
            life.stamp(G.PAT[G.pick(['glider', 'rpent', 'acorn'])], G.irand(cols), G.irand(rows), G.code(G.other(env)), G.irand(4));
          }
          // Seeds and Day & Night can fill the field; thin them back out.
          if (alive > cols * rows * 0.55) for (var z = 0; z < cols * rows * 0.3; z++) life.set(G.irand(cols), G.irand(rows), 0);
        }
        var f = G.clamp((t - last) / 90);
        for (var j = 0; j < rows; j++) for (var i = 0; i < cols; i++) {
          var v = life.a[j * cols + i];
          if (!v) continue;
          var x = i * C, y = j * C, c = G.pig(v), young = life.age[j * cols + i] === 0;
          var ins = young ? 2 + (1 - f) * C * 0.3 : 2;
          // The words and the mark keep a clear margin; cells there live on
          // unseen.
          if (!G.sheltered(env, x + C / 2, y + C / 2, C)) G.block(env, x + ins, y + ins, C - 2 * ins, C - 2 * ins, c);
        }
      }
    };
    return self;
  }
});

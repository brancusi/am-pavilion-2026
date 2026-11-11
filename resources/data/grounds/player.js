// Living grounds player for the Unit chapter (#unit on the home page).
//
// Loaded on demand by amp.pages.landing.page/unit-chapter. Only the
// manifest below ships with it; the engine and each ground's code are
// fetched when needed (the next ground while the current one plays).
//
// The chapter's CSS animation (ap-ground) stays the clock: the ground's
// colour is read from it, and hovering a letter (data-ground on the
// section) holds that letter's pigment and makes its tile the source.
//
// ?ground=<id or number> plays only that ground (for review).
(function () {
  if (window.GroundsPlayer) return;
  var base = (document.currentScript && document.currentScript.src || '/data/grounds/player.js').replace(/[^/]*$/, '');
  var v = (/[?&]v=([^&]*)/.exec(document.currentScript && document.currentScript.src || '') || [])[1];
  var q = v ? '?v=' + v : '';

  var MANIFEST = [
    { id: 'life', file: '01-life.js', title: 'Life', by: 'Aram', idea: 'Each pigment lives by its own law; the ground decides which law holds.' },
    { id: 'accretion', file: '02-accretion.js', title: 'Accretion', by: 'Tony', idea: 'Nothing is placed. Everything arrives, and sticks where it first touches.' },
    { id: 'assembly', file: '03-assembly.js', title: 'Assembly', by: 'Zadik', idea: 'Units fly out of the mark, build the work, and fly home again.' },
    { id: 'axonometric', file: '04-axonometric.js', title: 'Axonometric', by: 'Tony', idea: 'The same stacks, set down in three dimensions and turned so you walk around them.' },
    { id: 'proportion', file: '05-proportion.js', title: 'Proportion', by: 'Aram', idea: 'The logo is the 13-square; every block is measured against it.' },
    { id: 'still-lifes', file: '06-still-lifes.js', title: 'Still lifes', by: 'Aram', idea: 'Life runs until a pattern stops changing. What stops is solid, and gets measured.' },
    { id: 'fibonacci-life', file: '07-fibonacci-life.js', title: 'Fibonacci Life', by: 'Tony', idea: 'One rule on a grid of 1, 1, 2, 3, 5, 8: cells of different dimension, one law.' },
    { id: 'generations', file: '08-generations.js', title: 'Generations', by: 'Aram', idea: 'Each generation of Life is a layer; time is stacked into a tower.' },
    { id: 'seven-steps', file: '09-seven-steps.js', title: 'Seven Steps', by: 'Zadik', idea: 'Seven columns rise one unit at a time, measured from one to seven.' },
    { id: 'big-red', file: '10-big-red.js', title: 'Big Red', by: 'Zadik', idea: 'The 8 : 3 slab is laid down whole, then cut into its units.' },
    { id: 'interlock', file: '11-interlock.js', title: 'Interlock', by: 'Zadik', idea: 'Each layer turns a quarter on the one below, so the stack holds itself.' },
    { id: 'phi-city', file: '12-phi-city.js', title: 'φ City', by: 'Tony', idea: 'Golden rectangles become plots, and each rises to a Fibonacci height.' },
    { id: 'root-rectangles', file: '13-root-rectangles.js', title: 'Root rectangles', by: 'Tony', idea: 'From a square, swing the diagonal: √2, √3, √5, drawn with the compass.' },
    { id: 'intervals', file: '14-intervals.js', title: 'Intervals', by: 'Aram', idea: 'Blocks stack to musical ratios: octave, fifth, fourth, third.' },
    { id: 'phyllotaxis', file: '15-phyllotaxis.js', title: 'Phyllotaxis', by: 'Tony', idea: 'Blocks leave the source at the golden angle, 137.5°, like seeds in a sunflower.' },
    { id: 'turmite', file: '16-turmite.js', title: 'Turmite', by: 'Aram', idea: 'One ant, a few rules, one block at a time: order arrives unannounced.' },
    { id: 'sandpile', file: '17-sandpile.js', title: 'Sandpile', by: 'Zadik', idea: 'Blocks pile onto one spot; at four, a pile topples onto its neighbours.' },
    { id: 'cyclic', file: '18-cyclic.js', title: 'Cyclic', by: 'Aram', idea: 'Each pigment consumes the one before it, and seven colours turn into spirals.' },
    { id: 'division', file: '19-division.js', title: 'Division', by: 'Tony', idea: 'The field is cut like a sheet of plywood, by ratios, until the pieces are units.' },
    { id: 'flock', file: '20-flock.js', title: 'Flock', by: 'Aram', idea: 'Blocks flock like starlings over the lagoon, then settle into the mark.' }
  ];

  var loaded = {};
  function script(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = resolve;
      s.onerror = function () { delete loaded[src]; reject(new Error('load ' + src)); };
      document.head.appendChild(s);
    });
    return loaded[src];
  }
  function engine() { return script(base + 'engine.js' + q); }
  function piece(e) {
    return engine().then(function () {
      var G = window.Grounds;
      if (G.pieces[e.id]) return G.pieces[e.id];
      return script(base + e.file + q).then(function () {
        if (!G.pieces[e.id]) throw new Error('not registered: ' + e.id);
        return G.pieces[e.id];
      });
    });
  }

  function Player(section) {
    this.section = section;
    this.canvas = section.querySelector('.ap-ground-canvas');
    this.credit = section.querySelector('[data-ground-ui]');
    this.played = []; this.hover = null; this.vt = 0; this.visible = false; this.dead = false;
    var m = /[?&]ground=([^&#]*)/.exec(location.search), only = m && decodeURIComponent(m[1]);
    if (only) {
      for (var i = 0; i < MANIFEST.length; i++) if (MANIFEST[i].id === only || String(i + 1) === only.replace(/^0+/, '')) this.only = i;
    }
  }
  Player.prototype.start = function () {
    var self = this;
    engine().then(function () {
      if (self.dead) return;
      var G = self.G = window.Grounds;
      // Use the site's own pigments, so blocks match the ground exactly.
      var css = getComputedStyle(document.documentElement), map = { ink: '--night' }, onOf = { brick: '--on-yellow', ink: '--on-night' };
      G.STATES.forEach(function (st) {
        var g = css.getPropertyValue(map[st.k] || '--' + st.k).trim(), on = css.getPropertyValue(onOf[st.k] || '--on-' + st.k).trim();
        if (/^#[0-9a-f]{6}$/i.test(g)) { st.g = g; G.HEX[st.k] = g; }
        if (/^#[0-9a-f]{6}$/i.test(on)) st.on = on;
      });
      self.controls();
      self.layout();
      self.cells = Array.prototype.slice.call(self.section.querySelectorAll('.ap-markflat__cell, .ap-mark3d__cell'));
      self.cells.forEach(function (c, i) {
        c.addEventListener('pointerenter', self.onEnter = self.onEnter || function (e) { if (e.pointerType === 'mouse') self.hover = self.cells.indexOf(e.currentTarget); });
      });
      self.io = new IntersectionObserver(function (es) { self.visible = es[es.length - 1].isIntersecting; if (self.visible) self.kick(); }, { rootMargin: '100px' });
      self.io.observe(self.section);
      self.ro = new ResizeObserver(function () { clearTimeout(self.rt); self.rt = setTimeout(function () { self.layout(); self.remount(); }, 150); });
      self.ro.observe(self.section);
      self.next();
    }).catch(function (e) { console.warn('grounds', e); });
  };
  // Pause, next, and the picker. Picking a ground holds it (and puts it in
  // the address bar to share); next goes back to playing at random.
  Player.prototype.controls = function () {
    var self = this, ui = this.credit;
    if (!ui) return;
    this.ac = new AbortController();
    var on = { signal: this.ac.signal };
    this.pause = ui.querySelector('[data-ground-pause]');
    this.combo(ui, on);
    var next = ui.querySelector('[data-ground-next]');
    if (next) next.addEventListener('click', function () {
      self.only = null; self.queued = null; self.share(null); self.next();
    }, on);
    if (this.pause) this.pause.addEventListener('click', function () { self.setPaused(!self.paused); }, on);
  };
  // The picker: a select-only combobox (WAI-ARIA APG). Focus stays on the
  // combobox; the active option is aria-activedescendant.
  Player.prototype.combo = function (ui, on) {
    var self = this, box = ui.querySelector('[data-ground-pick]'), list = ui.querySelector('[data-ground-list]');
    if (!box || !list) return;
    this.box = box; this.list = list; this.value = ui.querySelector('[data-ground-value]');
    if (!list.children.length) MANIFEST.forEach(function (e, i) {
      var li = document.createElement('li');
      li.id = 'ground-opt-' + i; li.setAttribute('role', 'option'); li.setAttribute('aria-selected', 'false');
      li.className = 'ap-ground-ui__opt'; li.dataset.i = i;
      [String(i + 1).padStart(2, '0'), e.title, e.by].forEach(function (t) { var sp = document.createElement('span'); sp.textContent = t; li.appendChild(sp); });
      li.setAttribute('aria-label', e.title + ', ' + e.by);
      list.appendChild(li);
    });
    var opts = Array.prototype.slice.call(list.children), active = -1, typed = '', typedAt = 0;
    var isOpen = function () { return !list.hidden; };
    var activate = function (i) {
      i = Math.max(0, Math.min(opts.length - 1, i));
      if (active >= 0 && opts[active]) opts[active].removeAttribute('data-active');
      active = i; opts[i].setAttribute('data-active', '');
      box.setAttribute('aria-activedescendant', opts[i].id);
      var o = opts[i], top = o.offsetTop, bottom = top + o.offsetHeight;
      if (top < list.scrollTop) list.scrollTop = top - 8;
      else if (bottom > list.scrollTop + list.clientHeight) list.scrollTop = bottom - list.clientHeight + 8;
    };
    var open = function (i) {
      if (!isOpen()) { list.hidden = false; box.setAttribute('aria-expanded', 'true'); }
      activate(i == null ? (self.cur != null ? self.cur : 0) : i);
    };
    var close = function () {
      if (!isOpen()) return;
      list.hidden = true; box.setAttribute('aria-expanded', 'false'); box.removeAttribute('aria-activedescendant');
      if (active >= 0 && opts[active]) opts[active].removeAttribute('data-active');
      active = -1;
    };
    var choose = function (i) {
      close();
      if (i === self.cur && self.only === i) return;
      self.only = i; self.queued = null; self.share(MANIFEST[i].id); self.next();
    };
    var page = Math.max(1, Math.floor((list.clientHeight || 400) / 40));
    box.addEventListener('click', function () { isOpen() ? close() : open(); }, on);
    box.addEventListener('keydown', function (e) {
      var k = e.key, o = isOpen();
      if (k === 'ArrowDown' || k === 'ArrowUp') { e.preventDefault(); if (!o || e.altKey) { o ? close() : open(); return; } activate(active + (k === 'ArrowDown' ? 1 : -1)); }
      else if (k === 'Home' || k === 'End') { e.preventDefault(); open(k === 'Home' ? 0 : opts.length - 1); }
      else if (k === 'PageDown' || k === 'PageUp') { e.preventDefault(); open(); activate(active + (k === 'PageDown' ? page : -page)); }
      else if (k === 'Enter' || k === ' ') { e.preventDefault(); o ? choose(active) : open(); }
      else if (k === 'Escape') { if (o) { e.preventDefault(); close(); } }
      else if (k === 'Tab') { close(); }
      else if (k.length === 1 && /\S/.test(k)) {
        // Type a number or the start of a title.
        var now = Date.now(); typed = (now - typedAt > 700 ? '' : typed) + k.toLowerCase(); typedAt = now;
        for (var n = 0; n < MANIFEST.length; n++) {
          var num = String(n + 1).padStart(2, '0');
          if (num.indexOf(typed) === 0 || String(n + 1) === typed || MANIFEST[n].title.toLowerCase().indexOf(typed) === 0) { open(n); break; }
        }
      }
    }, on);
    // Keep focus on the combobox while choosing with the pointer.
    list.addEventListener('pointerdown', function (e) { e.preventDefault(); }, on);
    list.addEventListener('pointermove', function (e) { var li = e.target.closest('li'); if (li) activate(+li.dataset.i); }, on);
    list.addEventListener('click', function (e) { var li = e.target.closest('li'); if (li) choose(+li.dataset.i); }, on);
    box.addEventListener('blur', close, on);
    document.addEventListener('pointerdown', function (e) { if (!ui.contains(e.target)) close(); }, on);
  };
  Player.prototype.showPick = function (i) {
    if (!this.list) return;
    Array.prototype.forEach.call(this.list.children, function (li, n) { li.setAttribute('aria-selected', String(n === i)); });
    var e = MANIFEST[i];
    if (this.value) this.value.textContent = String(i + 1).padStart(2, '0') + ' · ' + e.title + ' · ' + e.by;
  };
  Player.prototype.share = function (id) {
    var url = new URL(location.href);
    if (id) url.searchParams.set('ground', id); else url.searchParams.delete('ground');
    history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  };
  Player.prototype.setPaused = function (p) {
    this.paused = p;
    this.section.toggleAttribute('data-paused', p);
    if (this.pause) { this.pause.textContent = p ? (this.pause.dataset.play || 'Play') : (this.pause.dataset.pause || 'Pause'); this.pause.setAttribute('aria-pressed', String(p)); }
  };
  Player.prototype.stop = function () {
    this.dead = true; cancelAnimationFrame(this.raf);
    if (this.ac) this.ac.abort();
    this.section.removeAttribute('data-grounds');
    this.section.removeAttribute('data-paused');
    if (this.io) this.io.disconnect();
    if (this.ro) this.ro.disconnect();
    var self = this;
    (this.cells || []).forEach(function (c) { c.removeEventListener('pointerenter', self.onEnter); });
  };
  Player.prototype.rect = function (el) {
    var s = this.section.getBoundingClientRect(), r = el.getBoundingClientRect();
    return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height };
  };
  Player.prototype.layout = function () {
    var sec = this.section, W = sec.clientWidth, H = sec.clientHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
    this.canvas.width = Math.round(W * dpr); this.canvas.height = Math.round(H * dpr);
    var ctx = this.canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var mk = sec.querySelector('.ap-markflat, .ap-mark3d') || sec.querySelector('.ap-ch-mark'), mr = this.rect(mk);
    // The text's own extent (not its column): numeral, word, line and note.
    var s0 = sec.getBoundingClientRect(), x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, range = document.createRange();
    Array.prototype.forEach.call(sec.querySelectorAll('.ap-ch-grid > div:first-child > :not(:first-child)'), function (el) {
      // Text nodes, not elements: the word layers are full-width blocks.
      var walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), n;
      while ((n = walk.nextNode())) {
        if (!n.nodeValue.trim()) continue;
        range.selectNodeContents(n);
        var r = range.getBoundingClientRect();
        if (!r.width) continue;
        x0 = Math.min(x0, r.left - s0.left); y0 = Math.min(y0, r.top - s0.top); x1 = Math.max(x1, r.right - s0.left); y1 = Math.max(y1, r.bottom - s0.top);
      }
    });
    var tr = x1 > x0 ? { x: x0, y: y0, w: x1 - x0, h: y1 - y0 } : { x: 0, y: 0, w: 0, h: 0 };
    // The 3D mark: tiles are 31.782% of its side, 34.109% apart.
    var s = mr.w, tile = s * 0.31782, gap = s * (0.34109 - 0.31782);
    // Stacked layout (mark under the text): build in the band below the
    // mark. Side by side: build between the text and the mark.
    // Side by side but too tight to build between (960–1279 wide): the band
    // the CSS keeps under both, laid out as if stacked.
    var phone = mr.y > tr.y + tr.h - 1, pad = phone ? 16 : 32, stage;
    if (!phone && mr.x - 32 - (tr.x + tr.w + 40) < 260) {
      phone = true;
      var top = Math.max(mr.y + s, tr.y + tr.h) + 24;
      stage = { x: tr.x, y: top, w: mr.x + s - tr.x, h: H - top - 124 };
    } else if (phone) stage = { x: pad, y: mr.y + s + 24, w: W - 2 * pad, h: H - (mr.y + s + 24) - 124 };
    else stage = { x: tr.x + tr.w + 40, y: pad, w: mr.x - 32 - (tr.x + tr.w + 40), h: H - 2 * pad };
    this.env = {
      ctx: ctx, W: W, H: H, phone: phone, speed: 1, stage: stage,
      mark: { x: mr.x, y: mr.y, s: s, tile: tile, gap: gap, u: s / 13 },
      text: tr, credit: this.credit ? this.rect(this.credit) : null, k: this.env ? this.env.k : 0, st: this.env ? this.env.st : null, src: this.env ? this.env.src : 2
    };
  };
  // The colour the ground holds now, and the tile it comes from.
  Player.prototype.clock = function () {
    var G = this.G, held = this.section.hasAttribute('data-ground');
    if (held && this.hover != null) {
      var key = G.TILES[this.hover][0];
      return { k: G.stateOf(key), src: this.hover, held: true };
    }
    var a = this.anim;
    if (!a || a.playState === 'idle') {
      a = this.anim = (this.section.getAnimations ? this.section.getAnimations() : []).filter(function (x) { return x.animationName === 'ap-ground'; })[0];
    }
    if (!a || a.currentTime == null) return null;
    var dur = Number(a.effect.getTiming().duration) || 21000, step = dur / 7;
    // Each colour holds for the first 55% of its slot, then blends into the
    // next (the ap-ground keyframes); switch at the middle of that blend.
    var k = Math.floor(((a.currentTime + step * 0.225) % dur) / step) % 7;
    // Red and blue have two tiles; alternate between them.
    var key2 = G.STATES[k].k, tiles = [];
    for (var i = 0; i < G.TILES.length; i++) if (G.TILES[i][0] === key2) tiles.push(i);
    var lap = Math.floor((a.currentTime + step * 0.225) / dur);
    return { k: k, src: tiles[lap % tiles.length], held: false };
  };
  Player.prototype.choose = function () {
    if (this.only != null) return this.only;
    var recent = this.played.slice(-6), pool = [];
    for (var i = 0; i < MANIFEST.length; i++) if (recent.indexOf(i) < 0) pool.push(i);
    return pool[(Math.random() * pool.length) | 0];
  };
  Player.prototype.next = function () {
    var self = this, i = this.queued != null ? this.queued : this.choose(), token = (this.token = (this.token || 0) + 1);
    this.queued = null;
    piece(MANIFEST[i]).then(function (p) {
      if (self.dead || token !== self.token) return;
      var swap = function () { if (!self.dead && token === self.token) self.mount(i, p); };
      if (self.inst) { self.canvas.style.opacity = 0; setTimeout(swap, 500); } else swap();
    }).catch(function (e) {
      console.warn('grounds', MANIFEST[i].id, e);
      self.played.push(i);
      if (self.only == null) setTimeout(function () { self.next(); }, 300);
    });
  };
  Player.prototype.mount = function (i, p) {
    var self = this, c = this.clock() || { k: 0, src: 2 };
    this.cur = i; this.piece = p; this.played.push(i);
    this.left = 2 + Math.floor(Math.random() * 5);
    if (this.only == null) {
      this.queued = this.choose();
      piece(MANIFEST[this.queued]).catch(function () { self.queued = null; });
    }
    var e = MANIFEST[i];
    if (this.credit) {
      this.showPick(i);
      this.credit.querySelector('[data-ground-idea]').textContent = e.idea;
      this.section.setAttribute('data-grounds', '');
      this.env.credit = this.rect(this.credit);
    }
    if (!this.create(c)) return;
    this.canvas.style.opacity = 1;
    this.kick();
  };
  Player.prototype.create = function (c) {
    var env = this.env;
    env.k = c.k; env.st = this.G.STATES[c.k]; env.src = c.src;
    this.last = c; this.hollow(c.k);
    try {
      this.inst = this.piece.create(env);
      this.inst.state(c.k, c.src, this.vt);
      return true;
    } catch (err) {
      console.warn('grounds', MANIFEST[this.cur].id, err);
      this.inst = null;
      if (this.only == null) this.next();
      return false;
    }
  };
  Player.prototype.remount = function () { if (this.piece) this.create(this.clock() || this.last || { k: 0, src: 2 }); };
  Player.prototype.kick = function () {
    var self = this;
    if (this.running || this.dead) return;
    this.running = true; this.wall = performance.now();
    var loop = function (now) {
      if (self.dead || !self.visible) { self.running = false; return; }
      self.frame(now);
      self.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  };
  Player.prototype.frame = function (now) {
    var dt = Math.min(64, now - this.wall), env = this.env;
    this.wall = now;
    if (this.paused) return;
    this.vt += dt;
    if (!this.inst) return;
    var c = this.clock();
    if (c && (c.k !== this.last.k || c.src !== this.last.src)) {
      var auto = !c.held && !this.last.held;
      this.last = c;
      env.k = c.k; env.st = this.G.STATES[c.k]; env.src = c.src;
      this.hollow(c.k);
      if (auto && this.only == null && --this.left <= 0) { this.next(); }
      try { this.inst.state(c.k, c.src, this.vt); } catch (err) { this.fail(err); return; }
    }
    env.ctx.clearRect(0, 0, env.W, env.H);
    try { this.inst.frame(this.vt, dt); } catch (err) { this.fail(err); return; }
    var g = this.guide;
    if (c && c.held && (!g || g.i !== c.src || g.off)) this.guide = { i: c.src, t: this.vt };
    else if (g && !g.off && !(c && c.held)) g.off = this.vt;
    this.guides();
  };
  // The tiles whose colour is the ground's show only their outline.
  Player.prototype.hollow = function (k) {
    var key = this.G.STATES[k].k;
    (this.cells || []).forEach(function (c) { c.toggleAttribute('data-hollow', c.getAttribute('data-pigment') === key || (key === 'ink' && c.getAttribute('data-pigment') === 'ink')); });
  };
  // Hovering a tile: drafting guides run out from its edges, and it is
  // measured above the mark.
  Player.prototype.guides = function () {
    var g = this.guide;
    if (!g) return;
    var env = this.env, G = this.G, ctx = env.ctx;
    var a = g.off ? 1 - (this.vt - g.off) / 300 : (this.vt - g.t) / 500;
    if (a <= 0) { if (g.off) this.guide = null; return; }
    a = Math.min(1, a);
    var e = G.place(a), t = G.tile(env, g.i), x0 = t.x, y0 = t.y, x1 = t.x + t.s, y1 = t.y + t.s, m = env.mark;
    var left = env.phone ? 0 : env.text.x + env.text.w + 24;
    ctx.save();
    ctx.strokeStyle = env.st.on; ctx.lineWidth = 1; ctx.globalAlpha = 0.5 * a; ctx.setLineDash([2, 5]);
    ctx.beginPath();
    [y0, y1].forEach(function (y) { ctx.moveTo(x0, y); ctx.lineTo(x0 - (x0 - left) * e, y); ctx.moveTo(x1, y); ctx.lineTo(x1 + (env.W - x1) * e, y); });
    [x0, x1].forEach(function (x) { ctx.moveTo(x, y0); ctx.lineTo(x, y0 - y0 * e); ctx.moveTo(x, y1); ctx.lineTo(x, y1 + (env.H - y1) * e); });
    ctx.stroke();
    ctx.restore();
    ctx.globalAlpha = a;
    var key = G.TILES[g.i][0], word = G.STATES[G.stateOf(key)].w;
    G.dim(env, 'h', x0, x1, m.y - 18, '1 : 1', e);
    if (!env.phone) G.dim(env, 'v', y0, y1, m.x - 18, '1', e);
    if (a > 0.6) G.text(env, x0, m.y - 42, (G.TILES[g.i][1] + ' · ' + key + ' · ' + word).toUpperCase(), 'left', true);
    ctx.globalAlpha = 1;
  };
  Player.prototype.fail = function (err) {
    console.warn('grounds', MANIFEST[this.cur] && MANIFEST[this.cur].id, err);
    this.inst = null;
    if (this.only == null) this.next();
  };

  var players = [];
  window.GroundsPlayer = {
    manifest: MANIFEST,
    start: function (section) {
      if (!section || !section.querySelector('.ap-ground-canvas')) return;
      var p = new Player(section);
      players.push(p); p.start();
    },
    stop: function (section) {
      players = players.filter(function (p) { if (p.section === section) { p.stop(); return false; } return true; });
    }
  };
})();

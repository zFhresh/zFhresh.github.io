(function () {
  'use strict';

  /* ── SVG icon library ─────────────────────────────── */
  var ICONS = {
    runner:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM9.5 8.5l2-1.5 3 1.5 2 3.5-2 1-1.5-2-1 5 3 4-1.5 1.5L9 17l-1 4-2-.5 1.5-6 3-3-.5-2-2 1.5-1-2 2.5-1.5z"/></svg>',
    neon:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h2M11 10h2M15 10h2M7 14h10"/></svg>',
    sun:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
    dice:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="15" r="1" fill="currentColor"/><circle cx="15" cy="15" r="1" fill="currentColor"/></svg>',
    particles: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="6" r="1.6"/><circle cx="12" cy="4" r="1"/><circle cx="18" cy="7" r="1.4"/><circle cx="4" cy="14" r="1"/><circle cx="10" cy="12" r="2"/><circle cx="17" cy="15" r="1.2"/><circle cx="8" cy="19" r="1"/><circle cx="15" cy="20" r="1.4"/></svg>',
    ui:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 13h6M7 16h8"/></svg>',
    shader:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><path d="M4 12a8 8 0 0 1 16 0M12 4v16M8 5.5c2 3 2 10 0 13M16 5.5c-2 3-2 10 0 13"/></svg>',
    cube:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2 3 7l9 5 9-5-9-5z"/><path d="m3 7 0 10 9 5 9-5V7"/><path d="M12 12v10"/></svg>',
    gear:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    target:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>'
  };

  function icon(name) { return ICONS[name] || ICONS.cube; }

  /* ── Render helpers ───────────────────────────────── */
  function renderHeader() {
    var m = SITE_DATA.meta;
    var nProj  = SITE_DATA.projects.filter(function(p){ return p.kind !== 'asset'; }).length;
    var nAsset = SITE_DATA.projects.filter(function(p){ return p.kind === 'asset'; }).length;
    return '<header class="hdr">' +
      '<div>' +
        '<div class="hdr-brand">' +
          '<div class="hdr-logo"><img src="assets/logo.png" alt="' + m.name + ' logo" /></div>' +
          '<div>' +
            '<h1 class="hdr-title">' + esc(m.name) + '</h1>' +
            '<div class="hdr-sub">' + esc(m.subtitle) + '</div>' +
          '</div>' +
        '</div>' +
        '<nav class="hdr-nav">' +
          '<a href="#home">Homepage</a><span class="sep">\xB7</span>' +
          '<a href="#catalogue">Catalogue</a><span class="sep">\xB7</span>' +
          '<a href="#contact">Contact</a>' +
        '</nav>' +
      '</div>' +
      '<div class="hdr-meta">' +
        '<div class="hdr-status"><span class="dot"></span>' + esc(m.status) + '</div>' +
        '<div class="hdr-counts">' +
          '<span><b>' + nProj + '</b> Games</span>' +
          '<span class="dotsep">\xB7</span>' +
          '<span><b>' + nAsset + '</b> Assets</span>' +
        '</div>' +
      '</div>' +
    '</header>';
  }

  function renderBadges() {
    var html = '<div class="badges">';
    SITE_DATA.badges.forEach(function (b) {
      html += '<span class="badge' + (b.hot ? ' hot' : '') + '">' +
        '<span class="b-dot"></span>' + esc(b.label) + '</span>';
    });
    return html + '</div>';
  }

  function renderBlurb() {
    var html = '<div class="blurb" id="home">';
    SITE_DATA.blurb.forEach(function (p) { html += '<p>' + p + '</p>'; });
    return html + '</div>';
  }

  function renderContact() {
    var html = '<div class="contact-compact" id="contact"><div class="socials">';
    SITE_DATA.contact.forEach(function (c) {
      html += '<a href="' + esc(c.href) + '" target="_blank" rel="noopener">' +
        '<span class="ic">' + c.icon + '</span>' + esc(c.label) + '</a>';
    });
    return html + '</div></div>';
  }

  function renderCatalogue() {
    var featured = null;
    SITE_DATA.projects.forEach(function (p) { if (p.featured) featured = p; });
    if (!featured) featured = SITE_DATA.projects[0];

    /* featured + thumbs wrap */
    var thumbs = '';
    SITE_DATA.projects.concat(
      SITE_DATA.assets.map(function (a) {
        return { id: 'a-' + a.id, kind: 'asset', icon: a.icon, title: a.name };
      })
    ).filter(function (p) { return p.id !== featured.id; })
     .slice(0, 6)
     .forEach(function (p) {
       thumbs += '<div class="thumb" title="' + esc(p.title) + '">' +
         '<div class="thumb-art">' + icon(p.icon) + '</div>' +
         '<div class="thumb-kind">' + esc(p.kind) + '</div>' +
         '<div class="thumb-label">' + esc(p.title) + '</div>' +
       '</div>';
     });

    var crtWrap = '<div class="catalogue catalogue-wrap" id="catalogue-wrap">' +
      '<div class="featured">' +
        '<div class="featured-tag">Featured</div>' +
        '<div class="featured-tag note">press play \u21AF</div>' +
        '<div class="crt">' +
          '<div class="crt-glow"></div>' +
          '<div class="crt-screen">' +
            '<div class="crt-noise"></div>' +
            '<div class="crt-content">' +
              '<div class="ttl">' + esc(featured.title) + '</div>' +
              '<div class="sub">' + esc(featured.tagline) + '</div>' +
              '<div class="play">\u25B6 PLAY DEMO</div>' +
            '</div>' +
          '</div>' +
          '<div class="crt-base"></div>' +
          '<div class="crt-footer"><span>s.p.1.1.1</span><span>24 Apr 2026</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="thumbs">' + thumbs + '</div>' +
    '</div>';

    /* project cards */
    var cards = '';
    SITE_DATA.projects.forEach(function (p) {
      var tag   = p.url ? 'a' : 'div';
      var attrs = p.url ? ' href="' + esc(p.url) + '" target="_blank" rel="noopener"' : '';
      var art   = p.image
        ? '<img class="card-img" src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy" />'
        : icon(p.icon);
      cards += '<' + tag + ' class="card"' + attrs + '>' +
        '<div class="card-art">' +
          art +
          '<div class="card-kind">' + esc(p.kind) + '</div>' +
          '<div class="card-status' + (p.status === 'wip' ? ' wip' : '') + '">' + esc(p.status) + '</div>' +
        '</div>' +
        '<div class="card-body">' +
          '<h3 class="card-title">' + esc(p.title) + '</h3>' +
          '<p class="card-desc">' + esc(p.tagline) + '</p>' +
        '</div>' +
      '</' + tag + '>';
    });

    return '<section class="section" id="catalogue">' +
      '<div class="section-head">' +
        '<h2>Catalogue</h2>' +
        '<a class="more" href="#">view all \u2192</a>' +
      '</div>' +
      crtWrap +
      '<div class="cat-grid">' + cards + '</div>' +
    '</section>';
  }

  function renderAssets() {
    if (!SITE_DATA.assets || SITE_DATA.assets.length === 0) return '';
    var html = '<section class="section" id="assets">' +
      '<div class="section-head">' +
        '<h2>Unity Asset Store</h2>' +
        '<span class="h-meta">' + SITE_DATA.assets.length + ' published</span>' +
      '</div>' +
      '<div class="assets-grid">';
    SITE_DATA.assets.forEach(function (a) {
      var tag   = a.url ? 'a' : 'div';
      var attrs = a.url ? ' href="' + esc(a.url) + '" target="_blank" rel="noopener"' : '';
      var art   = a.image
        ? '<img class="asset-img" src="' + esc(a.image) + '" alt="' + esc(a.name) + '" loading="lazy" />'
        : icon(a.icon);
      html += '<' + tag + ' class="asset-card"' + attrs + '>' +
        '<div class="asset-art">' +
          '<span class="asset-badge"><span class="u-dot">U</span>Unity Asset</span>' +
          art +
        '</div>' +
        '<h4 class="asset-name">' + esc(a.name) + '</h4>' +
      '</' + tag + '>';
    });
    return html + '</div></section>';
  }

  function renderFooter() {
    var m = SITE_DATA.meta;
    return '<footer class="ftr">' +
      '<span>' + esc(m.footer) + '</span>' +
      '<span>' + esc(m.version) + ' \xB7 last built ' + esc(m.lastBuilt) + '</span>' +
    '</footer>';
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Render all ───────────────────────────────────── */
  function render() {
    document.getElementById('shell').innerHTML =
      renderHeader() +
      renderBadges() +
      renderBlurb() +
      renderContact() +
      renderCatalogue() +
      renderAssets() +
      renderFooter();

    /* smooth scroll */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var t = document.querySelector(this.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
      });
    });
  }

  /* ── Tweaks panel ─────────────────────────────────── */
  var tweakState = { layout: 'classic', accentHue: 236, accentChroma: 0.12, showFeatured: false };

  function applyTweaks() {
    var h = tweakState.accentHue, c = tweakState.accentChroma;
    var r = document.documentElement;
    r.style.setProperty('--accent',     'oklch(0.64 ' + c + ' ' + h + ')');
    r.style.setProperty('--accent-s',   'oklch(0.92 ' + (c * 0.5) + ' ' + h + ')');
    r.style.setProperty('--accent-ink', 'oklch(0.38 ' + (c * 0.9) + ' ' + h + ')');
    document.body.classList.remove('v-classic', 'v-grid', 'v-zine');
    document.body.classList.add('v-' + tweakState.layout);
    document.body.classList.toggle('no-featured', !tweakState.showFeatured);
    document.querySelectorAll('.seg button').forEach(function (btn) {
      btn.classList.toggle('on', btn.dataset.layout === tweakState.layout);
    });
    var hl = document.getElementById('hue-label');
    var hi = document.getElementById('hue-input');
    var fc = document.getElementById('featured-check');
    if (hl) hl.textContent = tweakState.accentHue;
    if (hi) hi.value = tweakState.accentHue;
    if (fc) fc.checked = tweakState.showFeatured;
  }

  function initTweaks() {
    var btn   = document.getElementById('tweaks-btn');
    var panel = document.getElementById('tweaks-panel');
    btn.addEventListener('click', function () { panel.classList.toggle('open'); });
    document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && e.target !== btn) panel.classList.remove('open');
    });
    document.querySelectorAll('.seg button').forEach(function (b) {
      b.addEventListener('click', function () {
        tweakState.layout = this.dataset.layout; applyTweaks();
      });
    });
    document.getElementById('hue-input').addEventListener('input', function () {
      tweakState.accentHue = +this.value; applyTweaks();
    });
    document.getElementById('featured-check').addEventListener('change', function () {
      tweakState.showFeatured = this.checked; applyTweaks();
    });
    applyTweaks();
  }

  /* ── Boot ─────────────────────────────────────────── */
  render();
  initTweaks();
})();

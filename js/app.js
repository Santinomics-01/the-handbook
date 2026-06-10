/* ============================================================
   The Handbook · DeMolay — aplicación
   Estático puro: sin frameworks, sin dependencias, sin servidor.
   Contenido bilingüe en content/data.es.js y content/data.en.js
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Manifest de módulos ---------------- */
  var MODS = [
    { id: 'esencia',       icon: 'compass',   cat: 'fundamentos' },
    { id: 'historia',      icon: 'landmark',  cat: 'fundamentos' },
    { id: 'membresia',     icon: 'userPlus',  cat: 'fundamentos' },
    { id: 'capitulo',      icon: 'home',      cat: 'chapter' },
    { id: 'oficiales',     icon: 'crown',     cat: 'chapter' },
    { id: 'adultos',       icon: 'users',     cat: 'chapter' },
    { id: 'planificacion', icon: 'calendar',  cat: 'chapter' },
    { id: 'actividades',   icon: 'target',    cat: 'chapter' },
    { id: 'reclutamiento', icon: 'megaphone', cat: 'chapter' },
    { id: 'imagen',        icon: 'newspaper', cat: 'chapter' },
    { id: 'seguridad',     icon: 'shield',    cat: 'cuidado' },
    { id: 'ritual',        icon: 'flame',     cat: 'cuidado' },
    { id: 'organizacion',  icon: 'globe',     cat: 'mundo' },
    { id: 'cuerpos',       icon: 'swords',    cat: 'mundo' },
    { id: 'premios',       icon: 'award',     cat: 'mundo' },
    { id: 'fundar',        icon: 'send',      cat: 'mundo' }
  ];
  var CATS = ['fundamentos', 'chapter', 'cuidado', 'mundo'];

  var REFS = [
    { id: 'glosario',       icon: 'book' },
    { id: 'premios',        icon: 'award' },
    { id: 'cargos',         icon: 'crown' },
    { id: 'calendario',     icon: 'calendar' },
    { id: 'procedimientos', icon: 'checkCircle' },
    { id: 'datos',          icon: 'pin' }
  ];

  /* ---------------- Textos de interfaz ---------------- */
  var UI = {
    es: {
      tagline: 'DeMolay',
      navHome: 'Inicio', navLearn: 'Aprender', navRef: 'Referencia', navPractice: 'Práctica', navSearch: 'Buscar',
      heroTitle: '¡Bienvenido, hermano!',
      heroText: 'Todo lo que un DeMolay activo necesita saber: tu Capítulo, los cargos, el ritual, los premios y mucho más — claro, al grano y siempre a mano.',
      heroStart: 'Empezar a aprender', heroContinue: 'Continuar donde quedaste',
      progressOf: function (a, b) { return a + ' de ' + b + ' módulos completados'; },
      quickRef: 'Referencia rápida',
      catNames: { fundamentos: 'Fundamentos', chapter: 'Tu Capítulo', cuidado: 'Protección y ritual', mundo: 'Más allá del Capítulo' },
      learnTitle: 'Aprender', learnSub: 'Dieciséis módulos cortos. A tu ritmo, en el orden que quieras.',
      minRead: 'min de lectura', lessons: 'lecciones', questions: 'preguntas',
      completed: 'Completado', start: 'Empezar', review: 'Repasar',
      back: 'Volver', backLearn: 'Aprender',
      markDone: 'Marcar módulo como completado ✓', unmark: 'Marcar como no completado', doneMsg: '¡Módulo completado!',
      nextMod: 'Siguiente módulo',
      quizTitle: 'Ponte a prueba', quizSub: 'Ocho preguntas rápidas sobre este módulo.',
      quizQ: 'Pregunta', quizNext: 'Siguiente', quizSee: 'Ver resultado', quizRetry: 'Intentar de nuevo',
      quizDone: function (s, t) { return 'Respondiste bien ' + s + ' de ' + t; },
      quizPerfect: '¡Impecable! Dominas este módulo.',
      quizGood: 'Muy bien. Repasa lo que fallaste y quedará sólido.',
      quizMeh: 'Buen comienzo: relee el módulo y vuelve a intentarlo.',
      quizBest: 'Tu mejor puntaje',
      refTitle: 'Referencia', refSub: 'El dato exacto, cuando lo necesitás.',
      refNames: {
        glosario: 'Glosario', premios: 'Honores y premios', cargos: 'Cargos del Capítulo',
        calendario: 'Calendario DeMolay', procedimientos: 'Procedimientos', datos: 'Datos clave'
      },
      refDescs: {
        glosario: 'Todos los términos, de la A a la Z', premios: 'Qué existe y cómo se gana',
        cargos: 'Quién hace qué', calendario: 'Días Obligatorios y el año DeMolay',
        procedimientos: 'Paso a paso de lo importante', datos: 'Fees, plazos, contactos'
      },
      searchGloss: 'Buscar un término…', filterAll: 'Todos',
      eligNames: { active: 'DeMolay activos', squire: 'Escuderos', priory: 'Priorato', senior: 'Sénior DeMolay', advisor: 'Consultores', mason: 'Masones', anyone: 'Cualquier persona' },
      typeNames: { honor: 'Honor', award: 'Premio' },
      typeHint: 'Un Honor no se pide: se otorga. Un Premio se gana cumpliendo requisitos.',
      reqLabel: 'Requisitos', costLabel: 'Costo', byLabel: 'Lo otorga',
      obligDays: 'Los 7 Días Obligatorios', yearView: 'El año DeMolay, mes a mes',
      respLabel: 'Responsable',
      checklistSaved: 'Tu progreso queda guardado en este dispositivo.',
      practiceTitle: 'Práctica', practiceSub: 'Memoriza lo esencial y mídete con los quizzes.',
      decksTitle: 'Mazos de flashcards', quizzesTitle: 'Quizzes por módulo',
      cards: 'tarjetas', tapFlip: 'Toca la tarjeta para voltearla', shuffle: 'Mezclar', prev: 'Anterior', next: 'Siguiente',
      cardOf: function (a, b) { return a + ' / ' + b; },
      notTaken: 'Sin intentar',
      searchTitle: 'Buscar', searchPh: 'Busca un término, cargo, premio, regla…',
      searchHint: 'Prueba con: "balotaje", "Llave Azul", "Maestre Consejero", "Two-Deep"…',
      searchNone: 'No encontramos nada con eso. Prueba con otra palabra.',
      srModules: 'Módulos', srGlossary: 'Glosario', srAwards: 'Premios y honores', srOffices: 'Cargos', srProcs: 'Procedimientos', srFacts: 'Datos',
      loading: 'Cargando…',
      noData: 'El contenido de este idioma todavía no está disponible.',
      footer1: 'The Handbook es material educativo no oficial creado por y para DeMolays, basado en el DeMolay Handbook (16.ª edición).',
      footer2: 'DeMolay®, su Blasón y los nombres de sus programas son marcas registradas de DeMolay International. Este sitio no reemplaza al manual oficial ni a las indicaciones de tu Oficial Ejecutivo.',
      installHint: 'Funciona en cualquier navegador, también desde el celular.'
    },
    en: {
      tagline: 'DeMolay',
      navHome: 'Home', navLearn: 'Learn', navRef: 'Reference', navPractice: 'Practice', navSearch: 'Search',
      heroTitle: 'Welcome, brother!',
      heroText: 'Everything an active DeMolay needs to know: your Chapter, the offices, ritual, awards and more — clear, to the point, always at hand.',
      heroStart: 'Start learning', heroContinue: 'Pick up where you left off',
      progressOf: function (a, b) { return a + ' of ' + b + ' modules completed'; },
      quickRef: 'Quick reference',
      catNames: { fundamentos: 'Foundations', chapter: 'Your Chapter', cuidado: 'Protection & Ritual', mundo: 'Beyond the Chapter' },
      learnTitle: 'Learn', learnSub: 'Sixteen short modules. At your pace, in any order.',
      minRead: 'min read', lessons: 'lessons', questions: 'questions',
      completed: 'Completed', start: 'Start', review: 'Review',
      back: 'Back', backLearn: 'Learn',
      markDone: 'Mark module as completed ✓', unmark: 'Mark as not completed', doneMsg: 'Module completed!',
      nextMod: 'Next module',
      quizTitle: 'Test yourself', quizSub: 'Eight quick questions on this module.',
      quizQ: 'Question', quizNext: 'Next', quizSee: 'See results', quizRetry: 'Try again',
      quizDone: function (s, t) { return 'You got ' + s + ' out of ' + t; },
      quizPerfect: 'Flawless! You own this module.',
      quizGood: 'Nice work. Review what you missed and it will stick.',
      quizMeh: 'Good start — re-read the module and try again.',
      quizBest: 'Your best score',
      refTitle: 'Reference', refSub: 'The exact fact, right when you need it.',
      refNames: {
        glosario: 'Glossary', premios: 'Honors & Awards', cargos: 'Chapter Offices',
        calendario: 'DeMolay Calendar', procedimientos: 'Procedures', datos: 'Key Facts'
      },
      refDescs: {
        glosario: 'Every term, A to Z', premios: 'What exists and how to earn it',
        cargos: 'Who does what', calendario: 'Obligatory Days & the DeMolay year',
        procedimientos: 'Step-by-step for what matters', datos: 'Fees, deadlines, contacts'
      },
      searchGloss: 'Search a term…', filterAll: 'All',
      eligNames: { active: 'Active DeMolays', squire: 'Squires', priory: 'Priory', senior: 'Senior DeMolays', advisor: 'Advisors', mason: 'Masons', anyone: 'Anyone' },
      typeNames: { honor: 'Honor', award: 'Award' },
      typeHint: 'An Honor cannot be applied for — it is conferred. An Award is earned by meeting requirements.',
      reqLabel: 'Requirements', costLabel: 'Cost', byLabel: 'Granted by',
      obligDays: 'The 7 Obligatory Days', yearView: 'The DeMolay year, month by month',
      respLabel: 'Responsible',
      checklistSaved: 'Your progress is saved on this device.',
      practiceTitle: 'Practice', practiceSub: 'Memorize the essentials and measure yourself with quizzes.',
      decksTitle: 'Flashcard decks', quizzesTitle: 'Module quizzes',
      cards: 'cards', tapFlip: 'Tap the card to flip it', shuffle: 'Shuffle', prev: 'Previous', next: 'Next',
      cardOf: function (a, b) { return a + ' / ' + b; },
      notTaken: 'Not attempted',
      searchTitle: 'Search', searchPh: 'Search a term, office, award, rule…',
      searchHint: 'Try: "ballot", "Flower Talk", "fees", "Two-Deep"…',
      searchNone: 'Nothing found. Try another word.',
      srModules: 'Modules', srGlossary: 'Glossary', srAwards: 'Honors & Awards', srOffices: 'Offices', srProcs: 'Procedures', srFacts: 'Facts',
      loading: 'Loading…',
      noData: 'Content for this language is not available yet.',
      footer1: 'The Handbook is unofficial educational material created by and for DeMolays, based on the DeMolay Handbook (16th edition).',
      footer2: 'DeMolay®, its emblem and program names are registered trademarks of DeMolay International. This site does not replace the official handbook or your Executive Officer’s guidance.',
      installHint: 'Works in any browser, phone included.'
    }
  };

  /* ---------------- Estado y almacenamiento ---------------- */
  function sGet(k, fb) {
    try { var v = localStorage.getItem(k); return v === null ? fb : JSON.parse(v); }
    catch (e) { return fb; }
  }
  function sSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  var lang = sGet('hb_lang', null);
  if (lang !== 'es' && lang !== 'en') {
    lang = (navigator.language || 'en').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  }

  function T() { return UI[lang]; }
  function D() { return (window.HB_DATA && window.HB_DATA[lang]) || null; }

  function doneList() { return sGet('hb_done', []); }
  function isDone(id) { return doneList().indexOf(id) !== -1; }
  function setDone(id, on) {
    var d = doneList(); var i = d.indexOf(id);
    if (on && i === -1) d.push(id);
    if (!on && i !== -1) d.splice(i, 1);
    sSet('hb_done', d);
  }
  function quizScores() { return sGet('hb_quiz', {}); }
  function saveQuizScore(id, score, total) {
    var q = quizScores();
    if (!q[id] || score > q[id].best) q[id] = { best: score, total: total };
    sSet('hb_quiz', q);
  }

  /* ---------------- Utilidades ---------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function md(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function modById(id) { for (var i = 0; i < MODS.length; i++) if (MODS[i].id === id) return MODS[i]; return null; }

  /* ---------------- Carga de datos por idioma ---------------- */
  var loadPromises = {};
  function ensureData(l) {
    if (window.HB_DATA && window.HB_DATA[l]) return Promise.resolve(true);
    if (loadPromises[l]) return loadPromises[l];
    loadPromises[l] = new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = 'content/data.' + l + '.js';
      s.onload = function () { resolve(!!(window.HB_DATA && window.HB_DATA[l])); };
      s.onerror = function () { resolve(false); };
      document.head.appendChild(s);
    });
    return loadPromises[l];
  }

  /* ---------------- Shell (header, navegación, footer) ---------------- */
  var app = document.getElementById('app');

  /* Iconos SVG inline — trazo 2px estilo Lucide (la marca DeMolay no usa emoji) */
  var ICONS = {
    home: 'M3 9.5 12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22v-9h6v9',
    compass: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z',
    landmark: 'M3 22h18 M6 18v-7 M10 18v-7 M14 18v-7 M18 18v-7 M12 2 2 8h20z',
    userPlus: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M19 8v6 M22 11h-6',
    users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
    crown: 'M2 4l3 12h14l3-12-6 7-4-7-4 7z M5 20h14',
    calendar: 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
    target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    megaphone: 'M3 11l18-5v12L3 14z M11.6 16.8a3 3 0 1 1-5.8-1.6',
    newspaper: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2 M18 14h-8 M15 18h-5 M10 6h8v4h-8z',
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    flame: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
    globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z',
    swords: 'M14.5 17.5 3 6V3h3l11.5 11.5 M13 19l6-6 M16 16l4 4 M19 21l2-2',
    award: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M8.21 13.89 7 23l5-3 5 3-1.21-9.12',
    send: 'M22 2 11 13 M22 2l-7 20-4-9-9-4z',
    book: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20',
    bookOpen: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
    layers: 'M12 2 2 7l10 5 10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
    search: 'M21 21l-4.3-4.3 M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
    checkCircle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M9 12l2 2 4-4',
    check: 'M20 6L9 17l-5-5',
    x: 'M18 6L6 18 M6 6l12 12',
    clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
    pin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z',
    lamp: 'M9 18h6 M10 22h4 M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5z',
    alert: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
    shuffle: 'M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.8-1.1 2-1.7 3.3-1.7H22 M18 2l4 4-4 4 M2 6h1.9c1.5 0 2.9.9 3.6 2.2 M22 18h-5.9c-1.3 0-2.5-.6-3.3-1.7l-1.2-1.6 M18 14l4 4-4 4',
    user: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
  };
  function ico(name, size) {
    var d = ICONS[name];
    if (!d) return '';
    size = size || 20;
    var paths = d.split(' M').map(function (seg, i) {
      return '<path d="' + (i === 0 ? seg : 'M' + seg) + '"></path>';
    }).join('');
    return '<svg class="svgi" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
  }

  var BRAND_LOGO = '<img class="logo" src="assets/logo-white.png" alt="">';

  function navItems() {
    var t = T();
    return [
      { r: '', ico: 'home', label: t.navHome },
      { r: 'aprender', ico: 'bookOpen', label: t.navLearn },
      { r: 'ref', ico: 'book', label: t.navRef },
      { r: 'practica', ico: 'layers', label: t.navPractice },
      { r: 'buscar', ico: 'search', label: t.navSearch }
    ];
  }
  function activeRoot(route) {
    if (route.indexOf('m/') === 0 || route === 'aprender') return 'aprender';
    if (route.indexOf('ref') === 0) return 'ref';
    if (route.indexOf('practica') === 0) return 'practica';
    if (route === 'buscar') return 'buscar';
    return '';
  }

  function renderShell(route) {
    var t = T();
    var act = activeRoot(route);
    var top = navItems().map(function (n) {
      return '<a href="#/' + n.r + '" class="' + (act === n.r ? 'on' : '') + '">' + esc(n.label) + '</a>';
    }).join('');
    var bottom = navItems().map(function (n) {
      return '<a href="#/' + n.r + '" class="' + (act === n.r ? 'on' : '') + '">' +
        '<span class="ico">' + ico(n.ico, 21) + '</span>' + esc(n.label) + '</a>';
    }).join('');

    app.innerHTML =
      '<header class="hdr">' +
        '<a class="brand" href="#/">' + BRAND_LOGO +
          '<span>The Handbook<small>' + esc(t.tagline) + '</small></span></a>' +
        '<span class="spacer"></span>' +
        '<nav class="top">' + top + '</nav>' +
        '<button class="lang-btn" id="langBtn" title="Español / English">' + (lang === 'es' ? 'ES → EN' : 'EN → ES') + '</button>' +
      '</header>' +
      '<main id="view"></main>' +
      '<footer class="site">' + esc(t.footer1) + '<br>' + esc(t.footer2) + '</footer>' +
      '<nav class="bnav">' + bottom + '</nav>';

    document.getElementById('langBtn').addEventListener('click', function () {
      lang = (lang === 'es') ? 'en' : 'es';
      sSet('hb_lang', lang);
      document.documentElement.lang = lang;
      render();
    });
  }

  function view() { return document.getElementById('view'); }
  function setView(html) {
    var v = view();
    v.innerHTML = '<div class="fade-in">' + html + '</div>';
    window.scrollTo(0, 0);
  }
  function spinner() { view().innerHTML = '<div class="empty">' + esc(T().loading) + '</div>'; }
  function noData() {
    setView('<div class="empty"><span class="big">' + ico('alert', 40) + '</span>' + esc(T().noData) + '</div>');
  }

  /* ---------------- Vistas ---------------- */

  function vHome() {
    var t = T(), d = D();
    var done = doneList().filter(function (id) { return modById(id); });
    var pct = Math.round(done.length / MODS.length * 100);
    var nextMod = null;
    for (var i = 0; i < MODS.length; i++) if (!isDone(MODS[i].id)) { nextMod = MODS[i]; break; }
    var cta = nextMod
      ? '<a class="btn gold" href="#/m/' + nextMod.id + '">' + esc(done.length ? t.heroContinue : t.heroStart) + '</a>'
      : '<a class="btn gold" href="#/practica">' + esc(t.navPractice) + '</a>';

    var html =
      '<section class="hero">' +
        '<h1>' + esc(t.heroTitle) + '</h1>' +
        '<p>' + esc(t.heroText) + '</p>' +
        cta +
        '<div style="margin-top:18px"><div class="pbar"><i style="width:' + pct + '%"></i></div>' +
        '<span class="stat">' + esc(t.progressOf(done.length, MODS.length)) + '</span></div>' +
      '</section>';

    html += '<div class="cat-title">' + esc(t.quickRef) + '</div><div class="ref-grid">' +
      REFS.slice(0, 6).map(function (r) {
        return '<a class="ref-card" href="#/ref/' + r.id + '"><span class="ico">' + ico(r.icon, 26) + '</span>' +
          '<b>' + esc(t.refNames[r.id]) + '</b><span>' + esc(t.refDescs[r.id]) + '</span></a>';
      }).join('') + '</div>';

    CATS.forEach(function (cat) {
      html += '<div class="cat-title">' + esc(t.catNames[cat]) + '</div><div class="mod-grid">';
      MODS.filter(function (m) { return m.cat === cat; }).forEach(function (m) {
        html += modCard(m, d, t);
      });
      html += '</div>';
    });

    setView(html);
    document.title = 'The Handbook · DeMolay';
  }

  function modCard(m, d, t) {
    var c = d && d.modules[m.id];
    var done = isDone(m.id);
    var q = quizScores()[m.id];
    var sub = c ? c.subtitle : '';
    var extra = q ? ' · ★ ' + q.best + '/' + q.total : '';
    return '<a class="mod-card' + (done ? ' done' : '') + '" href="#/m/' + m.id + '">' +
      '<span class="ico">' + ico(m.icon, 22) + '</span>' +
      '<span class="tx"><b>' + esc(c ? c.title : m.id) + '</b>' +
      '<span>' + esc(c ? (c.minutes + ' ' + t.minRead) : '') + esc(extra) + (sub ? ' · ' + esc(sub) : '') + '</span></span>' +
      '<span class="chk' + (done ? '' : ' todo') + '">' + (done ? '✓' : '○') + '</span></a>';
  }

  function vLearn() {
    var t = T(), d = D();
    var html = '<h1 class="page">' + esc(t.learnTitle) + '</h1><p class="page-sub">' + esc(t.learnSub) + '</p>';
    CATS.forEach(function (cat) {
      html += '<div class="cat-title">' + esc(t.catNames[cat]) + '</div><div class="mod-grid">';
      MODS.filter(function (m) { return m.cat === cat; }).forEach(function (m) { html += modCard(m, d, t); });
      html += '</div>';
    });
    setView(html);
    document.title = t.learnTitle + ' · The Handbook';
  }

  /* ----- Render de bloques de contenido ----- */
  function blockHTML(b) {
    if (!b || !b.t) return '';
    switch (b.t) {
      case 'p': return '<p>' + md(b.text) + '</p>';
      case 'h': return '<h3>' + md(b.text) + '</h3>';
      case 'list':
        return '<ul>' + (b.items || []).map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
      case 'steps':
        return '<ol class="steps">' + (b.items || []).map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ol>';
      case 'callout': {
        var icn = b.style === 'warn' ? 'alert' : (b.style === 'info' ? 'lamp' : 'star');
        var cls = (b.style === 'warn' || b.style === 'info') ? b.style : 'key';
        return '<div class="callout ' + cls + '"><span class="ci">' + ico(icn, 19) + '</span><div>' + md(b.text) + '</div></div>';
      }
      case 'table': {
        var h = '<tr>' + (b.headers || []).map(function (x) { return '<th>' + md(x) + '</th>'; }).join('') + '</tr>';
        var rows = (b.rows || []).map(function (r) {
          return '<tr>' + r.map(function (c) { return '<td>' + md(c) + '</td>'; }).join('') + '</tr>';
        }).join('');
        return '<div class="tbl-wrap"><table class="tbl">' + h + rows + '</table></div>';
      }
      case 'cards':
        return '<div class="concept-grid">' + (b.items || []).map(function (c) {
          return '<div class="concept"><b>' + md(c.title) + '</b><span>' + md(c.text) + '</span></div>';
        }).join('') + '</div>';
      case 'ref':
        return '<div class="refnote">' + ico('book', 16) + ' ' + md(b.text) + ' — DeMolay Handbook' + (b.page ? ', p. ' + esc(b.page) : '') + '</div>';
      default: return '';
    }
  }
  function blockText(b) {
    if (!b) return '';
    var parts = [];
    if (b.text) parts.push(b.text);
    if (b.items) b.items.forEach(function (x) { parts.push(typeof x === 'string' ? x : (x.title + ' ' + x.text)); });
    if (b.headers) parts.push(b.headers.join(' '));
    if (b.rows) b.rows.forEach(function (r) { parts.push(r.join(' ')); });
    return parts.join(' ');
  }

  function vModule(id) {
    var t = T(), d = D();
    var m = modById(id);
    var c = d && d.modules[id];
    if (!m || !c) return noData();

    var done = isDone(id);
    var html = '<div class="read">' +
      '<a class="backlink" href="#/aprender">‹ ' + esc(t.backLearn) + '</a>' +
      '<div class="mod-head"><h1 class="page">' + esc(c.title) + '</h1>' +
      '<p class="page-sub">' + esc(c.subtitle) + '</p>' +
      '<div class="meta">' +
        '<span class="pill">' + c.minutes + ' ' + esc(t.minRead) + '</span>' +
        '<span class="pill">' + c.lessons.length + ' ' + esc(t.lessons) + '</span>' +
        '<span class="pill">' + c.quiz.length + ' ' + esc(t.questions) + '</span>' +
        (done ? '<span class="pill ok">✓ ' + esc(t.completed) + '</span>' : '') +
      '</div></div>';

    if (c.lessons.length > 1) {
      html += '<div class="toc">' + c.lessons.map(function (l, i) {
        return '<a data-scroll="les-' + i + '">' + (i + 1) + '. ' + esc(l.title) + '</a>';
      }).join('') + '</div>';
    }

    c.lessons.forEach(function (l, i) {
      html += '<section class="lesson" id="les-' + i + '"><h2><span class="n">' + (i + 1) + '</span>' + esc(l.title) + '</h2>' +
        l.blocks.map(blockHTML).join('') + '</section>';
    });

    html += '<div class="done-row">' +
      '<button class="btn ' + (done ? 'ghost' : '') + '" id="doneBtn">' + esc(done ? t.unmark : t.markDone) + '</button>' +
      '<span class="muted" id="doneMsg">' + (done ? esc(t.doneMsg) : '') + '</span></div>';

    html += '<hr class="divider"><section class="quiz" id="quizbox"></section>';

    var next = null;
    var idx = MODS.indexOf(m);
    if (idx >= 0 && idx < MODS.length - 1) next = MODS[idx + 1];
    if (next) {
      var nc = d.modules[next.id];
      html += '<hr class="divider"><a class="mod-card" href="#/m/' + next.id + '">' +
        '<span class="ico">' + ico(next.icon, 22) + '</span><span class="tx"><b>' + esc(t.nextMod) + ' →</b>' +
        '<span>' + esc(nc ? nc.title : next.id) + '</span></span></a>';
    }
    html += '</div>';
    setView(html);
    document.title = c.title + ' · The Handbook';

    // TOC scroll
    Array.prototype.forEach.call(view().querySelectorAll('[data-scroll]'), function (a) {
      a.addEventListener('click', function () {
        var el = document.getElementById(a.getAttribute('data-scroll'));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Done toggle
    document.getElementById('doneBtn').addEventListener('click', function () {
      var on = !isDone(id);
      setDone(id, on);
      this.textContent = on ? t.unmark : t.markDone;
      this.classList.toggle('ghost', on);
      document.getElementById('doneMsg').textContent = on ? t.doneMsg : '';
    });

    mountQuiz(id, c.quiz);
  }

  /* ----- Quiz ----- */
  function mountQuiz(modId, quiz) {
    var t = T();
    var box = document.getElementById('quizbox');
    if (!box || !quiz || !quiz.length) return;
    var state = { i: 0, score: 0, answered: false, results: [] };

    function bar() {
      return '<div class="qbar">' + quiz.map(function (_, j) {
        var cls = '';
        if (j < state.results.length) cls = state.results[j] ? 'done-ok' : 'done-bad';
        else if (j === state.i) cls = 'cur';
        return '<i class="' + cls + '"></i>';
      }).join('') + '</div>';
    }

    function renderQ() {
      var q = quiz[state.i];
      box.innerHTML =
        '<h2 style="margin:0 0 2px">' + esc(t.quizTitle) + '</h2>' +
        '<p class="muted" style="margin:0 0 14px">' + esc(t.quizSub) + '</p>' +
        '<div class="card qcard">' + bar() +
        '<div class="qnum">' + esc(t.quizQ) + ' ' + (state.i + 1) + ' / ' + quiz.length + '</div>' +
        '<div class="qtext">' + md(q.q) + '</div>' +
        q.options.map(function (o, j) {
          return '<button class="opt" data-j="' + j + '">' + md(o) + '</button>';
        }).join('') +
        '<div id="qfoot"></div></div>';

      Array.prototype.forEach.call(box.querySelectorAll('.opt'), function (btn) {
        btn.addEventListener('click', function () {
          if (state.answered) return;
          state.answered = true;
          var j = parseInt(btn.getAttribute('data-j'), 10);
          var ok = j === q.correct;
          state.results.push(ok);
          if (ok) state.score++;
          Array.prototype.forEach.call(box.querySelectorAll('.opt'), function (b2, k) {
            b2.setAttribute('disabled', '1');
            if (k === q.correct) b2.classList.add(k === j ? 'sel-ok' : 'reveal');
            else if (k === j) b2.classList.add('sel-bad');
          });
          var last = state.i === quiz.length - 1;
          document.getElementById('qfoot').innerHTML =
            '<div class="explain">' + (ok ? '<b>✓</b> ' : '<b>✗</b> ') + md(q.explain) + '</div>' +
            '<button class="btn gold" id="qnext">' + esc(last ? t.quizSee : t.quizNext) + '</button>';
          document.getElementById('qnext').addEventListener('click', function () {
            if (last) renderEnd();
            else { state.i++; state.answered = false; renderQ(); }
          });
        });
      });
    }

    function renderEnd() {
      saveQuizScore(modId, state.score, quiz.length);
      var msg = state.score === quiz.length ? t.quizPerfect : (state.score >= Math.ceil(quiz.length * 0.6) ? t.quizGood : t.quizMeh);
      box.innerHTML =
        '<h2 style="margin:0 0 14px">' + esc(t.quizTitle) + '</h2>' +
        '<div class="card qcard center">' + bar() +
        '<div class="score-big">' + state.score + '/' + quiz.length + '</div>' +
        '<p><b>' + esc(t.quizDone(state.score, quiz.length)) + '</b><br><span class="muted">' + esc(msg) + '</span></p>' +
        '<button class="btn" id="qretry">' + esc(t.quizRetry) + '</button></div>';
      document.getElementById('qretry').addEventListener('click', function () {
        state = { i: 0, score: 0, answered: false, results: [] };
        renderQ();
      });
    }

    var best = quizScores()[modId];
    box.innerHTML =
      '<h2 style="margin:0 0 2px">' + esc(t.quizTitle) + '</h2>' +
      '<p class="muted" style="margin:0 0 14px">' + esc(t.quizSub) +
      (best ? ' · ' + esc(t.quizBest) + ': <b>' + best.best + '/' + best.total + '</b>' : '') + '</p>' +
      '<button class="btn gold" id="qstart">' + esc(best ? t.quizRetry : t.start) + ' →</button>';
    document.getElementById('qstart').addEventListener('click', renderQ);
  }

  /* ----- Referencia ----- */
  function vRefHub() {
    var t = T();
    var html = '<h1 class="page">' + esc(t.refTitle) + '</h1><p class="page-sub">' + esc(t.refSub) + '</p>' +
      '<div class="ref-grid">' + REFS.map(function (r) {
        return '<a class="ref-card" href="#/ref/' + r.id + '"><span class="ico">' + ico(r.icon, 26) + '</span>' +
          '<b>' + esc(t.refNames[r.id]) + '</b><span>' + esc(t.refDescs[r.id]) + '</span></a>';
      }).join('') + '</div>';
    setView(html);
    document.title = t.refTitle + ' · The Handbook';
  }

  function refHeader(rid) {
    var t = T();
    return '<a class="backlink" href="#/ref">‹ ' + esc(t.refTitle) + '</a>' +
      '<h1 class="page">' + esc(t.refNames[rid]) + '</h1>' +
      '<p class="page-sub">' + esc(t.refDescs[rid]) + '</p>';
  }

  function vGlossary() {
    var t = T(), d = D();
    var items = d && d.reference.glossary;
    if (!items) return noData();
    var html = refHeader('glosario') +
      '<div class="searchbox">' + ico('search', 18) + '<input id="gq" type="search" placeholder="' + esc(t.searchGloss) + '"></div>' +
      '<div id="glist"></div>';
    setView(html);

    function paint(filter) {
      var f = norm(filter);
      var list = items.filter(function (it) {
        return !f || norm(it.term).indexOf(f) !== -1 || norm(it.def).indexOf(f) !== -1;
      });
      var out = '', letter = '';
      list.forEach(function (it) {
        var L = norm(it.term).charAt(0).toUpperCase();
        if (L !== letter && !f) { letter = L; out += '<div class="glo-letter">' + esc(L) + '</div>'; }
        out += '<div class="card glo-item">' + (it.cat ? '<span class="pill cat">' + esc(it.cat) + '</span>' : '') +
          '<b>' + esc(it.term) + '</b><p>' + md(it.def) + '</p></div>';
      });
      document.getElementById('glist').innerHTML = out ||
        '<div class="empty"><span class="big">' + ico('search', 40) + '</span>' + esc(t.searchNone) + '</div>';
    }
    paint('');
    document.getElementById('gq').addEventListener('input', function () { paint(this.value); });
    document.title = t.refNames.glosario + ' · The Handbook';
  }

  function vAwards() {
    var t = T(), d = D();
    var data = d && d.reference.awards;
    if (!data || !data.items) return noData();
    var items = data.items;
    var state = { elig: 'all', type: 'all' };

    var eligKeys = ['all', 'active', 'squire', 'priory', 'senior', 'advisor', 'mason', 'anyone'];
    var html = refHeader('premios') +
      '<div class="callout info"><span class="ci">' + ico('lamp', 19) + '</span><div>' + esc(t.typeHint) + '</div></div>' +
      '<div class="chips" id="eligChips">' + eligKeys.map(function (k) {
        return '<button class="chip' + (k === 'all' ? ' on' : '') + '" data-k="' + k + '">' +
          esc(k === 'all' ? t.filterAll : t.eligNames[k]) + '</button>';
      }).join('') + '</div>' +
      '<div class="chips" id="typeChips">' + ['all', 'honor', 'award'].map(function (k) {
        return '<button class="chip' + (k === 'all' ? ' on' : '') + '" data-k="' + k + '">' +
          esc(k === 'all' ? t.filterAll : t.typeNames[k]) + '</button>';
      }).join('') + '</div>' +
      '<div id="awlist"></div>';
    setView(html);

    function paint() {
      var list = items.filter(function (it) {
        if (state.type !== 'all' && it.type !== state.type) return false;
        if (state.elig !== 'all' && (it.eligible || []).indexOf(state.elig) === -1) return false;
        return true;
      });
      document.getElementById('awlist').innerHTML = list.map(function (it) {
        return '<div class="card aw-item">' +
          '<div class="top"><b>' + esc(it.name) + '</b>' +
          '<span class="pill ' + (it.type === 'honor' ? 'gold' : '') + '">' + esc(t.typeNames[it.type] || it.type) + '</span>' +
          (it.eligible || []).map(function (e) { return '<span class="pill">' + esc(t.eligNames[e] || e) + '</span>'; }).join('') +
          '</div>' +
          '<div class="row"><b>' + esc(t.reqLabel) + ':</b> ' + md(it.req) + '</div>' +
          (it.cost ? '<div class="row"><b>' + esc(t.costLabel) + ':</b> ' + md(it.cost) + '</div>' : '') +
          (it.by ? '<div class="row"><b>' + esc(t.byLabel) + ':</b> ' + md(it.by) + '</div>' : '') +
          (it.notes ? '<div class="row muted">' + md(it.notes) + '</div>' : '') +
          '</div>';
      }).join('') || '<div class="empty"><span class="big">' + ico('search', 40) + '</span>' + esc(t.searchNone) + '</div>';
    }
    paint();
    ['eligChips', 'typeChips'].forEach(function (boxId, bi) {
      document.getElementById(boxId).addEventListener('click', function (ev) {
        var b = ev.target.closest('.chip'); if (!b) return;
        Array.prototype.forEach.call(this.querySelectorAll('.chip'), function (c) { c.classList.remove('on'); });
        b.classList.add('on');
        if (bi === 0) state.elig = b.getAttribute('data-k'); else state.type = b.getAttribute('data-k');
        paint();
      });
    });
    document.title = t.refNames.premios + ' · The Handbook';
  }

  function vOffices() {
    var t = T(), d = D();
    var data = d && d.reference.offices;
    if (!data || !data.groups) return noData();
    var html = refHeader('cargos');
    data.groups.forEach(function (g) {
      html += '<div class="cat-title">' + esc(g.name) + '</div>';
      g.items.forEach(function (o) {
        html += '<details class="acc"><summary>' + esc(o.name) + '</summary><div class="body">' +
          '<ul>' + (o.duties || []).map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>' +
          (o.notes ? '<p class="muted">' + md(o.notes) + '</p>' : '') +
          '</div></details>';
      });
    });
    setView(html);
    document.title = t.refNames.cargos + ' · The Handbook';
  }

  function vCalendar() {
    var t = T(), d = D();
    var data = d && d.reference.calendar;
    if (!data) return noData();
    var html = refHeader('calendario');
    html += '<div class="cat-title">' + esc(t.obligDays) + '</div><div class="concept-grid">';
    (data.obligatory || []).forEach(function (o) {
      html += '<div class="concept"><b>' + esc(o.name) + '</b><span>' + md(o.when) +
        '<br><b style="font-size:13px">' + esc(t.respLabel) + ':</b> ' + md(o.responsible) +
        (o.ideas ? '<br>' + md(o.ideas) : '') + '</span></div>';
    });
    html += '</div><div class="cat-title">' + esc(t.yearView) + '</div>';
    (data.annual || []).forEach(function (m) {
      html += '<details class="acc"><summary>' + esc(m.month) + '</summary><div class="body"><ul>' +
        (m.items || []).map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div></details>';
    });
    setView(html);
    document.title = t.refNames.calendario + ' · The Handbook';
  }

  function vProcedures() {
    var t = T(), d = D();
    var data = d && d.reference.procedures;
    if (!data || !data.items) return noData();
    var checks = sGet('hb_checks', {});
    var html = refHeader('procedimientos');
    data.items.forEach(function (p) {
      var body = '<p>' + md(p.intro || '') + '</p>';
      if (p.checklist) {
        var st = checks[p.id] || [];
        var doneN = st.filter(Boolean).length;
        body += '<p class="muted">' + esc(t.checklistSaved) + ' · <b id="ckn-' + esc(p.id) + '">' + doneN + '/' + p.steps.length + '</b></p>';
        body += p.steps.map(function (s, i) {
          var on = !!st[i];
          return '<label class="chk-item' + (on ? ' done' : '') + '"><input type="checkbox" data-proc="' + esc(p.id) + '" data-i="' + i + '"' + (on ? ' checked' : '') + '><span class="tx">' + md(s) + '</span></label>';
        }).join('');
      } else {
        body += '<ol class="steps">' + (p.steps || []).map(function (s) { return '<li>' + md(s) + '</li>'; }).join('') + '</ol>';
      }
      (p.notes || []).forEach(function (n) {
        body += '<div class="callout info"><span class="ci">' + ico('lamp', 19) + '</span><div>' + md(n) + '</div></div>';
      });
      if (p.page) body += '<div class="refnote">' + ico('book', 16) + ' DeMolay Handbook, p. ' + esc(p.page) + '</div>';
      html += '<details class="acc"><summary>' + esc(p.title) + '</summary><div class="body">' + body + '</div></details>';
    });
    setView(html);

    Array.prototype.forEach.call(view().querySelectorAll('input[data-proc]'), function (cb) {
      cb.addEventListener('change', function () {
        var pid = cb.getAttribute('data-proc'), i = parseInt(cb.getAttribute('data-i'), 10);
        var all = sGet('hb_checks', {});
        var arr = all[pid] || [];
        arr[i] = cb.checked;
        all[pid] = arr;
        sSet('hb_checks', all);
        cb.closest('.chk-item').classList.toggle('done', cb.checked);
        var counter = document.getElementById('ckn-' + pid);
        if (counter) {
          var item = null;
          data.items.forEach(function (p) { if (p.id === pid) item = p; });
          counter.textContent = arr.filter(Boolean).length + '/' + (item ? item.steps.length : arr.length);
        }
      });
    });
    document.title = t.refNames.procedimientos + ' · The Handbook';
  }

  function vFacts() {
    var t = T(), d = D();
    var data = d && d.reference.facts;
    if (!data || !data.groups) return noData();
    var html = refHeader('datos');
    data.groups.forEach(function (g) {
      html += '<div class="cat-title">' + esc(g.title) + '</div><div class="card" style="padding:6px 14px">' +
        '<table class="kv">' + (g.facts || []).map(function (f) {
          return '<tr><td>' + md(f.k) + '</td><td>' + md(f.v) + '</td></tr>';
        }).join('') + '</table></div>';
    });
    setView(html);
    document.title = t.refNames.datos + ' · The Handbook';
  }

  /* ----- Práctica ----- */
  function vPractice() {
    var t = T(), d = D();
    var decks = (d && d.flashcards) || [];
    var html = '<h1 class="page">' + esc(t.practiceTitle) + '</h1><p class="page-sub">' + esc(t.practiceSub) + '</p>';

    html += '<div class="cat-title">' + esc(t.decksTitle) + '</div><div class="deck-grid">';
    decks.forEach(function (dk) {
      html += '<a class="mod-card" href="#/practica/' + esc(dk.id) + '">' +
        '<span class="ico">' + ico('layers', 22) + '</span><span class="tx"><b>' + esc(dk.title) + '</b>' +
        '<span>' + dk.cards.length + ' ' + esc(t.cards) + ' · ' + esc(dk.desc || '') + '</span></span></a>';
    });
    html += '</div>';

    html += '<div class="cat-title">' + esc(t.quizzesTitle) + '</div><div class="mod-grid">';
    var qs = quizScores();
    MODS.forEach(function (m) {
      var c = d && d.modules[m.id];
      var q = qs[m.id];
      html += '<a class="mod-card" href="#/m/' + m.id + '">' +
        '<span class="ico">' + ico(m.icon, 22) + '</span><span class="tx"><b>' + esc(c ? c.title : m.id) + '</b>' +
        '<span>' + (q ? '★ ' + q.best + '/' + q.total : esc(t.notTaken)) + '</span></span></a>';
    });
    html += '</div>';
    setView(html);
    document.title = t.practiceTitle + ' · The Handbook';
  }

  function vDeck(deckId) {
    var t = T(), d = D();
    var decks = (d && d.flashcards) || [];
    var deck = null;
    decks.forEach(function (x) { if (x.id === deckId) deck = x; });
    if (!deck) return noData();

    var state = { order: deck.cards.map(function (_, i) { return i; }), idx: 0, flipped: false };

    setView('<div class="read"><a class="backlink" href="#/practica">‹ ' + esc(t.practiceTitle) + '</a>' +
      '<h1 class="page">' + esc(deck.title) + '</h1>' +
      '<p class="page-sub">' + esc(deck.desc || '') + ' · ' + esc(t.tapFlip) + '</p>' +
      '<div class="flash-stage"><div class="flash" id="flash">' +
      '<div class="face front"><span class="hint"></span><span class="tx"></span></div>' +
      '<div class="face back"><span class="tx"></span></div>' +
      '</div></div>' +
      '<p class="center muted" id="fcount"></p>' +
      '<div class="flash-ctl">' +
      '<button class="btn ghost sm" id="fprev">← ' + esc(t.prev) + '</button>' +
      '<button class="btn ghost sm" id="fshuf">' + ico('shuffle', 15) + ' ' + esc(t.shuffle) + '</button>' +
      '<button class="btn sm" id="fnext">' + esc(t.next) + ' →</button>' +
      '</div></div>');

    var flashEl = document.getElementById('flash');
    function paint() {
      var card = deck.cards[state.order[state.idx]];
      flashEl.classList.remove('flipped');
      state.flipped = false;
      flashEl.querySelector('.front .hint').textContent = deck.title;
      flashEl.querySelector('.front .tx').textContent = card.f;
      flashEl.querySelector('.back .tx').textContent = card.b;
      document.getElementById('fcount').textContent = t.cardOf(state.idx + 1, deck.cards.length);
    }
    flashEl.addEventListener('click', function () {
      state.flipped = !state.flipped;
      flashEl.classList.toggle('flipped', state.flipped);
    });
    document.getElementById('fnext').addEventListener('click', function () {
      state.idx = (state.idx + 1) % state.order.length; paint();
    });
    document.getElementById('fprev').addEventListener('click', function () {
      state.idx = (state.idx - 1 + state.order.length) % state.order.length; paint();
    });
    document.getElementById('fshuf').addEventListener('click', function () {
      for (var i = state.order.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = state.order[i]; state.order[i] = state.order[j]; state.order[j] = tmp;
      }
      state.idx = 0; paint();
    });
    paint();
    document.title = deck.title + ' · The Handbook';
  }

  /* ----- Buscador ----- */
  var searchCache = {};
  function buildIndex() {
    if (searchCache[lang]) return searchCache[lang];
    var d = D(), t = T();
    var ix = [];
    if (!d) return ix;
    MODS.forEach(function (m) {
      var c = d.modules[m.id];
      if (!c) return;
      var body = c.lessons.map(function (l) {
        return l.title + ' ' + l.blocks.map(blockText).join(' ');
      }).join(' ');
      ix.push({ type: t.srModules, title: c.title, text: c.subtitle + ' ' + body, route: '#/m/' + m.id, snippet: c.subtitle });
    });
    (d.reference.glossary || []).forEach(function (g) {
      ix.push({ type: t.srGlossary, title: g.term, text: g.term + ' ' + g.def, route: '#/ref/glosario', snippet: g.def });
    });
    ((d.reference.awards || {}).items || []).forEach(function (a) {
      ix.push({ type: t.srAwards, title: a.name, text: a.name + ' ' + a.req + ' ' + (a.notes || ''), route: '#/ref/premios', snippet: a.req });
    });
    ((d.reference.offices || {}).groups || []).forEach(function (g) {
      g.items.forEach(function (o) {
        ix.push({ type: t.srOffices, title: o.name, text: o.name + ' ' + (o.duties || []).join(' '), route: '#/ref/cargos', snippet: (o.duties || [])[0] || '' });
      });
    });
    ((d.reference.procedures || {}).items || []).forEach(function (p) {
      ix.push({ type: t.srProcs, title: p.title, text: p.title + ' ' + (p.intro || '') + ' ' + (p.steps || []).join(' '), route: '#/ref/procedimientos', snippet: p.intro || '' });
    });
    ((d.reference.facts || {}).groups || []).forEach(function (g) {
      g.facts.forEach(function (f) {
        ix.push({ type: t.srFacts, title: f.k, text: f.k + ' ' + f.v, route: '#/ref/datos', snippet: f.v });
      });
    });
    ix.forEach(function (e) { e.ntitle = norm(e.title); e.ntext = norm(e.text); });
    searchCache[lang] = ix;
    return ix;
  }

  function vSearch() {
    var t = T();
    setView('<h1 class="page">' + esc(t.searchTitle) + '</h1>' +
      '<div class="searchbox">' + ico('search', 20) + '<input id="sq" type="search" placeholder="' + esc(t.searchPh) + '" autocomplete="off"></div>' +
      '<div id="sres"><p class="muted center">' + esc(t.searchHint) + '</p></div>');
    var inp = document.getElementById('sq');
    inp.focus();
    inp.addEventListener('input', function () {
      var q = norm(inp.value.trim());
      var box = document.getElementById('sres');
      if (q.length < 2) { box.innerHTML = '<p class="muted center">' + esc(t.searchHint) + '</p>'; return; }
      var ix = buildIndex();
      var hits = [];
      ix.forEach(function (e) {
        var s = 0;
        if (e.ntitle.indexOf(q) !== -1) s = e.ntitle === q ? 100 : 60;
        else if (e.ntext.indexOf(q) !== -1) s = 20;
        if (s) hits.push({ e: e, s: s });
      });
      hits.sort(function (a, b) { return b.s - a.s; });
      hits = hits.slice(0, 40);
      if (!hits.length) {
        box.innerHTML = '<div class="empty"><span class="big">' + ico('search', 40) + '</span>' + esc(t.searchNone) + '</div>';
        return;
      }
      var out = '', lastType = '';
      hits.forEach(function (h) {
        if (h.e.type !== lastType) { lastType = h.e.type; out += '<div class="sr-type">' + esc(h.e.type) + '</div>'; }
        out += '<a class="card sr-item" href="' + h.e.route + '"><b>' + esc(h.e.title) + '</b>' +
          '<p>' + esc(String(h.e.snippet || '').slice(0, 140)) + '</p></a>';
      });
      box.innerHTML = out;
    });
    document.title = t.searchTitle + ' · The Handbook';
  }

  /* ---------------- Router ---------------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    return h.replace(/\/+$/, '');
  }

  function render() {
    var r = route();
    renderShell(r);
    document.documentElement.lang = lang;
    spinner();
    ensureData(lang).then(function (ok) {
      if (route() !== r) return; // navegó mientras cargaba
      if (!ok && r !== '') { /* permite home sin datos */ }
      var parts = r.split('/');
      if (r === '') return vHome();
      if (r === 'aprender') return vLearn();
      if (parts[0] === 'm' && parts[1]) return vModule(parts[1]);
      if (r === 'ref') return vRefHub();
      if (parts[0] === 'ref') {
        switch (parts[1]) {
          case 'glosario': return vGlossary();
          case 'premios': return vAwards();
          case 'cargos': return vOffices();
          case 'calendario': return vCalendar();
          case 'procedimientos': return vProcedures();
          case 'datos': return vFacts();
        }
      }
      if (r === 'practica') return vPractice();
      if (parts[0] === 'practica' && parts[1]) return vDeck(parts[1]);
      if (r === 'buscar') return vSearch();
      return vHome();
    });
  }

  window.addEventListener('hashchange', render);
  render();
})();

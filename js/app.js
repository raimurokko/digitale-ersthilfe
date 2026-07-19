/* ==========================================================================
   Digitale Ersthilfe — App-JavaScript
   Vorlesefunktion, Navigation, Barrierefreiheits-Panel, PWA-Registrierung
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Mobile Navigation (Hamburger-Menü)
     -------------------------------------------------------------------------- */

  function initNavigation() {
    var menuButton = document.querySelector('.menu-button');
    var navMobil = document.getElementById('nav-mobil');
    if (!menuButton || !navMobil) return;

    menuButton.addEventListener('click', function () {
      var istOffen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!istOffen));
      navMobil.setAttribute('data-open', String(!istOffen));

      if (!istOffen) {
        menuButton.setAttribute('aria-label', 'Menü schließen');
      } else {
        menuButton.setAttribute('aria-label', 'Menü öffnen');
      }
    });

    // Menü schließen bei Klick auf einen Link
    var navLinks = navMobil.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        navMobil.setAttribute('data-open', 'false');
        menuButton.setAttribute('aria-label', 'Menü öffnen');
      });
    }
  }

  /* --------------------------------------------------------------------------
     2. Vorlesefunktion (Web Speech API)
     -------------------------------------------------------------------------- */

  var aktuelleSprachausgabe = null;

  function textAusElement(element) {
    // Sammelt den sichtbaren Text eines Elements (ohne versteckte Elemente)
    var texte = [];
    var kinder = element.childNodes;
    for (var i = 0; i < kinder.length; i++) {
      var kind = kinder[i];
      if (kind.nodeType === Node.TEXT_NODE) {
        var text = kind.textContent.trim();
        if (text) texte.push(text);
      } else if (kind.nodeType === Node.ELEMENT_NODE) {
        var stil = window.getComputedStyle(kind);
        if (stil.display === 'none' || stil.visibility === 'hidden') continue;
        // Vorlese-Buttons und Icons überspringen
        if (kind.classList.contains('vorlesen-btn')) continue;
        if (kind.getAttribute('aria-hidden') === 'true') continue;
        texte.push(textAusElement(kind));
      }
    }
    return texte.join(' ');
  }

  function vorlesenStoppen() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    aktuelleSprachausgabe = null;

    // Alle Vorlesen-Buttons zurücksetzen
    var buttons = document.querySelectorAll('.vorlesen-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', 'false');
      buttons[i].innerHTML = '&#128264; ' + buttons[i].innerHTML.replace(/^[^\s]+\s/, '');
    }
  }

  function vorlesenStarten(text, button) {
    if (!('speechSynthesis' in window)) {
      alert('Ihr Browser unterstützt die Vorlesefunktion leider nicht.');
      return;
    }

    vorlesenStoppen();

    var ausgabe = new SpeechSynthesisUtterance(text);
    ausgabe.lang = 'de-DE';
    ausgabe.rate = 0.9;
    ausgabe.pitch = 1.0;

    // Deutsche Stimme bevorzugen
    var stimmen = window.speechSynthesis.getVoices();
    for (var i = 0; i < stimmen.length; i++) {
      if (stimmen[i].lang.indexOf('de') === 0) {
        ausgabe.voice = stimmen[i];
        break;
      }
    }

    ausgabe.onend = function () {
      if (button) {
        button.setAttribute('aria-pressed', 'false');
        button.innerHTML = '&#128264; ' + button.textContent.replace(/^[^\s]+\s/, '').trim();
      }
      aktuelleSprachausgabe = null;
    };

    if (button) {
      button.setAttribute('aria-pressed', 'true');
      button.innerHTML = '&#9209; Vorlesen stoppen';
    }

    window.speechSynthesis.speak(ausgabe);
    aktuelleSprachausgabe = ausgabe;
  }

  function initVorlesen() {
    if (!('speechSynthesis' in window)) return;

    // Stimmen laden (manche Browser laden diese asynchron)
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', function () {}, { once: true });
    }

    // Vorlesen-Buttons für einzelne Abschnitte
    var buttons = document.querySelectorAll('.vorlesen-btn');
    for (var i = 0; i < buttons.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          var istAktiv = btn.getAttribute('aria-pressed') === 'true';
          if (istAktiv) {
            vorlesenStoppen();
            return;
          }

          var zielId = btn.getAttribute('data-vorlesen');
          var text = '';

          if (zielId === 'ganzer-leitfaden' || zielId === 'ganze-seite') {
            // Gesamten Hauptinhalt vorlesen
            var hauptinhalt = document.getElementById('hauptinhalt');
            if (hauptinhalt) text = textAusElement(hauptinhalt);
          } else {
            // Einzelnen Abschnitt vorlesen
            var abschnitt = document.getElementById(zielId);
            if (abschnitt) text = textAusElement(abschnitt);
          }

          if (text) {
            vorlesenStarten(text, btn);
          }
        });
      })(buttons[i]);
    }
  }

  /* --------------------------------------------------------------------------
     3. Scroll-up-Button
     -------------------------------------------------------------------------- */

  function initScrollTop() {
    var topBtn = document.getElementById('scroll-top');
    if (!topBtn) return;
    function onScroll() {
      topBtn.classList.toggle('is-visible', window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    topBtn.addEventListener('click', function () {
      var reduce = document.documentElement.classList.contains('a11y-motion') ||
        (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     3b. Barrierefreiheits-Panel
     Zustand in localStorage ('de-a11y', JSON, kein Cookie); ein Inline-Script
     im <head> wendet die Klassen bereits vor dem ersten Paint an.
     -------------------------------------------------------------------------- */

  var A11Y_KEY = 'de-a11y';
  var A11Y_FLAGS = ['contrast', 'gray', 'cvd', 'dys', 'links', 'motion'];
  var A11Y_SIZES = ['100%', '115%', '130%', '150%'];

  function initBarrierefreiheit() {
    var root = document.documentElement;
    var btn = document.getElementById('a11y-toggle');
    var panel = document.getElementById('a11y-panel');
    if (!btn || !panel) return;

    var closeBtn = document.getElementById('a11y-close');
    var resetBtn = document.getElementById('a11y-reset');
    var sizeDown = document.getElementById('a11y-size-down');
    var sizeUp = document.getElementById('a11y-size-up');
    var sizeVal = document.getElementById('a11y-size-val');
    var optButtons = panel.querySelectorAll('.a11y-opt');

    var state;
    try { state = JSON.parse(localStorage.getItem(A11Y_KEY) || '{}'); } catch (e) { state = {}; }
    state.size = Math.min(Math.max(state.size || 0, 0), A11Y_SIZES.length - 1);

    function save() {
      try { localStorage.setItem(A11Y_KEY, JSON.stringify(state)); } catch (e) { /* localStorage n/a */ }
    }

    /* Vorlesen per Klick (Web Speech API — Sprachausgabe des Geräts) */
    var voiceCurrent = null;
    function voiceStop() {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      if (voiceCurrent) { voiceCurrent.classList.remove('a11y-reading'); voiceCurrent = null; }
    }
    function voicePick() {
      var voices = window.speechSynthesis.getVoices().filter(function (v) {
        return v.lang && v.lang.toLowerCase().indexOf('de') === 0;
      });
      var local = voices.filter(function (v) { return v.localService; });
      return local[0] || voices[0] || null;
    }

    function apply() {
      for (var i = 0; i < A11Y_FLAGS.length; i++) {
        root.classList.toggle('a11y-' + A11Y_FLAGS[i], !!state[A11Y_FLAGS[i]]);
      }
      root.style.fontSize = state.size ? A11Y_SIZES[state.size] : '';
      for (var j = 0; j < optButtons.length; j++) {
        optButtons[j].setAttribute('aria-pressed', String(!!state[optButtons[j].getAttribute('data-opt')]));
      }
      sizeVal.innerHTML = A11Y_SIZES[state.size].replace('%', '&nbsp;%');
      sizeDown.disabled = state.size === 0;
      sizeUp.disabled = state.size === A11Y_SIZES.length - 1;
      if (!state.voice) voiceStop();
    }

    function oeffnen() {
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Einstellungen zur Barrierefreiheit schließen');
      closeBtn.focus();
    }
    function schliessen() {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Einstellungen zur Barrierefreiheit öffnen');
    }

    btn.addEventListener('click', function () {
      if (panel.hidden) { oeffnen(); } else { schliessen(); btn.focus(); }
    });
    closeBtn.addEventListener('click', function () { schliessen(); btn.focus(); });
    document.addEventListener('click', function (e) {
      if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) schliessen();
    });

    for (var k = 0; k < optButtons.length; k++) {
      (function (b) {
        b.addEventListener('click', function () {
          var opt = b.getAttribute('data-opt');
          state[opt] = !state[opt];
          if (opt === 'voice' && state.voice && !('speechSynthesis' in window)) {
            state.voice = false;
            var hint = document.getElementById('a11y-voice-hint');
            if (hint) hint.textContent = 'Ihr Browser stellt keine Sprachausgabe bereit — die Vorlesefunktion ist auf diesem Gerät nicht verfügbar.';
          }
          save(); apply();
        });
      })(optButtons[k]);
    }

    sizeDown.addEventListener('click', function () {
      if (state.size > 0) { state.size--; save(); apply(); }
    });
    sizeUp.addEventListener('click', function () {
      if (state.size < A11Y_SIZES.length - 1) { state.size++; save(); apply(); }
    });
    resetBtn.addEventListener('click', function () {
      state = { size: 0 }; save(); apply();
    });

    document.addEventListener('click', function (e) {
      if (!state.voice || !('speechSynthesis' in window)) return;
      if (panel.contains(e.target) || btn.contains(e.target)) return;
      if (e.target.closest && e.target.closest('.vorlesen-btn, .a11y-toggle, .a11y-panel, .scroll-top, .schnell-verlassen')) return;
      var el = e.target.closest && e.target.closest('p, h1, h2, h3, h4, dt, dd, li, figcaption, summary, a, button');
      if (!el) return;
      if (el.tagName === 'A' || el.tagName === 'BUTTON') e.preventDefault();
      voiceStop();
      var text = el.innerText || el.textContent;
      if (!text || !text.trim()) return;
      var u = new SpeechSynthesisUtterance(text.trim());
      u.lang = 'de-DE';
      u.rate = 0.95;
      var v = voicePick();
      if (v) u.voice = v;
      voiceCurrent = el;
      el.classList.add('a11y-reading');
      u.onend = u.onerror = function () {
        el.classList.remove('a11y-reading');
        if (voiceCurrent === el) voiceCurrent = null;
      };
      window.speechSynthesis.speak(u);
    }, true);

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (voiceCurrent) { voiceStop(); }
      else if (!panel.hidden) { schliessen(); btn.focus(); }
    });

    apply();
  }

  /* --------------------------------------------------------------------------
     4. Fortschrittsanzeige (Leitfaden-Seiten)
     -------------------------------------------------------------------------- */

  function initFortschritt() {
    var segmente = document.querySelectorAll('.fortschritt__segment');
    if (segmente.length === 0) return;

    var schritte = document.querySelectorAll('.schritt');
    if (schritte.length === 0) return;

    function aktualisiereForschritt() {
      var fensterMitte = window.innerHeight / 2;

      for (var i = 0; i < schritte.length; i++) {
        var rect = schritte[i].getBoundingClientRect();
        var schrittNummer = i + 1;
        var segment = document.querySelector('.fortschritt__segment[data-schritt="' + schrittNummer + '"]');
        if (!segment) continue;

        if (rect.bottom < fensterMitte) {
          // Schritt ist vorbei → fertig
          segment.classList.add('fortschritt__segment--fertig');
          segment.classList.remove('fortschritt__segment--aktiv');
        } else if (rect.top < fensterMitte) {
          // Schritt ist gerade sichtbar → aktiv
          segment.classList.add('fortschritt__segment--aktiv');
          segment.classList.remove('fortschritt__segment--fertig');
        } else {
          // Schritt kommt noch
          segment.classList.remove('fortschritt__segment--aktiv');
          segment.classList.remove('fortschritt__segment--fertig');
        }
      }
    }

    window.addEventListener('scroll', aktualisiereForschritt, { passive: true });
    aktualisiereForschritt();
  }

  /* --------------------------------------------------------------------------
     5. Akkordeon (aufklappbare Kacheln)
     -------------------------------------------------------------------------- */

  function initAkkordeon() {
    var koepfe = document.querySelectorAll('.akkordeon__kopf');
    for (var i = 0; i < koepfe.length; i++) {
      (function (kopf) {
        kopf.addEventListener('click', function () {
          var istOffen = kopf.getAttribute('aria-expanded') === 'true';
          var inhaltId = kopf.getAttribute('aria-controls');
          var inhalt = document.getElementById(inhaltId);
          if (!inhalt) return;

          kopf.setAttribute('aria-expanded', String(!istOffen));
          inhalt.setAttribute('data-open', String(!istOffen));
        });
      })(koepfe[i]);
    }
  }

  /* --------------------------------------------------------------------------
     6. Video-Fassade (DSGVO: YouTube lädt erst nach Klick)
     -------------------------------------------------------------------------- */

  function initVideoFassaden() {
    var buttons = document.querySelectorAll('.video-fassade[data-yt-id]');
    for (var i = 0; i < buttons.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-yt-id');
          if (!id) return;
          var titel = btn.getAttribute('data-yt-title') || 'Video';
          var wrap = document.createElement('div');
          wrap.className = 'video-eingebettet';
          var iframe = document.createElement('iframe');
          // nocookie-Domain: kein Tracking-Cookie ohne Wiedergabe
          iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
          iframe.title = titel;
          iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
          iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
          iframe.setAttribute('allowfullscreen', '');
          wrap.appendChild(iframe);
          btn.parentNode.replaceChild(wrap, btn);
        });
      })(buttons[i]);
    }
  }

  /* --------------------------------------------------------------------------
     7. Schnell verlassen (Schutz vor mitlesenden Personen)
     -------------------------------------------------------------------------- */

  // Neutrales Ziel bei „Schnell verlassen": unauffällig (Deutscher Wetterdienst),
  // datenschutzfreundliche, regionale Behördenseite. Bei Bedarf hier anpassen.
  var NEUTRAL_URL = 'https://www.dwd.de/';

  function initSchnellVerlassen() {
    var btn = document.getElementById('schnell-verlassen');
    if (!btn) return;
    function verlassen(e) {
      if (e) e.preventDefault();
      // Aktuelle Seite ersetzen, damit „Zurück" nicht hierher führt.
      window.location.replace(NEUTRAL_URL);
    }
    btn.addEventListener('click', verlassen);
    // Doppeltes Drücken der Esc-Taste als zusätzlicher Notausgang
    var letzteEsc = 0;
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var jetzt = e.timeStamp || 0;
      if (jetzt - letzteEsc < 600) { verlassen(); }
      letzteEsc = jetzt;
    });
  }

  // Passende Tastenkürzel je Betriebssystem/Browser einsetzen
  function initSicherSurfen() {
    var ink = document.getElementById('kbd-inkognito');
    var ver = document.getElementById('kbd-verlauf');
    if (!ink && !ver) return;
    var ua = navigator.userAgent || '';
    var isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || ua);
    var isFirefox = /Firefox/.test(ua);
    var mod = isMac ? '⌘' : 'Strg';        // ⌘ oder Strg
    var del = isMac ? '⌫' : 'Entf';         // ⌫ oder Entf
    var privTaste = isFirefox ? 'P' : 'N';       // Firefox: P, sonst N
    if (ink) ink.textContent = mod + ' + Umschalt + ' + privTaste;
    if (ver) ver.textContent = mod + ' + Umschalt + ' + del;
  }

  /* --------------------------------------------------------------------------
     8. PWA-Registrierung
     -------------------------------------------------------------------------- */

  function initPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () {
          // Service Worker konnte nicht registriert werden — kein Problem
        });
      });
    }
  }

  /* --------------------------------------------------------------------------
     Sprachauswahl — schließt bei Klick außerhalb und mit Esc. Das Menü ist ein
     natives <details> und funktioniert auch ganz ohne JavaScript.
     -------------------------------------------------------------------------- */
  function initSprachmenu() {
    var langMenu = document.querySelector('.lang-menu');
    if (!langMenu) return;
    document.addEventListener('click', function (e) {
      if (langMenu.open && !langMenu.contains(e.target)) langMenu.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && langMenu.open) {
        langMenu.open = false;
        var s = langMenu.querySelector('summary');
        if (s) s.focus();
      }
    });
  }

  /* --------------------------------------------------------------------------
     9. Initialisierung
     -------------------------------------------------------------------------- */

  document.addEventListener('DOMContentLoaded', function () {
    initSchnellVerlassen();
    initSicherSurfen();
    initNavigation();
    initSprachmenu();
    initVorlesen();
    initBarrierefreiheit();
    initFortschritt();
    initAkkordeon();
    initVideoFassaden();
    initScrollTop();
    initPWA();
  });

})();

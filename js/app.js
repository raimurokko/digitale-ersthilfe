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
     3. Barrierefreiheits-Panel
     -------------------------------------------------------------------------- */

  function initBarrierefreiheit() {
    var toggle = document.querySelector('.a11y-toggle');
    var optionen = document.getElementById('a11y-optionen');
    if (!toggle || !optionen) return;

    // Panel öffnen / schließen
    toggle.addEventListener('click', function () {
      var istOffen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!istOffen));
      optionen.setAttribute('data-open', String(!istOffen));
    });

    // Schließen bei Klick außerhalb
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.a11y-panel')) {
        toggle.setAttribute('aria-expanded', 'false');
        optionen.setAttribute('data-open', 'false');
      }
    });

    // Schließen bei Escape-Taste
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        optionen.setAttribute('data-open', 'false');
        toggle.focus();
      }
    });

    // Gespeicherte Einstellungen laden
    ladeEinstellungen();

    // Schalter initialisieren
    var schalter = document.querySelectorAll('.a11y-schalter');
    for (var i = 0; i < schalter.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          var istAn = btn.getAttribute('aria-checked') === 'true';
          btn.setAttribute('aria-checked', String(!istAn));

          var funktion = btn.getAttribute('data-a11y');
          wendeFunktionAn(funktion, !istAn);
          speichereEinstellungen();
        });
      })(schalter[i]);
    }
  }

  function wendeFunktionAn(funktion, aktiv) {
    var html = document.documentElement;

    switch (funktion) {
      case 'grosse-schrift':
        if (aktiv) {
          html.classList.add('grosse-schrift');
        } else {
          html.classList.remove('grosse-schrift');
        }
        break;

      case 'hoher-kontrast':
        if (aktiv) {
          html.classList.add('hoher-kontrast');
        } else {
          html.classList.remove('hoher-kontrast');
        }
        break;

      case 'vorlesen':
        if (aktiv) {
          // Gesamte Seite vorlesen
          var hauptinhalt = document.getElementById('hauptinhalt');
          if (hauptinhalt) {
            var text = textAusElement(hauptinhalt);
            if (text) vorlesenStarten(text, null);
          }
        } else {
          vorlesenStoppen();
        }
        break;
    }
  }

  function speichereEinstellungen() {
    try {
      var einstellungen = {};
      var schalter = document.querySelectorAll('.a11y-schalter');
      for (var i = 0; i < schalter.length; i++) {
        var funktion = schalter[i].getAttribute('data-a11y');
        einstellungen[funktion] = schalter[i].getAttribute('aria-checked') === 'true';
      }
      localStorage.setItem('digitale-ersthilfe-a11y', JSON.stringify(einstellungen));
    } catch (e) {
      // localStorage nicht verfügbar — kein Problem
    }
  }

  function ladeEinstellungen() {
    try {
      var gespeichert = localStorage.getItem('digitale-ersthilfe-a11y');
      if (!gespeichert) return;

      var einstellungen = JSON.parse(gespeichert);
      var schalter = document.querySelectorAll('.a11y-schalter');
      for (var i = 0; i < schalter.length; i++) {
        var funktion = schalter[i].getAttribute('data-a11y');
        if (einstellungen[funktion] === true) {
          schalter[i].setAttribute('aria-checked', 'true');
          // Vorlesen nicht automatisch beim Laden starten
          if (funktion !== 'vorlesen') {
            wendeFunktionAn(funktion, true);
          }
        }
      }
    } catch (e) {
      // Fehler beim Laden — ignorieren
    }
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
     9. Initialisierung
     -------------------------------------------------------------------------- */

  document.addEventListener('DOMContentLoaded', function () {
    initSchnellVerlassen();
    initSicherSurfen();
    initNavigation();
    initVorlesen();
    initBarrierefreiheit();
    initFortschritt();
    initAkkordeon();
    initVideoFassaden();
    initPWA();
  });

})();

/* ==========================================================================
   Digitale Ersthilfe — Service Worker
   Offline-Fähigkeit: Cache-first für alle Seiten und Ressourcen
   ========================================================================== */

var CACHE_NAME = 'digitale-ersthilfe-v38';

var DATEIEN_ZUM_CACHEN = [
  '/',
  '/index.html',
  '/sprachen/de/',
  '/sprachen/de/index.html',
  '/sprachen/de/fachinfo.html',
  '/sprachen/de/impressum.html',
  '/sprachen/de/kontaktstellen.html',
  '/sprachen/de/leitfaden-account-hack.html',
  '/sprachen/de/leitfaden-bildbasierte-gewalt.html',
  '/sprachen/de/leitfaden-cybermobbing.html',
  '/sprachen/de/leitfaden-digitale-trennung.html',
  '/sprachen/de/leitfaden-doxing.html',
  '/sprachen/de/leitfaden-echo-stalking.html',
  '/sprachen/de/leitfaden-handy-verlust.html',
  '/sprachen/de/leitfaden-identitaetsdiebstahl.html',
  '/sprachen/de/leitfaden-kinder-jugend.html',
  '/sprachen/de/leitfaden-online-betrug.html',
  '/sprachen/de/leitfaden-phishing-signal-whatsapp.html',
  '/sprachen/de/leitfaden-ransomware.html',
  '/sprachen/de/leitfaden-romance-scam.html',
  '/sprachen/de/leitfaden-schockanruf.html',
  '/sprachen/de/leitfaden-sextortion.html',
  '/sprachen/de/leitfaden-sim-swapping.html',
  '/sprachen/de/leitfaden-stalkerware.html',
  '/sprachen/de/leitfaden-stalking.html',
  '/sprachen/de/leitfaden-vertrauliche-beweissicherung.html',
  '/sprachen/de/leitfaeden.html',
  '/sprachen/de/ueber-uns.html',
  '/sprachen/en/',
  '/sprachen/en/index.html',
  '/sprachen/en/fachinfo.html',
  '/sprachen/en/impressum.html',
  '/sprachen/en/kontaktstellen.html',
  '/sprachen/en/leitfaden-account-hack.html',
  '/sprachen/en/leitfaden-bildbasierte-gewalt.html',
  '/sprachen/en/leitfaden-cybermobbing.html',
  '/sprachen/en/leitfaden-digitale-trennung.html',
  '/sprachen/en/leitfaden-doxing.html',
  '/sprachen/en/leitfaden-echo-stalking.html',
  '/sprachen/en/leitfaden-handy-verlust.html',
  '/sprachen/en/leitfaden-identitaetsdiebstahl.html',
  '/sprachen/en/leitfaden-kinder-jugend.html',
  '/sprachen/en/leitfaden-online-betrug.html',
  '/sprachen/en/leitfaden-phishing-signal-whatsapp.html',
  '/sprachen/en/leitfaden-ransomware.html',
  '/sprachen/en/leitfaden-romance-scam.html',
  '/sprachen/en/leitfaden-schockanruf.html',
  '/sprachen/en/leitfaden-sextortion.html',
  '/sprachen/en/leitfaden-sim-swapping.html',
  '/sprachen/en/leitfaden-stalkerware.html',
  '/sprachen/en/leitfaden-stalking.html',
  '/sprachen/en/leitfaden-vertrauliche-beweissicherung.html',
  '/sprachen/en/leitfaeden.html',
  '/sprachen/en/ueber-uns.html',
  '/sprachen/ru/',
  '/sprachen/ru/index.html',
  '/sprachen/ru/fachinfo.html',
  '/sprachen/ru/impressum.html',
  '/sprachen/ru/kontaktstellen.html',
  '/sprachen/ru/leitfaden-account-hack.html',
  '/sprachen/ru/leitfaden-bildbasierte-gewalt.html',
  '/sprachen/ru/leitfaden-cybermobbing.html',
  '/sprachen/ru/leitfaden-digitale-trennung.html',
  '/sprachen/ru/leitfaden-doxing.html',
  '/sprachen/ru/leitfaden-echo-stalking.html',
  '/sprachen/ru/leitfaden-handy-verlust.html',
  '/sprachen/ru/leitfaden-identitaetsdiebstahl.html',
  '/sprachen/ru/leitfaden-kinder-jugend.html',
  '/sprachen/ru/leitfaden-online-betrug.html',
  '/sprachen/ru/leitfaden-phishing-signal-whatsapp.html',
  '/sprachen/ru/leitfaden-ransomware.html',
  '/sprachen/ru/leitfaden-romance-scam.html',
  '/sprachen/ru/leitfaden-schockanruf.html',
  '/sprachen/ru/leitfaden-sextortion.html',
  '/sprachen/ru/leitfaden-sim-swapping.html',
  '/sprachen/ru/leitfaden-stalkerware.html',
  '/sprachen/ru/leitfaden-stalking.html',
  '/sprachen/ru/leitfaden-vertrauliche-beweissicherung.html',
  '/sprachen/ru/leitfaeden.html',
  '/sprachen/ru/ueber-uns.html',
  '/sprachen/uk/',
  '/sprachen/uk/index.html',
  '/sprachen/uk/fachinfo.html',
  '/sprachen/uk/impressum.html',
  '/sprachen/uk/kontaktstellen.html',
  '/sprachen/uk/leitfaden-account-hack.html',
  '/sprachen/uk/leitfaden-bildbasierte-gewalt.html',
  '/sprachen/uk/leitfaden-cybermobbing.html',
  '/sprachen/uk/leitfaden-digitale-trennung.html',
  '/sprachen/uk/leitfaden-doxing.html',
  '/sprachen/uk/leitfaden-echo-stalking.html',
  '/sprachen/uk/leitfaden-handy-verlust.html',
  '/sprachen/uk/leitfaden-identitaetsdiebstahl.html',
  '/sprachen/uk/leitfaden-kinder-jugend.html',
  '/sprachen/uk/leitfaden-online-betrug.html',
  '/sprachen/uk/leitfaden-phishing-signal-whatsapp.html',
  '/sprachen/uk/leitfaden-ransomware.html',
  '/sprachen/uk/leitfaden-romance-scam.html',
  '/sprachen/uk/leitfaden-schockanruf.html',
  '/sprachen/uk/leitfaden-sextortion.html',
  '/sprachen/uk/leitfaden-sim-swapping.html',
  '/sprachen/uk/leitfaden-stalkerware.html',
  '/sprachen/uk/leitfaden-stalking.html',
  '/sprachen/uk/leitfaden-vertrauliche-beweissicherung.html',
  '/sprachen/uk/leitfaeden.html',
  '/sprachen/uk/ueber-uns.html',
  '/sprachen/tr/',
  '/sprachen/tr/index.html',
  '/sprachen/tr/fachinfo.html',
  '/sprachen/tr/impressum.html',
  '/sprachen/tr/kontaktstellen.html',
  '/sprachen/tr/leitfaden-account-hack.html',
  '/sprachen/tr/leitfaden-bildbasierte-gewalt.html',
  '/sprachen/tr/leitfaden-cybermobbing.html',
  '/sprachen/tr/leitfaden-digitale-trennung.html',
  '/sprachen/tr/leitfaden-doxing.html',
  '/sprachen/tr/leitfaden-echo-stalking.html',
  '/sprachen/tr/leitfaden-handy-verlust.html',
  '/sprachen/tr/leitfaden-identitaetsdiebstahl.html',
  '/sprachen/tr/leitfaden-kinder-jugend.html',
  '/sprachen/tr/leitfaden-online-betrug.html',
  '/sprachen/tr/leitfaden-phishing-signal-whatsapp.html',
  '/sprachen/tr/leitfaden-ransomware.html',
  '/sprachen/tr/leitfaden-romance-scam.html',
  '/sprachen/tr/leitfaden-schockanruf.html',
  '/sprachen/tr/leitfaden-sextortion.html',
  '/sprachen/tr/leitfaden-sim-swapping.html',
  '/sprachen/tr/leitfaden-stalkerware.html',
  '/sprachen/tr/leitfaden-stalking.html',
  '/sprachen/tr/leitfaden-vertrauliche-beweissicherung.html',
  '/sprachen/tr/leitfaeden.html',
  '/sprachen/tr/ueber-uns.html',
  '/sprachen/it/',
  '/sprachen/it/index.html',
  '/sprachen/it/fachinfo.html',
  '/sprachen/it/impressum.html',
  '/sprachen/it/kontaktstellen.html',
  '/sprachen/it/leitfaden-account-hack.html',
  '/sprachen/it/leitfaden-bildbasierte-gewalt.html',
  '/sprachen/it/leitfaden-cybermobbing.html',
  '/sprachen/it/leitfaden-digitale-trennung.html',
  '/sprachen/it/leitfaden-doxing.html',
  '/sprachen/it/leitfaden-echo-stalking.html',
  '/sprachen/it/leitfaden-handy-verlust.html',
  '/sprachen/it/leitfaden-identitaetsdiebstahl.html',
  '/sprachen/it/leitfaden-kinder-jugend.html',
  '/sprachen/it/leitfaden-online-betrug.html',
  '/sprachen/it/leitfaden-phishing-signal-whatsapp.html',
  '/sprachen/it/leitfaden-ransomware.html',
  '/sprachen/it/leitfaden-romance-scam.html',
  '/sprachen/it/leitfaden-schockanruf.html',
  '/sprachen/it/leitfaden-sextortion.html',
  '/sprachen/it/leitfaden-sim-swapping.html',
  '/sprachen/it/leitfaden-stalkerware.html',
  '/sprachen/it/leitfaden-stalking.html',
  '/sprachen/it/leitfaden-vertrauliche-beweissicherung.html',
  '/sprachen/it/leitfaeden.html',
  '/sprachen/it/ueber-uns.html',
  '/css/style.css',
  '/js/app.js',
  '/manifest.json',
  '/assets/fonts/inter-latin.woff2',
  '/assets/fonts/inter-latin-ext.woff2',
  '/assets/fonts/plus-jakarta-sans-latin.woff2',
  '/assets/fonts/plus-jakarta-sans-latin-ext.woff2',
  '/assets/fonts/opendyslexic-regular.woff2',
  '/assets/fonts/opendyslexic-bold.woff2',
  '/assets/fonts/opendyslexic-italic.woff2',
  '/assets/fonts/opendyslexic-bold-italic.woff2',
  '/assets/icons/icon.svg',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/favicon-32.png'
];

// Installation: Alle wichtigen Dateien vorab cachen
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(DATEIEN_ZUM_CACHEN);
    })
  );
  self.skipWaiting();
});

// Aktivierung: Alte Caches löschen
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNamen) {
      return Promise.all(
        cacheNamen
          .filter(function (name) {
            return name !== CACHE_NAME;
          })
          .map(function (name) {
            return caches.delete(name);
          })
      );
    })
  );
  self.clients.claim();
});

// Abruf: Cache-first, dann Netzwerk
self.addEventListener('fetch', function (event) {
  // Nur GET-Anfragen cachen
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      if (cachedResponse) {
        // Im Hintergrund aktualisieren (stale-while-revalidate)
        fetch(event.request).then(function (networkResponse) {
          if (networkResponse && networkResponse.ok) {
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(function () {
          // Netzwerkfehler — kein Problem, Cache wird verwendet
        });

        return cachedResponse;
      }

      // Nicht im Cache → aus dem Netzwerk laden und cachen
      return fetch(event.request).then(function (networkResponse) {
        if (networkResponse && networkResponse.ok) {
          var responseKopie = networkResponse.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseKopie);
          });
        }
        return networkResponse;
      }).catch(function () {
        // Offline und nicht im Cache → Kontaktstellen-Seite als Fallback
        if (event.request.headers.get('accept').indexOf('text/html') !== -1) {
          return caches.match('/kontaktstellen.html');
        }
      });
    })
  );
});

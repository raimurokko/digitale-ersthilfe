/* ==========================================================================
   Digitale Ersthilfe — Service Worker
   Offline-Fähigkeit: Cache-first für alle Seiten und Ressourcen
   ========================================================================== */

var CACHE_NAME = 'digitale-ersthilfe-v30';

var DATEIEN_ZUM_CACHEN = [
  '/',
  '/index.html',
  '/kontaktstellen.html',
  '/leitfaeden.html',
  '/leitfaden-echo-stalking.html',
  '/leitfaden-phishing-signal-whatsapp.html',
  '/leitfaden-vertrauliche-beweissicherung.html',
  '/leitfaden-account-hack.html',
  '/leitfaden-stalking.html',
  '/leitfaden-bildbasierte-gewalt.html',
  '/leitfaden-sextortion.html',
  '/leitfaden-stalkerware.html',
  '/leitfaden-digitale-trennung.html',
  '/leitfaden-cybermobbing.html',
  '/leitfaden-kinder-jugend.html',
  '/leitfaden-doxing.html',
  '/leitfaden-handy-verlust.html',
  '/leitfaden-identitaetsdiebstahl.html',
  '/leitfaden-online-betrug.html',
  '/leitfaden-ransomware.html',
  '/leitfaden-romance-scam.html',
  '/leitfaden-sim-swapping.html',
  '/leitfaden-schockanruf.html',
  '/fachinfo.html',
  '/ueber-uns.html',
  '/impressum.html',
  '/en/',
  '/en/index.html',
  '/en/kontaktstellen.html',
  '/en/leitfaeden.html',
  '/en/fachinfo.html',
  '/en/ueber-uns.html',
  '/en/impressum.html',
  '/en/leitfaden-account-hack.html',
  '/en/leitfaden-bildbasierte-gewalt.html',
  '/en/leitfaden-cybermobbing.html',
  '/en/leitfaden-digitale-trennung.html',
  '/en/leitfaden-doxing.html',
  '/en/leitfaden-echo-stalking.html',
  '/en/leitfaden-handy-verlust.html',
  '/en/leitfaden-identitaetsdiebstahl.html',
  '/en/leitfaden-kinder-jugend.html',
  '/en/leitfaden-online-betrug.html',
  '/en/leitfaden-phishing-signal-whatsapp.html',
  '/en/leitfaden-ransomware.html',
  '/en/leitfaden-romance-scam.html',
  '/en/leitfaden-schockanruf.html',
  '/en/leitfaden-sextortion.html',
  '/en/leitfaden-sim-swapping.html',
  '/en/leitfaden-stalkerware.html',
  '/en/leitfaden-stalking.html',
  '/en/leitfaden-vertrauliche-beweissicherung.html',
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

// Service Worker for Stjernepilot PWA
// Øk versjonsnummeret her hver gang du pusher oppdateringer til GitHub
const CACHE_VERSION = 'stjernepilot-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  'https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700;900&family=Orbitron:wght@600;900&display=swap'
];

// Installer: cache alle filer og aktiver umiddelbart
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(ASSETS).catch(err => {
        console.log('Noen ressurser ble ikke cachet:', err);
      }))
      .then(() => self.skipWaiting()) // Ikke vent - ta over med en gang
  );
});

// Aktiver: slett alle gamle cacher og ta kontroll over alle faner
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== CACHE_VERSION)
          .map(k => {
            console.log('Sletter gammel cache:', k);
            return caches.delete(k);
          })
      ))
      .then(() => self.clients.claim()) // Ta kontroll over åpne faner umiddelbart
  );
});

// Fetch: network-first for index.html (får alltid siste versjon),
// cache-first for alt annet (ikoner, fonter osv.)
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isIndexHtml = url.pathname.endsWith('/') || url.pathname.endsWith('index.html');

  if (isIndexHtml) {
    // Network-first: prøv å hente ny versjon, fall tilbake til cache hvis offline
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
  } else {
    // Cache-first: bruk cachet versjon, oppdater i bakgrunnen
    event.respondWith(
      caches.match(event.request).then(cached => {
        const networkFetch = fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => null);

        return cached || networkFetch;
      })
    );
  }
});

// Service Worker for Stjernepilot PWA
const CACHE_NAME = 'stjernepilot-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&family=Space+Mono:wght@400;700&display=swap'
];

// Installer: cache filene
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS).catch(err => {
        // Hvis noen ressurser feiler (f.eks. fonter), fortsett uansett
        console.log('Noen ressurser ble ikke cachet:', err);
      }))
      .then(() => self.skipWaiting())
  );
});

// Aktiver: rydd gamle cacher
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first strategi
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache nye ressurser dynamisk (f.eks. fonter)
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback: returner index.html for navigasjoner
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

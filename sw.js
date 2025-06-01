const CACHE_NAME = 'my-pwa-cache-v1';
const FILES_TO_CACHE = [
  '/my-pwa-app/',
  '/my-pwa-app/index.html',
  '/my-pwa-app/style.css',
  '/my-pwa-app/script.js',
  '/my-pwa-app/jquery.min.js',
  '/my-pwa-app/register1.html',
  '/my-pwa-app/manifest.json'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then(response => {
      return response || fetch(evt.request);
    })
  );
});

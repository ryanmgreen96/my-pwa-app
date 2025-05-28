const CACHE_NAME = 'pwa-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/jquery.min.js',
  '/register1.html',
  '/manifest.json',
  '/icon.png'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => response || fetch(evt.request))
  );
});

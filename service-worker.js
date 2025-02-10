const CACHE_NAME = 'legaly-pwa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/logo.jpg',
  // Add other assets (CSS, JS, images) here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

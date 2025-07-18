
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('luna-ai-cache').then(cache => {
      return cache.addAll([
        '/',
        '/New.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

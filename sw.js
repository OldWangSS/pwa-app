const CACHE = 'meal-v2';
const FILES = ['/app/', '/app/index.html', '/app/styles.css', '/app/app.js', '/app/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

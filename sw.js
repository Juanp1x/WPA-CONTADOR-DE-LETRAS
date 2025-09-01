const CACHE_NAME = 'contador-letras-v1';
const urlsToCache = [
  '/',
  './index.html',
  'https://images.icon-icons.com/3251/PNG/512/text_word_count_regular_icon_203130.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

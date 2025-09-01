const CACHE_NAME = 'contador-letras-v1';
const urlsToCache = [
  '/tu-repositorio/',
  '/tu-repositorio/index.html',
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
        // Devuelve el recurso en cache o haz una petición network
        return response || fetch(event.request);
      })
  );
});

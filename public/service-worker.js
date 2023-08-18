const CACHE_NAME = 'PWA-Industria';
const urlsToCache = [
  '../index.html',  // Ruta relativa al index.html
  './manifest.json', // Ruta relativa al manifest.json
  // Agrega aquí los recursos estáticos que deseas cachear
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      return cache.addAll(urlsToCache)
        .catch((error) => {
          console.error('Error al agregar recursos a la caché:', error);
        });
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
const CACHE_NAME = 'PWA-Industria';
const urlsToCache = [
  '/',
  './index.html',  // Ajusta la ruta a la ubicación correcta de index.html
  // Agrega aquí los recursos estáticos que deseas cachear
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
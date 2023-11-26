// Para decirle a la caché que guardar
let cacheName = "computerStyleV1";
let urlsToCache = [
    "/",
    "/index.html",
    "/css/style.css",
    "/images/angular.png",
    "/images/php.png",
    "/images/javascript.png",
    "/images/logo.png"
];

// Instalamos la caché
self.addEventListener('install', (event) => {
    console.log("service worker instalado!");
    event.waitUntil(
        caches
            .open(cacheName)
            .then((cache) =>
                cache.addAll(urlsToCache),
            ),
    );
});



self.addEventListener('activate', (event) => {
    console.log("service worker activado!");
    
});

// caches.open('computerStyleV2')
// .then(cache => {
//     cache.add('css/style.css');
//     // Guardado múltiple
//     cache.addAll(['css/style.css', 'images/angular.png'])
// });

// self.addEventListener('install', (event) => {
//     // Precache assets on install
//     event.waitUntil(caches.open(cacheName).then((cache) => {
//         return cache.addAll(urlsToCache);
//     }));
// });

self.addEventListener('fetch', (event) => {
    console.log("fetch");
    const url = new URL(event.request.url);
    const isPrecachedRequest = urlsToCache.includes(url.pathname);

    if (isPrecachedRequest) {
        // Grab the precached asset from the cache
        event.respondWith(caches.open(cacheName).then((cache) => {
            return cache.match(event.request.url);
        }));
    } else {
        // Go to the network
        return;
    }
});


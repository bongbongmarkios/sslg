const CACHE_NAME = 'qr-code-scanner-cache-v1';
const urlsToCache = [
    '/Scanner.html',
    '/Files.html',
    '/Files.css',
    '/html5-qrcode.min.js',
    '/xlsx.full.min.js',
    '/beep.mp3'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});

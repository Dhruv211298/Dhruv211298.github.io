const filesToCache = [
  '/',
  'img/100.jpg',
  'img/gujaratpolice.png',
  'img/ACP.jpg',
  'img/flagc.jpg',
  'img/user.png',
  'css/bootstrap.css',
  'css/homestyle.css',
  'css/lodgestyle.css',
  'css/status.css',
  'css/viewstyle.css',
  'index.php',
  'comp.php',
  'display.php',
  'lodge.php',
  'loged.php',
  'registerid.php',
  'showstatus.php',
  'status.php',
  'view.php'
];
const staticCacheName = 'v1-cache';

self.addEventListener('install', event => {
  console.log('Attempting to insg ache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});

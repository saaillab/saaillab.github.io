const CACHE_NAME = 'saail-lab-v2';
const CORE_SHELL = [
  '/',
  '/tools/',
  '/datasets/',
  '/publications/',
  '/news/',
  '/collaborations/',
  '/resources/',
  '/site.webmanifest',
  '/favicon.svg',
  '/images/logo/saail-crest.png',
  '/vendor/ort/ort.wasm.min.js',
  '/vendor/ort/ort-wasm-simd-threaded.mjs'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_SHELL.map((u) => new Request(u, { cache: 'reload' }))).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Cache-first with background refresh for ONNX weights, demo imagery, and Astro assets
  if (
    url.pathname.startsWith('/models/') ||
    url.pathname.startsWith('/vendor/') ||
    url.pathname.startsWith('/images/demo/') ||
    url.pathname.startsWith('/_astro/')
  ) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) {
          event.waitUntil(
            fetch(req).then((res) => {
              if (res && res.ok) {
                return caches.open(CACHE_NAME).then((c) => c.put(req, res.clone()));
              }
            }).catch(() => {})
          );
          return cached;
        }
        return fetch(req).then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return res;
        });
      })
    );
    return;
  }

  // Network-first with cached fallback for HTML navigations
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((c) => c || caches.match('/')))
    );
  }
});

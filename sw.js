self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Hanya bypass untuk PWA dasar agar bisa diinstal
  e.respondWith(fetch(e.request).catch(() => new Response("Mode Offline tidak didukung. Silakan nyalakan internet.")));
});
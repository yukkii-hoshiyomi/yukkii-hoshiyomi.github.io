const C='helio-banmen-v1',P='helio-banmen-7f3a9c2e51b8d406';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./helio-banmen-7f3a9c2e51b8d406.html','./helio-banmen-7f3a9c2e51b8d406-manifest.json','./helio-banmen-7f3a9c2e51b8d406-icon.png'])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(!e.request.url.includes(P))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
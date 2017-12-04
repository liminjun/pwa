self.addEventListener('install',function(event){
    console.log('[Serivce Worker] Installing Service Worker...',event);
});

self.addEventListener('activate',function(event){
    console.log('[Serivce Worker] Activating Service Worker...',event);
    return self.clients.claim();
});

self.addEventListener('fetch',function(event){
    console.log('[Serivce Worker] Fetching Someting...',event);
    event.respondWith(fetch(event.request));
    
});
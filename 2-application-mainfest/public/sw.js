self.addEventListener('install',function(event){
    console.log('[Serivce Worker] Installing Service Worker...',event);
    event.waitUntil(
        caches.open("static")
        .then(function(cache){
            console.log("[Service Workder] Precaching App Sheel.");
            cache.add("/");
            cache.add("/index.html");
            cache.add("/src/js/app.js");
        })
    );
});

self.addEventListener('activate',function(event){
    console.log('[Serivce Worker] Activating Service Worker...',event);
    return self.clients.claim();
});

self.addEventListener('fetch',function(event){
    console.log('[Serivce Worker] Fetching Someting...',event);
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response){
                return response;
            }else{
                return fetch(event.request);
            }
        })
    );
    
});
self.addEventListener('install',function(event){
    console.log('[Serivce Worker] Installing Service Worker...',event);
    event.waitUntil(
        caches.open("static")
        .then(function(cache){
            console.log("[Service Workder] Precaching App Sheel.");

            cache.add("/index.html");
            return cache.addAll([
                '/',
                '/index.html',
                '/src/js/app.js',
                '/src/js/feed.js',
                '/src/js/promise.js',
                '/src/js/fetch.js',
                '/src/js/material.min.js',
                '/src/css/app.css',
                '/src/css/feed.css',
                '/src/css/help.css',
                '/src/images/main-image.jpg',
                'https://fonts.googleapis.com/css?family=Roboto:400,700',
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css',
                '/favicon.ico'
            ]);

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
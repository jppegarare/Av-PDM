let cache = "av-pdm";
let arqvcache = ["/" , "/index.html", "/style.css", "/js/main.js"]

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cache).then(function (cache) {
            return cache.addAll(arqvcache)
        })
    )
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    )
})
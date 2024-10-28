let cache = "av-pdm";
let arqvcache = ["/" , "/index", "/style.css", "/js/main.js", "/horario", "/pe"]

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
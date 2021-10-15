const CACHE_NAME = "Aref_v1";

self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "./",
        "./favicon.png",
        // "/assets/",
        // "./assets/fonts/",
        "./assets/fonts/Montserrat_Bold.woff2",
        "./assets/fonts/Montserrat.woff2",
        "./assets/fonts/Vazir_FD.woff2",
        // "./assets/images/",
        "./assets/images/avatar3.jpg",
        "./assets/images/avatar4.jpg",
        "./assets/images/avatar5.jpg",
        "./assets/images/avatar6.jpg",
        "./assets/images/avatar7.jpg",
      ]); 
    })
  );
  // self.skipWaiting();
});


self.addEventListener("activate", (event) => {
  console.log("V1 now ready to handle fetches!");
  event.waitUntil(clients.claim()); 
});


self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else{
        return fetch(event.request);
      }
    })
  );
});

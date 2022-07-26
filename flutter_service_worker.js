'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "50ba4e4c881a2866155f83241d86449b",
"index.html": "4c55122b2bed55340ea7718eb5c2b128",
"/": "4c55122b2bed55340ea7718eb5c2b128",
"main.dart.js": "c60090482225662899cb3bfb18e9da52",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b3510f1aceed1ef2d8ba8b0b440dc36f",
"assets/images/fuchsia.png": "5766257a7e7d0e34cb279b142893e380",
"assets/images/test.GIF": "808565a42e93aa634c2e846e717fd315",
"assets/images/apple1.png": "d4615d9d3602c68c49bd50d0e827075c",
"assets/images/git.png": "c42b7c1740b63a7b3e39336c5ed80fcb",
"assets/images/video.GIF": "a8982193477a195086f4a1eecda1796e",
"assets/images/android1.png": "ea308499da8ce616d57b4d3831c49aaf",
"assets/images/flutter.png": "646231c7b3e14f0959ac43175dfcf994",
"assets/images/test23.GIF": "660f6832fa644d3e55e29eb0d1b457ab",
"assets/images/firebase.png": "0e4792f1b38576bce30728eec593a301",
"assets/images/java.png": "0414fcd53fdb6903fb57134fdd8a9af2",
"assets/images/android.png": "f1234fcd35d0b64159d16b91c08a9efc",
"assets/images/test1.jpg": "f1e74f1ffbe0633572690c16a9b2488c",
"assets/images/mohit_2.png": "f6177add7d6311e1a66f6756092b4e65",
"assets/images/mac.png": "d4615d9d3602c68c49bd50d0e827075c",
"assets/images/apple.png": "dc437dad147e269e2831c512c82359ff",
"assets/images/iphone.png": "2e254aa74e2a13501b21a696d55f2d8b",
"assets/images/test12.gif": "2e1c0731748906f6df854a0bbc218fc1",
"assets/images/dart.png": "0a4777b993a114d9b9870727398bcac6",
"assets/images/iphone1.png": "c6b97a70d682819c1fe7cf0dadf10116",
"assets/AssetManifest.json": "234bf9c98e8ad056b65fa1776e28416d",
"assets/NOTICES": "47d65bfc65780d521fc47e7d64c29a72",
"assets/audio/audio_2.mp3": "d91899a7e609ee2edee8c90b5449e88a",
"assets/audio/audio_1.mp3": "2aebb5ceade5e11b657649e796b0c76d",
"assets/FontManifest.json": "71d21cf70608a928b8abded3599319ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/Agustina.ttf": "dc2e22aeb9024b30a058c690a7f9f7ba",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/fuchsia.png": "5766257a7e7d0e34cb279b142893e380",
"assets/assets/images/test.GIF": "808565a42e93aa634c2e846e717fd315",
"assets/assets/images/apple1.png": "d4615d9d3602c68c49bd50d0e827075c",
"assets/assets/images/git.png": "c42b7c1740b63a7b3e39336c5ed80fcb",
"assets/assets/images/IMG_7.png": "ecf9043c44b23ad5da28bf49e32182fb",
"assets/assets/images/video.GIF": "a8982193477a195086f4a1eecda1796e",
"assets/assets/images/android1.png": "ea308499da8ce616d57b4d3831c49aaf",
"assets/assets/images/flutter.png": "646231c7b3e14f0959ac43175dfcf994",
"assets/assets/images/IMG_5.png": "2370024356f371c8901e78be1f81409b",
"assets/assets/images/mohit_5.jpg": "10972680f6962ddfce3ad7073a606138",
"assets/assets/images/mohit_4.png": "97971938f652869ffb8b1209448edbc3",
"assets/assets/images/test23.GIF": "660f6832fa644d3e55e29eb0d1b457ab",
"assets/assets/images/firebase.png": "0e4792f1b38576bce30728eec593a301",
"assets/assets/images/java.png": "0414fcd53fdb6903fb57134fdd8a9af2",
"assets/assets/images/android.png": "f1234fcd35d0b64159d16b91c08a9efc",
"assets/assets/images/test1.jpg": "f1e74f1ffbe0633572690c16a9b2488c",
"assets/assets/images/mohit_2.png": "f6177add7d6311e1a66f6756092b4e65",
"assets/assets/images/mac.png": "d4615d9d3602c68c49bd50d0e827075c",
"assets/assets/images/video_7.GIF": "0054494b3fa31102e45e0e27789bb32b",
"assets/assets/images/apple.png": "dc437dad147e269e2831c512c82359ff",
"assets/assets/images/iphone.png": "2e254aa74e2a13501b21a696d55f2d8b",
"assets/assets/images/video_1.GIF": "36fd9d185c32a8c291ee20f28c6fa4dd",
"assets/assets/images/bg1.jpg": "56ae465a65b5ea1b9edb7f37591f7982",
"assets/assets/images/video_2.GIF": "e5726343a57e9c3a6ca21ad6e7da00e7",
"assets/assets/images/IMG_8.png": "3bd658ad5da72fbe8e4f260ffc6f8b75",
"assets/assets/images/mohit.GIF": "965fac72666b39534c2850f772559810",
"assets/assets/images/dart.png": "0a4777b993a114d9b9870727398bcac6",
"assets/assets/images/iphone1.png": "c6b97a70d682819c1fe7cf0dadf10116",
"assets/assets/images/bg.jpg": "beb96020b840b5d958239f17f0f3389f",
"assets/assets/audio/audio_4.mp3": "04526237f1d3fb8135ac7d433b4354ef",
"assets/assets/audio/audio_3.mp3": "d936791588c4f2000b73e324fd8f4443",
"assets/assets/fonts/Agustina.ttf": "dc2e22aeb9024b30a058c690a7f9f7ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

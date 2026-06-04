'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1c75818dd9c36a4b106c62f1b688b140",
"assets/AssetManifest.bin.json": "6e0183b16860e3c051e6b5090c26e000",
"assets/AssetManifest.json": "9f526244db9ded9730d3dbe9f25b81be",
"assets/assets/fonts/cairo/Cairo-Bold.ttf": "08f051a1822e014b22374926f1406d01",
"assets/assets/fonts/cairo/Cairo-VariableFont.ttf": "8ea542a54876564f49e9a90cd90ceecf",
"assets/assets/fonts/cairo/OFL.txt": "96fca5cd1b789b26be6b4d097b9f6a0c",
"assets/assets/fonts/kumbh_sans/KumbhSans-VariableFont.ttf": "521b2c0fcef137be7ccc7b0e51f21529",
"assets/assets/fonts/kumbh_sans/OFL.txt": "06ddf38e248f78ac7d34321efa529fc2",
"assets/assets/icons/account_detail.svg": "8df2301ddc9e8369fcaa17c0794c6437",
"assets/assets/icons/building.svg": "ad51bfeb43d7c1582fa1a0f621026d85",
"assets/assets/icons/cards.svg": "ad103ac5f9892ae1ce40812a8dea189e",
"assets/assets/icons/cards_active.svg": "593523d577d18e915d51739fd8081fab",
"assets/assets/icons/coins-stacked-02.svg": "928e9989325eae5c593708aa56eb4cd4",
"assets/assets/icons/contact_empty.svg": "0255c38c016b4f9db90a32dc99b1d212",
"assets/assets/icons/credit_card.svg": "b68aa2cfcd6034fe2248b329298f6192",
"assets/assets/icons/def_icon.png": "1d2b287424a3ce65dc8ab882cf614575",
"assets/assets/icons/delete.svg": "2dc316ddfa068bed7ce3416ec3bdc9fb",
"assets/assets/icons/drawer_icon.svg": "8a245c8595ab06e8157f01957f23ed5b",
"assets/assets/icons/eye_closed.svg": "c2b7922444440d73edfb2799b9a1f299",
"assets/assets/icons/eye_open.svg": "10805221f03dc072c580d2e6b48e7382",
"assets/assets/icons/flash.svg": "12bcf9bb2f2510cada625234c6f207ed",
"assets/assets/icons/home.svg": "e314ecc24590a1a16241359818ea770d",
"assets/assets/icons/home_active.svg": "6284c581801d00ebe9dfacf4f5c9bbda",
"assets/assets/icons/ic%2520home.svg": "494c90aa1b6ce8aee4ed31c63d25bd91",
"assets/assets/icons/ic_alert_octagon.svg": "e1a5dc7d316bc2f8d3d64ea6c03dc727",
"assets/assets/icons/ic_arrow_get.svg": "0a3cb563b31df7e616834eed1ec4f94f",
"assets/assets/icons/ic_arrow_next.svg": "a50afb5fea5be65257dd1ab72fb0fb95",
"assets/assets/icons/ic_arrow_send.svg": "e8b64e0e79d494ec6e0ec4e7ecc46867",
"assets/assets/icons/ic_back.svg": "23199396ba442036f2ab5f3964b1f3af",
"assets/assets/icons/ic_bell_payment.svg": "4fa984b1ae6f3bfc51cee7bb98ac8385",
"assets/assets/icons/ic_call.svg": "93d36efafa3ae7b9a9043ff40039bae4",
"assets/assets/icons/ic_call_supp.svg": "c2eb005d500db0b13220f96db6c0b3ae",
"assets/assets/icons/ic_check.svg": "5c0e314f37d03c8036e36019ed7944cd",
"assets/assets/icons/ic_digital_codes.svg": "60e6c16bc27f9aac07f9adc9b3390eaf",
"assets/assets/icons/ic_download.svg": "603546e9517aed10ea19d6fb607a1f2f",
"assets/assets/icons/ic_faq.svg": "abd63907e5805b7d28188e09b4dc3e0e",
"assets/assets/icons/ic_haedphone.svg": "648b9e14ca8e2d1fd08cdbf338a635bc",
"assets/assets/icons/ic_id_back.svg": "2eb999fbf0d7b93937719bf6b66a936f",
"assets/assets/icons/ic_id_front.svg": "592606144ec38649cbebfe78b0e9b74f",
"assets/assets/icons/ic_language.svg": "2a92f19ed0dda7252b2edde6046389b0",
"assets/assets/icons/ic_logo_dark.svg": "f32138a88e325f455324e33b7e661e33",
"assets/assets/icons/ic_logo_white.svg": "372fdc8287784726a3f9cfb00a8f9fae",
"assets/assets/icons/ic_pen.svg": "33f869845a05d09de5ae81fb61e59d0e",
"assets/assets/icons/ic_profile.svg": "8e09d4784a5078e34ad7985179e414e7",
"assets/assets/icons/ic_qr_code.svg": "a9b51b7a98569af425362d833b13b9da",
"assets/assets/icons/ic_recipt.svg": "d6c6f49ca1beeb1403f117786a644f31",
"assets/assets/icons/ic_trailing.svg": "a9ecc106507130c475dbcb5ab7f06d62",
"assets/assets/icons/ic_transfer_transaction.svg": "82c5708b3d902676add401f21828509f",
"assets/assets/icons/ic_trans_bank.svg": "ac9390da91654229b4b42d26ca5c68e4",
"assets/assets/icons/ic_trans_finture_contacts.svg": "fbec19a42cec4e1a70b4402d2bb59c2b",
"assets/assets/icons/ic_trans_phone_number.svg": "02eeaf587c3b23acbced32423b69d425",
"assets/assets/icons/ic_trans_request_money.svg": "1fb785bc768842b999fad802e78704f0",
"assets/assets/icons/ic_wallet_transaction.svg": "6bc0ba8fcc46a763565e9b09b889c433",
"assets/assets/icons/ic_wave_grad.svg": "5cde23c5644f43488af92507ad0cbfd6",
"assets/assets/icons/image-joint.svg": "83ca48d220007e9d8311177fa69404bc",
"assets/assets/icons/image-user.svg": "aec70ff03b4d660bff40d2027f225bd7",
"assets/assets/icons/info-circle.svg": "cbd44e806f1bc8176fc510cd5c4fcf81",
"assets/assets/icons/invite_friend.svg": "756bff0ff4b48cd95204ae38427d3222",
"assets/assets/icons/is_flash.svg": "5fbbbab4168248c49752ac0f20e5c212",
"assets/assets/icons/is_gas.svg": "aaf5e73c7e519aed9d0d23b73eb43e7b",
"assets/assets/icons/is_phone.svg": "b473624a0395201d5da857d5e8edef7b",
"assets/assets/icons/is_tv.svg": "bf369b5a94ca5aed9bc08e99ece7848a",
"assets/assets/icons/is_water.svg": "0acb4513d8c79e87aaffae1022788d99",
"assets/assets/icons/leading_btn.svg": "1144e346a4680bb3592b2ee5221e59e2",
"assets/assets/icons/limit_price.svg": "e2a6c7ef4f912a6a7333ed3b3948e314",
"assets/assets/icons/login_info.svg": "8dbf857809913e5f34295d585fe72284",
"assets/assets/icons/logo_background_svg.png": "94f0b5c41f5eb04da4c3ba450d7b9dd8",
"assets/assets/icons/logo_only_png.png": "ec731bccc1a071c84a4de964b58e79a0",
"assets/assets/icons/logo_only_png_dark.png": "a837f38d4fce4916e040f761a2c045f3",
"assets/assets/icons/logo_only_svg.svg": "8ff0451cf076db9fd83b20584d4d32fc",
"assets/assets/icons/logo_only_svg_dark.svg": "fba2299114c46490319d6abd1aa74a3e",
"assets/assets/icons/logo_png.png": "8fa5d03ab380b575b35528e5c91a8950",
"assets/assets/icons/logo_svg.svg": "772f7cff8e84bf303930941a4303de3a",
"assets/assets/icons/monthey_statment.svg": "1fc3ed9de58136c3beeccfd5cf7ada1c",
"assets/assets/icons/my_agreement.svg": "300835c144acfedca562fff2c2de739d",
"assets/assets/icons/notification.svg": "37eabd204f718f8674cd50e81ac26bdc",
"assets/assets/icons/offers_ic.svg": "ccd33c19864e6283031600d384e13929",
"assets/assets/icons/payments.svg": "a8fdde8970b42d58611a178a62668f28",
"assets/assets/icons/payments_active.svg": "93335421b59b4ad7cd4be703d4e85311",
"assets/assets/icons/personal_info.svg": "56fe143433bf62b8918dbd703e0e0913",
"assets/assets/icons/phone_book.svg": "604940d3492e9573ee58d454415df84b",
"assets/assets/icons/puzzle-piece.svg": "222c21086ab4f7d611170cde5c164c55",
"assets/assets/icons/qr_transactions.svg": "b4e2cb77c8378ec1c0fc8c3a6b2b4fcb",
"assets/assets/icons/qr_transactions_active.svg": "abf4ad67c3c5b3cd00838b13b6aa6495",
"assets/assets/icons/registered_cards.svg": "8f192da3c300f37e3f688e02194d5f81",
"assets/assets/icons/request_monthey.svg": "cc97ab10d0aad1e966fac8bb842d1af6",
"assets/assets/icons/round_arrow.svg": "24600929cd67b245f568cb0c330170de",
"assets/assets/icons/settings.svg": "9c7005f61e3b7a075d9c33e67b96e574",
"assets/assets/icons/support.svg": "878edd1e28961b2e2aaa23eb2e01b61e",
"assets/assets/icons/tahsilat.svg": "4dd396fe843406fff5ef4ff5b4a16310",
"assets/assets/icons/transfers.svg": "3c3b86466f401fad831c7f7b01aef0cd",
"assets/assets/icons/transfors_active.svg": "3d4197099c560ed620d25baac52e1e07",
"assets/assets/icons/user_management.svg": "a62a36bc1dc561784bb61ba5ea334bd3",
"assets/assets/icons/whatsapp.svg": "0456536cdc6058b4f7ba2fa85c061e49",
"assets/assets/images/arrow_dark.svg": "df3333f453559798c0ab949928ba59ff",
"assets/assets/images/bakarrow_up.svg": "84b27845d89c069b0464f9ea3277fe53",
"assets/assets/images/email.svg": "18b8c959f5d57aaffc743d8c091a28c6",
"assets/assets/lottie/cat.json": "0f79b3e975d2bd041e83da89e4061cb3",
"assets/assets/lottie/empty1.json": "ab39ea40bd4e86cdd331fc1d3acc0465",
"assets/assets/lottie/garbage.json": "3116368dd838fc62aa7fd8a1e868dd59",
"assets/assets/lottie/logout.json": "293fcccf35ebd709c28de6becc8cfc74",
"assets/assets/lottie/log_in.json": "fa4ce71a4b4ad074a094067178583e1f",
"assets/assets/lottie/offline.json": "e6ff1b5d3178f050203b7dea192ad33b",
"assets/assets/lottie/qr_l.json": "630195b15bdf47dd8479cfbfdd7a12b9",
"assets/assets/lottie/search.json": "2dc617d6083e96b365394aae0c39c7a7",
"assets/assets/translations/ar.json": "dfb50a77dac6a7d3eee41b92760baef2",
"assets/assets/translations/en.json": "8e1e0f419ee53ab2b59447ba6795d06b",
"assets/assets/translations/tr.json": "de7bd5846391e9c3713e77991ca00dfa",
"assets/FontManifest.json": "9f494d8e41c283936c86f3abdd5ee3b1",
"assets/fonts/MaterialIcons-Regular.otf": "cc3c66adb8e34a08797ed10928c3ae28",
"assets/NOTICES": "0c418063bf86a9cd3e9a5ce6c59853c0",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"drift_worker.dart.js": "b20adcd2de032479c6b3f9e3436a5d62",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c0938ef6e8c4952298c405f5692e3184",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9812094ed1fb3984914c0b71a85e874b",
"/": "9812094ed1fb3984914c0b71a85e874b",
"main.dart.js": "83b3410fdf59fa592e236de286b76b5b",
"manifest.json": "1ed58c749fa0e9970236fe15de779138",
"sqlite3.wasm": "4e83521cba4c5d835fc6fbab60feb6e4",
"version.json": "bd7a8ab35f967fb4d8493b0d665d10e3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b2ff851127922fed7a91e00b4598be97"
  },
  {
    "url": "advanced/index.html",
    "revision": "35c783271837df2e60e5d4c1fc50ffcd"
  },
  {
    "url": "advanced/java-code-style.html",
    "revision": "2461b0fad7680e8a8080ef2604e4df36"
  },
  {
    "url": "advanced/java-crypto.html",
    "revision": "9f268b1a896fdef3535bdc5d796ff51c"
  },
  {
    "url": "advanced/java-locale.html",
    "revision": "2e18fc447401bcce001b6745c0ccfb02"
  },
  {
    "url": "advanced/java-regex.html",
    "revision": "91f9448eeab09dc788238d655c2980d9"
  },
  {
    "url": "advanced/jdk8.html",
    "revision": "2bd36fe09c509faf49760d6e5aabf796"
  },
  {
    "url": "assets/css/0.styles.ffeeafb0.css",
    "revision": "d6d9d1516c3623c63e90d04b00aae47d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e3fb52c2.js",
    "revision": "4bb4cdf3b5158855405ce8f420d7b211"
  },
  {
    "url": "assets/js/11.c8a7a2b4.js",
    "revision": "fd975b4ed8a782dd4b52afa3db3e4d8f"
  },
  {
    "url": "assets/js/12.235676d5.js",
    "revision": "da8d56b72dc77e21dfe30a83aeeb8c8c"
  },
  {
    "url": "assets/js/13.7118884e.js",
    "revision": "2f491c03b3d51fb5eb44f98952f6ed37"
  },
  {
    "url": "assets/js/14.8b0e60f3.js",
    "revision": "c78774a3429519bda02b6b7fbf541da7"
  },
  {
    "url": "assets/js/15.deaf1d94.js",
    "revision": "e6e9c7cf58c503117f84061541d4917e"
  },
  {
    "url": "assets/js/16.0ab6a5c5.js",
    "revision": "1e750babec6df46ac7da9176c809fe1b"
  },
  {
    "url": "assets/js/17.db1beb88.js",
    "revision": "20d879e2cd0282989fc82514c1e2e398"
  },
  {
    "url": "assets/js/18.11a3e898.js",
    "revision": "d1c01fb17a5c60922b64dd83e133ad0c"
  },
  {
    "url": "assets/js/19.fef450f5.js",
    "revision": "35c17a2c11284f4a4aeb7a96ea7ae13c"
  },
  {
    "url": "assets/js/20.0a8b1f96.js",
    "revision": "a057b3de4222bd35b807363233db3414"
  },
  {
    "url": "assets/js/21.c6373ce1.js",
    "revision": "498656ec3388604af35777970d244a38"
  },
  {
    "url": "assets/js/22.60717276.js",
    "revision": "ddd611567a0ef488789e03443da9ec03"
  },
  {
    "url": "assets/js/23.9453fa97.js",
    "revision": "64c9178588678a876facb45b0e17f09e"
  },
  {
    "url": "assets/js/24.6421ee62.js",
    "revision": "6e26a9f457bfa6a124b7f7012b9b5161"
  },
  {
    "url": "assets/js/25.6c6d58e2.js",
    "revision": "275b51e8b309671ed1e3bb1f2666e716"
  },
  {
    "url": "assets/js/26.864a7097.js",
    "revision": "035bbc38dc1eb8f24b7be875a3fc78b3"
  },
  {
    "url": "assets/js/27.e8f0e2d0.js",
    "revision": "6df6ee44b82117db216d2ca047c307a3"
  },
  {
    "url": "assets/js/28.f37ffa69.js",
    "revision": "be773c9a03136f23135ebea9bd7c93dd"
  },
  {
    "url": "assets/js/29.517362b6.js",
    "revision": "3dd5c86fe7e547861bf51f2b23293f4d"
  },
  {
    "url": "assets/js/30.a5ceef8d.js",
    "revision": "d7e1d7935e616d390147a2ef7080ee9b"
  },
  {
    "url": "assets/js/31.4c89e532.js",
    "revision": "6c0069c56267847c7f2ac081cab6484b"
  },
  {
    "url": "assets/js/32.c9f7b3d5.js",
    "revision": "a26229d4ae5ef3723fbf4db7304afa20"
  },
  {
    "url": "assets/js/33.e846c44a.js",
    "revision": "be3308c82b095b4eeafa8ae9fd672e4b"
  },
  {
    "url": "assets/js/34.da65a997.js",
    "revision": "0048325a5e723d341d4b527f6dbba801"
  },
  {
    "url": "assets/js/35.5ff66e74.js",
    "revision": "208a5e6e9ce5d10c132d6a2f8025b821"
  },
  {
    "url": "assets/js/36.dd453cab.js",
    "revision": "41a0d91d17d0b5525ad5333ef6292101"
  },
  {
    "url": "assets/js/37.d8df4803.js",
    "revision": "040bb996c6308babef89f6f4dfacf3fc"
  },
  {
    "url": "assets/js/38.7c0dec2a.js",
    "revision": "e43da639bc26d294f35d5ef325389a58"
  },
  {
    "url": "assets/js/39.262b8f80.js",
    "revision": "a1b8c8a898bfce8436ff8245ee8d50eb"
  },
  {
    "url": "assets/js/4.6bb266d0.js",
    "revision": "4d1b3e8787fbf56e5f778d70c34ec9fb"
  },
  {
    "url": "assets/js/40.867401fa.js",
    "revision": "cd04080e43ddb21288c629794da8a3b6"
  },
  {
    "url": "assets/js/41.45bc3350.js",
    "revision": "d34291921868bc7e4948713defded53e"
  },
  {
    "url": "assets/js/42.30739b69.js",
    "revision": "5333a51712de7ae9cdf6659727ec0d6b"
  },
  {
    "url": "assets/js/43.2f5ffddb.js",
    "revision": "4d3255bfb458d244d4ca126b70e14c28"
  },
  {
    "url": "assets/js/44.33fbd7db.js",
    "revision": "57af0d17c54bb5e593cce21bd8802f92"
  },
  {
    "url": "assets/js/45.69f27f2a.js",
    "revision": "31a0ebfb9525f020a0888777619e8ab9"
  },
  {
    "url": "assets/js/46.136bc8dc.js",
    "revision": "1e5d47cf58842593fab8096cf2ddd834"
  },
  {
    "url": "assets/js/47.ffffd85b.js",
    "revision": "a25b3207a5df6c3065e5fab9184669f3"
  },
  {
    "url": "assets/js/48.379e549e.js",
    "revision": "0d78f07d3b3f155216acf18578033ed8"
  },
  {
    "url": "assets/js/49.2d054598.js",
    "revision": "fc3e7e9b0e27fa58d9f010a51cf88956"
  },
  {
    "url": "assets/js/5.1e6b02f3.js",
    "revision": "4c0f75194903c5045f5da88f2c2e9583"
  },
  {
    "url": "assets/js/50.03f9a606.js",
    "revision": "6311a0ac7ae3d26d1623a05c922f1e74"
  },
  {
    "url": "assets/js/51.c08ae113.js",
    "revision": "ddad35cef0113636a7d6c10e234f5029"
  },
  {
    "url": "assets/js/52.1044c626.js",
    "revision": "a7a3c0d506c12473305703109fdc2fa9"
  },
  {
    "url": "assets/js/53.ab6ce372.js",
    "revision": "0f8cd17f84bc24e335eddca1273272de"
  },
  {
    "url": "assets/js/54.3a875e42.js",
    "revision": "680c07fece0c7e9c1452d11aa0cd08a8"
  },
  {
    "url": "assets/js/55.a63512b9.js",
    "revision": "76475eee2d45bff6fdc729294a925ed8"
  },
  {
    "url": "assets/js/56.b81e3557.js",
    "revision": "207bae713487e17b587c7b1bbff6c9f5"
  },
  {
    "url": "assets/js/57.7f4fe40b.js",
    "revision": "abce8460630f4302cd677534f009caac"
  },
  {
    "url": "assets/js/58.2b4f5604.js",
    "revision": "ed22fe5eab2374a4492dad32f339ec46"
  },
  {
    "url": "assets/js/59.16192143.js",
    "revision": "134ee2efdcbf08d9e10e02880dbc59c4"
  },
  {
    "url": "assets/js/6.5fd32769.js",
    "revision": "c8fdfbc779d288f5d99a88637febe8da"
  },
  {
    "url": "assets/js/60.7d0ac38b.js",
    "revision": "62783e7ee0a12035880e65c7285c69f1"
  },
  {
    "url": "assets/js/61.eaaeb846.js",
    "revision": "73b3bf310545ff00c4a685e5d388dba1"
  },
  {
    "url": "assets/js/62.73eda72c.js",
    "revision": "0f499ede034547c5165bb89aff9344a8"
  },
  {
    "url": "assets/js/63.8527a955.js",
    "revision": "3f7043ff1b01e3a82872945e23063524"
  },
  {
    "url": "assets/js/64.59058bbb.js",
    "revision": "8b8322b239fa35e9da8b94b24f790cfd"
  },
  {
    "url": "assets/js/65.1ac8c704.js",
    "revision": "3f8d1bfe213a31a7be7dbd35d4264098"
  },
  {
    "url": "assets/js/66.e2cd80ac.js",
    "revision": "394341702cd3188608a8529df3478dd3"
  },
  {
    "url": "assets/js/67.d568cc85.js",
    "revision": "7d773f195fd29ba71c1a49b23156c08a"
  },
  {
    "url": "assets/js/7.d4495af0.js",
    "revision": "7d95d1fdd4b2e049e27c64bf5e763f14"
  },
  {
    "url": "assets/js/8.d373518b.js",
    "revision": "5e15d70d44547e67f7006771d9d01a5b"
  },
  {
    "url": "assets/js/9.2ef68944.js",
    "revision": "4f52912b35cdcef77f4713f7124e55af"
  },
  {
    "url": "assets/js/app.579b6778.js",
    "revision": "92f3b887e406d17aaa4e8adbf774708f"
  },
  {
    "url": "assets/js/vendors~flowchart.36848b96.js",
    "revision": "3803dc19ea7b901d9814b554be0382b3"
  },
  {
    "url": "assets/js/vendors~notification.5e49bf43.js",
    "revision": "ce9cbcc2523268d269d4c24cb8e53102"
  },
  {
    "url": "basics/index.html",
    "revision": "206564927415dfa12ea67adc8717f675"
  },
  {
    "url": "basics/java-annotation.html",
    "revision": "d8cc2655bce9f78772cd161b95da1988"
  },
  {
    "url": "basics/java-array.html",
    "revision": "d41fc6bf042ba6379b7cea07241f0344"
  },
  {
    "url": "basics/java-basic-grammar.html",
    "revision": "5201c2bc49c1fc6a2f9cfecc2233f62f"
  },
  {
    "url": "basics/java-common-tool-class.html",
    "revision": "9f8c548ed5042fbf5c0ce86a3948d86c"
  },
  {
    "url": "basics/java-control-statement.html",
    "revision": "74f9b6067a5e4635e13b7b0b47673ca8"
  },
  {
    "url": "basics/java-data-type.html",
    "revision": "f2d8170ce99ab0a6777611fc7bfa94f3"
  },
  {
    "url": "basics/java-develop-env.html",
    "revision": "9007d06e33cb8ecc376e42f421204f23"
  },
  {
    "url": "basics/java-enum.html",
    "revision": "f24a689aa1bc666cc482cdcf4a43742f"
  },
  {
    "url": "basics/java-exception.html",
    "revision": "95f23666a6c776d4022ddd517cf1e85b"
  },
  {
    "url": "basics/java-generic.html",
    "revision": "8604d49b78ab481e21f2346e43fdd116"
  },
  {
    "url": "basics/java-method.html",
    "revision": "7f4973f06209af431af2e789b23b75e9"
  },
  {
    "url": "basics/java-oop.html",
    "revision": "d00f86e1709969b36d5d243f9d8279d4"
  },
  {
    "url": "basics/java-reflection.html",
    "revision": "c01f00af1f87c4e5c1c01acd1533eaf9"
  },
  {
    "url": "basics/java-string.html",
    "revision": "2f13dc8a7a7cdb60d9fc3546390c6a48"
  },
  {
    "url": "concurrent/index.html",
    "revision": "64f2aa4a8f98f0a4eb09b400bc76bf4e"
  },
  {
    "url": "concurrent/java-atomic-class.html",
    "revision": "5317a8799ce3258154443af9aae502bc"
  },
  {
    "url": "concurrent/java-concurrent-basic-mechanism.html",
    "revision": "191878bc1936b7c2b546982cfa362884"
  },
  {
    "url": "concurrent/java-concurrent-container.html",
    "revision": "94e9e5d82d7d89a426515f60de9925f5"
  },
  {
    "url": "concurrent/java-concurrent-introduction.html",
    "revision": "41cc8253bf22e76536f2be89d68d1452"
  },
  {
    "url": "concurrent/java-concurrent-tools.html",
    "revision": "01f8861113a55484ea8c3f3c6c7f57fd"
  },
  {
    "url": "concurrent/java-fork-join.html",
    "revision": "b1a2eec9abd1348610e3180801793e7d"
  },
  {
    "url": "concurrent/java-lock.html",
    "revision": "7c4a1a0ec80b81f8230d26282ac05177"
  },
  {
    "url": "concurrent/java-memory-model.html",
    "revision": "6a49616f02663939538674a8dc3a2749"
  },
  {
    "url": "concurrent/java-thread-pool.html",
    "revision": "84b2a2c605fd2e786fcf7266a129d8a6"
  },
  {
    "url": "concurrent/java-thread.html",
    "revision": "f23c36221ae75ec528215ffebd0a3b63"
  },
  {
    "url": "container/index.html",
    "revision": "d06eaab3060a49aca6bc1595e2bdf958"
  },
  {
    "url": "container/java-container-list.html",
    "revision": "6b18b7cffcb409d9b7edf6ed29ee38cf"
  },
  {
    "url": "container/java-container-map.html",
    "revision": "1ad38135c3ee48096f58e745d60d0233"
  },
  {
    "url": "container/java-container-queue.html",
    "revision": "866443adf0a5476db4e3eaee37bb9332"
  },
  {
    "url": "container/java-container-set.html",
    "revision": "3bc5141ad008be967a5f7fe52517e429"
  },
  {
    "url": "container/java-container.html",
    "revision": "b072902d90da80fc22cae370d8997b74"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "cba23606c7b3ac76b7b15ac2f5d47027"
  },
  {
    "url": "io/index.html",
    "revision": "27f370ef2aa64d8c58979169ecb2b0cf"
  },
  {
    "url": "io/java-bio.html",
    "revision": "22ab64b258681138e37b1a3a4b72e9a4"
  },
  {
    "url": "io/java-io-tool.html",
    "revision": "111b789051c108ea125d1ad165c6361c"
  },
  {
    "url": "io/java-net.html",
    "revision": "c1e851314fcb22f5c4ce4d4643d8ba61"
  },
  {
    "url": "io/java-nio.html",
    "revision": "25c13181fd38abb36596d3848e78db33"
  },
  {
    "url": "io/java-serialization.html",
    "revision": "af49581a5c86eb38be1780bc1dfad135"
  },
  {
    "url": "java-interview.html",
    "revision": "0b5d5de6b1e4bf6b2ebaac4e730a178b"
  },
  {
    "url": "jvm/index.html",
    "revision": "c4b216303e580e44ec9c89f94d7e83a5"
  },
  {
    "url": "jvm/jvm-action.html",
    "revision": "e4c51c741f3d3f7b10d0faaca106a869"
  },
  {
    "url": "jvm/jvm-and-java.html",
    "revision": "f25b6b3c80ca3e92376d0593915d6174"
  },
  {
    "url": "jvm/jvm-architecture.html",
    "revision": "df4a5a2e4e1abd61c88a91d8ecbe99fb"
  },
  {
    "url": "jvm/jvm-bytecode.html",
    "revision": "3a578579b8698aa050bbd7514b57ab5a"
  },
  {
    "url": "jvm/jvm-class-loader.html",
    "revision": "18b392e01a88f6a1ff45a83808c2a0b4"
  },
  {
    "url": "jvm/jvm-cli-tools.html",
    "revision": "ff564ca1a296e7f946b94f4e4df6f3d2"
  },
  {
    "url": "jvm/jvm-gc.html",
    "revision": "9977b171a116175c78d5a97166a2bfac"
  },
  {
    "url": "jvm/jvm-gui-tools.html",
    "revision": "4ac056c61f7b3e53906eacdb755dedf5"
  },
  {
    "url": "jvm/jvm-memory.html",
    "revision": "76cef59b685185f53340cf500eaf3641"
  },
  {
    "url": "jvm/trouble-shooting.html",
    "revision": "eaf139a16b2acd751ff152de6ec59060"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/11/我的第一篇博客文章/index.html","d49b6fb07f28b7ce6489b805d1b79387"],["/2024/05/11/笔记/02-JSP/index.html","80423cb4c7b123b659c3f6e7f64842d6"],["/2024/05/11/笔记/03-Cookie和Session/index.html","ddc0f1b33d24837627bd0d4c6d15d48c"],["/2024/05/11/笔记/04-过滤器和监听器/index.html","6f92a002c2bbdfcd5b70201dae4dc313"],["/2024/05/11/笔记/05-Ajax(1)/index.html","db25038416bb7caf2a639724675f02fa"],["/2024/05/11/笔记/CSS(2)/index.html","4b713f06f753038c5e4ae983ee027a58"],["/2024/05/11/笔记/JavaScript/index.html","30498415fb7323b3a26a6924846cb2b8"],["/2024/05/11/笔记/Mybatis(6)/index.html","c5f5c622c80f0cc31ba196b63c3be4ab"],["/2024/05/11/笔记/Servlet(2)/index.html","7d978ec47d4279a0a870a9760290f575"],["/2024/05/11/笔记/Spring(3)/index.html","2840a597c82ea6b543d958c60f187ac7"],["/2024/05/11/笔记/hello-world/index.html","f260c5d3cd8eaf462d5bd799f74490e9"],["/2024/05/12/面试题/hr面/index.html","165a6135498a9f401d7a1a9bd1a2627b"],["/2024/05/12/面试题/java/index.html","0273e6e949f79fc122c1cb55eddea9f4"],["/2024/05/12/面试题/jvm/index.html","f01e4717af9888fca1c880e6f6a2a68d"],["/2024/05/12/面试题/redis/index.html","a6bd2959664f84d5afa992d91477b93b"],["/2024/05/12/面试题/并发/index.html","73c3ca535866a709e1dda92bbfd316fe"],["/2024/05/12/面试题/微服务常见面试题/index.html","a98491bb12c4bb3381c42714606d98d0"],["/2024/05/12/面试题/操作系统/index.html","ab27b58a8ab28ca9ccff180b10b56911"],["/2024/05/12/面试题/数据库问题/index.html","86bb2d2a468b17f8932ab2887d34b6f3"],["/2024/05/12/面试题/框架/index.html","3e4cb814c7cd36cdaa895e83a526f60f"],["/2024/05/12/面试题/算法/index.html","261f1d418b7fa10e24c5ce621eded834"],["/2024/05/12/面试题/计算机网络/index.html","78851f666185a25ffe5b1d9790cdb5e4"],["/2024/05/12/面试题/设计模式/index.html","07b14eb51fe5b1a359e52148b5ea4dbe"],["/2024/05/12/面试题/集合/index.html","b7828b52cfb6783cbfc6b510f387727e"],["/2024/05/12/面试题/项目/index.html","5c93db91e8ddf1e3855efb06c1dec748"],["/2024/05/13/新的开始❤/index.html","a808b344de8ff2b4a50548c257766262"],["/about/index.html","18cf38d345724231477ce62ec4200db9"],["/archives/2024/05/index.html","ef37d7d244878a799e12addb91624153"],["/archives/2024/05/page/2/index.html","cef36c4c577cd47f87b532a1a0de0ece"],["/archives/2024/05/page/3/index.html","eb048e58033e7371df66f94d96cb8cfd"],["/archives/2024/index.html","bcd6676787fd81621c24c2feeae6df1d"],["/archives/2024/page/2/index.html","57a597359a1c38fa2e1cca0b24cbf715"],["/archives/2024/page/3/index.html","a518a50c36269fee83c2e5d4dfb0adce"],["/archives/index.html","1dc449a203cb0c03eddb77bb7b6217f1"],["/archives/page/2/index.html","67987856966db697be25473f13c1f085"],["/archives/page/3/index.html","7b15a4c60af6d6db144a50aad12c76b9"],["/categories/index.html","9b00fced3ddccca3bf10e4ae66a1f973"],["/categories/笔记/index.html","e72f6b6685404741ff7efaa0ae830556"],["/categories/面试题/index.html","16a1fa17942f2c9b9d31053ed397afda"],["/categories/面试题/page/2/index.html","9f7ce85b9d8b85beb1169f2bb2061ecf"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","63a6d486f01285fb608202a2cff4ca68"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/bangumis/67/d1/876_dCfrd.jpg","1cc5b0dece18c6a140ea6ec7380f2353"],["/images/bangumis/73/26/110467_Fx9tT.jpg","f24d6b0f74838dbedc0446667e192ce9"],["/images/bangumis/e5/69/265_Z5Uou.jpg","48d1a68abe2996ac878c9edd02e69a59"],["/images/bangumis/loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/img/001.jpg","6d79794ea25c04e4515a5b63398586b8"],["/img/002.jpg","e274a9c2408f1a8ed7a2d1897da92ca0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9N1.jpg","9389e2a9b8dfa92e79d0044fa0cf3016"],["/img/CG/01.png","f2f72da7cbc36fc89a546e080e5c5484"],["/img/CG/02.png","ae31cd40dcb48628ad4bec38a9cdd51b"],["/img/OIP-C.jpg","262e405d71dda07b462dc1f6d82d04d7"],["/img/f4.jpg","9389e2a9b8dfa92e79d0044fa0cf3016"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/ly.png","20f81253ce31ebbf9b04ee54f1584cff"],["/img/no.png","48e437456ab05fdc17d1e9eb2453b89f"],["/img/yes1.png","9ea9a6309134d98e14fa5e2adecf9cc7"],["/img/yes2.png","c129d4b49f6001ff00be6e0a62d921ba"],["/index.html","d507c3c2ddb5c5d5b33d856e47145a58"],["/js/main.js","6b81ae582288482e51573bbc5226dbd6"],["/js/sakura.js","abdafbb0471a95535e5e703d174d387d"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","707135460b9ad67147ebebd717413d9d"],["/js/utils.js","3df06119fbaa236c2fbb2dbc6e120a86"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","de68627dbb110ddb321edb6f2733b13c"],["/list/CG/index.html","49980561ab4996993e914d223998e6d3"],["/list/movies/index.html","38c6ce5e1d748b94c1f8b878caec78dd"],["/list/order/index.html","fe535e5552938500aeef510686ccc1dc"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","2132d5d9b71b6acfe797f5672b1aa11e"],["/page/2/index.html","bf8c4113e1cbabe0286221cf0997ee0a"],["/page/3/index.html","e0c024c2be45bd7bb25de1e8fe7a36e4"],["/page/4/index.html","fceeac97b72b32896cd14ee0adf407f3"],["/page/5/index.html","e3487dadbd4dedc94f89a800de7dc072"],["/playlist/index.html","a421c420c792a330b9bf5491b726bc59"],["/sw-register.js","cc11137206fef5b2a23fc0fa703faaa9"],["/tags/Java/index.html","db5076294e57c692b09c5d670d44bb02"],["/tags/Java/page/2/index.html","318742ba6edef65b2e8d22b2d32fa9e4"],["/tags/index.html","3e0ae3b86cbfcc5c022eb52b0d0df044"],["/tags/mysql/index.html","9ffbd48d5e535efa91904912744df5d6"],["/tags/前端/index.html","41dbb1f1e68b4c17e7025bbd1ab51e30"],["/tags/算法/index.html","bf20c74e29a5fe6ac1d8612d76cdcde4"],["/tags/计算机/index.html","e1d31ec3809a8f8321b4683757cef7b0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

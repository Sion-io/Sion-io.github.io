/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/05/11/我的第一篇博客文章/index.html","111d361c8108ea0e2678cad29b14415f"],["/2024/05/13/新的开始❤/index.html","3a6a339762664b6a796f4f695b41cdf3"],["/2024/07/05/面试题/java基础/index.html","45235453701a97fc0ea9bf73eeae0460"],["/2024/07/06/面试题/java高级/index.html","75beaf7eccbf681cb4472ab34f26fb9c"],["/2024/10/06/Spring/index.html","9ba1333b12f1c020bdea6a49f7f04dc4"],["/about/index.html","0071e3d5259bdb47fb6a1f5bc3c9a432"],["/archives/2024/05/index.html","e0715ff02f25f69451c8e7533b88b178"],["/archives/2024/07/index.html","5e4bc5c2096605449dfdb486ba319c24"],["/archives/2024/10/index.html","dc1b2d8d735e3a81f23de2ab52131d5f"],["/archives/2024/index.html","fa3bb657a87d743d4a8176ddd86bd162"],["/archives/index.html","3a18dd36784791edd73376f2dd4bc0a8"],["/categories/Java/index.html","bb8204fa8515d1740a25449de3da847c"],["/categories/index.html","b6061c56318bcbba62b48529d8bc5b76"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","63a6d486f01285fb608202a2cff4ca68"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/bangumis/67/d1/876_dCfrd.jpg","1cc5b0dece18c6a140ea6ec7380f2353"],["/images/bangumis/73/26/110467_Fx9tT.jpg","f24d6b0f74838dbedc0446667e192ce9"],["/images/bangumis/e5/69/265_Z5Uou.jpg","48d1a68abe2996ac878c9edd02e69a59"],["/images/bangumis/loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/img/001.jpg","38ef0b97bd13925bcb1866347010e608"],["/img/002.jpg","e274a9c2408f1a8ed7a2d1897da92ca0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/9N1.jpg","9389e2a9b8dfa92e79d0044fa0cf3016"],["/img/OIP-C.jpg","262e405d71dda07b462dc1f6d82d04d7"],["/img/bg.png","1bd9654f81ffd72e3bb810325b306ebf"],["/img/f4.jpg","9389e2a9b8dfa92e79d0044fa0cf3016"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/ly.png","20f81253ce31ebbf9b04ee54f1584cff"],["/img/no.png","48e437456ab05fdc17d1e9eb2453b89f"],["/img/yes1.png","9ea9a6309134d98e14fa5e2adecf9cc7"],["/img/yes2.png","c129d4b49f6001ff00be6e0a62d921ba"],["/index.html","baa7fbd0986ae7be2d48d3d98b52ed46"],["/js/main.js","6b81ae582288482e51573bbc5226dbd6"],["/js/sakura.js","abdafbb0471a95535e5e703d174d387d"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","707135460b9ad67147ebebd717413d9d"],["/js/utils.js","3df06119fbaa236c2fbb2dbc6e120a86"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","c089efeb36290fbaf031c4ca312c607c"],["/list/CG/index.html","9c7036f79bc11ca5e47584b1526d28d9"],["/list/movies/index.html","12f0aa89648408b8730a8e1e897302dd"],["/list/order/index.html","c5c2c32a9a5f90a153daa240de4af43f"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","6d40ee752253d4012468fd8b8973e70d"],["/playlist/index.html","b748c7dbafd4f242b7d076c116c16c60"],["/sw-register.js","2ec3c71c22fb7d2b695917c13b3e4d4e"],["/tags/Java/index.html","ae92bc8f8d9cabaab4f887229b572793"],["/tags/index.html","7402d2a60eaa1bd3b689deb36db16b11"],["/tags/面试/index.html","ec701b8c37c5c6cc8a38204cf3e0ae7b"],["/面试题/123.html","90c2c33904389124e868ed1870c0a33f"]];
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

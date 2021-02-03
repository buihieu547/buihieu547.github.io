/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => /* binding */ WorkboxError
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => /* binding */ finalAssertExports
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? 0 : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => /* binding */ cacheNames
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheWrapper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheWrapper": () => /* binding */ cacheWrapper
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var _getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pluginUtils.js */ "./node_modules/workbox-core/utils/pluginUtils.js");
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * Checks the list of plugins for the cacheKeyWillBeUsed callback, and
 * executes any of those callbacks found in sequence. The final `Request` object
 * returned by the last plugin is treated as the cache key for cache reads
 * and/or writes.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {string} options.mode
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Request>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _getEffectiveRequest = async ({ request, mode, plugins = [], }) => {
    const cacheKeyWillBeUsedPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__.pluginUtils.filter(plugins, "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */);
    let effectiveRequest = request;
    for (const plugin of cacheKeyWillBeUsedPlugins) {
        effectiveRequest = await plugin["cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */].call(plugin, { mode, request: effectiveRequest });
        if (typeof effectiveRequest === 'string') {
            effectiveRequest = new Request(effectiveRequest);
        }
        if (true) {
            _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(effectiveRequest, Request, {
                moduleName: 'Plugin',
                funcName: "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */,
                isReturnValueProblem: true,
            });
        }
    }
    return effectiveRequest;
};
/**
 * This method will call cacheWillUpdate on the available plugins (or use
 * status === 200) to determine if the Response is safe and valid to cache.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _isResponseSafeToCache = async ({ request, response, event, plugins = [], }) => {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const plugin of plugins) {
        if ("cacheWillUpdate" /* CACHE_WILL_UPDATE */ in plugin) {
            pluginsUsed = true;
            const pluginMethod = plugin["cacheWillUpdate" /* CACHE_WILL_UPDATE */];
            responseToCache = await pluginMethod.call(plugin, {
                request,
                response: responseToCache,
                event,
            });
            if (true) {
                if (responseToCache) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(responseToCache, Response, {
                        moduleName: 'Plugin',
                        funcName: "cacheWillUpdate" /* CACHE_WILL_UPDATE */,
                        isReturnValueProblem: true,
                    });
                }
            }
            if (!responseToCache) {
                break;
            }
        }
    }
    if (!pluginsUsed) {
        if (true) {
            if (responseToCache) {
                if (responseToCache.status !== 200) {
                    if (responseToCache.status === 0) {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The response for '${request.url}' is an opaque ` +
                            `response. The caching strategy that you're using will not ` +
                            `cache opaque responses by default.`);
                    }
                    else {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`The response for '${request.url}' returned ` +
                            `a status code of '${response.status}' and won't be cached as a ` +
                            `result.`);
                    }
                }
            }
        }
        responseToCache = responseToCache && responseToCache.status === 200 ?
            responseToCache : undefined;
    }
    return responseToCache ? responseToCache : null;
};
/**
 * This is a wrapper around cache.match().
 *
 * @param {Object} options
 * @param {string} options.cacheName Name of the cache to match against.
 * @param {Request} options.request The Request that will be used to look up
 *     cache entries.
 * @param {Event} [options.event] The event that prompted the action.
 * @param {Object} [options.matchOptions] Options passed to cache.match().
 * @param {Array<Object>} [options.plugins=[]] Array of plugins.
 * @return {Response} A cached response if available.
 *
 * @private
 * @memberof module:workbox-core
 */
const matchWrapper = async ({ cacheName, request, event, matchOptions, plugins = [], }) => {
    const cache = await self.caches.open(cacheName);
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'read'
    });
    let cachedResponse = await cache.match(effectiveRequest, matchOptions);
    if (true) {
        if (cachedResponse) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Found a cached response in '${cacheName}'.`);
        }
        else {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No cached response found in '${cacheName}'.`);
        }
    }
    for (const plugin of plugins) {
        if ("cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */ in plugin) {
            const pluginMethod = plugin["cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */];
            cachedResponse = await pluginMethod.call(plugin, {
                cacheName,
                event,
                matchOptions,
                cachedResponse,
                request: effectiveRequest,
            });
            if (true) {
                if (cachedResponse) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(cachedResponse, Response, {
                        moduleName: 'Plugin',
                        funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                        isReturnValueProblem: true,
                    });
                }
            }
        }
    }
    return cachedResponse;
};
/**
 * Wrapper around cache.put().
 *
 * Will call `cacheDidUpdate` on plugins if the cache was updated, using
 * `matchOptions` when determining what the old entry is.
 *
 * @param {Object} options
 * @param {string} options.cacheName
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @param {Object} [options.matchOptions]
 *
 * @private
 * @memberof module:workbox-core
 */
const putWrapper = async ({ cacheName, request, response, event, plugins = [], matchOptions, }) => {
    if (true) {
        if (request.method && request.method !== 'GET') {
            throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('attempt-to-cache-non-get-request', {
                url: (0,_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url),
                method: request.method,
            });
        }
    }
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'write'
    });
    if (!response) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Cannot cache non-existent response for ` +
                `'${(0,_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(effectiveRequest.url)}'.`);
        }
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('cache-put-with-no-response', {
            url: (0,_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(effectiveRequest.url),
        });
    }
    const responseToCache = await _isResponseSafeToCache({
        event,
        plugins,
        response,
        request: effectiveRequest,
    });
    if (!responseToCache) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Response '${(0,_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(effectiveRequest.url)}' will ` +
                `not be cached.`, responseToCache);
        }
        return;
    }
    const cache = await self.caches.open(cacheName);
    const updatePlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__.pluginUtils.filter(plugins, "cacheDidUpdate" /* CACHE_DID_UPDATE */);
    const oldResponse = updatePlugins.length > 0 ?
        await matchWrapper({ cacheName, matchOptions, request: effectiveRequest }) :
        null;
    if (true) {
        _logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Updating the '${cacheName}' cache with a new Response for ` +
            `${(0,_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(effectiveRequest.url)}.`);
    }
    try {
        await cache.put(effectiveRequest, responseToCache);
    }
    catch (error) {
        // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
        if (error.name === 'QuotaExceededError') {
            await (0,_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.executeQuotaErrorCallbacks)();
        }
        throw error;
    }
    for (const plugin of updatePlugins) {
        await plugin["cacheDidUpdate" /* CACHE_DID_UPDATE */].call(plugin, {
            cacheName,
            event,
            oldResponse,
            newResponse: responseToCache,
            request: effectiveRequest,
        });
    }
};
const cacheWrapper = {
    put: putWrapper,
    match: matchWrapper,
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => /* binding */ canConstructResponseFromBodyStream
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => /* binding */ executeQuotaErrorCallbacks
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/fetchWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/fetchWrapper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWrapper": () => /* binding */ fetchWrapper
/* harmony export */ });
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pluginUtils.js */ "./node_modules/workbox-core/utils/pluginUtils.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Wrapper around the fetch API.
 *
 * Will call requestWillFetch on available plugins.
 *
 * @param {Object} options
 * @param {Request|string} options.request
 * @param {Object} [options.fetchOptions]
 * @param {ExtendableEvent} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const wrappedFetch = async ({ request, fetchOptions, event, plugins = [], }) => {
    if (typeof request === 'string') {
        request = new Request(request);
    }
    // We *should* be able to call `await event.preloadResponse` even if it's
    // undefined, but for some reason, doing so leads to errors in our Node unit
    // tests. To work around that, explicitly check preloadResponse's value first.
    if (event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;
        if (possiblePreloadResponse) {
            if (true) {
                _logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Using a preloaded navigation response for ` +
                    `'${(0,_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}'`);
            }
            return possiblePreloadResponse;
        }
    }
    if (true) {
        _assert_js__WEBPACK_IMPORTED_MODULE_2__.assert.isInstance(request, Request, {
            paramName: 'request',
            expectedClass: Request,
            moduleName: 'workbox-core',
            className: 'fetchWrapper',
            funcName: 'wrappedFetch',
        });
    }
    const failedFetchPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__.pluginUtils.filter(plugins, "fetchDidFail" /* FETCH_DID_FAIL */);
    // If there is a fetchDidFail plugin, we need to save a clone of the
    // original request before it's either modified by a requestWillFetch
    // plugin or before the original request's body is consumed via fetch().
    const originalRequest = failedFetchPlugins.length > 0 ?
        request.clone() : null;
    try {
        for (const plugin of plugins) {
            if ("requestWillFetch" /* REQUEST_WILL_FETCH */ in plugin) {
                const pluginMethod = plugin["requestWillFetch" /* REQUEST_WILL_FETCH */];
                const requestClone = request.clone();
                request = await pluginMethod.call(plugin, {
                    request: requestClone,
                    event,
                });
                if (true) {
                    if (request) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__.assert.isInstance(request, Request, {
                            moduleName: 'Plugin',
                            funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
    }
    catch (err) {
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('plugin-error-request-will-fetch', {
            thrownError: err,
        });
    }
    // The request can be altered by plugins with `requestWillFetch` making
    // the original request (Most likely from a `fetch` event) to be different
    // to the Request we make. Pass both to `fetchDidFail` to aid debugging.
    const pluginFilteredRequest = request.clone();
    try {
        let fetchResponse;
        // See https://github.com/GoogleChrome/workbox/issues/1796
        if (request.mode === 'navigate') {
            fetchResponse = await fetch(request);
        }
        else {
            fetchResponse = await fetch(request, fetchOptions);
        }
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`Network request for ` +
                `'${(0,_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}' returned a response with ` +
                `status '${fetchResponse.status}'.`);
        }
        for (const plugin of plugins) {
            if ("fetchDidSucceed" /* FETCH_DID_SUCCEED */ in plugin) {
                fetchResponse = await plugin["fetchDidSucceed" /* FETCH_DID_SUCCEED */]
                    .call(plugin, {
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
                if (true) {
                    if (fetchResponse) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__.assert.isInstance(fetchResponse, Response, {
                            moduleName: 'Plugin',
                            funcName: "fetchDidSucceed" /* FETCH_DID_SUCCEED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
        return fetchResponse;
    }
    catch (error) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.error(`Network request for ` +
                `'${(0,_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}' threw an error.`, error);
        }
        for (const plugin of failedFetchPlugins) {
            await plugin["fetchDidFail" /* FETCH_DID_FAIL */].call(plugin, {
                error,
                event,
                originalRequest: originalRequest.clone(),
                request: pluginFilteredRequest.clone(),
            });
        }
        throw error;
    }
};
const fetchWrapper = {
    fetch: wrappedFetch,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => /* binding */ getFriendlyURL
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => /* binding */ logger
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? 0 : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => /* binding */ copyResponse
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */
async function copyResponse(response, modifier) {
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => /* binding */ messageGenerator
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => /* binding */ messages
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed with an HTTP ` +
            `status of ${status}.`;
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => /* binding */ quotaErrorCallbacks
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-core/utils/pluginUtils.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/utils/pluginUtils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluginUtils": () => /* binding */ pluginUtils
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const pluginUtils = {
    filter: (plugins, callbackName) => {
        return plugins.filter((plugin) => callbackName in plugin);
    },
};


/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => /* binding */ PrecacheController
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.js */ "./node_modules/workbox-core/_private/cacheWrapper.js");
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.js */ "./node_modules/workbox-core/_private/fetchWrapper.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_10__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {string} [cacheName] An optional name for the cache, to override
     * the default precache name.
     */
    constructor(cacheName) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName);
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {
     * Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>
     * } entries Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__.createCacheKey)(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * @param {Object} options
     * @param {Event} [options.event] The install event (if needed).
     * @param {Array<Object>} [options.plugins] Plugins to be used for fetching
     * and caching during install.
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */
    async install({ event, plugins } = {}) {
        if (true) {
            if (plugins) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(plugins, {
                    moduleName: 'workbox-precaching',
                    className: 'PrecacheController',
                    funcName: 'install',
                    paramName: 'plugins',
                });
            }
        }
        const toBePrecached = [];
        const alreadyPrecached = [];
        const cache = await self.caches.open(this._cacheName);
        const alreadyCachedRequests = await cache.keys();
        const existingCacheKeys = new Set(alreadyCachedRequests.map((request) => request.url));
        for (const [url, cacheKey] of this._urlsToCacheKeys) {
            if (existingCacheKeys.has(cacheKey)) {
                alreadyPrecached.push(url);
            }
            else {
                toBePrecached.push({ cacheKey, url });
            }
        }
        const precacheRequests = toBePrecached.map(({ cacheKey, url }) => {
            const integrity = this._cacheKeysToIntegrities.get(cacheKey);
            const cacheMode = this._urlsToCacheModes.get(url);
            return this._addURLToCache({
                cacheKey,
                cacheMode,
                event,
                integrity,
                plugins,
                url,
            });
        });
        await Promise.all(precacheRequests);
        const updatedURLs = toBePrecached.map((item) => item.url);
        if (true) {
            (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, alreadyPrecached);
        }
        return {
            updatedURLs,
            notUpdatedURLs: alreadyPrecached,
        };
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */
    async activate() {
        const cache = await self.caches.open(this._cacheName);
        const currentlyCachedRequests = await cache.keys();
        const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
        const deletedURLs = [];
        for (const request of currentlyCachedRequests) {
            if (!expectedCacheKeys.has(request.url)) {
                await cache.delete(request);
                deletedURLs.push(request.url);
            }
        }
        if (true) {
            (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
        }
        return { deletedURLs };
    }
    /**
     * Requests the entry and saves it to the cache if the response is valid.
     * By default, any response with a status code of less than 400 (including
     * opaque responses) is considered valid.
     *
     * If you need to use custom criteria to determine what's valid and what
     * isn't, then pass in an item in `options.plugins` that implements the
     * `cacheWillUpdate()` lifecycle event.
     *
     * @private
     * @param {Object} options
     * @param {string} options.cacheKey The string to use a cache key.
     * @param {string} options.url The URL to fetch and cache.
     * @param {string} [options.cacheMode] The cache mode for the network request.
     * @param {Event} [options.event] The install event (if passed).
     * @param {Array<Object>} [options.plugins] An array of plugins to apply to
     * fetch and caching.
     * @param {string} [options.integrity] The value to use for the `integrity`
     * field when making the request.
     */
    async _addURLToCache({ cacheKey, url, cacheMode, event, plugins, integrity }) {
        const request = new Request(url, {
            integrity,
            cache: cacheMode,
            credentials: 'same-origin',
        });
        let response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__.fetchWrapper.fetch({
            event,
            plugins,
            request,
        });
        // Allow developers to override the default logic about what is and isn't
        // valid by passing in a plugin implementing cacheWillUpdate(), e.g.
        // a `CacheableResponsePlugin` instance.
        let cacheWillUpdatePlugin;
        for (const plugin of (plugins || [])) {
            if ('cacheWillUpdate' in plugin) {
                cacheWillUpdatePlugin = plugin;
            }
        }
        const isValidResponse = cacheWillUpdatePlugin ?
            // Use a callback if provided. It returns a truthy value if valid.
            // NOTE: invoke the method on the plugin instance so the `this` context
            // is correct.
            await cacheWillUpdatePlugin.cacheWillUpdate({ event, request, response }) :
            // Otherwise, default to considering any response status under 400 valid.
            // This includes, by default, considering opaque responses valid.
            response.status < 400;
        // Consider this a failure, leading to the `install` handler failing, if
        // we get back an invalid response.
        if (!isValidResponse) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('bad-precaching-response', {
                url,
                status: response.status,
            });
        }
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        if (response.redirected) {
            response = await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__.copyResponse)(response);
        }
        await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__.cacheWrapper.put({
            event,
            plugins,
            response,
            // `request` already uses `url`. We may be able to reuse it.
            request: cacheKey === url ? request : new Request(cacheKey),
            cacheName: this._cacheName,
            matchOptions: {
                ignoreSearch: true,
            },
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * This acts as a drop-in replacement for [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this._cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that can be used within a
     * {@link module:workbox-routing.Route} that will find a response for the
     * incoming request against the precache.
     *
     * If for an unexpected reason there is a cache miss for the request,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandler(fallbackToNetwork = true) {
        return async ({ request }) => {
            try {
                const response = await this.matchPrecache(request);
                if (response) {
                    return response;
                }
                // This shouldn't normally happen, but there are edge cases:
                // https://github.com/GoogleChrome/workbox/issues/1441
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('missing-precache-entry', {
                    cacheName: this._cacheName,
                    url: request instanceof Request ? request.url : request,
                });
            }
            catch (error) {
                if (fallbackToNetwork) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__.logger.debug(`Unable to respond with precached response. ` +
                            `Falling back to network.`, error);
                    }
                    return fetch(request);
                }
                throw error;
            }
        };
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * If for an unexpected reason there is a cache miss when looking up `url`,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url, fallbackToNetwork = true) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('non-precached-url', { url });
        }
        const handler = this.createHandler(fallbackToNetwork);
        const request = new Request(url);
        return () => handler({ request });
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => /* binding */ addPlugins
/* harmony export */ });
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/precachePlugins.js */ "./node_modules/workbox-precaching/utils/precachePlugins.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to precaching.
 *
 * @param {Array<Object>} newPlugins
 *
 * @memberof module:workbox-precaching
 */
function addPlugins(newPlugins) {
    _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__.precachePlugins.add(newPlugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => /* binding */ addRoute
/* harmony export */ });
/* harmony import */ var _utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/addFetchListener.js */ "./node_modules/workbox-precaching/utils/addFetchListener.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let listenerAdded = false;
/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 *
 * @memberof module:workbox-precaching
 */
function addRoute(options) {
    if (!listenerAdded) {
        (0,_utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__.addFetchListener)(options);
        listenerAdded = true;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => /* binding */ cleanupOutdatedCaches
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandler.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandler": () => /* binding */ createHandler
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandler} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandler} on that instance,
 * instead of using this function.
 *
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandler(fallbackToNetwork = true) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandler(fallbackToNetwork);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => /* binding */ createHandlerBoundToURL
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => /* binding */ getCacheKeyForURL
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => /* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins,
/* harmony export */   "addRoute": () => /* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute,
/* harmony export */   "cleanupOutdatedCaches": () => /* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches,
/* harmony export */   "createHandler": () => /* reexport safe */ _createHandler_js__WEBPACK_IMPORTED_MODULE_3__.createHandler,
/* harmony export */   "createHandlerBoundToURL": () => /* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_4__.createHandlerBoundToURL,
/* harmony export */   "getCacheKeyForURL": () => /* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_5__.getCacheKeyForURL,
/* harmony export */   "matchPrecache": () => /* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_6__.matchPrecache,
/* harmony export */   "precache": () => /* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_7__.precache,
/* harmony export */   "precacheAndRoute": () => /* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_8__.precacheAndRoute,
/* harmony export */   "PrecacheController": () => /* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheController
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandler.js */ "./node_modules/workbox-precaching/createHandler.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_10__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the Cache and respond to network requests with these
 * cached assets.
 *
 * If you require finer grained control, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to determine when performed.
 *
 * @module workbox-precaching
 */



/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController,
/* harmony export */   "addPlugins": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins,
/* harmony export */   "addRoute": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute,
/* harmony export */   "cleanupOutdatedCaches": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches,
/* harmony export */   "createHandler": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandler,
/* harmony export */   "createHandlerBoundToURL": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL,
/* harmony export */   "getCacheKeyForURL": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL,
/* harmony export */   "matchPrecache": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache,
/* harmony export */   "precache": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache,
/* harmony export */   "precacheAndRoute": () => /* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => /* binding */ matchPrecache
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => /* binding */ precache
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/precachePlugins.js */ "./node_modules/workbox-precaching/utils/precachePlugins.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const installListener = (event) => {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const plugins = _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__.precachePlugins.get();
    event.waitUntil(precacheController.install({ event, plugins })
        .catch((error) => {
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.error(`Service worker installation failed. It will ` +
                `be retried automatically during the next navigation.`);
        }
        // Re-throw the error to ensure installation fails.
        throw error;
    }));
};
const activateListener = (event) => {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    event.waitUntil(precacheController.activate());
};
/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    precacheController.addToCacheList(entries);
    if (entries.length > 0) {
        // NOTE: these listeners will only be added once (even if the `precache()`
        // method is called multiple times) because event listeners are implemented
        // as a set, where each listener must be unique.
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('install', installListener);
        self.addEventListener('activate', activateListener);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => /* binding */ precacheAndRoute
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [addRoute() options]{@link module:workbox-precaching.addRoute}.
 *
 * @memberof module:workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/addFetchListener.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/addFetchListener.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFetchListener": () => /* binding */ addFetchListener
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Adds a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * NOTE: when called more than once this method will replace the previously set
 * configuration options. Calling it more than once is not recommended outside
 * of tests.
 *
 * @private
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {workbox.precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 */
const addFetchListener = ({ ignoreURLParametersMatching = [/^utm_/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) => {
    const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('fetch', ((event) => {
        const precachedURL = (0,_getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__.getCacheKeyForURL)(event.request.url, {
            cleanURLs,
            directoryIndex,
            ignoreURLParametersMatching,
            urlManipulation,
        });
        if (!precachedURL) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.debug(`Precaching did not find a match for ` +
                    (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(event.request.url));
            }
            return;
        }
        let responsePromise = self.caches.open(cacheName).then((cache) => {
            return cache.match(precachedURL);
        }).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            // Fall back to the network if we don't have a cached response
            // (perhaps due to manual cache cleanup).
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(precachedURL)} in ${cacheName} was not found. ` +
                    `Falling back to the network instead.`);
            }
            return fetch(precachedURL);
        });
        if (true) {
            responsePromise = responsePromise.then((response) => {
                // Workbox is going to handle the route.
                // print the routing details to the console.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupCollapsed(`Precaching is responding to: ` +
                    (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(event.request.url));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`Serving the precached url: ${precachedURL}`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupCollapsed(`View request details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(event.request);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupCollapsed(`View response details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(response);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupEnd();
                return response;
            });
        }
        event.respondWith(responsePromise);
    }));
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => /* binding */ createCacheKey
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => /* binding */ deleteOutdatedCaches
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName;
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => /* binding */ generateURLVariations
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching, directoryIndex, cleanURLs, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getCacheKeyForURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => /* binding */ getCacheKeyForURL
/* harmony export */ });
/* harmony import */ var _getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This function will take the request URL and manipulate it based on the
 * configuration options.
 *
 * @param {string} url
 * @param {Object} options
 * @return {string} Returns the URL in the cache that matches the request,
 * if possible.
 *
 * @private
 */
const getCacheKeyForURL = (url, options) => {
    const precacheController = (0,_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
    for (const possibleURL of (0,_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__.generateURLVariations)(url, options)) {
        const possibleCacheKey = urlsToCacheKeys.get(possibleURL);
        if (possibleCacheKey) {
            return possibleCacheKey;
        }
    }
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => /* binding */ getOrCreatePrecacheController
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/precachePlugins.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/precachePlugins.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precachePlugins": () => /* binding */ precachePlugins
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const plugins = [];
const precachePlugins = {
    /*
     * @return {Array}
     * @private
     */
    get() {
        return plugins;
    },
    /*
     * @param {Array} newPlugins
     * @private
     */
    add(newPlugins) {
        plugins.push(...newPlugins);
    },
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => /* binding */ printCleanupDetails
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => /* binding */ printInstallDetails
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message += ` ${alreadyPrecachedCount} ` +
                `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => /* binding */ removeIgnoredSearchParams
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./src/app/sw.js":
/*!***********************!*\
  !*** ./src/app/sw.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");

(0,workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)([{'revision':'533db165c65245db908cd5b181bc9ed5','url':'/index.bundle.js'},{'revision':'888daff360ffde642e4d144172761f1f','url':'/manifest.888daff360ffde642e4d144172761f1f.json'},{'revision':'8ff64f6de8d0f1f1134402fd2c9519c2','url':'/signin.bundle.js'},{'revision':'432f4c4258672049e40a539528cd9f65','url':'/signup.bundle.js'}]);

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/signin.html',
          '/signup.html',
          '/index.bundle.js',
          '/signin.bundle.js',
          '/signup.bundle.js'
        ]);
      })
  );
});

self.addEventListener('activate', function () {});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app/sw.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9mZXRjaFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL192ZXJzaW9uLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvY29weVJlc3BvbnNlLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9tb2RlbHMvbWVzc2FnZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL3V0aWxzL3BsdWdpblV0aWxzLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvUHJlY2FjaGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9hZGRQbHVnaW5zLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvYWRkUm91dGUuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9jbGVhbnVwT3V0ZGF0ZWRDYWNoZXMuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9jcmVhdGVIYW5kbGVyLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9nZXRDYWNoZUtleUZvclVSTC5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2luZGV4LmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvbWF0Y2hQcmVjYWNoZS5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3ByZWNhY2hlLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvcHJlY2FjaGVBbmRSb3V0ZS5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2FkZEZldGNoTGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9jcmVhdGVDYWNoZUtleS5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2RlbGV0ZU91dGRhdGVkQ2FjaGVzLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvZ2VuZXJhdGVVUkxWYXJpYXRpb25zLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvZ2V0Q2FjaGVLZXlGb3JVUkwuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3ByZWNhY2hlUGx1Z2lucy5qcyIsIndlYnBhY2s6Ly9wd2EvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3ByaW50Q2xlYW51cERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vcHdhLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLmpzIiwid2VicGFjazovL3B3YS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9wd2EvLi9zcmMvYXBwL3N3LmpzIiwid2VicGFjazovL3B3YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wd2Evd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHdhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wd2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wd2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wd2Evd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUMwRTtBQUNsRDtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0ZBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUMyRDtBQUNuQztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtFQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrRUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtFQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0VBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0QkFBNEI7QUFDNUQsa0JBQWtCLGtFQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHNC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QUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoic3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBtZXNzYWdlR2VuZXJhdG9yIH0gZnJvbSAnLi4vbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VHZW5lcmF0b3IuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFdvcmtib3ggZXJyb3JzIHNob3VsZCBiZSB0aHJvd24gd2l0aCB0aGlzIGNsYXNzLlxuICogVGhpcyBhbGxvd3MgdXNlIHRvIGVuc3VyZSB0aGUgdHlwZSBlYXNpbHkgaW4gdGVzdHMsXG4gKiBoZWxwcyBkZXZlbG9wZXJzIGlkZW50aWZ5IGVycm9ycyBmcm9tIHdvcmtib3hcbiAqIGVhc2lseSBhbmQgYWxsb3dzIHVzZSB0byBvcHRpbWlzZSBlcnJvclxuICogbWVzc2FnZXMgY29ycmVjdGx5LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFdvcmtib3hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvckNvZGUgVGhlIGVycm9yIGNvZGUgdGhhdFxuICAgICAqIGlkZW50aWZpZXMgdGhpcyBwYXJ0aWN1bGFyIGVycm9yLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PX0gZGV0YWlscyBBbnkgcmVsZXZhbnQgYXJndW1lbnRzXG4gICAgICogdGhhdCB3aWxsIGhlbHAgZGV2ZWxvcGVycyBpZGVudGlmeSBpc3N1ZXMgc2hvdWxkXG4gICAgICogYmUgYWRkZWQgYXMgYSBrZXkgb24gdGhlIGNvbnRleHQgb2JqZWN0LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZSwgZGV0YWlscykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUdlbmVyYXRvcihlcnJvckNvZGUsIGRldGFpbHMpO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gZXJyb3JDb2RlO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgIH1cbn1cbmV4cG9ydCB7IFdvcmtib3hFcnJvciB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnLi4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLypcbiAqIFRoaXMgbWV0aG9kIHRocm93cyBpZiB0aGUgc3VwcGxpZWQgdmFsdWUgaXMgbm90IGFuIGFycmF5LlxuICogVGhlIGRlc3RydWN0ZWQgdmFsdWVzIGFyZSByZXF1aXJlZCB0byBwcm9kdWNlIGEgbWVhbmluZ2Z1bCBlcnJvciBmb3IgdXNlcnMuXG4gKiBUaGUgZGVzdHJ1Y3RlZCBhbmQgcmVzdHJ1Y3R1cmVkIG9iamVjdCBpcyBzbyBpdCdzIGNsZWFyIHdoYXQgaXNcbiAqIG5lZWRlZC5cbiAqL1xuY29uc3QgaXNBcnJheSA9ICh2YWx1ZSwgZGV0YWlscykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm90LWFuLWFycmF5JywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGhhc01ldGhvZCA9IChvYmplY3QsIGV4cGVjdGVkTWV0aG9kLCBkZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmplY3RbZXhwZWN0ZWRNZXRob2RdO1xuICAgIGlmICh0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRldGFpbHNbJ2V4cGVjdGVkTWV0aG9kJ10gPSBleHBlY3RlZE1ldGhvZDtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWlzc2luZy1hLW1ldGhvZCcsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBpc1R5cGUgPSAob2JqZWN0LCBleHBlY3RlZFR5cGUsIGRldGFpbHMpID0+IHtcbiAgICBpZiAodHlwZW9mIG9iamVjdCAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIGRldGFpbHNbJ2V4cGVjdGVkVHlwZSddID0gZXhwZWN0ZWRUeXBlO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbmNvcnJlY3QtdHlwZScsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBpc0luc3RhbmNlID0gKG9iamVjdCwgZXhwZWN0ZWRDbGFzcywgZGV0YWlscykgPT4ge1xuICAgIGlmICghKG9iamVjdCBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIGRldGFpbHNbJ2V4cGVjdGVkQ2xhc3MnXSA9IGV4cGVjdGVkQ2xhc3M7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC1jbGFzcycsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBpc09uZU9mID0gKHZhbHVlLCB2YWxpZFZhbHVlcywgZGV0YWlscykgPT4ge1xuICAgIGlmICghdmFsaWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgIGRldGFpbHNbJ3ZhbGlkVmFsdWVEZXNjcmlwdGlvbiddID1cbiAgICAgICAgICAgIGBWYWxpZCB2YWx1ZXMgYXJlICR7SlNPTi5zdHJpbmdpZnkodmFsaWRWYWx1ZXMpfS5gO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXZhbHVlJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzQXJyYXlPZkNsYXNzID0gKHZhbHVlLCBleHBlY3RlZENsYXNzLCBkZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgV29ya2JveEVycm9yKCdub3QtYXJyYXktb2YtY2xhc3MnLCBkZXRhaWxzKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBmaW5hbEFzc2VydEV4cG9ydHMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gbnVsbCA6IHtcbiAgICBoYXNNZXRob2QsXG4gICAgaXNBcnJheSxcbiAgICBpc0luc3RhbmNlLFxuICAgIGlzT25lT2YsXG4gICAgaXNUeXBlLFxuICAgIGlzQXJyYXlPZkNsYXNzLFxufTtcbmV4cG9ydCB7IGZpbmFsQXNzZXJ0RXhwb3J0cyBhcyBhc3NlcnQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgX2NhY2hlTmFtZURldGFpbHMgPSB7XG4gICAgZ29vZ2xlQW5hbHl0aWNzOiAnZ29vZ2xlQW5hbHl0aWNzJyxcbiAgICBwcmVjYWNoZTogJ3ByZWNhY2hlLXYyJyxcbiAgICBwcmVmaXg6ICd3b3JrYm94JyxcbiAgICBydW50aW1lOiAncnVudGltZScsXG4gICAgc3VmZml4OiB0eXBlb2YgcmVnaXN0cmF0aW9uICE9PSAndW5kZWZpbmVkJyA/IHJlZ2lzdHJhdGlvbi5zY29wZSA6ICcnLFxufTtcbmNvbnN0IF9jcmVhdGVDYWNoZU5hbWUgPSAoY2FjaGVOYW1lKSA9PiB7XG4gICAgcmV0dXJuIFtfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXgsIGNhY2hlTmFtZSwgX2NhY2hlTmFtZURldGFpbHMuc3VmZml4XVxuICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgLmpvaW4oJy0nKTtcbn07XG5jb25zdCBlYWNoQ2FjaGVOYW1lRGV0YWlsID0gKGZuKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoX2NhY2hlTmFtZURldGFpbHMpKSB7XG4gICAgICAgIGZuKGtleSk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBjYWNoZU5hbWVzID0ge1xuICAgIHVwZGF0ZURldGFpbHM6IChkZXRhaWxzKSA9PiB7XG4gICAgICAgIGVhY2hDYWNoZU5hbWVEZXRhaWwoKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgX2NhY2hlTmFtZURldGFpbHNba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRHb29nbGVBbmFseXRpY3NOYW1lOiAodXNlckNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLmdvb2dsZUFuYWx5dGljcyk7XG4gICAgfSxcbiAgICBnZXRQcmVjYWNoZU5hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucHJlY2FjaGUpO1xuICAgIH0sXG4gICAgZ2V0UHJlZml4OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXg7XG4gICAgfSxcbiAgICBnZXRSdW50aW1lTmFtZTogKHVzZXJDYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5ydW50aW1lKTtcbiAgICB9LFxuICAgIGdldFN1ZmZpeDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2NhY2hlTmFtZURldGFpbHMuc3VmZml4O1xuICAgIH0sXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9hc3NlcnQuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MgfSBmcm9tICcuL2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnLi9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBwbHVnaW5VdGlscyB9IGZyb20gJy4uL3V0aWxzL3BsdWdpblV0aWxzLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJy4vV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBDaGVja3MgdGhlIGxpc3Qgb2YgcGx1Z2lucyBmb3IgdGhlIGNhY2hlS2V5V2lsbEJlVXNlZCBjYWxsYmFjaywgYW5kXG4gKiBleGVjdXRlcyBhbnkgb2YgdGhvc2UgY2FsbGJhY2tzIGZvdW5kIGluIHNlcXVlbmNlLiBUaGUgZmluYWwgYFJlcXVlc3RgIG9iamVjdFxuICogcmV0dXJuZWQgYnkgdGhlIGxhc3QgcGx1Z2luIGlzIHRyZWF0ZWQgYXMgdGhlIGNhY2hlIGtleSBmb3IgY2FjaGUgcmVhZHNcbiAqIGFuZC9vciB3cml0ZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tb2RlXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnM9W11dXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlcXVlc3Q+fVxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5jb25zdCBfZ2V0RWZmZWN0aXZlUmVxdWVzdCA9IGFzeW5jICh7IHJlcXVlc3QsIG1vZGUsIHBsdWdpbnMgPSBbXSwgfSkgPT4ge1xuICAgIGNvbnN0IGNhY2hlS2V5V2lsbEJlVXNlZFBsdWdpbnMgPSBwbHVnaW5VdGlscy5maWx0ZXIocGx1Z2lucywgXCJjYWNoZUtleVdpbGxCZVVzZWRcIiAvKiBDQUNIRV9LRVlfV0lMTF9CRV9VU0VEICovKTtcbiAgICBsZXQgZWZmZWN0aXZlUmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgZm9yIChjb25zdCBwbHVnaW4gb2YgY2FjaGVLZXlXaWxsQmVVc2VkUGx1Z2lucykge1xuICAgICAgICBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgcGx1Z2luW1wiY2FjaGVLZXlXaWxsQmVVc2VkXCIgLyogQ0FDSEVfS0VZX1dJTExfQkVfVVNFRCAqL10uY2FsbChwbHVnaW4sIHsgbW9kZSwgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3RpdmVSZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZWZmZWN0aXZlUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGVmZmVjdGl2ZVJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShlZmZlY3RpdmVSZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6IFwiY2FjaGVLZXlXaWxsQmVVc2VkXCIgLyogQ0FDSEVfS0VZX1dJTExfQkVfVVNFRCAqLyxcbiAgICAgICAgICAgICAgICBpc1JldHVyblZhbHVlUHJvYmxlbTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlZmZlY3RpdmVSZXF1ZXN0O1xufTtcbi8qKlxuICogVGhpcyBtZXRob2Qgd2lsbCBjYWxsIGNhY2hlV2lsbFVwZGF0ZSBvbiB0aGUgYXZhaWxhYmxlIHBsdWdpbnMgKG9yIHVzZVxuICogc3RhdHVzID09PSAyMDApIHRvIGRldGVybWluZSBpZiB0aGUgUmVzcG9uc2UgaXMgc2FmZSBhbmQgdmFsaWQgdG8gY2FjaGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLnJlc3BvbnNlXG4gKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF1cbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2lucz1bXV1cbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5jb25zdCBfaXNSZXNwb25zZVNhZmVUb0NhY2hlID0gYXN5bmMgKHsgcmVxdWVzdCwgcmVzcG9uc2UsIGV2ZW50LCBwbHVnaW5zID0gW10sIH0pID0+IHtcbiAgICBsZXQgcmVzcG9uc2VUb0NhY2hlID0gcmVzcG9uc2U7XG4gICAgbGV0IHBsdWdpbnNVc2VkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgICAgICBpZiAoXCJjYWNoZVdpbGxVcGRhdGVcIiAvKiBDQUNIRV9XSUxMX1VQREFURSAqLyBpbiBwbHVnaW4pIHtcbiAgICAgICAgICAgIHBsdWdpbnNVc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbk1ldGhvZCA9IHBsdWdpbltcImNhY2hlV2lsbFVwZGF0ZVwiIC8qIENBQ0hFX1dJTExfVVBEQVRFICovXTtcbiAgICAgICAgICAgIHJlc3BvbnNlVG9DYWNoZSA9IGF3YWl0IHBsdWdpbk1ldGhvZC5jYWxsKHBsdWdpbiwge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZSxcbiAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlc3BvbnNlVG9DYWNoZSwgUmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IFwiY2FjaGVXaWxsVXBkYXRlXCIgLyogQ0FDSEVfV0lMTF9VUERBVEUgKi8sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JldHVyblZhbHVlUHJvYmxlbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXBsdWdpbnNVc2VkKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFRoZSByZXNwb25zZSBmb3IgJyR7cmVxdWVzdC51cmx9JyBpcyBhbiBvcGFxdWUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHJlc3BvbnNlLiBUaGUgY2FjaGluZyBzdHJhdGVneSB0aGF0IHlvdSdyZSB1c2luZyB3aWxsIG5vdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgY2FjaGUgb3BhcXVlIHJlc3BvbnNlcyBieSBkZWZhdWx0LmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgcmVzcG9uc2UgZm9yICcke3JlcXVlc3QudXJsfScgcmV0dXJuZWQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGEgc3RhdHVzIGNvZGUgb2YgJyR7cmVzcG9uc2Uuc3RhdHVzfScgYW5kIHdvbid0IGJlIGNhY2hlZCBhcyBhIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGByZXN1bHQuYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2VUb0NhY2hlID0gcmVzcG9uc2VUb0NhY2hlICYmIHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgPT09IDIwMCA/XG4gICAgICAgICAgICByZXNwb25zZVRvQ2FjaGUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZVRvQ2FjaGUgPyByZXNwb25zZVRvQ2FjaGUgOiBudWxsO1xufTtcbi8qKlxuICogVGhpcyBpcyBhIHdyYXBwZXIgYXJvdW5kIGNhY2hlLm1hdGNoKCkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0byBtYXRjaCBhZ2FpbnN0LlxuICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIFJlcXVlc3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gbG9vayB1cFxuICogICAgIGNhY2hlIGVudHJpZXMuXG4gKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF0gVGhlIGV2ZW50IHRoYXQgcHJvbXB0ZWQgdGhlIGFjdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIE9wdGlvbnMgcGFzc2VkIHRvIGNhY2hlLm1hdGNoKCkuXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnM9W11dIEFycmF5IG9mIHBsdWdpbnMuXG4gKiBAcmV0dXJuIHtSZXNwb25zZX0gQSBjYWNoZWQgcmVzcG9uc2UgaWYgYXZhaWxhYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5jb25zdCBtYXRjaFdyYXBwZXIgPSBhc3luYyAoeyBjYWNoZU5hbWUsIHJlcXVlc3QsIGV2ZW50LCBtYXRjaE9wdGlvbnMsIHBsdWdpbnMgPSBbXSwgfSkgPT4ge1xuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3BlbihjYWNoZU5hbWUpO1xuICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCBfZ2V0RWZmZWN0aXZlUmVxdWVzdCh7XG4gICAgICAgIHBsdWdpbnMsIHJlcXVlc3QsIG1vZGU6ICdyZWFkJ1xuICAgIH0pO1xuICAgIGxldCBjYWNoZWRSZXNwb25zZSA9IGF3YWl0IGNhY2hlLm1hdGNoKGVmZmVjdGl2ZVJlcXVlc3QsIG1hdGNoT3B0aW9ucyk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluICcke2NhY2hlTmFtZX0nLmApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBObyBjYWNoZWQgcmVzcG9uc2UgZm91bmQgaW4gJyR7Y2FjaGVOYW1lfScuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgICAgICBpZiAoXCJjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWRcIiAvKiBDQUNIRURfUkVTUE9OU0VfV0lMTF9CRV9VU0VEICovIGluIHBsdWdpbikge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luTWV0aG9kID0gcGx1Z2luW1wiY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkXCIgLyogQ0FDSEVEX1JFU1BPTlNFX1dJTExfQkVfVVNFRCAqL107XG4gICAgICAgICAgICBjYWNoZWRSZXNwb25zZSA9IGF3YWl0IHBsdWdpbk1ldGhvZC5jYWxsKHBsdWdpbiwge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICBtYXRjaE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgY2FjaGVkUmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UoY2FjaGVkUmVzcG9uc2UsIFJlc3BvbnNlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBcImNhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZFwiIC8qIENBQ0hFRF9SRVNQT05TRV9XSUxMX0JFX1VTRUQgKi8sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JldHVyblZhbHVlUHJvYmxlbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRSZXNwb25zZTtcbn07XG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIGNhY2hlLnB1dCgpLlxuICpcbiAqIFdpbGwgY2FsbCBgY2FjaGVEaWRVcGRhdGVgIG9uIHBsdWdpbnMgaWYgdGhlIGNhY2hlIHdhcyB1cGRhdGVkLCB1c2luZ1xuICogYG1hdGNoT3B0aW9uc2Agd2hlbiBkZXRlcm1pbmluZyB3aGF0IHRoZSBvbGQgZW50cnkgaXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAqIEBwYXJhbSB7RXZlbnR9IFtvcHRpb25zLmV2ZW50XVxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zPVtdXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc11cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuY29uc3QgcHV0V3JhcHBlciA9IGFzeW5jICh7IGNhY2hlTmFtZSwgcmVxdWVzdCwgcmVzcG9uc2UsIGV2ZW50LCBwbHVnaW5zID0gW10sIG1hdGNoT3B0aW9ucywgfSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCAmJiByZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2F0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0Jywge1xuICAgICAgICAgICAgICAgIHVybDogZ2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgX2dldEVmZmVjdGl2ZVJlcXVlc3Qoe1xuICAgICAgICBwbHVnaW5zLCByZXF1ZXN0LCBtb2RlOiAnd3JpdGUnXG4gICAgfSk7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBDYW5ub3QgY2FjaGUgbm9uLWV4aXN0ZW50IHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfScuYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignY2FjaGUtcHV0LXdpdGgtbm8tcmVzcG9uc2UnLCB7XG4gICAgICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlVG9DYWNoZSA9IGF3YWl0IF9pc1Jlc3BvbnNlU2FmZVRvQ2FjaGUoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgcGx1Z2lucyxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgfSk7XG4gICAgaWYgKCFyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUmVzcG9uc2UgJyR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfScgd2lsbCBgICtcbiAgICAgICAgICAgICAgICBgbm90IGJlIGNhY2hlZC5gLCByZXNwb25zZVRvQ2FjaGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKGNhY2hlTmFtZSk7XG4gICAgY29uc3QgdXBkYXRlUGx1Z2lucyA9IHBsdWdpblV0aWxzLmZpbHRlcihwbHVnaW5zLCBcImNhY2hlRGlkVXBkYXRlXCIgLyogQ0FDSEVfRElEX1VQREFURSAqLyk7XG4gICAgY29uc3Qgb2xkUmVzcG9uc2UgPSB1cGRhdGVQbHVnaW5zLmxlbmd0aCA+IDAgP1xuICAgICAgICBhd2FpdCBtYXRjaFdyYXBwZXIoeyBjYWNoZU5hbWUsIG1hdGNoT3B0aW9ucywgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCB9KSA6XG4gICAgICAgIG51bGw7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBVcGRhdGluZyB0aGUgJyR7Y2FjaGVOYW1lfScgY2FjaGUgd2l0aCBhIG5ldyBSZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICBgJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9LmApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBjYWNoZS5wdXQoZWZmZWN0aXZlUmVxdWVzdCwgcmVzcG9uc2VUb0NhY2hlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NRXhjZXB0aW9uI2V4Y2VwdGlvbi1RdW90YUV4Y2VlZGVkRXJyb3JcbiAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InKSB7XG4gICAgICAgICAgICBhd2FpdCBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB1cGRhdGVQbHVnaW5zKSB7XG4gICAgICAgIGF3YWl0IHBsdWdpbltcImNhY2hlRGlkVXBkYXRlXCIgLyogQ0FDSEVfRElEX1VQREFURSAqL10uY2FsbChwbHVnaW4sIHtcbiAgICAgICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgb2xkUmVzcG9uc2UsXG4gICAgICAgICAgICBuZXdSZXNwb25zZTogcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBjYWNoZVdyYXBwZXIgPSB7XG4gICAgcHV0OiBwdXRXcmFwcGVyLFxuICAgIG1hdGNoOiBtYXRjaFdyYXBwZXIsXG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5sZXQgc3VwcG9ydFN0YXR1cztcbi8qKlxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHNcbiAqIGNvbnN0cnVjdGluZyBhIG5ldyBgUmVzcG9uc2VgIGZyb20gYSBgcmVzcG9uc2UuYm9keWAgc3RyZWFtLlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCwgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBjYW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgY29uc3RydWN0IGEgYFJlc3BvbnNlYCBmcm9tIGEgYHJlc3BvbnNlLmJvZHlgIHN0cmVhbSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSgpIHtcbiAgICBpZiAoc3VwcG9ydFN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHRlc3RSZXNwb25zZSA9IG5ldyBSZXNwb25zZSgnJyk7XG4gICAgICAgIGlmICgnYm9keScgaW4gdGVzdFJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG5ldyBSZXNwb25zZSh0ZXN0UmVzcG9uc2UuYm9keSk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0U3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwcG9ydFN0YXR1cyA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydFN0YXR1cztcbn1cbmV4cG9ydCB7IGNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0gfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBxdW90YUVycm9yQ2FsbGJhY2tzIH0gZnJvbSAnLi4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJ1bnMgYWxsIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMsIG9uZSBhdCBhIHRpbWUgc2VxdWVudGlhbGx5LCBpbiB0aGUgb3JkZXJcbiAqIGluIHdoaWNoIHRoZXkgd2VyZSByZWdpc3RlcmVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKiBAcHJpdmF0ZVxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKGBBYm91dCB0byBydW4gJHtxdW90YUVycm9yQ2FsbGJhY2tzLnNpemV9IGAgK1xuICAgICAgICAgICAgYGNhbGxiYWNrcyB0byBjbGVhbiB1cCBjYWNoZXMuYCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgcXVvdGFFcnJvckNhbGxiYWNrcykge1xuICAgICAgICBhd2FpdCBjYWxsYmFjaygpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhjYWxsYmFjaywgJ2lzIGNvbXBsZXRlLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coJ0ZpbmlzaGVkIHJ1bm5pbmcgY2FsbGJhY2tzLicpO1xuICAgIH1cbn1cbmV4cG9ydCB7IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICcuL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJy4uL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IHBsdWdpblV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvcGx1Z2luVXRpbHMuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIHRoZSBmZXRjaCBBUEkuXG4gKlxuICogV2lsbCBjYWxsIHJlcXVlc3RXaWxsRmV0Y2ggb24gYXZhaWxhYmxlIHBsdWdpbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc11cbiAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBbb3B0aW9ucy5ldmVudF1cbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2lucz1bXV1cbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5jb25zdCB3cmFwcGVkRmV0Y2ggPSBhc3luYyAoeyByZXF1ZXN0LCBmZXRjaE9wdGlvbnMsIGV2ZW50LCBwbHVnaW5zID0gW10sIH0pID0+IHtcbiAgICBpZiAodHlwZW9mIHJlcXVlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0KTtcbiAgICB9XG4gICAgLy8gV2UgKnNob3VsZCogYmUgYWJsZSB0byBjYWxsIGBhd2FpdCBldmVudC5wcmVsb2FkUmVzcG9uc2VgIGV2ZW4gaWYgaXQnc1xuICAgIC8vIHVuZGVmaW5lZCwgYnV0IGZvciBzb21lIHJlYXNvbiwgZG9pbmcgc28gbGVhZHMgdG8gZXJyb3JzIGluIG91ciBOb2RlIHVuaXRcbiAgICAvLyB0ZXN0cy4gVG8gd29yayBhcm91bmQgdGhhdCwgZXhwbGljaXRseSBjaGVjayBwcmVsb2FkUmVzcG9uc2UncyB2YWx1ZSBmaXJzdC5cbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBGZXRjaEV2ZW50ICYmIGV2ZW50LnByZWxvYWRSZXNwb25zZSkge1xuICAgICAgICBjb25zdCBwb3NzaWJsZVByZWxvYWRSZXNwb25zZSA9IGF3YWl0IGV2ZW50LnByZWxvYWRSZXNwb25zZTtcbiAgICAgICAgaWYgKHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFVzaW5nIGEgcHJlbG9hZGVkIG5hdmlnYXRpb24gcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwb3NzaWJsZVByZWxvYWRSZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIGV4cGVjdGVkQ2xhc3M6IFJlcXVlc3QsXG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jb3JlJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ZldGNoV3JhcHBlcicsXG4gICAgICAgICAgICBmdW5jTmFtZTogJ3dyYXBwZWRGZXRjaCcsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBmYWlsZWRGZXRjaFBsdWdpbnMgPSBwbHVnaW5VdGlscy5maWx0ZXIocGx1Z2lucywgXCJmZXRjaERpZEZhaWxcIiAvKiBGRVRDSF9ESURfRkFJTCAqLyk7XG4gICAgLy8gSWYgdGhlcmUgaXMgYSBmZXRjaERpZEZhaWwgcGx1Z2luLCB3ZSBuZWVkIHRvIHNhdmUgYSBjbG9uZSBvZiB0aGVcbiAgICAvLyBvcmlnaW5hbCByZXF1ZXN0IGJlZm9yZSBpdCdzIGVpdGhlciBtb2RpZmllZCBieSBhIHJlcXVlc3RXaWxsRmV0Y2hcbiAgICAvLyBwbHVnaW4gb3IgYmVmb3JlIHRoZSBvcmlnaW5hbCByZXF1ZXN0J3MgYm9keSBpcyBjb25zdW1lZCB2aWEgZmV0Y2goKS5cbiAgICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSBmYWlsZWRGZXRjaFBsdWdpbnMubGVuZ3RoID4gMCA/XG4gICAgICAgIHJlcXVlc3QuY2xvbmUoKSA6IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgICAgICAgICAgaWYgKFwicmVxdWVzdFdpbGxGZXRjaFwiIC8qIFJFUVVFU1RfV0lMTF9GRVRDSCAqLyBpbiBwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbHVnaW5NZXRob2QgPSBwbHVnaW5bXCJyZXF1ZXN0V2lsbEZldGNoXCIgLyogUkVRVUVTVF9XSUxMX0ZFVENIICovXTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0Q2xvbmUgPSByZXF1ZXN0LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IGF3YWl0IHBsdWdpbk1ldGhvZC5jYWxsKHBsdWdpbiwge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0Q2xvbmUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IFwiY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkXCIgLyogQ0FDSEVEX1JFU1BPTlNFX1dJTExfQkVfVVNFRCAqLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JldHVyblZhbHVlUHJvYmxlbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCcsIHtcbiAgICAgICAgICAgIHRocm93bkVycm9yOiBlcnIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBUaGUgcmVxdWVzdCBjYW4gYmUgYWx0ZXJlZCBieSBwbHVnaW5zIHdpdGggYHJlcXVlc3RXaWxsRmV0Y2hgIG1ha2luZ1xuICAgIC8vIHRoZSBvcmlnaW5hbCByZXF1ZXN0IChNb3N0IGxpa2VseSBmcm9tIGEgYGZldGNoYCBldmVudCkgdG8gYmUgZGlmZmVyZW50XG4gICAgLy8gdG8gdGhlIFJlcXVlc3Qgd2UgbWFrZS4gUGFzcyBib3RoIHRvIGBmZXRjaERpZEZhaWxgIHRvIGFpZCBkZWJ1Z2dpbmcuXG4gICAgY29uc3QgcGx1Z2luRmlsdGVyZWRSZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSgpO1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBmZXRjaFJlc3BvbnNlO1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2XG4gICAgICAgIGlmIChyZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScpIHtcbiAgICAgICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0LCBmZXRjaE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoYE5ldHdvcmsgcmVxdWVzdCBmb3IgYCArXG4gICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHJldHVybmVkIGEgcmVzcG9uc2Ugd2l0aCBgICtcbiAgICAgICAgICAgICAgICBgc3RhdHVzICcke2ZldGNoUmVzcG9uc2Uuc3RhdHVzfScuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgICAgICAgICAgaWYgKFwiZmV0Y2hEaWRTdWNjZWVkXCIgLyogRkVUQ0hfRElEX1NVQ0NFRUQgKi8gaW4gcGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IHBsdWdpbltcImZldGNoRGlkU3VjY2VlZFwiIC8qIEZFVENIX0RJRF9TVUNDRUVEICovXVxuICAgICAgICAgICAgICAgICAgICAuY2FsbChwbHVnaW4sIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IGZldGNoUmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZldGNoUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKGZldGNoUmVzcG9uc2UsIFJlc3BvbnNlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IFwiZmV0Y2hEaWRTdWNjZWVkXCIgLyogRkVUQ0hfRElEX1NVQ0NFRUQgKi8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXR1cm5WYWx1ZVByb2JsZW06IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hSZXNwb25zZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYE5ldHdvcmsgcmVxdWVzdCBmb3IgYCArXG4gICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHRocmV3IGFuIGVycm9yLmAsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBmYWlsZWRGZXRjaFBsdWdpbnMpIHtcbiAgICAgICAgICAgIGF3YWl0IHBsdWdpbltcImZldGNoRGlkRmFpbFwiIC8qIEZFVENIX0RJRF9GQUlMICovXS5jYWxsKHBsdWdpbiwge1xuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsUmVxdWVzdDogb3JpZ2luYWxSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59O1xuY29uc3QgZmV0Y2hXcmFwcGVyID0ge1xuICAgIGZldGNoOiB3cmFwcGVkRmV0Y2gsXG59O1xuZXhwb3J0IHsgZmV0Y2hXcmFwcGVyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IGdldEZyaWVuZGx5VVJMID0gKHVybCkgPT4ge1xuICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwoU3RyaW5nKHVybCksIGxvY2F0aW9uLmhyZWYpO1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIzMjNcbiAgICAvLyBXZSB3YW50IHRvIGluY2x1ZGUgZXZlcnl0aGluZywgZXhjZXB0IGZvciB0aGUgb3JpZ2luIGlmIGl0J3Mgc2FtZS1vcmlnaW4uXG4gICAgcmV0dXJuIHVybE9iai5ocmVmLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7bG9jYXRpb24ub3JpZ2lufWApLCAnJyk7XG59O1xuZXhwb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IGxvZ2dlciA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gbnVsbCA6ICgoKSA9PiB7XG4gICAgLy8gRG9uJ3Qgb3ZlcndyaXRlIHRoaXMgdmFsdWUgaWYgaXQncyBhbHJlYWR5IHNldC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L3B1bGwvMjI4NCNpc3N1ZWNvbW1lbnQtNTYwNDcwOTIzXG4gICAgaWYgKCEoJ19fV0JfRElTQUJMRV9ERVZfTE9HUycgaW4gc2VsZikpIHtcbiAgICAgICAgc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MgPSBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGluR3JvdXAgPSBmYWxzZTtcbiAgICBjb25zdCBtZXRob2RUb0NvbG9yTWFwID0ge1xuICAgICAgICBkZWJ1ZzogYCM3ZjhjOGRgLFxuICAgICAgICBsb2c6IGAjMmVjYzcxYCxcbiAgICAgICAgd2FybjogYCNmMzljMTJgLFxuICAgICAgICBlcnJvcjogYCNjMDM5MmJgLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYCMzNDk4ZGJgLFxuICAgICAgICBncm91cEVuZDogbnVsbCxcbiAgICB9O1xuICAgIGNvbnN0IHByaW50ID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJncykge1xuICAgICAgICBpZiAoc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICAvLyBTYWZhcmkgZG9lc24ndCBwcmludCBhbGwgY29uc29sZS5ncm91cENvbGxhcHNlZCgpIGFyZ3VtZW50czpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODI3NTRcbiAgICAgICAgICAgIGlmICgvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICAgICAgICBgYmFja2dyb3VuZDogJHttZXRob2RUb0NvbG9yTWFwW21ldGhvZF19YCxcbiAgICAgICAgICAgIGBib3JkZXItcmFkaXVzOiAwLjVlbWAsXG4gICAgICAgICAgICBgY29sb3I6IHdoaXRlYCxcbiAgICAgICAgICAgIGBmb250LXdlaWdodDogYm9sZGAsXG4gICAgICAgICAgICBgcGFkZGluZzogMnB4IDAuNWVtYCxcbiAgICAgICAgXTtcbiAgICAgICAgLy8gV2hlbiBpbiBhIGdyb3VwLCB0aGUgd29ya2JveCBwcmVmaXggaXMgbm90IGRpc3BsYXllZC5cbiAgICAgICAgY29uc3QgbG9nUHJlZml4ID0gaW5Hcm91cCA/IFtdIDogWyclY3dvcmtib3gnLCBzdHlsZXMuam9pbignOycpXTtcbiAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmxvZ1ByZWZpeCwgLi4uYXJncyk7XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgIGluR3JvdXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cEVuZCcpIHtcbiAgICAgICAgICAgIGluR3JvdXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYXBpID0ge307XG4gICAgY29uc3QgbG9nZ2VyTWV0aG9kcyA9IE9iamVjdC5rZXlzKG1ldGhvZFRvQ29sb3JNYXApO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGxvZ2dlck1ldGhvZHMpIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0ga2V5O1xuICAgICAgICBhcGlbbWV0aG9kXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBwcmludChtZXRob2QsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYXBpO1xufSkoKSk7XG5leHBvcnQgeyBsb2dnZXIgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OmNvcmU6NS4xLjQnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFsbG93cyBkZXZlbG9wZXJzIHRvIGNvcHkgYSByZXNwb25zZSBhbmQgbW9kaWZ5IGl0cyBgaGVhZGVyc2AsIGBzdGF0dXNgLFxuICogb3IgYHN0YXR1c1RleHRgIHZhbHVlcyAodGhlIHZhbHVlcyBzZXR0YWJsZSB2aWEgYVxuICogW2BSZXNwb25zZUluaXRgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzcG9uc2UvUmVzcG9uc2UjU3ludGF4fVxuICogb2JqZWN0IGluIHRoZSBjb25zdHJ1Y3RvcikuXG4gKiBUbyBtb2RpZnkgdGhlc2UgdmFsdWVzLCBwYXNzIGEgZnVuY3Rpb24gYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gVGhhdFxuICogZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdpdGggYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHJlc3BvbnNlIHByb3BlcnRpZXNcbiAqIGB7aGVhZGVycywgc3RhdHVzLCBzdGF0dXNUZXh0fWAuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhpcyBmdW5jdGlvbiB3aWxsXG4gKiBiZSB1c2VkIGFzIHRoZSBgUmVzcG9uc2VJbml0YCBmb3IgdGhlIG5ldyBgUmVzcG9uc2VgLiBUbyBjaGFuZ2UgdGhlIHZhbHVlc1xuICogZWl0aGVyIG1vZGlmeSB0aGUgcGFzc2VkIHBhcmFtZXRlcihzKSBhbmQgcmV0dXJuIGl0LCBvciByZXR1cm4gYSB0b3RhbGx5XG4gKiBuZXcgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtb2RpZmllclxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY29weVJlc3BvbnNlKHJlc3BvbnNlLCBtb2RpZmllcikge1xuICAgIGNvbnN0IGNsb25lZFJlc3BvbnNlID0gcmVzcG9uc2UuY2xvbmUoKTtcbiAgICAvLyBDcmVhdGUgYSBmcmVzaCBgUmVzcG9uc2VJbml0YCBvYmplY3QgYnkgY2xvbmluZyB0aGUgaGVhZGVycy5cbiAgICBjb25zdCByZXNwb25zZUluaXQgPSB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKGNsb25lZFJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBzdGF0dXM6IGNsb25lZFJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogY2xvbmVkUmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICB9O1xuICAgIC8vIEFwcGx5IGFueSB1c2VyIG1vZGlmaWNhdGlvbnMuXG4gICAgY29uc3QgbW9kaWZpZWRSZXNwb25zZUluaXQgPSBtb2RpZmllciA/IG1vZGlmaWVyKHJlc3BvbnNlSW5pdCkgOiByZXNwb25zZUluaXQ7XG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgcmVzcG9uc2UgZnJvbSB0aGUgYm9keSBzdHJlYW0gYW5kIGBSZXNwb25zZUluaXRgXG4gICAgLy8gbW9kaWZpY2F0aW9ucy4gTm90ZTogbm90IGFsbCBicm93c2VycyBzdXBwb3J0IHRoZSBSZXNwb25zZS5ib2R5IHN0cmVhbSxcbiAgICAvLyBzbyBmYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgZW50aXJlIGJvZHkgaW50byBtZW1vcnkgYXMgYSBibG9iLlxuICAgIGNvbnN0IGJvZHkgPSBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtKCkgP1xuICAgICAgICBjbG9uZWRSZXNwb25zZS5ib2R5IDogYXdhaXQgY2xvbmVkUmVzcG9uc2UuYmxvYigpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keSwgbW9kaWZpZWRSZXNwb25zZUluaXQpO1xufVxuZXhwb3J0IHsgY29weVJlc3BvbnNlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBmYWxsYmFjayA9IChjb2RlLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IG1zZyA9IGNvZGU7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBtc2cgKz0gYCA6OiAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWA7XG4gICAgfVxuICAgIHJldHVybiBtc2c7XG59O1xuY29uc3QgZ2VuZXJhdG9yRnVuY3Rpb24gPSAoY29kZSwgZGV0YWlscyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VzW2NvZGVdO1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIG1lc3NhZ2UgZm9yIGNvZGUgJyR7Y29kZX0nLmApO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZShkZXRhaWxzKTtcbn07XG5leHBvcnQgY29uc3QgbWVzc2FnZUdlbmVyYXRvciA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSA/XG4gICAgZmFsbGJhY2sgOiBnZW5lcmF0b3JGdW5jdGlvbjtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0ge1xuICAgICdpbnZhbGlkLXZhbHVlJzogKHsgcGFyYW1OYW1lLCB2YWxpZFZhbHVlRGVzY3JpcHRpb24sIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbU5hbWUgfHwgIXZhbGlkVmFsdWVEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXZhbHVlJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRoZSAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGdpdmVuIGEgdmFsdWUgd2l0aCBhbiBgICtcbiAgICAgICAgICAgIGB1bmV4cGVjdGVkIHZhbHVlLiAke3ZhbGlkVmFsdWVEZXNjcmlwdGlvbn0gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0uYDtcbiAgICB9LFxuICAgICdub3QtYW4tYXJyYXknOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIW1vZHVsZU5hbWUgfHwgIWNsYXNzTmFtZSB8fCAhZnVuY05hbWUgfHwgIXBhcmFtTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdub3QtYW4tYXJyYXknIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBhbiBhcnJheS5gO1xuICAgIH0sXG4gICAgJ2luY29ycmVjdC10eXBlJzogKHsgZXhwZWN0ZWRUeXBlLCBwYXJhbU5hbWUsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIWV4cGVjdGVkVHlwZSB8fCAhcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbmNvcnJlY3QtdHlwZScgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lID8gKGNsYXNzTmFtZSArICcuJykgOiAnJ31gICtcbiAgICAgICAgICAgIGAke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIG9mIHR5cGUgJHtleHBlY3RlZFR5cGV9LmA7XG4gICAgfSxcbiAgICAnaW5jb3JyZWN0LWNsYXNzJzogKHsgZXhwZWN0ZWRDbGFzcywgcGFyYW1OYW1lLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBpc1JldHVyblZhbHVlUHJvYmxlbSB9KSA9PiB7XG4gICAgICAgIGlmICghZXhwZWN0ZWRDbGFzcyB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LWNsYXNzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZXR1cm5WYWx1ZVByb2JsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBgVGhlIHJldHVybiB2YWx1ZSBmcm9tIGAgK1xuICAgICAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZSA/IChjbGFzc05hbWUgKyAnLicpIDogJyd9JHtmdW5jTmFtZX0oKScgYCArXG4gICAgICAgICAgICAgICAgYG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgY2xhc3MgJHtleHBlY3RlZENsYXNzLm5hbWV9LmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lID8gKGNsYXNzTmFtZSArICcuJykgOiAnJ30ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgICAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzcy5uYW1lfS5gO1xuICAgIH0sXG4gICAgJ21pc3NpbmctYS1tZXRob2QnOiAoeyBleHBlY3RlZE1ldGhvZCwgcGFyYW1OYW1lLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgaWYgKCFleHBlY3RlZE1ldGhvZCB8fCAhcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFjbGFzc05hbWVcbiAgICAgICAgICAgIHx8ICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdtaXNzaW5nLWEtbWV0aG9kJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCkgZXhwZWN0ZWQgdGhlIGAgK1xuICAgICAgICAgICAgYCcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB0byBleHBvc2UgYSAnJHtleHBlY3RlZE1ldGhvZH0nIG1ldGhvZC5gO1xuICAgIH0sXG4gICAgJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZSc6ICh7IGVudHJ5IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBBbiB1bmV4cGVjdGVkIGVudHJ5IHdhcyBwYXNzZWQgdG8gYCArXG4gICAgICAgICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgVGhlIGVudHJ5IGAgK1xuICAgICAgICAgICAgYCcke0pTT04uc3RyaW5naWZ5KGVudHJ5KX0nIGlzbid0IHN1cHBvcnRlZC4gWW91IG11c3Qgc3VwcGx5IGFuIGFycmF5IG9mIGAgK1xuICAgICAgICAgICAgYHN0cmluZ3Mgd2l0aCBvbmUgb3IgbW9yZSBjaGFyYWN0ZXJzLCBvYmplY3RzIHdpdGggYSB1cmwgcHJvcGVydHkgb3IgYCArXG4gICAgICAgICAgICBgUmVxdWVzdCBvYmplY3RzLmA7XG4gICAgfSxcbiAgICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcyc6ICh7IGZpcnN0RW50cnksIHNlY29uZEVudHJ5IH0pID0+IHtcbiAgICAgICAgaWYgKCFmaXJzdEVudHJ5IHx8ICFzZWNvbmRFbnRyeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgICAgICAgIGAnYWRkLXRvLWNhY2hlLWxpc3QtZHVwbGljYXRlLWVudHJpZXMnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVHdvIG9mIHRoZSBlbnRyaWVzIHBhc3NlZCB0byBgICtcbiAgICAgICAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBoYWQgdGhlIFVSTCBgICtcbiAgICAgICAgICAgIGAke2ZpcnN0RW50cnkuX2VudHJ5SWR9IGJ1dCBkaWZmZXJlbnQgcmV2aXNpb24gZGV0YWlscy4gV29ya2JveCBpcyBgICtcbiAgICAgICAgICAgIGB1bmFibGUgdG8gY2FjaGUgYW5kIHZlcnNpb24gdGhlIGFzc2V0IGNvcnJlY3RseS4gUGxlYXNlIHJlbW92ZSBvbmUgYCArXG4gICAgICAgICAgICBgb2YgdGhlIGVudHJpZXMuYDtcbiAgICB9LFxuICAgICdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJzogKHsgdGhyb3duRXJyb3IgfSkgPT4ge1xuICAgICAgICBpZiAoIXRocm93bkVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArXG4gICAgICAgICAgICAgICAgYCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBBbiBlcnJvciB3YXMgdGhyb3duIGJ5IGEgcGx1Z2lucyAncmVxdWVzdFdpbGxGZXRjaCgpJyBtZXRob2QuIGAgK1xuICAgICAgICAgICAgYFRoZSB0aHJvd24gZXJyb3IgbWVzc2FnZSB3YXM6ICcke3Rocm93bkVycm9yLm1lc3NhZ2V9Jy5gO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtY2FjaGUtbmFtZSc6ICh7IGNhY2hlTmFtZUlkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGlmICghY2FjaGVOYW1lSWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYSAnY2FjaGVOYW1lSWQnIGZvciBlcnJvciAnaW52YWxpZC1jYWNoZS1uYW1lJ2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgWW91IG11c3QgcHJvdmlkZSBhIG5hbWUgY29udGFpbmluZyBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGZvciBgICtcbiAgICAgICAgICAgIGBzZXRDYWNoZURldGFpbHMoeyR7Y2FjaGVOYW1lSWR9OiAnLi4uJ30pLiBSZWNlaXZlZCBhIHZhbHVlIG9mIGAgK1xuICAgICAgICAgICAgYCcke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0nYDtcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnOiAoeyBtZXRob2QgfSkgPT4ge1xuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgICAgICAgIGAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCAgcHJldmlvdXNseSBgICtcbiAgICAgICAgICAgIGByZWdpc3RlcmVkIGZvciB0aGUgbWV0aG9kIHR5cGUgJyR7bWV0aG9kfScuYDtcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCBwcmV2aW91c2x5IGAgK1xuICAgICAgICAgICAgYHJlZ2lzdGVyZWQuYDtcbiAgICB9LFxuICAgICdxdWV1ZS1yZXBsYXktZmFpbGVkJzogKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgUmVwbGF5aW5nIHRoZSBiYWNrZ3JvdW5kIHN5bmMgcXVldWUgJyR7bmFtZX0nIGZhaWxlZC5gO1xuICAgIH0sXG4gICAgJ2R1cGxpY2F0ZS1xdWV1ZS1uYW1lJzogKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIFF1ZXVlIG5hbWUgJyR7bmFtZX0nIGlzIGFscmVhZHkgYmVpbmcgdXNlZC4gYCArXG4gICAgICAgICAgICBgQWxsIGluc3RhbmNlcyBvZiBiYWNrZ3JvdW5kU3luYy5RdWV1ZSBtdXN0IGJlIGdpdmVuIHVuaXF1ZSBuYW1lcy5gO1xuICAgIH0sXG4gICAgJ2V4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2UnOiAoeyBtZXRob2ROYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSAnJHttZXRob2ROYW1lfSgpJyBtZXRob2QgY2FuIG9ubHkgYmUgdXNlZCB3aGVuIHRoZSBgICtcbiAgICAgICAgICAgIGAnJHtwYXJhbU5hbWV9JyBpcyB1c2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5gO1xuICAgIH0sXG4gICAgJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGFuIHVuc3VwcG9ydGVkIHR5cGUuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0gZm9yIGAgK1xuICAgICAgICAgICAgYHZhbGlkIGlucHV0IHR5cGVzLmA7XG4gICAgfSxcbiAgICAnbm90LWFycmF5LW9mLWNsYXNzJzogKHsgdmFsdWUsIGV4cGVjdGVkQ2xhc3MsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIGAgK1xuICAgICAgICAgICAgYCcke2V4cGVjdGVkQ2xhc3N9JyBvYmplY3RzLiBSZWNlaXZlZCAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LCcuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgY2FsbCB0byAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGAgK1xuICAgICAgICAgICAgYHRvIGZpeCB0aGUgaXNzdWUuYDtcbiAgICB9LFxuICAgICdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5tYXhFbnRyaWVzIG9yIGNvbmZpZy5tYXhBZ2VTZWNvbmRzYCArXG4gICAgICAgICAgICBgaW4gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX1gO1xuICAgIH0sXG4gICAgJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5zdGF0dXNlcyBvciBjb25maWcuaGVhZGVyc2AgK1xuICAgICAgICAgICAgYGluICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9YDtcbiAgICB9LFxuICAgICdpbnZhbGlkLXN0cmluZyc6ICh7IG1vZHVsZU5hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1zdHJpbmcnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgV2hlbiB1c2luZyBzdHJpbmdzLCB0aGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3Qgc3RhcnQgd2l0aCBgICtcbiAgICAgICAgICAgIGAnaHR0cCcgKGZvciBjcm9zcy1vcmlnaW4gbWF0Y2hlcykgb3IgJy8nIChmb3Igc2FtZS1vcmlnaW4gbWF0Y2hlcykuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBzZWUgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtmdW5jTmFtZX0oKSBmb3IgYCArXG4gICAgICAgICAgICBgbW9yZSBpbmZvLmA7XG4gICAgfSxcbiAgICAnY2hhbm5lbC1uYW1lLXJlcXVpcmVkJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYFlvdSBtdXN0IHByb3ZpZGUgYSBjaGFubmVsTmFtZSB0byBjb25zdHJ1Y3QgYSBgICtcbiAgICAgICAgICAgIGBCcm9hZGNhc3RDYWNoZVVwZGF0ZSBpbnN0YW5jZS5gO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtcmVzcG9uc2VzLWFyZS1zYW1lLWFyZ3MnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIGFyZ3VtZW50cyBwYXNzZWQgaW50byByZXNwb25zZXNBcmVTYW1lKCkgYXBwZWFyIHRvIGJlIGAgK1xuICAgICAgICAgICAgYGludmFsaWQuIFBsZWFzZSBlbnN1cmUgdmFsaWQgUmVzcG9uc2VzIGFyZSB1c2VkLmA7XG4gICAgfSxcbiAgICAnZXhwaXJlLWN1c3RvbS1jYWNoZXMtb25seSc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBwcm92aWRlIGEgJ2NhY2hlTmFtZScgcHJvcGVydHkgd2hlbiB1c2luZyB0aGUgYCArXG4gICAgICAgICAgICBgZXhwaXJhdGlvbiBwbHVnaW4gd2l0aCBhIHJ1bnRpbWUgY2FjaGluZyBzdHJhdGVneS5gO1xuICAgIH0sXG4gICAgJ3VuaXQtbXVzdC1iZS1ieXRlcyc6ICh7IG5vcm1hbGl6ZWRSYW5nZUhlYWRlciB9KSA9PiB7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3VuaXQtbXVzdC1iZS1ieXRlcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgJ3VuaXQnIHBvcnRpb24gb2YgdGhlIFJhbmdlIGhlYWRlciBtdXN0IGJlIHNldCB0byAnYnl0ZXMnLiBgICtcbiAgICAgICAgICAgIGBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYDtcbiAgICB9LFxuICAgICdzaW5nbGUtcmFuZ2Utb25seSc6ICh7IG5vcm1hbGl6ZWRSYW5nZUhlYWRlciB9KSA9PiB7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3NpbmdsZS1yYW5nZS1vbmx5JyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYE11bHRpcGxlIHJhbmdlcyBhcmUgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBhICBzaW5nbGUgc3RhcnQgYCArXG4gICAgICAgICAgICBgdmFsdWUsIGFuZCBvcHRpb25hbCBlbmQgdmFsdWUuIFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIGAgK1xuICAgICAgICAgICAgYFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtcmFuZ2UtdmFsdWVzJzogKHsgbm9ybWFsaXplZFJhbmdlSGVhZGVyIH0pID0+IHtcbiAgICAgICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1yYW5nZS12YWx1ZXMnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIFJhbmdlIGhlYWRlciBpcyBtaXNzaW5nIGJvdGggc3RhcnQgYW5kIGVuZCB2YWx1ZXMuIEF0IGxlYXN0IGAgK1xuICAgICAgICAgICAgYG9uZSBvZiB0aG9zZSB2YWx1ZXMgaXMgbmVlZGVkLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgICAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYDtcbiAgICB9LFxuICAgICduby1yYW5nZS1oZWFkZXInOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgTm8gUmFuZ2UgaGVhZGVyIHdhcyBmb3VuZCBpbiB0aGUgUmVxdWVzdCBwcm92aWRlZC5gO1xuICAgIH0sXG4gICAgJ3JhbmdlLW5vdC1zYXRpc2ZpYWJsZSc6ICh7IHNpemUsIHN0YXJ0LCBlbmQgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBzdGFydCAoJHtzdGFydH0pIGFuZCBlbmQgKCR7ZW5kfSkgdmFsdWVzIGluIHRoZSBSYW5nZSBhcmUgYCArXG4gICAgICAgICAgICBgbm90IHNhdGlzZmlhYmxlIGJ5IHRoZSBjYWNoZWQgcmVzcG9uc2UsIHdoaWNoIGlzICR7c2l6ZX0gYnl0ZXMuYDtcbiAgICB9LFxuICAgICdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCc6ICh7IHVybCwgbWV0aG9kIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBVbmFibGUgdG8gY2FjaGUgJyR7dXJsfScgYmVjYXVzZSBpdCBpcyBhICcke21ldGhvZH0nIHJlcXVlc3QgYW5kIGAgK1xuICAgICAgICAgICAgYG9ubHkgJ0dFVCcgcmVxdWVzdHMgY2FuIGJlIGNhY2hlZC5gO1xuICAgIH0sXG4gICAgJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGVyZSB3YXMgYW4gYXR0ZW1wdCB0byBjYWNoZSAnJHt1cmx9JyBidXQgdGhlIHJlc3BvbnNlIHdhcyBub3QgYCArXG4gICAgICAgICAgICBgZGVmaW5lZC5gO1xuICAgIH0sXG4gICAgJ25vLXJlc3BvbnNlJzogKHsgdXJsLCBlcnJvciB9KSA9PiB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFRoZSBzdHJhdGVneSBjb3VsZCBub3QgZ2VuZXJhdGUgYSByZXNwb25zZSBmb3IgJyR7dXJsfScuYDtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAgVGhlIHVuZGVybHlpbmcgZXJyb3IgaXMgJHtlcnJvcn0uYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgICdiYWQtcHJlY2FjaGluZy1yZXNwb25zZSc6ICh7IHVybCwgc3RhdHVzIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgcHJlY2FjaGluZyByZXF1ZXN0IGZvciAnJHt1cmx9JyBmYWlsZWQgd2l0aCBhbiBIVFRQIGAgK1xuICAgICAgICAgICAgYHN0YXR1cyBvZiAke3N0YXR1c30uYDtcbiAgICB9LFxuICAgICdub24tcHJlY2FjaGVkLXVybCc6ICh7IHVybCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwoJyR7dXJsfScpIHdhcyBjYWxsZWQsIGJ1dCB0aGF0IFVSTCBpcyBgICtcbiAgICAgICAgICAgIGBub3QgcHJlY2FjaGVkLiBQbGVhc2UgcGFzcyBpbiBhIFVSTCB0aGF0IGlzIHByZWNhY2hlZCBpbnN0ZWFkLmA7XG4gICAgfSxcbiAgICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctaW50ZWdyaXRpZXMnOiAoeyB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICAgICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICAgICAgICBgJHt1cmx9IHdpdGggZGlmZmVyZW50IGludGVncml0eSB2YWx1ZXMuIFBsZWFzZSByZW1vdmUgb25lIG9mIHRoZW0uYDtcbiAgICB9LFxuICAgICdtaXNzaW5nLXByZWNhY2hlLWVudHJ5JzogKHsgY2FjaGVOYW1lLCB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFVuYWJsZSB0byBmaW5kIGEgcHJlY2FjaGVkIHJlc3BvbnNlIGluICR7Y2FjaGVOYW1lfSBmb3IgJHt1cmx9LmA7XG4gICAgfSxcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8vIENhbGxiYWNrcyB0byBiZSBleGVjdXRlZCB3aGVuZXZlciB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG5jb25zdCBxdW90YUVycm9yQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xuZXhwb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgY29uc3QgcGx1Z2luVXRpbHMgPSB7XG4gICAgZmlsdGVyOiAocGx1Z2lucywgY2FsbGJhY2tOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiBjYWxsYmFja05hbWUgaW4gcGx1Z2luKTtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGNhY2hlV3JhcHBlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZVdyYXBwZXIuanMnO1xuaW1wb3J0IHsgZmV0Y2hXcmFwcGVyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2ZldGNoV3JhcHBlci5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgY29weVJlc3BvbnNlIH0gZnJvbSAnd29ya2JveC1jb3JlL2NvcHlSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVDYWNoZUtleSB9IGZyb20gJy4vdXRpbHMvY3JlYXRlQ2FjaGVLZXkuanMnO1xuaW1wb3J0IHsgcHJpbnRDbGVhbnVwRGV0YWlscyB9IGZyb20gJy4vdXRpbHMvcHJpbnRDbGVhbnVwRGV0YWlscy5qcyc7XG5pbXBvcnQgeyBwcmludEluc3RhbGxEZXRhaWxzIH0gZnJvbSAnLi91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFBlcmZvcm1zIGVmZmljaWVudCBwcmVjYWNoaW5nIG9mIGFzc2V0cy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jbGFzcyBQcmVjYWNoZUNvbnRyb2xsZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBQcmVjYWNoZUNvbnRyb2xsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NhY2hlTmFtZV0gQW4gb3B0aW9uYWwgbmFtZSBmb3IgdGhlIGNhY2hlLCB0byBvdmVycmlkZVxuICAgICAqIHRoZSBkZWZhdWx0IHByZWNhY2hlIG5hbWUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FjaGVOYW1lKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKGNhY2hlTmFtZSk7XG4gICAgICAgIHRoaXMuX3VybHNUb0NhY2hlS2V5cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVNb2RlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBhZGQgaXRlbXMgdG8gdGhlIHByZWNhY2hlIGxpc3QsIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAgICAgKiBhbmQgZW5zdXJpbmcgdGhlIGluZm9ybWF0aW9uIGlzIHZhbGlkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtcbiAgICAgKiBBcnJheTxtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5QcmVjYWNoZUVudHJ5fHN0cmluZz5cbiAgICAgKiB9IGVudHJpZXMgQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAgICAgKi9cbiAgICBhZGRUb0NhY2hlTGlzdChlbnRyaWVzKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNBcnJheShlbnRyaWVzLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcHJlY2FjaGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUHJlY2FjaGVDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2FkZFRvQ2FjaGVMaXN0JyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdlbnRyaWVzJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybHNUb1dhcm5BYm91dCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIyNTlcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdXJsc1RvV2FybkFib3V0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkgJiYgZW50cnkucmV2aXNpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHVybHNUb1dhcm5BYm91dC5wdXNoKGVudHJ5LnVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGNhY2hlS2V5LCB1cmwgfSA9IGNyZWF0ZUNhY2hlS2V5KGVudHJ5KTtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlTW9kZSA9ICh0eXBlb2YgZW50cnkgIT09ICdzdHJpbmcnICYmIGVudHJ5LnJldmlzaW9uKSA/XG4gICAgICAgICAgICAgICAgJ3JlbG9hZCcgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgICBpZiAodGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmhhcyh1cmwpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmwpICE9PSBjYWNoZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RW50cnk6IHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsKSxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kRW50cnk6IGNhY2hlS2V5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gJ3N0cmluZycgJiYgZW50cnkuaW50ZWdyaXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuaGFzKGNhY2hlS2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzLmdldChjYWNoZUtleSkgIT09IGVudHJ5LmludGVncml0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1pbnRlZ3JpdGllcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuc2V0KGNhY2hlS2V5LCBlbnRyeS5pbnRlZ3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLnNldCh1cmwsIGNhY2hlS2V5KTtcbiAgICAgICAgICAgIHRoaXMuX3VybHNUb0NhY2hlTW9kZXMuc2V0KHVybCwgY2FjaGVNb2RlKTtcbiAgICAgICAgICAgIGlmICh1cmxzVG9XYXJuQWJvdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gYFdvcmtib3ggaXMgcHJlY2FjaGluZyBVUkxzIHdpdGhvdXQgcmV2aXNpb24gYCArXG4gICAgICAgICAgICAgICAgICAgIGBpbmZvOiAke3VybHNUb1dhcm5BYm91dC5qb2luKCcsICcpfVxcblRoaXMgaXMgZ2VuZXJhbGx5IE5PVCBzYWZlLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9iaXQubHkvd2ItcHJlY2FjaGVgO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBjb25zb2xlIGRpcmVjdGx5IHRvIGRpc3BsYXkgdGhpcyB3YXJuaW5nIHdpdGhvdXQgYmxvYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gYnVuZGxlIHNpemVzIGJ5IHB1bGxpbmcgaW4gYWxsIG9mIHRoZSBsb2dnZXIgY29kZWJhc2UgaW4gcHJvZC5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlY2FjaGVzIG5ldyBhbmQgdXBkYXRlZCBhc3NldHMuIENhbGwgdGhpcyBtZXRob2QgZnJvbSB0aGUgc2VydmljZSB3b3JrZXJcbiAgICAgKiBpbnN0YWxsIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBbb3B0aW9ucy5ldmVudF0gVGhlIGluc3RhbGwgZXZlbnQgKGlmIG5lZWRlZCkuXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBQbHVnaW5zIHRvIGJlIHVzZWQgZm9yIGZldGNoaW5nXG4gICAgICogYW5kIGNhY2hpbmcgZHVyaW5nIGluc3RhbGwuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLkluc3RhbGxSZXN1bHQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGluc3RhbGwoeyBldmVudCwgcGx1Z2lucyB9ID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChwbHVnaW5zKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzQXJyYXkocGx1Z2lucywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1wcmVjYWNoaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUHJlY2FjaGVDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdpbnN0YWxsJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncGx1Z2lucycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9CZVByZWNhY2hlZCA9IFtdO1xuICAgICAgICBjb25zdCBhbHJlYWR5UHJlY2FjaGVkID0gW107XG4gICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLl9jYWNoZU5hbWUpO1xuICAgICAgICBjb25zdCBhbHJlYWR5Q2FjaGVkUmVxdWVzdHMgPSBhd2FpdCBjYWNoZS5rZXlzKCk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGVLZXlzID0gbmV3IFNldChhbHJlYWR5Q2FjaGVkUmVxdWVzdHMubWFwKChyZXF1ZXN0KSA9PiByZXF1ZXN0LnVybCkpO1xuICAgICAgICBmb3IgKGNvbnN0IFt1cmwsIGNhY2hlS2V5XSBvZiB0aGlzLl91cmxzVG9DYWNoZUtleXMpIHtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0NhY2hlS2V5cy5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICAgICAgICAgICAgYWxyZWFkeVByZWNhY2hlZC5wdXNoKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0JlUHJlY2FjaGVkLnB1c2goeyBjYWNoZUtleSwgdXJsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZWNhY2hlUmVxdWVzdHMgPSB0b0JlUHJlY2FjaGVkLm1hcCgoeyBjYWNoZUtleSwgdXJsIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVncml0eSA9IHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuZ2V0KGNhY2hlS2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlTW9kZSA9IHRoaXMuX3VybHNUb0NhY2hlTW9kZXMuZ2V0KHVybCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkVVJMVG9DYWNoZSh7XG4gICAgICAgICAgICAgICAgY2FjaGVLZXksXG4gICAgICAgICAgICAgICAgY2FjaGVNb2RlLFxuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIGludGVncml0eSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJlY2FjaGVSZXF1ZXN0cyk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRVUkxzID0gdG9CZVByZWNhY2hlZC5tYXAoKGl0ZW0pID0+IGl0ZW0udXJsKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHByaW50SW5zdGFsbERldGFpbHModXBkYXRlZFVSTHMsIGFscmVhZHlQcmVjYWNoZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cGRhdGVkVVJMcyxcbiAgICAgICAgICAgIG5vdFVwZGF0ZWRVUkxzOiBhbHJlYWR5UHJlY2FjaGVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFzc2V0cyB0aGF0IGFyZSBubyBsb25nZXIgcHJlc2VudCBpbiB0aGUgY3VycmVudCBwcmVjYWNoZSBtYW5pZmVzdC5cbiAgICAgKiBDYWxsIHRoaXMgbWV0aG9kIGZyb20gdGhlIHNlcnZpY2Ugd29ya2VyIGFjdGl2YXRlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLkNsZWFudXBSZXN1bHQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGFjdGl2YXRlKCkge1xuICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4odGhpcy5fY2FjaGVOYW1lKTtcbiAgICAgICAgY29uc3QgY3VycmVudGx5Q2FjaGVkUmVxdWVzdHMgPSBhd2FpdCBjYWNoZS5rZXlzKCk7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkQ2FjaGVLZXlzID0gbmV3IFNldCh0aGlzLl91cmxzVG9DYWNoZUtleXMudmFsdWVzKCkpO1xuICAgICAgICBjb25zdCBkZWxldGVkVVJMcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgY3VycmVudGx5Q2FjaGVkUmVxdWVzdHMpIHtcbiAgICAgICAgICAgIGlmICghZXhwZWN0ZWRDYWNoZUtleXMuaGFzKHJlcXVlc3QudXJsKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGNhY2hlLmRlbGV0ZShyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBkZWxldGVkVVJMcy5wdXNoKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcHJpbnRDbGVhbnVwRGV0YWlscyhkZWxldGVkVVJMcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZGVsZXRlZFVSTHMgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgdGhlIGVudHJ5IGFuZCBzYXZlcyBpdCB0byB0aGUgY2FjaGUgaWYgdGhlIHJlc3BvbnNlIGlzIHZhbGlkLlxuICAgICAqIEJ5IGRlZmF1bHQsIGFueSByZXNwb25zZSB3aXRoIGEgc3RhdHVzIGNvZGUgb2YgbGVzcyB0aGFuIDQwMCAoaW5jbHVkaW5nXG4gICAgICogb3BhcXVlIHJlc3BvbnNlcykgaXMgY29uc2lkZXJlZCB2YWxpZC5cbiAgICAgKlxuICAgICAqIElmIHlvdSBuZWVkIHRvIHVzZSBjdXN0b20gY3JpdGVyaWEgdG8gZGV0ZXJtaW5lIHdoYXQncyB2YWxpZCBhbmQgd2hhdFxuICAgICAqIGlzbid0LCB0aGVuIHBhc3MgaW4gYW4gaXRlbSBpbiBgb3B0aW9ucy5wbHVnaW5zYCB0aGF0IGltcGxlbWVudHMgdGhlXG4gICAgICogYGNhY2hlV2lsbFVwZGF0ZSgpYCBsaWZlY3ljbGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVLZXkgVGhlIHN0cmluZyB0byB1c2UgYSBjYWNoZSBrZXkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudXJsIFRoZSBVUkwgdG8gZmV0Y2ggYW5kIGNhY2hlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU1vZGVdIFRoZSBjYWNoZSBtb2RlIGZvciB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IFtvcHRpb25zLmV2ZW50XSBUaGUgaW5zdGFsbCBldmVudCAoaWYgcGFzc2VkKS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIEFuIGFycmF5IG9mIHBsdWdpbnMgdG8gYXBwbHkgdG9cbiAgICAgKiBmZXRjaCBhbmQgY2FjaGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuaW50ZWdyaXR5XSBUaGUgdmFsdWUgdG8gdXNlIGZvciB0aGUgYGludGVncml0eWBcbiAgICAgKiBmaWVsZCB3aGVuIG1ha2luZyB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBhc3luYyBfYWRkVVJMVG9DYWNoZSh7IGNhY2hlS2V5LCB1cmwsIGNhY2hlTW9kZSwgZXZlbnQsIHBsdWdpbnMsIGludGVncml0eSB9KSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICAgIGludGVncml0eSxcbiAgICAgICAgICAgIGNhY2hlOiBjYWNoZU1vZGUsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoV3JhcHBlci5mZXRjaCh7XG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHBsdWdpbnMsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWxsb3cgZGV2ZWxvcGVycyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBsb2dpYyBhYm91dCB3aGF0IGlzIGFuZCBpc24ndFxuICAgICAgICAvLyB2YWxpZCBieSBwYXNzaW5nIGluIGEgcGx1Z2luIGltcGxlbWVudGluZyBjYWNoZVdpbGxVcGRhdGUoKSwgZS5nLlxuICAgICAgICAvLyBhIGBDYWNoZWFibGVSZXNwb25zZVBsdWdpbmAgaW5zdGFuY2UuXG4gICAgICAgIGxldCBjYWNoZVdpbGxVcGRhdGVQbHVnaW47XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIChwbHVnaW5zIHx8IFtdKSkge1xuICAgICAgICAgICAgaWYgKCdjYWNoZVdpbGxVcGRhdGUnIGluIHBsdWdpbikge1xuICAgICAgICAgICAgICAgIGNhY2hlV2lsbFVwZGF0ZVBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1ZhbGlkUmVzcG9uc2UgPSBjYWNoZVdpbGxVcGRhdGVQbHVnaW4gP1xuICAgICAgICAgICAgLy8gVXNlIGEgY2FsbGJhY2sgaWYgcHJvdmlkZWQuIEl0IHJldHVybnMgYSB0cnV0aHkgdmFsdWUgaWYgdmFsaWQuXG4gICAgICAgICAgICAvLyBOT1RFOiBpbnZva2UgdGhlIG1ldGhvZCBvbiB0aGUgcGx1Z2luIGluc3RhbmNlIHNvIHRoZSBgdGhpc2AgY29udGV4dFxuICAgICAgICAgICAgLy8gaXMgY29ycmVjdC5cbiAgICAgICAgICAgIGF3YWl0IGNhY2hlV2lsbFVwZGF0ZVBsdWdpbi5jYWNoZVdpbGxVcGRhdGUoeyBldmVudCwgcmVxdWVzdCwgcmVzcG9uc2UgfSkgOlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBkZWZhdWx0IHRvIGNvbnNpZGVyaW5nIGFueSByZXNwb25zZSBzdGF0dXMgdW5kZXIgNDAwIHZhbGlkLlxuICAgICAgICAgICAgLy8gVGhpcyBpbmNsdWRlcywgYnkgZGVmYXVsdCwgY29uc2lkZXJpbmcgb3BhcXVlIHJlc3BvbnNlcyB2YWxpZC5cbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyA8IDQwMDtcbiAgICAgICAgLy8gQ29uc2lkZXIgdGhpcyBhIGZhaWx1cmUsIGxlYWRpbmcgdG8gdGhlIGBpbnN0YWxsYCBoYW5kbGVyIGZhaWxpbmcsIGlmXG4gICAgICAgIC8vIHdlIGdldCBiYWNrIGFuIGludmFsaWQgcmVzcG9uc2UuXG4gICAgICAgIGlmICghaXNWYWxpZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdiYWQtcHJlY2FjaGluZy1yZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWRpcmVjdGVkIHJlc3BvbnNlcyBjYW5ub3QgYmUgdXNlZCB0byBzYXRpc2Z5IGEgbmF2aWdhdGlvbiByZXF1ZXN0LCBzb1xuICAgICAgICAvLyBhbnkgcmVkaXJlY3RlZCByZXNwb25zZSBtdXN0IGJlIFwiY29waWVkXCIgcmF0aGVyIHRoYW4gY2xvbmVkLCBzbyB0aGUgbmV3XG4gICAgICAgIC8vIHJlc3BvbnNlIGRvZXNuJ3QgY29udGFpbiB0aGUgYHJlZGlyZWN0ZWRgIGZsYWcuIFNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjY5MzYzJmRlc2M9MiNjMVxuICAgICAgICBpZiAocmVzcG9uc2UucmVkaXJlY3RlZCkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjb3B5UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGNhY2hlV3JhcHBlci5wdXQoe1xuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBwbHVnaW5zLFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICAvLyBgcmVxdWVzdGAgYWxyZWFkeSB1c2VzIGB1cmxgLiBXZSBtYXkgYmUgYWJsZSB0byByZXVzZSBpdC5cbiAgICAgICAgICAgIHJlcXVlc3Q6IGNhY2hlS2V5ID09PSB1cmwgPyByZXF1ZXN0IDogbmV3IFJlcXVlc3QoY2FjaGVLZXkpLFxuICAgICAgICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICAgICAgICBtYXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBpZ25vcmVTZWFyY2g6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hcHBpbmcgb2YgYSBwcmVjYWNoZWQgVVJMIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhY2hlIGtleSwgdGFraW5nXG4gICAgICogaW50byBhY2NvdW50IHRoZSByZXZpc2lvbiBpbmZvcm1hdGlvbiBmb3IgdGhlIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIHN0cmluZz59IEEgVVJMIHRvIGNhY2hlIGtleSBtYXBwaW5nLlxuICAgICAqL1xuICAgIGdldFVSTHNUb0NhY2hlS2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybHNUb0NhY2hlS2V5cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRoZSBVUkxzIHRoYXQgaGF2ZSBiZWVuIHByZWNhY2hlZCBieSB0aGUgY3VycmVudFxuICAgICAqIHNlcnZpY2Ugd29ya2VyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gVGhlIHByZWNhY2hlZCBVUkxzLlxuICAgICAqL1xuICAgIGdldENhY2hlZFVSTHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmtleXMoKV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhY2hlIGtleSB1c2VkIGZvciBzdG9yaW5nIGEgZ2l2ZW4gVVJMLiBJZiB0aGF0IFVSTCBpc1xuICAgICAqIHVudmVyc2lvbmVkLCBsaWtlIGAvaW5kZXguaHRtbCcsIHRoZW4gdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZSBvcmlnaW5hbFxuICAgICAqIFVSTCB3aXRoIGEgc2VhcmNoIHBhcmFtZXRlciBhcHBlbmRlZCB0byBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQSBVUkwgd2hvc2UgY2FjaGUga2V5IHlvdSB3YW50IHRvIGxvb2sgdXAuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmVyc2lvbmVkIFVSTCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgY2FjaGUga2V5XG4gICAgICogZm9yIHRoZSBvcmlnaW5hbCBVUkwsIG9yIHVuZGVmaW5lZCBpZiB0aGF0IFVSTCBpc24ndCBwcmVjYWNoZWQuXG4gICAgICovXG4gICAgZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKSB7XG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsT2JqZWN0LmhyZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIGFjdHMgYXMgYSBkcm9wLWluIHJlcGxhY2VtZW50IGZvciBbYGNhY2hlLm1hdGNoKClgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUvbWF0Y2gpXG4gICAgICogd2l0aCB0aGUgZm9sbG93aW5nIGRpZmZlcmVuY2VzOlxuICAgICAqXG4gICAgICogLSBJdCBrbm93cyB3aGF0IHRoZSBuYW1lIG9mIHRoZSBwcmVjYWNoZSBpcywgYW5kIG9ubHkgY2hlY2tzIGluIHRoYXQgY2FjaGUuXG4gICAgICogLSBJdCBhbGxvd3MgeW91IHRvIHBhc3MgaW4gYW4gXCJvcmlnaW5hbFwiIFVSTCB3aXRob3V0IHZlcnNpb25pbmcgcGFyYW1ldGVycyxcbiAgICAgKiBhbmQgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGxvb2sgdXAgdGhlIGNvcnJlY3QgY2FjaGUga2V5IGZvciB0aGUgY3VycmVudGx5XG4gICAgICogYWN0aXZlIHJldmlzaW9uIG9mIHRoYXQgVVJMLlxuICAgICAqXG4gICAgICogRS5nLiwgYG1hdGNoUHJlY2FjaGUoJ2luZGV4Lmh0bWwnKWAgd2lsbCBmaW5kIHRoZSBjb3JyZWN0IHByZWNhY2hlZFxuICAgICAqIHJlc3BvbnNlIGZvciB0aGUgY3VycmVudGx5IGFjdGl2ZSBzZXJ2aWNlIHdvcmtlciwgZXZlbiBpZiB0aGUgYWN0dWFsIGNhY2hlXG4gICAgICoga2V5IGlzIGAnL2luZGV4Lmh0bWw/X19XQl9SRVZJU0lPTl9fPTEyMzRhYmNkJ2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xSZXF1ZXN0fSByZXF1ZXN0IFRoZSBrZXkgKHdpdGhvdXQgcmV2aXNpb25pbmcgcGFyYW1ldGVycylcbiAgICAgKiB0byBsb29rIHVwIGluIHRoZSBwcmVjYWNoZS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gICAgICovXG4gICAgYXN5bmMgbWF0Y2hQcmVjYWNoZShyZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHJlcXVlc3QgaW5zdGFuY2VvZiBSZXF1ZXN0ID8gcmVxdWVzdC51cmwgOiByZXF1ZXN0O1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKTtcbiAgICAgICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4odGhpcy5fY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5tYXRjaChjYWNoZUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgd2l0aGluIGFcbiAgICAgKiB7QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gdGhhdCB3aWxsIGZpbmQgYSByZXNwb25zZSBmb3IgdGhlXG4gICAgICogaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBwcmVjYWNoZS5cbiAgICAgKlxuICAgICAqIElmIGZvciBhbiB1bmV4cGVjdGVkIHJlYXNvbiB0aGVyZSBpcyBhIGNhY2hlIG1pc3MgZm9yIHRoZSByZXF1ZXN0LFxuICAgICAqIHRoaXMgd2lsbCBmYWxsIGJhY2sgdG8gcmV0cmlldmluZyB0aGUgYFJlc3BvbnNlYCB2aWEgYGZldGNoKClgIHdoZW5cbiAgICAgKiBgZmFsbGJhY2tUb05ldHdvcmtgIGlzIGB0cnVlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZhbGxiYWNrVG9OZXR3b3JrPXRydWVdIFdoZXRoZXIgdG8gYXR0ZW1wdCB0byBnZXQgdGhlXG4gICAgICogcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yayBpZiB0aGVyZSdzIGEgcHJlY2FjaGUgbWlzcy5cbiAgICAgKiBAcmV0dXJuIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja31cbiAgICAgKi9cbiAgICBjcmVhdGVIYW5kbGVyKGZhbGxiYWNrVG9OZXR3b3JrID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tYXRjaFByZWNhY2hlKHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkbid0IG5vcm1hbGx5IGhhcHBlbiwgYnV0IHRoZXJlIGFyZSBlZGdlIGNhc2VzOlxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTQ0MVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21pc3NpbmctcHJlY2FjaGUtZW50cnknLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3QgaW5zdGFuY2VvZiBSZXF1ZXN0ID8gcmVxdWVzdC51cmwgOiByZXF1ZXN0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZhbGxiYWNrVG9OZXR3b3JrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFVuYWJsZSB0byByZXNwb25kIHdpdGggcHJlY2FjaGVkIHJlc3BvbnNlLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRmFsbGluZyBiYWNrIHRvIG5ldHdvcmsuYCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGxvb2tzIHVwIGB1cmxgIGluIHRoZSBwcmVjYWNoZSAodGFraW5nIGludG9cbiAgICAgKiBhY2NvdW50IHJldmlzaW9uIGluZm9ybWF0aW9uKSwgYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgYFJlc3BvbnNlYC5cbiAgICAgKlxuICAgICAqIElmIGZvciBhbiB1bmV4cGVjdGVkIHJlYXNvbiB0aGVyZSBpcyBhIGNhY2hlIG1pc3Mgd2hlbiBsb29raW5nIHVwIGB1cmxgLFxuICAgICAqIHRoaXMgd2lsbCBmYWxsIGJhY2sgdG8gcmV0cmlldmluZyB0aGUgYFJlc3BvbnNlYCB2aWEgYGZldGNoKClgIHdoZW5cbiAgICAgKiBgZmFsbGJhY2tUb05ldHdvcmtgIGlzIGB0cnVlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHByZWNhY2hlZCBVUkwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGxvb2t1cCB0aGVcbiAgICAgKiBgUmVzcG9uc2VgLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZhbGxiYWNrVG9OZXR3b3JrPXRydWVdIFdoZXRoZXIgdG8gYXR0ZW1wdCB0byBnZXQgdGhlXG4gICAgICogcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yayBpZiB0aGVyZSdzIGEgcHJlY2FjaGUgbWlzcy5cbiAgICAgKiBAcmV0dXJuIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja31cbiAgICAgKi9cbiAgICBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCh1cmwsIGZhbGxiYWNrVG9OZXR3b3JrID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKTtcbiAgICAgICAgaWYgKCFjYWNoZUtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm9uLXByZWNhY2hlZC11cmwnLCB7IHVybCB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5jcmVhdGVIYW5kbGVyKGZhbGxiYWNrVG9OZXR3b3JrKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBoYW5kbGVyKHsgcmVxdWVzdCB9KTtcbiAgICB9XG59XG5leHBvcnQgeyBQcmVjYWNoZUNvbnRyb2xsZXIgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OnByZWNhY2hpbmc6NS4xLjQnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBwcmVjYWNoZVBsdWdpbnMgfSBmcm9tICcuL3V0aWxzL3ByZWNhY2hlUGx1Z2lucy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGRzIHBsdWdpbnMgdG8gcHJlY2FjaGluZy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IG5ld1BsdWdpbnNcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBhZGRQbHVnaW5zKG5ld1BsdWdpbnMpIHtcbiAgICBwcmVjYWNoZVBsdWdpbnMuYWRkKG5ld1BsdWdpbnMpO1xufVxuZXhwb3J0IHsgYWRkUGx1Z2lucyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFkZEZldGNoTGlzdGVuZXIgfSBmcm9tICcuL3V0aWxzL2FkZEZldGNoTGlzdGVuZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbmxldCBsaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4vKipcbiAqIEFkZCBhIGBmZXRjaGAgbGlzdGVuZXIgdG8gdGhlIHNlcnZpY2Ugd29ya2VyIHRoYXQgd2lsbFxuICogcmVzcG9uZCB0b1xuICogW25ldHdvcmsgcmVxdWVzdHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2aWNlX1dvcmtlcl9BUEkvVXNpbmdfU2VydmljZV9Xb3JrZXJzI0N1c3RvbV9yZXNwb25zZXNfdG9fcmVxdWVzdHN9XG4gKiB3aXRoIHByZWNhY2hlZCBhc3NldHMuXG4gKlxuICogUmVxdWVzdHMgZm9yIGFzc2V0cyB0aGF0IGFyZW4ndCBwcmVjYWNoZWQsIHRoZSBgRmV0Y2hFdmVudGAgd2lsbCBub3QgYmVcbiAqIHJlc3BvbmRlZCB0bywgYWxsb3dpbmcgdGhlIGV2ZW50IHRvIGZhbGwgdGhyb3VnaCB0byBvdGhlciBgZmV0Y2hgIGV2ZW50XG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRpcmVjdG9yeUluZGV4PWluZGV4Lmh0bWxdIFRoZSBgZGlyZWN0b3J5SW5kZXhgIHdpbGxcbiAqIGNoZWNrIGNhY2hlIGVudHJpZXMgZm9yIGEgVVJMcyBlbmRpbmcgd2l0aCAnLycgdG8gc2VlIGlmIHRoZXJlIGlzIGEgaGl0IHdoZW5cbiAqIGFwcGVuZGluZyB0aGUgYGRpcmVjdG9yeUluZGV4YCB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gW29wdGlvbnMuaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nPVsvXnV0bV8vXV0gQW5cbiAqIGFycmF5IG9mIHJlZ2V4J3MgdG8gcmVtb3ZlIHNlYXJjaCBwYXJhbXMgd2hlbiBsb29raW5nIGZvciBhIGNhY2hlIG1hdGNoLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jbGVhblVSTHM9dHJ1ZV0gVGhlIGBjbGVhblVSTHNgIG9wdGlvbiB3aWxsXG4gKiBjaGVjayB0aGUgY2FjaGUgZm9yIHRoZSBVUkwgd2l0aCBhIGAuaHRtbGAgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgZW5kLlxuICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nfnVybE1hbmlwdWxhdGlvbn0gW29wdGlvbnMudXJsTWFuaXB1bGF0aW9uXVxuICogVGhpcyBpcyBhIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIHRha2UgYSBVUkwgYW5kIHJldHVybiBhbiBhcnJheSBvZlxuICogYWx0ZXJuYXRpdmUgVVJMcyB0aGF0IHNob3VsZCBiZSBjaGVja2VkIGZvciBwcmVjYWNoZSBtYXRjaGVzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGFkZFJvdXRlKG9wdGlvbnMpIHtcbiAgICBpZiAoIWxpc3RlbmVyQWRkZWQpIHtcbiAgICAgICAgYWRkRmV0Y2hMaXN0ZW5lcihvcHRpb25zKTtcbiAgICAgICAgbGlzdGVuZXJBZGRlZCA9IHRydWU7XG4gICAgfVxufVxuZXhwb3J0IHsgYWRkUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IGRlbGV0ZU91dGRhdGVkQ2FjaGVzIH0gZnJvbSAnLi91dGlscy9kZWxldGVPdXRkYXRlZENhY2hlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGRzIGFuIGBhY3RpdmF0ZWAgZXZlbnQgbGlzdGVuZXIgd2hpY2ggd2lsbCBjbGVhbiB1cCBpbmNvbXBhdGlibGVcbiAqIHByZWNhY2hlcyB0aGF0IHdlcmUgY3JlYXRlZCBieSBvbGRlciB2ZXJzaW9ucyBvZiBXb3JrYm94LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGNsZWFudXBPdXRkYXRlZENhY2hlcygpIHtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsICgoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoKTtcbiAgICAgICAgZXZlbnQud2FpdFVudGlsKGRlbGV0ZU91dGRhdGVkQ2FjaGVzKGNhY2hlTmFtZSkudGhlbigoY2FjaGVzRGVsZXRlZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVzRGVsZXRlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFRoZSBmb2xsb3dpbmcgb3V0LW9mLWRhdGUgcHJlY2FjaGVzIHdlcmUgY2xlYW5lZCB1cCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhdXRvbWF0aWNhbGx5OmAsIGNhY2hlc0RlbGV0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH0pKTtcbn1cbmV4cG9ydCB7IGNsZWFudXBPdXRkYXRlZENhY2hlcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGNhbGxzXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI2NyZWF0ZUhhbmRsZXJ9IG9uIHRoZSBkZWZhdWx0XG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSBpbnN0YW5jZS5cbiAqXG4gKiBJZiB5b3UgYXJlIGNyZWF0aW5nIHlvdXIgb3duIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9LCB0aGVuIGNhbGwgdGhlXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI2NyZWF0ZUhhbmRsZXJ9IG9uIHRoYXQgaW5zdGFuY2UsXG4gKiBpbnN0ZWFkIG9mIHVzaW5nIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBbZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvIGdldCB0aGVcbiAqIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsgaWYgdGhlcmUncyBhIHByZWNhY2hlIG1pc3MuXG4gKiBAcmV0dXJuIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja31cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBjcmVhdGVIYW5kbGVyKGZhbGxiYWNrVG9OZXR3b3JrID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlci5jcmVhdGVIYW5kbGVyKGZhbGxiYWNrVG9OZXR3b3JrKTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUhhbmRsZXIgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjYWxsc1xuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNjcmVhdGVIYW5kbGVyQm91bmRUb1VSTH0gb24gdGhlIGRlZmF1bHRcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9IGluc3RhbmNlLlxuICpcbiAqIElmIHlvdSBhcmUgY3JlYXRpbmcgeW91ciBvd24ge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0sIHRoZW4gY2FsbCB0aGVcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjY3JlYXRlSGFuZGxlckJvdW5kVG9VUkx9IG9uIHRoYXQgaW5zdGFuY2UsXG4gKiBpbnN0ZWFkIG9mIHVzaW5nIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgcHJlY2FjaGVkIFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gbG9va3VwIHRoZVxuICogYFJlc3BvbnNlYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZhbGxiYWNrVG9OZXR3b3JrPXRydWVdIFdoZXRoZXIgdG8gYXR0ZW1wdCB0byBnZXQgdGhlXG4gKiByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICogQHJldHVybiB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9XG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwodXJsKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLmNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKHVybCk7XG59XG5leHBvcnQgeyBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRha2VzIGluIGEgVVJMLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBVUkwgdGhhdCBjb3VsZCBiZSB1c2VkIHRvXG4gKiBsb29rdXAgdGhlIGVudHJ5IGluIHRoZSBwcmVjYWNoZS5cbiAqXG4gKiBJZiBhIHJlbGF0aXZlIFVSTCBpcyBwcm92aWRlZCwgdGhlIGxvY2F0aW9uIG9mIHRoZSBzZXJ2aWNlIHdvcmtlciBmaWxlIHdpbGxcbiAqIGJlIHVzZWQgYXMgdGhlIGJhc2UuXG4gKlxuICogRm9yIHByZWNhY2hlZCBlbnRyaWVzIHdpdGhvdXQgcmV2aXNpb24gaW5mb3JtYXRpb24sIHRoZSBjYWNoZSBrZXkgd2lsbCBiZSB0aGVcbiAqIHNhbWUgYXMgdGhlIG9yaWdpbmFsIFVSTC5cbiAqXG4gKiBGb3IgcHJlY2FjaGVkIGVudHJpZXMgd2l0aCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZVxuICogb3JpZ2luYWwgVVJMIHdpdGggdGhlIGFkZGl0aW9uIG9mIGEgcXVlcnkgcGFyYW1ldGVyIHVzZWQgZm9yIGtlZXBpbmcgdHJhY2sgb2ZcbiAqIHRoZSByZXZpc2lvbiBpbmZvLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB3aG9zZSBjYWNoZSBrZXkgdG8gbG9vayB1cC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNhY2hlIGtleSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoYXQgVVJMLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGdldENhY2hlS2V5Rm9yVVJMKHVybCkge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlci5nZXRDYWNoZUtleUZvclVSTCh1cmwpO1xufVxuZXhwb3J0IHsgZ2V0Q2FjaGVLZXlGb3JVUkwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFkZFBsdWdpbnMgfSBmcm9tICcuL2FkZFBsdWdpbnMuanMnO1xuaW1wb3J0IHsgYWRkUm91dGUgfSBmcm9tICcuL2FkZFJvdXRlLmpzJztcbmltcG9ydCB7IGNsZWFudXBPdXRkYXRlZENhY2hlcyB9IGZyb20gJy4vY2xlYW51cE91dGRhdGVkQ2FjaGVzLmpzJztcbmltcG9ydCB7IGNyZWF0ZUhhbmRsZXIgfSBmcm9tICcuL2NyZWF0ZUhhbmRsZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwgfSBmcm9tICcuL2NyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMLmpzJztcbmltcG9ydCB7IGdldENhY2hlS2V5Rm9yVVJMIH0gZnJvbSAnLi9nZXRDYWNoZUtleUZvclVSTC5qcyc7XG5pbXBvcnQgeyBtYXRjaFByZWNhY2hlIH0gZnJvbSAnLi9tYXRjaFByZWNhY2hlLmpzJztcbmltcG9ydCB7IHByZWNhY2hlIH0gZnJvbSAnLi9wcmVjYWNoZS5qcyc7XG5pbXBvcnQgeyBwcmVjYWNoZUFuZFJvdXRlIH0gZnJvbSAnLi9wcmVjYWNoZUFuZFJvdXRlLmpzJztcbmltcG9ydCB7IFByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIE1vc3QgY29uc3VtZXJzIG9mIHRoaXMgbW9kdWxlIHdpbGwgd2FudCB0byB1c2UgdGhlXG4gKiBbcHJlY2FjaGVBbmRSb3V0ZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGV9XG4gKiBtZXRob2QgdG8gYWRkIGFzc2V0cyB0byB0aGUgQ2FjaGUgYW5kIHJlc3BvbmQgdG8gbmV0d29yayByZXF1ZXN0cyB3aXRoIHRoZXNlXG4gKiBjYWNoZWQgYXNzZXRzLlxuICpcbiAqIElmIHlvdSByZXF1aXJlIGZpbmVyIGdyYWluZWQgY29udHJvbCwgeW91IGNhbiB1c2UgdGhlXG4gKiBbUHJlY2FjaGVDb250cm9sbGVyXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlcn1cbiAqIHRvIGRldGVybWluZSB3aGVuIHBlcmZvcm1lZC5cbiAqXG4gKiBAbW9kdWxlIHdvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgeyBhZGRQbHVnaW5zLCBhZGRSb3V0ZSwgY2xlYW51cE91dGRhdGVkQ2FjaGVzLCBjcmVhdGVIYW5kbGVyLCBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCwgZ2V0Q2FjaGVLZXlGb3JVUkwsIG1hdGNoUHJlY2FjaGUsIHByZWNhY2hlLCBwcmVjYWNoZUFuZFJvdXRlLCBQcmVjYWNoZUNvbnRyb2xsZXIsIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY2FsbHNcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjbWF0Y2hQcmVjYWNoZX0gb24gdGhlIGRlZmF1bHRcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9IGluc3RhbmNlLlxuICpcbiAqIElmIHlvdSBhcmUgY3JlYXRpbmcgeW91ciBvd24ge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0sIHRoZW4gY2FsbFxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNtYXRjaFByZWNhY2hlfSBvbiB0aGF0IGluc3RhbmNlLFxuICogaW5zdGVhZCBvZiB1c2luZyB0aGlzIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFJlcXVlc3R9IHJlcXVlc3QgVGhlIGtleSAod2l0aG91dCByZXZpc2lvbmluZyBwYXJhbWV0ZXJzKVxuICogdG8gbG9vayB1cCBpbiB0aGUgcHJlY2FjaGUuXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gbWF0Y2hQcmVjYWNoZShyZXF1ZXN0KSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLm1hdGNoUHJlY2FjaGUocmVxdWVzdCk7XG59XG5leHBvcnQgeyBtYXRjaFByZWNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBwcmVjYWNoZVBsdWdpbnMgfSBmcm9tICcuL3V0aWxzL3ByZWNhY2hlUGx1Z2lucy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuY29uc3QgaW5zdGFsbExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBwbHVnaW5zID0gcHJlY2FjaGVQbHVnaW5zLmdldCgpO1xuICAgIGV2ZW50LndhaXRVbnRpbChwcmVjYWNoZUNvbnRyb2xsZXIuaW5zdGFsbCh7IGV2ZW50LCBwbHVnaW5zIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgU2VydmljZSB3b3JrZXIgaW5zdGFsbGF0aW9uIGZhaWxlZC4gSXQgd2lsbCBgICtcbiAgICAgICAgICAgICAgICBgYmUgcmV0cmllZCBhdXRvbWF0aWNhbGx5IGR1cmluZyB0aGUgbmV4dCBuYXZpZ2F0aW9uLmApO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlLXRocm93IHRoZSBlcnJvciB0byBlbnN1cmUgaW5zdGFsbGF0aW9uIGZhaWxzLlxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KSk7XG59O1xuY29uc3QgYWN0aXZhdGVMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgZXZlbnQud2FpdFVudGlsKHByZWNhY2hlQ29udHJvbGxlci5hY3RpdmF0ZSgpKTtcbn07XG4vKipcbiAqIEFkZHMgaXRlbXMgdG8gdGhlIHByZWNhY2hlIGxpc3QsIHJlbW92aW5nIGFueSBkdXBsaWNhdGVzIGFuZFxuICogc3RvcmVzIHRoZSBmaWxlcyBpbiB0aGVcbiAqIFtcInByZWNhY2hlIGNhY2hlXCJde0BsaW5rIG1vZHVsZTp3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30gd2hlbiB0aGUgc2VydmljZVxuICogd29ya2VyIGluc3RhbGxzLlxuICpcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogUGxlYXNlIG5vdGU6IFRoaXMgbWV0aG9kICoqd2lsbCBub3QqKiBzZXJ2ZSBhbnkgb2YgdGhlIGNhY2hlZCBmaWxlcyBmb3IgeW91LlxuICogSXQgb25seSBwcmVjYWNoZXMgZmlsZXMuIFRvIHJlc3BvbmQgdG8gYSBuZXR3b3JrIHJlcXVlc3QgeW91IGNhbGxcbiAqIFthZGRSb3V0ZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLmFkZFJvdXRlfS5cbiAqXG4gKiBJZiB5b3UgaGF2ZSBhIHNpbmdsZSBhcnJheSBvZiBmaWxlcyB0byBwcmVjYWNoZSwgeW91IGNhbiBqdXN0IGNhbGxcbiAqIFtwcmVjYWNoZUFuZFJvdXRlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcucHJlY2FjaGVBbmRSb3V0ZX0uXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3R8c3RyaW5nPn0gW2VudHJpZXM9W11dIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gcHJlY2FjaGUoZW50cmllcykge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgcHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KGVudHJpZXMpO1xuICAgIGlmIChlbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gTk9URTogdGhlc2UgbGlzdGVuZXJzIHdpbGwgb25seSBiZSBhZGRlZCBvbmNlIChldmVuIGlmIHRoZSBgcHJlY2FjaGUoKWBcbiAgICAgICAgLy8gbWV0aG9kIGlzIGNhbGxlZCBtdWx0aXBsZSB0aW1lcykgYmVjYXVzZSBldmVudCBsaXN0ZW5lcnMgYXJlIGltcGxlbWVudGVkXG4gICAgICAgIC8vIGFzIGEgc2V0LCB3aGVyZSBlYWNoIGxpc3RlbmVyIG11c3QgYmUgdW5pcXVlLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGluc3RhbGxMaXN0ZW5lcik7XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBhY3RpdmF0ZUxpc3RlbmVyKTtcbiAgICB9XG59XG5leHBvcnQgeyBwcmVjYWNoZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYWRkUm91dGUgfSBmcm9tICcuL2FkZFJvdXRlLmpzJztcbmltcG9ydCB7IHByZWNhY2hlIH0gZnJvbSAnLi9wcmVjYWNoZS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGFkZCBlbnRyaWVzIHRvIHRoZSBwcmVjYWNoZSBsaXN0IGFuZCBhZGQgYSByb3V0ZSB0b1xuICogcmVzcG9uZCB0byBmZXRjaCBldmVudHMuXG4gKlxuICogVGhpcyBpcyBhIGNvbnZlbmllbmNlIG1ldGhvZCB0aGF0IHdpbGwgY2FsbFxuICogW3ByZWNhY2hlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcucHJlY2FjaGV9IGFuZFxuICogW2FkZFJvdXRlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuYWRkUm91dGV9IGluIGEgc2luZ2xlIGNhbGwuXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3R8c3RyaW5nPn0gZW50cmllcyBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBTZWVcbiAqIFthZGRSb3V0ZSgpIG9wdGlvbnNde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuYWRkUm91dGV9LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIHByZWNhY2hlQW5kUm91dGUoZW50cmllcywgb3B0aW9ucykge1xuICAgIHByZWNhY2hlKGVudHJpZXMpO1xuICAgIGFkZFJvdXRlKG9wdGlvbnMpO1xufVxuZXhwb3J0IHsgcHJlY2FjaGVBbmRSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgZ2V0Q2FjaGVLZXlGb3JVUkwgfSBmcm9tICcuL2dldENhY2hlS2V5Rm9yVVJMLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGRzIGEgYGZldGNoYCBsaXN0ZW5lciB0byB0aGUgc2VydmljZSB3b3JrZXIgdGhhdCB3aWxsXG4gKiByZXNwb25kIHRvXG4gKiBbbmV0d29yayByZXF1ZXN0c117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZpY2VfV29ya2VyX0FQSS9Vc2luZ19TZXJ2aWNlX1dvcmtlcnMjQ3VzdG9tX3Jlc3BvbnNlc190b19yZXF1ZXN0c31cbiAqIHdpdGggcHJlY2FjaGVkIGFzc2V0cy5cbiAqXG4gKiBSZXF1ZXN0cyBmb3IgYXNzZXRzIHRoYXQgYXJlbid0IHByZWNhY2hlZCwgdGhlIGBGZXRjaEV2ZW50YCB3aWxsIG5vdCBiZVxuICogcmVzcG9uZGVkIHRvLCBhbGxvd2luZyB0aGUgZXZlbnQgdG8gZmFsbCB0aHJvdWdoIHRvIG90aGVyIGBmZXRjaGAgZXZlbnRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBOT1RFOiB3aGVuIGNhbGxlZCBtb3JlIHRoYW4gb25jZSB0aGlzIG1ldGhvZCB3aWxsIHJlcGxhY2UgdGhlIHByZXZpb3VzbHkgc2V0XG4gKiBjb25maWd1cmF0aW9uIG9wdGlvbnMuIENhbGxpbmcgaXQgbW9yZSB0aGFuIG9uY2UgaXMgbm90IHJlY29tbWVuZGVkIG91dHNpZGVcbiAqIG9mIHRlc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGlyZWN0b3J5SW5kZXg9aW5kZXguaHRtbF0gVGhlIGBkaXJlY3RvcnlJbmRleGAgd2lsbFxuICogY2hlY2sgY2FjaGUgZW50cmllcyBmb3IgYSBVUkxzIGVuZGluZyB3aXRoICcvJyB0byBzZWUgaWYgdGhlcmUgaXMgYSBoaXQgd2hlblxuICogYXBwZW5kaW5nIHRoZSBgZGlyZWN0b3J5SW5kZXhgIHZhbHVlLlxuICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBbb3B0aW9ucy5pZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmc9Wy9edXRtXy9dXSBBblxuICogYXJyYXkgb2YgcmVnZXgncyB0byByZW1vdmUgc2VhcmNoIHBhcmFtcyB3aGVuIGxvb2tpbmcgZm9yIGEgY2FjaGUgbWF0Y2guXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNsZWFuVVJMcz10cnVlXSBUaGUgYGNsZWFuVVJMc2Agb3B0aW9uIHdpbGxcbiAqIGNoZWNrIHRoZSBjYWNoZSBmb3IgdGhlIFVSTCB3aXRoIGEgYC5odG1sYCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBlbmQuXG4gKiBAcGFyYW0ge3dvcmtib3gucHJlY2FjaGluZ351cmxNYW5pcHVsYXRpb259IFtvcHRpb25zLnVybE1hbmlwdWxhdGlvbl1cbiAqIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHNob3VsZCB0YWtlIGEgVVJMIGFuZCByZXR1cm4gYW4gYXJyYXkgb2ZcbiAqIGFsdGVybmF0aXZlIFVSTHMgdGhhdCBzaG91bGQgYmUgY2hlY2tlZCBmb3IgcHJlY2FjaGUgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFkZEZldGNoTGlzdGVuZXIgPSAoeyBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcgPSBbL151dG1fL10sIGRpcmVjdG9yeUluZGV4ID0gJ2luZGV4Lmh0bWwnLCBjbGVhblVSTHMgPSB0cnVlLCB1cmxNYW5pcHVsYXRpb24sIH0gPSB7fSkgPT4ge1xuICAgIGNvbnN0IGNhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKCk7XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjgzNTcjaXNzdWVjb21tZW50LTQzNjQ4NDcwNVxuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHByZWNhY2hlZFVSTCA9IGdldENhY2hlS2V5Rm9yVVJMKGV2ZW50LnJlcXVlc3QudXJsLCB7XG4gICAgICAgICAgICBjbGVhblVSTHMsXG4gICAgICAgICAgICBkaXJlY3RvcnlJbmRleCxcbiAgICAgICAgICAgIGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyxcbiAgICAgICAgICAgIHVybE1hbmlwdWxhdGlvbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcHJlY2FjaGVkVVJMKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUHJlY2FjaGluZyBkaWQgbm90IGZpbmQgYSBtYXRjaCBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGdldEZyaWVuZGx5VVJMKGV2ZW50LnJlcXVlc3QudXJsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3BvbnNlUHJvbWlzZSA9IHNlbGYuY2FjaGVzLm9wZW4oY2FjaGVOYW1lKS50aGVuKChjYWNoZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKHByZWNhY2hlZFVSTCk7XG4gICAgICAgIH0pLnRoZW4oKGNhY2hlZFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBGYWxsIGJhY2sgdG8gdGhlIG5ldHdvcmsgaWYgd2UgZG9uJ3QgaGF2ZSBhIGNhY2hlZCByZXNwb25zZVxuICAgICAgICAgICAgLy8gKHBlcmhhcHMgZHVlIHRvIG1hbnVhbCBjYWNoZSBjbGVhbnVwKS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFRoZSBwcmVjYWNoZWQgcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHtnZXRGcmllbmRseVVSTChwcmVjYWNoZWRVUkwpfSBpbiAke2NhY2hlTmFtZX0gd2FzIG5vdCBmb3VuZC4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBGYWxsaW5nIGJhY2sgdG8gdGhlIG5ldHdvcmsgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmZXRjaChwcmVjYWNoZWRVUkwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IHJlc3BvbnNlUHJvbWlzZS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFdvcmtib3ggaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyBwcmludCB0aGUgcm91dGluZyBkZXRhaWxzIHRvIHRoZSBjb25zb2xlLlxuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgUHJlY2FjaGluZyBpcyByZXNwb25kaW5nIHRvOiBgICtcbiAgICAgICAgICAgICAgICAgICAgZ2V0RnJpZW5kbHlVUkwoZXZlbnQucmVxdWVzdC51cmwpKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBTZXJ2aW5nIHRoZSBwcmVjYWNoZWQgdXJsOiAke3ByZWNhY2hlZFVSTH1gKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgcmVxdWVzdCBkZXRhaWxzIGhlcmUuYCk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgcmVzcG9uc2UgZGV0YWlscyBoZXJlLmApO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnJlc3BvbmRXaXRoKHJlc3BvbnNlUHJvbWlzZSk7XG4gICAgfSkpO1xufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vLyBOYW1lIG9mIHRoZSBzZWFyY2ggcGFyYW1ldGVyIHVzZWQgdG8gc3RvcmUgcmV2aXNpb24gaW5mby5cbmNvbnN0IFJFVklTSU9OX1NFQVJDSF9QQVJBTSA9ICdfX1dCX1JFVklTSU9OX18nO1xuLyoqXG4gKiBDb252ZXJ0cyBhIG1hbmlmZXN0IGVudHJ5IGludG8gYSB2ZXJzaW9uZWQgVVJMIHN1aXRhYmxlIGZvciBwcmVjYWNoaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ30gZW50cnlcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBVUkwgd2l0aCB2ZXJzaW9uaW5nIGluZm8uXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWNoZUtleShlbnRyeSkge1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYWRkLXRvLWNhY2hlLWxpc3QtdW5leHBlY3RlZC10eXBlJywgeyBlbnRyeSB9KTtcbiAgICB9XG4gICAgLy8gSWYgYSBwcmVjYWNoZSBtYW5pZmVzdCBlbnRyeSBpcyBhIHN0cmluZywgaXQncyBhc3N1bWVkIHRvIGJlIGEgdmVyc2lvbmVkXG4gICAgLy8gVVJMLCBsaWtlICcvYXBwLmFiY2QxMjM0LmpzJy4gUmV0dXJuIGFzLWlzLlxuICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwoZW50cnksIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FjaGVLZXk6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICAgICAgdXJsOiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyByZXZpc2lvbiwgdXJsIH0gPSBlbnRyeTtcbiAgICBpZiAoIXVybCkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnLCB7IGVudHJ5IH0pO1xuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIGp1c3QgYSBVUkwgYW5kIG5vIHJldmlzaW9uLCB0aGVuIGl0J3MgYWxzbyBhc3N1bWVkIHRvIGJlIGFcbiAgICAvLyB2ZXJzaW9uZWQgVVJMLlxuICAgIGlmICghcmV2aXNpb24pIHtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FjaGVLZXk6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICAgICAgdXJsOiB1cmxPYmplY3QuaHJlZixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBjb25zdHJ1Y3QgYSBwcm9wZXJseSB2ZXJzaW9uZWQgVVJMIHVzaW5nIHRoZSBjdXN0b20gV29ya2JveFxuICAgIC8vIHNlYXJjaCBwYXJhbWV0ZXIgYWxvbmcgd2l0aCB0aGUgcmV2aXNpb24gaW5mby5cbiAgICBjb25zdCBjYWNoZUtleVVSTCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICBjb25zdCBvcmlnaW5hbFVSTCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICBjYWNoZUtleVVSTC5zZWFyY2hQYXJhbXMuc2V0KFJFVklTSU9OX1NFQVJDSF9QQVJBTSwgcmV2aXNpb24pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNhY2hlS2V5OiBjYWNoZUtleVVSTC5ocmVmLFxuICAgICAgICB1cmw6IG9yaWdpbmFsVVJMLmhyZWYsXG4gICAgfTtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgU1VCU1RSSU5HX1RPX0ZJTkQgPSAnLXByZWNhY2hlLSc7XG4vKipcbiAqIENsZWFucyB1cCBpbmNvbXBhdGlibGUgcHJlY2FjaGVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IG9sZGVyIHZlcnNpb25zIG9mXG4gKiBXb3JrYm94LCBieSBhIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdGVyZWQgdW5kZXIgdGhlIGN1cnJlbnQgc2NvcGUuXG4gKlxuICogVGhpcyBpcyBtZWFudCB0byBiZSBjYWxsZWQgYXMgcGFydCBvZiB0aGUgYGFjdGl2YXRlYCBldmVudC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBzYWZlIHRvIHVzZSBhcyBsb25nIGFzIHlvdSBkb24ndCBpbmNsdWRlIGBzdWJzdHJpbmdUb0ZpbmRgXG4gKiAoZGVmYXVsdGluZyB0byBgLXByZWNhY2hlLWApIGluIHlvdXIgbm9uLXByZWNhY2hlIGNhY2hlIG5hbWVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50UHJlY2FjaGVOYW1lIFRoZSBjYWNoZSBuYW1lIGN1cnJlbnRseSBpbiB1c2UgZm9yXG4gKiBwcmVjYWNoaW5nLiBUaGlzIGNhY2hlIHdvbid0IGJlIGRlbGV0ZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N1YnN0cmluZ1RvRmluZD0nLXByZWNhY2hlLSddIENhY2hlIG5hbWVzIHdoaWNoIGluY2x1ZGUgdGhpc1xuICogc3Vic3RyaW5nIHdpbGwgYmUgZGVsZXRlZCAoZXhjbHVkaW5nIGBjdXJyZW50UHJlY2FjaGVOYW1lYCkuXG4gKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fSBBIGxpc3Qgb2YgYWxsIHRoZSBjYWNoZSBuYW1lcyB0aGF0IHdlcmUgZGVsZXRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuY29uc3QgZGVsZXRlT3V0ZGF0ZWRDYWNoZXMgPSBhc3luYyAoY3VycmVudFByZWNhY2hlTmFtZSwgc3Vic3RyaW5nVG9GaW5kID0gU1VCU1RSSU5HX1RPX0ZJTkQpID0+IHtcbiAgICBjb25zdCBjYWNoZU5hbWVzID0gYXdhaXQgc2VsZi5jYWNoZXMua2V5cygpO1xuICAgIGNvbnN0IGNhY2hlTmFtZXNUb0RlbGV0ZSA9IGNhY2hlTmFtZXMuZmlsdGVyKChjYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhY2hlTmFtZS5pbmNsdWRlcyhzdWJzdHJpbmdUb0ZpbmQpICYmXG4gICAgICAgICAgICBjYWNoZU5hbWUuaW5jbHVkZXMoc2VsZi5yZWdpc3RyYXRpb24uc2NvcGUpICYmXG4gICAgICAgICAgICBjYWNoZU5hbWUgIT09IGN1cnJlbnRQcmVjYWNoZU5hbWU7XG4gICAgfSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoY2FjaGVOYW1lc1RvRGVsZXRlLm1hcCgoY2FjaGVOYW1lKSA9PiBzZWxmLmNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKSkpO1xuICAgIHJldHVybiBjYWNoZU5hbWVzVG9EZWxldGU7XG59O1xuZXhwb3J0IHsgZGVsZXRlT3V0ZGF0ZWRDYWNoZXMgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IHJlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXMgfSBmcm9tICcuL3JlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXMuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHlpZWxkcyBwb3NzaWJsZSB2YXJpYXRpb25zIG9uIHRoZSBvcmlnaW5hbCBVUkwgdG9cbiAqIGNoZWNrLCBvbmUgYXQgYSB0aW1lLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiogZ2VuZXJhdGVVUkxWYXJpYXRpb25zKHVybCwgeyBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcsIGRpcmVjdG9yeUluZGV4LCBjbGVhblVSTHMsIHVybE1hbmlwdWxhdGlvbiwgfSA9IHt9KSB7XG4gICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIHVybE9iamVjdC5oYXNoID0gJyc7XG4gICAgeWllbGQgdXJsT2JqZWN0LmhyZWY7XG4gICAgY29uc3QgdXJsV2l0aG91dElnbm9yZWRQYXJhbXMgPSByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zKHVybE9iamVjdCwgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nKTtcbiAgICB5aWVsZCB1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5ocmVmO1xuICAgIGlmIChkaXJlY3RvcnlJbmRleCAmJiB1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5wYXRobmFtZS5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVVSTCA9IG5ldyBVUkwodXJsV2l0aG91dElnbm9yZWRQYXJhbXMuaHJlZik7XG4gICAgICAgIGRpcmVjdG9yeVVSTC5wYXRobmFtZSArPSBkaXJlY3RvcnlJbmRleDtcbiAgICAgICAgeWllbGQgZGlyZWN0b3J5VVJMLmhyZWY7XG4gICAgfVxuICAgIGlmIChjbGVhblVSTHMpIHtcbiAgICAgICAgY29uc3QgY2xlYW5VUkwgPSBuZXcgVVJMKHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLmhyZWYpO1xuICAgICAgICBjbGVhblVSTC5wYXRobmFtZSArPSAnLmh0bWwnO1xuICAgICAgICB5aWVsZCBjbGVhblVSTC5ocmVmO1xuICAgIH1cbiAgICBpZiAodXJsTWFuaXB1bGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxVUkxzID0gdXJsTWFuaXB1bGF0aW9uKHsgdXJsOiB1cmxPYmplY3QgfSk7XG4gICAgICAgIGZvciAoY29uc3QgdXJsVG9BdHRlbXB0IG9mIGFkZGl0aW9uYWxVUkxzKSB7XG4gICAgICAgICAgICB5aWVsZCB1cmxUb0F0dGVtcHQuaHJlZjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVVSTFZhcmlhdGlvbnMgfSBmcm9tICcuL2dlbmVyYXRlVVJMVmFyaWF0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIHRha2UgdGhlIHJlcXVlc3QgVVJMIGFuZCBtYW5pcHVsYXRlIGl0IGJhc2VkIG9uIHRoZVxuICogY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFJldHVybnMgdGhlIFVSTCBpbiB0aGUgY2FjaGUgdGhhdCBtYXRjaGVzIHRoZSByZXF1ZXN0LFxuICogaWYgcG9zc2libGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENhY2hlS2V5Rm9yVVJMID0gKHVybCwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgY29uc3QgdXJsc1RvQ2FjaGVLZXlzID0gcHJlY2FjaGVDb250cm9sbGVyLmdldFVSTHNUb0NhY2hlS2V5cygpO1xuICAgIGZvciAoY29uc3QgcG9zc2libGVVUkwgb2YgZ2VuZXJhdGVVUkxWYXJpYXRpb25zKHVybCwgb3B0aW9ucykpIHtcbiAgICAgICAgY29uc3QgcG9zc2libGVDYWNoZUtleSA9IHVybHNUb0NhY2hlS2V5cy5nZXQocG9zc2libGVVUkwpO1xuICAgICAgICBpZiAocG9zc2libGVDYWNoZUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ2FjaGVLZXk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi4vUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IHByZWNhY2hlQ29udHJvbGxlcjtcbi8qKlxuICogQHJldHVybiB7UHJlY2FjaGVDb250cm9sbGVyfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyID0gKCkgPT4ge1xuICAgIGlmICghcHJlY2FjaGVDb250cm9sbGVyKSB7XG4gICAgICAgIHByZWNhY2hlQ29udHJvbGxlciA9IG5ldyBQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlcjtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IHBsdWdpbnMgPSBbXTtcbmV4cG9ydCBjb25zdCBwcmVjYWNoZVBsdWdpbnMgPSB7XG4gICAgLypcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnM7XG4gICAgfSxcbiAgICAvKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG5ld1BsdWdpbnNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFkZChuZXdQbHVnaW5zKSB7XG4gICAgICAgIHBsdWdpbnMucHVzaCguLi5uZXdQbHVnaW5zKTtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBncm91cFRpdGxlXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGRlbGV0ZWRVUkxzXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgbG9nR3JvdXAgPSAoZ3JvdXBUaXRsZSwgZGVsZXRlZFVSTHMpID0+IHtcbiAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoZ3JvdXBUaXRsZSk7XG4gICAgZm9yIChjb25zdCB1cmwgb2YgZGVsZXRlZFVSTHMpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyh1cmwpO1xuICAgIH1cbiAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbn07XG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZGVsZXRlZFVSTHNcbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50Q2xlYW51cERldGFpbHMoZGVsZXRlZFVSTHMpIHtcbiAgICBjb25zdCBkZWxldGlvbkNvdW50ID0gZGVsZXRlZFVSTHMubGVuZ3RoO1xuICAgIGlmIChkZWxldGlvbkNvdW50ID4gMCkge1xuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYER1cmluZyBwcmVjYWNoaW5nIGNsZWFudXAsIGAgK1xuICAgICAgICAgICAgYCR7ZGVsZXRpb25Db3VudH0gY2FjaGVkIGAgK1xuICAgICAgICAgICAgYHJlcXVlc3Qke2RlbGV0aW9uQ291bnQgPT09IDEgPyAnIHdhcycgOiAncyB3ZXJlJ30gZGVsZXRlZC5gKTtcbiAgICAgICAgbG9nR3JvdXAoJ0RlbGV0ZWQgQ2FjaGUgUmVxdWVzdHMnLCBkZWxldGVkVVJMcyk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBncm91cFRpdGxlXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVybHNcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfbmVzdGVkR3JvdXAoZ3JvdXBUaXRsZSwgdXJscykge1xuICAgIGlmICh1cmxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChncm91cFRpdGxlKTtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzKSB7XG4gICAgICAgIGxvZ2dlci5sb2codXJsKTtcbiAgICB9XG4gICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG59XG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc1RvUHJlY2FjaGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc0FscmVhZHlQcmVjYWNoZWRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50SW5zdGFsbERldGFpbHModXJsc1RvUHJlY2FjaGUsIHVybHNBbHJlYWR5UHJlY2FjaGVkKSB7XG4gICAgY29uc3QgcHJlY2FjaGVkQ291bnQgPSB1cmxzVG9QcmVjYWNoZS5sZW5ndGg7XG4gICAgY29uc3QgYWxyZWFkeVByZWNhY2hlZENvdW50ID0gdXJsc0FscmVhZHlQcmVjYWNoZWQubGVuZ3RoO1xuICAgIGlmIChwcmVjYWNoZWRDb3VudCB8fCBhbHJlYWR5UHJlY2FjaGVkQ291bnQpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgUHJlY2FjaGluZyAke3ByZWNhY2hlZENvdW50fSBmaWxlJHtwcmVjYWNoZWRDb3VudCA9PT0gMSA/ICcnIDogJ3MnfS5gO1xuICAgICAgICBpZiAoYWxyZWFkeVByZWNhY2hlZENvdW50ID4gMCkge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgICR7YWxyZWFkeVByZWNhY2hlZENvdW50fSBgICtcbiAgICAgICAgICAgICAgICBgZmlsZSR7YWxyZWFkeVByZWNhY2hlZENvdW50ID09PSAxID8gJyBpcycgOiAncyBhcmUnfSBhbHJlYWR5IGNhY2hlZC5gO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlKTtcbiAgICAgICAgX25lc3RlZEdyb3VwKGBWaWV3IG5ld2x5IHByZWNhY2hlZCBVUkxzLmAsIHVybHNUb1ByZWNhY2hlKTtcbiAgICAgICAgX25lc3RlZEdyb3VwKGBWaWV3IHByZXZpb3VzbHkgcHJlY2FjaGVkIFVSTHMuYCwgdXJsc0FscmVhZHlQcmVjYWNoZWQpO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogUmVtb3ZlcyBhbnkgVVJMIHNlYXJjaCBwYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIGlnbm9yZWQuXG4gKlxuICogQHBhcmFtIHtVUkx9IHVybE9iamVjdCBUaGUgb3JpZ2luYWwgVVJMLlxuICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcgUmVnRXhwcyB0byB0ZXN0IGFnYWluc3RcbiAqIGVhY2ggc2VhcmNoIHBhcmFtZXRlciBuYW1lLiBNYXRjaGVzIG1lYW4gdGhhdCB0aGUgc2VhcmNoIHBhcmFtZXRlciBzaG91bGQgYmVcbiAqIGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtVUkx9IFRoZSBVUkwgd2l0aCBhbnkgaWdub3JlZCBzZWFyY2ggcGFyYW1ldGVycyByZW1vdmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcyh1cmxPYmplY3QsIGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyA9IFtdKSB7XG4gICAgLy8gQ29udmVydCB0aGUgaXRlcmFibGUgaW50byBhbiBhcnJheSBhdCB0aGUgc3RhcnQgb2YgdGhlIGxvb3AgdG8gbWFrZSBzdXJlXG4gICAgLy8gZGVsZXRpb24gZG9lc24ndCBtZXNzIHVwIGl0ZXJhdGlvbi5cbiAgICBmb3IgKGNvbnN0IHBhcmFtTmFtZSBvZiBbLi4udXJsT2JqZWN0LnNlYXJjaFBhcmFtcy5rZXlzKCldKSB7XG4gICAgICAgIGlmIChpZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmcuc29tZSgocmVnRXhwKSA9PiByZWdFeHAudGVzdChwYXJhbU5hbWUpKSkge1xuICAgICAgICAgICAgdXJsT2JqZWN0LnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW1OYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsT2JqZWN0O1xufVxuIiwiaW1wb3J0IHtwcmVjYWNoZUFuZFJvdXRlfSBmcm9tICd3b3JrYm94LXByZWNhY2hpbmcnO1xucHJlY2FjaGVBbmRSb3V0ZShzZWxmLl9fV0JfTUFOSUZFU1QpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIGNhY2hlcy5vcGVuKCdzdGF0aWMnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlLmFkZEFsbChbXG4gICAgICAgICAgJy8nLFxuICAgICAgICAgICcvaW5kZXguaHRtbCcsXG4gICAgICAgICAgJy9zaWduaW4uaHRtbCcsXG4gICAgICAgICAgJy9zaWdudXAuaHRtbCcsXG4gICAgICAgICAgJy9pbmRleC5idW5kbGUuanMnLFxuICAgICAgICAgICcvc2lnbmluLmJ1bmRsZS5qcycsXG4gICAgICAgICAgJy9zaWdudXAuYnVuZGxlLmpzJ1xuICAgICAgICBdKTtcbiAgICAgIH0pXG4gICk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGZ1bmN0aW9uICgpIHt9KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnJlc3BvbmRXaXRoKFxuICAgIGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmZXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgKTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAvc3cuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
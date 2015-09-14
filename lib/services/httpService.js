/**
 * @desc this service provides basic wrapper around $http service
 */

(function() {
	'use strict';

	function httpService($http) {

		function f(method, url, params, data, authenticate) {

			params = params || {};
			if ('GET' === method && angular.isUndefined(params.disableCache)) {
				params.disableCache = (new Date()).getTime();
			}
			if (authenticate) {
				params.authenticate = true;
			}

			return $http({
				method: method,
				params: params,
				url: url,
				data: data
			});
		}

		function get(url, params) {
			return f('GET', url, params, undefined, true);
		}

		function post(url, data, params) {
			return f('POST', url, params, data, true);
		}

		function put(url, data) {
			return f('PUT', url, undefined, data, true);
		}

		function remove(url, params) {
			return f('DELETE', url, params);
		}

		function unauthGet(url, params) {
			return f('GET', url, params);
		}

		function unauthPost(url, data, params) {
			return f('POST', url, params, data);
		}

		return {
			get: get,
			post: post,
			put: put,
			remove: remove,
			unauthGet: unauthGet,
			unauthPost: unauthPost
		};
	}

	angular.module('angular.widgets')
		.factory('httpService', ['$http', httpService]);
})();
(function(angular, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define(['angular'], function(angular) {
			return factory(angular);
		});
	} else {
		return factory(angular);
	}
}(window.angular || null, function(angular) {
	'use strict';

	var app = angular.module('angular.widgets', []);

/**
 * @desc this directive sets a focus to input element
 */

(function() {
	'use strict';

	function autoFocus($timeout) {

		function link(scope, element) {
			$timeout(function() {
				element[0].focus();
			});
		}

		return {
			restrict: 'A',
			link: link
		};
	}

	angular.module('angular.widgets')
		.directive('autoFocus', ['$timeout', autoFocus]);
})();
/**
 * @desc this directive compares element's value with another element's value.
 * 		it can be used to validate elements that must have identical values.
 *		for instance, password and confirm password
 */

(function() {
	'use strict';

	function compareTo() {

		function link(scope, element, attributes, ngModel) {
			ngModel.$validators.compareTo = function(modelValue) {
				return angular.isUndefined(modelValue) || modelValue.length === 0 || modelValue === scope.otherModelValue;
			};

			scope.$watch('otherModelValue', function() {
				ngModel.$validate();
			});
		}

		return {
			require: 'ngModel',
			scope: {
				otherModelValue: '=compareTo'
			},
			link: link
		};
	}

	angular.module('angular.widgets')
		.directive('compareTo', compareTo);
})();
/**
 * @desc this directive upload a file
 */

(function() {
	'use strict';

	function fileUpload() {

		function link(scope, element) {
			var input = element.find('input');

			element.bind('click', function(e) {
				e.stopPropagation();
				input.click();
			});

			element.bind('change', function(e) {
				e.stopPropagation();
				scope.fileUploadCallback({
					files: input[0].files
				});
			});
		}

		return {
			restrict: 'A',
			transclude: true,
			template: '<input type="file" style="position:absolute; opacity: 0"><ng-transclude></ng-transclude>',
			scope: {
				fileUploadCallback: '&fileUploadCallback'
			},
			link: link
		};
	}

	angular.module('angular.widgets')
		.directive('fileUpload', fileUpload);
})();
/**
 * @desc this directive stops propagation of click event
 */

(function() {
	'use strict';

	function stopPropagation() {

		function link(scope, element) {
			element.bind('click', function(e) {
				e.stopPropagation();
			});
		}

		return {
			restrict: 'A',
			link: link
		};
	}

	angular.module('angular.widgets')
		.directive('stopPropagation', stopPropagation);
})();
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

	return app;
}));
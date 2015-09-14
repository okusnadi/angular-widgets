(function(angular, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define(['angular'], function(angular) {
			return factory(angular)
		})
	} else {
		return factory(angular)
	}
}(window.angular || null, function(angular) {
	'use strict';

(function() {
	'use strict'

	angular.module('angular.widgets', [])
})()
/**
 * @desc this directive sets a focus to input element
 */

(function() {
	'use strict'

	function autoFocus($timeout) {

		function link(scope, element) {
			$timeout(function() {
				element[0].focus()
			})
		}

		return {
			restrict: 'A',
			link: link
		}
	}

	angular.module('angular.widgets')
		.directive('autoFocus', ['$timeout', autoFocus])
})()
/**
 * @desc this directive compares element's value with another element's value.
 * 		it can be used to validate elements that must have identical values.
 *		for instance, password and confirm password
 */

(function() {
	'use strict'

	function compareTo() {

		function link(scope, element, attributes, ngModel) {
			ngModel.$validators.compareTo = function(modelValue) {
				return angular.isUndefined(modelValue) || modelValue.length === 0 || modelValue === scope.otherModelValue
			}

			scope.$watch('otherModelValue', function() {
				ngModel.$validate()
			})
		}

		return {
			require: 'ngModel',
			scope: {
				otherModelValue: '=compareTo'
			},
			link: link
		}
	}

	angular.module('angular.widgets')
		.directive('compareTo', compareTo)
})()
/**
 * @desc this directive stops propagation of click event
 */

(function() {
	'use strict'

	function stopPropagation() {

		function link(scope, element) {
			element.bind('click', function(e) {
				e.stopPropagation()
			})
		}

		return {
			restrict: 'A',
			link: link
		}
	}

	angular.module('angular.widgets')
		.directive('stopPropagation', stopPropagation)
})()

	return angular.module('angular.widgets')
}))
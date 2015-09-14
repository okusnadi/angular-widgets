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
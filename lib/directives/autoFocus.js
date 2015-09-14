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
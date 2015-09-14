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
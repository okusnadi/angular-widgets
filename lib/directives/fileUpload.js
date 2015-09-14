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
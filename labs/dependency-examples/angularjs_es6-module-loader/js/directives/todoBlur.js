/**
 * Directive that executes an expression when the element it is applied to loses focus.
 */

import app from '../app';

app.directive('todoBlur', function () {
	return function (scope, elem, attrs) {
		elem.bind('blur', function () {
			scope.$apply(attrs.todoBlur);
		});
	};
});

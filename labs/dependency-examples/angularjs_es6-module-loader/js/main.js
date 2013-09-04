// note that code is "use strict" by default when using the System loader

import 'angular';
import 'app';
import 'controllers/todo';
import 'directives/todoFocus';
import 'directives/todoBlur';

angular.bootstrap(document, ['todomvc']);

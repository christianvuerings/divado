(function(win, angular) {
  'use strict';

  angular.module('divado.controllers', []);
  angular.module('divado.factories', []);

  var divado = angular.module('divado', [
    'divado.controllers',
    'divado.factories',
    'ngSanitize'
  ]);

  win.divado = divado;

})(window, window.angular);

(function(win, angular) {
  'use strict';

  angular.module('divado.controllers', []);

  var divado = angular.module('divado', [
    'divado.controllers',
    'ngSanitize'
  ]);

  win.divado = divado;

})(window, window.angular);

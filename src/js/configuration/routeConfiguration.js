(function(angular) {
  'use strict';

  // Set the configuration
  angular.module('divado.config').config(function($routeProvider) {

    // List all the routes
    $routeProvider.
    when('/:username?', {
      controller: 'DivadoController',
      templateUrl: 'test.html'
    }).
    otherwise({
      templateUrl: '404.html'
    });
  });
})(window.angular);

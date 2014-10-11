(function(angular) {
  'use strict';

  // Set the configuration
  angular.module('divado.config').config(function($locationProvider) {
    // We set it to html5 mode so we don't have hash bang URLs
    $locationProvider.html5Mode(true).hashPrefix('!');
  });
})(window.angular);

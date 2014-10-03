(function(angular) {
  'use strict';

  angular.module('divado.controllers').controller('DivadoController', function(divadoFactory, $scope) {

    var parseRepos = function(data) {
      $scope.repos = data;
    };

    $scope.$watch('username', function(username) {
      if (!username) {
        return;
      }
      divadoFactory.getRepos(username).success(parseRepos);
    });

  });

})(angular);

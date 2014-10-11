(function(angular) {
  'use strict';

  angular.module('divado.controllers').controller('DivadoController', function(divadoFactory, $location, $routeParams, $scope) {
    console.log($routeParams);

    var parseRepos = function(data) {
      $scope.repos = data;
    };

    var getMergedBranches = function(data) {
      data.forEach(function(element) {
        divadoFactory.getMergedBranches({
          username: $scope.username,
          repo: element.name
        }).success(parseMergedBranches);
      });
    };

    $scope.getRepos = function() {
      if ($scope.username) {
        divadoFactory.getRepos($scope.username).success(parseRepos).then(getMergedBranches);
      }
    };

  });

})(angular);

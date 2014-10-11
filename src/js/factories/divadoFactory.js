(function(angular) {
  'use strict';

  angular.module('divado.factories').factory('divadoFactory', function($http) {

    return {
      getMergedBranches: function(options) {
        return $http.get('/api/github/mergedbranches/' + options.username + '/' + options.repo);
      },
      getRepos: function(username) {
        return $http.get('/api/github/repos/' + username);
      }
    };

  });

})(angular);

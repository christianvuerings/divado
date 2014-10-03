(function(angular) {
  'use strict';

  angular.module('divado.factories').factory('divadoFactory', function($http) {

    return {
      getRepos: function(username) {
        return $http.get('/api/github/repos/' + username);
      }
    };

  });

})(angular);

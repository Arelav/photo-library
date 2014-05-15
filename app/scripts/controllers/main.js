'use strict';

angular.module('photoSearchApp')
  .controller('MainCtrl', function ($scope, $http) {
    var method = 'JSONP';
    var url = 'http://loc.gov/pictures/search?callback=JSON_CALLBACK&&fo=json&q=';

    $scope.search = function(query) {
      $scope.code = null;
      $scope.response = null;

      $http({method: method, url: url + query}).success(function(data, status) {
        $scope.status = status;
        $scope.data = data;
        }).
        error(function(data, status) {
        $scope.data = data || 'Request failed';
        $scope.status = status;
      });
    };
  });

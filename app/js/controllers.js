'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
      // Preprocess so 5 phones appear
      //$scope.phones = data.splice(0,5);
    });

  $scope.name = "World";
  $scope.orderProp = 'age';

}]);

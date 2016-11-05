'use strict';

angular.module('app', ['ngRoute'])
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider
        .when('/page1', { templateUrl: 'page1.html', controller: 'Page1Ctrl' })
        .when('/page2', { templateUrl: 'page2.html', controller: 'Page2Ctrl' })
        .otherwise('/');
    }
  ])
  .controller('HelloCtrl', function HelloCtrl($scope) {
    $scope.yourName = 'LOL'
  })
  .controller('Page1Ctrl', ['$routeParams',
  function Page1Ctrl($routeParams) {
    this.$routeParams = $routeParams;
  }])
  .controller('Page2Ctrl', ['$routeParams',
  function Page2Ctrl($routeParams) {
    this.$routeParams = $routeParams;
  }]);
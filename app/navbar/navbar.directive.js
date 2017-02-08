angular.module('app')
  .directive('navbar',
    function () {
      return {
        restrict: 'A',
        replace: true,
        templateUrl: "navbar/navbar.html"
      }
    });
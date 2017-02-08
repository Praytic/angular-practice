angular.module('app')
  .directive('courseFilter',
    function () {
      return {
        restrict: 'A',
        replace: true,
        templateUrl: "navbar/course-filter/course-filter.html"
      }
    });
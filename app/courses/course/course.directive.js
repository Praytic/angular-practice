angular.module('app')
  .directive('course-card',
    function () {
      return {
        restrict: 'A',
        replace: true,
        templateUrl: "courses/course/course.html",
        scope: {
          course: '='
        }
      }
    });
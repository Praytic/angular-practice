angular.module('app').controller('CourseCtrl',
  function($scope, $http, $location, $routeParams, Course) {
    $scope.courseId = $routeParams.courseId;
    Course.find($routeParams.courseId, function(data) {
      $scope.course = data;
    });
  });
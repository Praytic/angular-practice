angular.module('app').controller('CourseCtrl',['$scope','$http', '$location', '$routeParams', 'Course',
  function($scope, $http, $location, $routeParams, Course) {
    $scope.courseId = $routeParams.courseId;
    Course.get({courseId: $routeParams.courseId}, function(data) {
      $scope.course = data;
    });
  }]);
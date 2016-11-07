angular.module('app').controller('CoursesCtrl',['$scope','$http', '$location', 'Course',
  function($scope, $http, $location, Course) {
    $http.get('/courses/courses.json').success(function(data, status, headers, config) {
      Course.query({courseId: 'courses'}, function(data) {
        $scope.courses = data;
      });
    });
  }]);
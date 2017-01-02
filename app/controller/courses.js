angular.module('app').controller('CoursesCtrl',['$scope','$http', '$location', 'Course',
  function($scope, $http, $location, Course) {
      Course.query({courseId: 'courses'}, function(data) {
        $scope.courses = data;
      });
  }]);
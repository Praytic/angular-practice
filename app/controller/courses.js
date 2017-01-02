angular.module('app').controller('CoursesCtrl',
  function($scope, $http, $location, Course) {
      Course.get(function(data) {
        $scope.courses = data;
      });
  });
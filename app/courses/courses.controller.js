angular.module('app')
    .controller('CoursesController',
        function($scope, $http, $location, Course) {
            Course.get(function(data) {
                $scope.courses = data;
            });
        });
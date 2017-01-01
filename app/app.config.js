angular.module('app').config(['$routeProvider',
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', { templateUrl: 'template/login.html', controller: 'LoginCtrl' })
      .when('/course', { templateUrl: 'template/courses.html', controller: 'CoursesCtrl' })
      .when('/course/:courseId', { templateUrl: 'template/course.html', controller: 'CourseCtrl' })
      .otherwise('/course');
  }
]);
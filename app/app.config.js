angular.module('app').config(['$routeProvider',
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', { templateUrl: 'login/login.html', controller: 'LoginCtrl' })
      .when('/course', { templateUrl: 'courses/courses.html', controller: 'CoursesCtrl' })
      .when('/course/:courseId', { templateUrl: 'course/course.html', controller: 'CourseCtrl' })
      .otherwise('/course');
  }
]);
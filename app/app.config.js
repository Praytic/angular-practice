angular.module('app').config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/login', { templateUrl: 'login/login.html', controller: 'LoginController' })
      .when('/course', { templateUrl: 'courses/courses.html', controller: 'CoursesController' })
      .when('/course/:courseId', { templateUrl: 'course-info/course-info.html', controller: 'CourseInfoController' })
      .otherwise('/course');
  }
]);
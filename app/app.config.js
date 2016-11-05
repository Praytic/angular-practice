angular.module('app').config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/login', { templateUrl: 'login.html', controller: 'LoginCtrl' })
      .when('/course', { templateUrl: 'courses.html', controller: 'CoursesCtrl' })
      .when('/course/:courseName', { templateUrl: 'courseDetail.html', controller: 'CourseDetailCtrl' })
      .otherwise('/');
  }
]);
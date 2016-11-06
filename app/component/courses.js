(function () {
  angular.module('app').component('courses', {
    bindings: {
      name: '='
    },
    templateUrl: '/component/courses.html',
    controller: 'CoursesCtrl'
  });
})();
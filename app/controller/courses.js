(function () {
  angular.module('app').controller('CoursesCtrl', ['$routeParams',
    function CoursesCtrl($routeParams) {
      this.$routeParams = $routeParams;
      this.courses = [{
        id: 1,
        name: "Kotlin Course"
      }, {
        id: 2,
        name: "Java Course"
      }, {
        id: 3,
        name: "JavaScript Course"
      }]
  }]);
})();
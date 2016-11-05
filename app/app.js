'use strict';

angular.module('app', ['ngRoute'])
  .controller('LoginCtrl', ['$routeParams',
  function LoginCtrl($routeParams) {
    this.$routeParams = $routeParams;
  }])
  .controller('CoursesCtrl', ['$routeParams',
  function CoursesCtrl($routeParams) {
    this.$routeParams = $routeParams;
  }]);
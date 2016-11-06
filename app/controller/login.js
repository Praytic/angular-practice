(function () {
  angular.module('app').controller('LoginCtrl', ['$routeParams',
    function LoginCtrl($routeParams) {
      this.$routeParams = $routeParams;
    }]);
})();
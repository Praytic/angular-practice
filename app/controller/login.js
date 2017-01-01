angular.module('app').controller('LoginCtrl',
  function LoginCtrl($scope, $location, $rootScope) {
    $scope.submit = function() {
      var username = $scope.username;
      var password = $scope.password;

      $rootScope.globals = {
        currentUser: {
          username: username,
          password: password
        }
      };
      $location.path('/courses')
    }
  });
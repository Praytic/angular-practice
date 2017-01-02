angular.module('app').controller('LoginCtrl',
  function LoginCtrl($scope, $location, $rootScope, User) {
    $scope.submit = function() {
      var username = $scope.username;
      var password = $scope.password;

      User.query({userId: 'users'}, function(data) {
        if (data.find(function (value) {
            return value.username === username && value.password === password;
          }) != undefined) {
          $rootScope.globals = {
            currentUser: {
              username: username,
              password: password
            }
          };
          $location.path('/courses')
        }
      });
    }
  });
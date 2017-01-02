angular.module('app').controller('LoginCtrl',
  function LoginCtrl($scope, $location, $rootScope, User) {
    $scope.submit = function() {
      var username = $scope.username;
      var password = $scope.password;

      User.find(username,
        function success(data) {
          if (data.password === password) {
            $rootScope.globals = {
              currentUser: {
                username: username,
                password: password
              }
            };
            $location.path('/courses')
          } else {
            console.log('Invalid password.')
          }
        },
        function error(response) {
          console.log(response)
        }
      );
    }
  });
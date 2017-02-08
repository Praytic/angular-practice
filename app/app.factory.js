angular.module('app')
  .factory('Course', ['$resource',
    function($resource) {
      return operations($resource('courses/:id.json', {id: 'courses'}));
    }
  ])
  .factory('User', ['$resource',
    function($resource) {
      return operations($resource('login/:id.json'));
    }
  ]);

function operations(Resource) {
  return {
      get: function (success, error) {
        return Resource.query({method: 'GET', isArray: true}, success, error);
      },
      find: function (value, success, error) {
        return Resource.get({id: value}, success, error);
      }
  };
}
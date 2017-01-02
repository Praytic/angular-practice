angular.module('app')
  .factory('Course', ['$resource',
    function($resource) {
      return $resource('courses/:courseId.:format', {
        courseId: 'courses',
        format: 'json'
      }, {
        query: {method: 'GET', params: {courseId: '@id'}, isArray: true}
      });
    }
  ])
  .factory('User', ['$resource',
    function($resource) {
      return $resource('users/:userId.:format', {
        userId: 'users',
        format: 'json'
      }, {
        query: {method: 'GET', params: {userId: '@id'}, isArray: true}
      });
    }
  ]);
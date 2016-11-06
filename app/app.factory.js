angular.module('app').factory('Course', [
  '$resource', function($resource) {
    return $resource('courses/:courseId.:format', {
      courseId: 'courses',
      format: 'json'
    }, {
      update: {method: 'PUT', params: {courseId: '@course'}, isArray: true}
    });
  }
]);
(function () {
  angular.module('app').component('courseDetail', {
    templateUrl: '/component/courseDetail.html',
    binding: {
      data: '='
    }
  });
})();
angular.module('app').directive('footer', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "footer/footer.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});
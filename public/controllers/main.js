app.controller('MainCtrl', ['$scope', 'geoService', function ($scope, geoService) {


    $scope.click = function () {
        console.log('click');
        geoService.getCurrentPosition().then(function (pos) {

            console.log(pos);

        })
    }

}]);
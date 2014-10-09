app.controller('MainCtrl', ['$scope', 'geoService', function ($scope, geoService) {

    $scope.center = {};
    geoService.getCurrentPosition().then(function (pos) {

        console.log(pos);

        $scope.where = 'lat:' + pos.coords.latitude + ' lng:' + pos.coords.longitude;

        $scope.center = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            zoom: 20
        }


    });



}]);
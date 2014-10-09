app.controller('MainCtrl', ['$scope', 'geoService', function ($scope, geoService) {


    geoService.getCurrentPosition().then(function (pos) {

        console.log(pos);

        $scope.where = 'lat:' + pos.coords.latitude + ' lon:' + pos.coords.longitude;


    });

    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };

}]);
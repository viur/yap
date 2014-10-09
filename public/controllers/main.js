app.controller('MainCtrl', ['$scope', 'geoService', 'socket', function ($scope, geoService, socket) {

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

    socket.on('init', function (data) {
        $scope.name = data.name;
        $scope.users = data.users;
    });


}]);
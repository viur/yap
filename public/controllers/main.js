app.controller('MainCtrl', ['$scope', 'geoService', 'socket', '$materialSidenav', function ($scope, geoService, socket,$materialSidenav) {

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


    $scope.todos = [
        {
            face : '/img/list/60.jpeg',
            what: 'Party Hard!',
            category: 'Event',
            when: '3:08PM',
            notes: "Elm Street no.13"
        },
        {
            face : '/img/list/60.jpeg',
            what: 'City tour',
            category: 'Tourism',
            when: '3:08PM',
            notes: "City hall"
        },
        {
            face : '/img/list/60.jpeg',
            what: 'Cops!',
            category: 'Community',
            when: '3:08PM',
            notes: "Windy road"
        }

    ];

    $scope.toggleLeft = function() {
        $materialSidenav('left').toggle();
    };

}]).controller('LeftCtrl', function($scope, $timeout, $materialSidenav) {
    $scope.close = function() {
        $materialSidenav('left').close();
    };
})
;
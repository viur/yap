app.controller('MainCtrl', ['$scope', 'geoService', 'socket', '$materialSidenav', 'GoogleMapApi'.ns(), function ($scope, geoService, socket, $materialSidenav, GoogleMapApi) {


    $scope.map = {
        center: {
            latitude: 38.80,
            longitude: -9.1833
        },
        zoom: 6,
        options: {mapTypeControlOptions: {mapTypeIds: [1]}, streetViewControlOptions:{}}

    };

    $scope.center = {};
    geoService.getCurrentPosition().then(function (pos) {

        console.log(pos);

        $scope.where = 'lat:' + pos.coords.latitude + ' lng:' + pos.coords.longitude;


        $scope.map = {
            center: {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            },
            zoom: 15
        };
    });
/*
    socket.on('init', function (data) {
        $scope.name = data.name;
        $scope.users = data.users;
    }); */


    $scope.todos = [
        {
            face: '/img/list/60.jpeg',
            what: 'Party Hard!',
            category: 'Event',
            when: '3:08PM',
            notes: "Elm Street no.13"
        },
        {
            face: '/img/list/60.jpeg',
            what: 'City tour',
            category: 'Tourism',
            when: '3:08PM',
            notes: "City hall"
        },
        {
            face: '/img/list/60.jpeg',
            what: 'Cops!',
            category: 'Community',
            when: '3:08PM',
            notes: "Windy road"
        }

    ];


    $scope.toggleLeft = function () {
        $materialSidenav('left').toggle();
    };

    $scope.showMap = true;

    $scope.$on('showMap', function(event, data) {
       // console.log("event "+data)
        $scope.showMap = data;
        $scope.toggleLeft();
    });

}]).
    controller('LeftCtrl', function ($scope,$rootScope, $materialSidenav) {


        $scope.show = function(page){

            console.log(page);
            if(page == 'map'){

                $rootScope.$broadcast('showMap', true);
            }

            if(page == 'list') {
                $rootScope.$broadcast('showMap', false);
            }
        };

        $scope.close = function () {
            console.log("closing");
            $materialSidenav('left').close();
        };
    })
;
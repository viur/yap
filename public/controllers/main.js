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
            what: 'Erasmus Party!',
            category: 'Event',
            when: '3:08PM',
            notes: "Bigorna Bar",
            sponsored: true,
            recomended: false
        },
        {
            face: '/img/list/60.jpeg',
            what: 'City tour',
            category: 'Tourism',
            when: '3:08PM',
            notes: "City hall",
            sponsored: false,
            recomended: true
        },
        {
            face: '/img/list/60.jpeg',
            what: 'the Rolling Stones',
            category: 'Music',
            when: '3:08PM',
            notes: "TAGV",
            sponsored: false,
            recomended: false
        }, {
            face: '/img/list/60.jpeg',
            what: 'Académica vs Rio Ave',
            category: 'Sports',
            when: '3:08PM',
            notes: "Estádio cidade de Coimbra",
            sponsored: false,
            recomended: false
        },{
            face: '/img/list/60.jpeg',
            what: 'Amazing Street Artist',
            category: 'Music',
            when: '3:08PM',
            notes: "Rua Ferreira Borges",
            sponsored: false,
            recomended: false
        },{
            face: '/img/list/60.jpeg',
            what: '10% Discount - Pastéis de Nata',
            category: 'Promotions',
            when: '3:08PM',
            notes: "Toledo",
            sponsored: false,
            recomended: false
        },
        {
            face: '/img/list/60.jpeg',
            what: 'Operação stop',
            category: 'Community',
            when: '3:08PM',
            notes: "Praça da Republica",
            sponsored: false,
            recomended: false
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
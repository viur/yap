app.controller('MainCtrl', ['$scope', 'geoService', 'socket', '$materialSidenav', 'GoogleMapApi'.ns(), function ($scope, geoService, socket, $materialSidenav, GoogleMapApi) {


    $scope.map = {
        center: {
            latitude: 38.80,
            longitude: -9.1833
        },
        zoom: 6,
        options: {mapTypeControlOptions: {mapTypeIds: [1]}, streetViewControlOptions: {}}

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

        console.log(pos.coords.latitude + " " + pos.coords.longitude);
    });
    /*
     socket.on('init', function (data) {
     $scope.name = data.name;
     $scope.users = data.users;
     }); */

    //40.190616638075795 -8.412924131213344
    //40.19451771543175

    $scope.markers = [
        {
            id: 0,
            coords: {
                latitude: 40.1910756,
                longitude: -8.4133962
            },
            options: {
                draggable: true
            }/*,
            events: {
                dragend: function (marker, eventName, args) {
                    console.log('marker dragend');
                    var lat = marker.getPosition().lat();
                    var lon = marker.getPosition().lng();
                    console.log(lat);
                    console.log(lon);
                }}*/
        },
        {
            id: 1,
            coords: {
                latitude: 40.194189902441465,
                longitude: -8.410563787280239
            },
            options: {
                draggable: true
            }/*,
         events: {
         dragend: function (marker, eventName, args) {
         console.log('marker dragend');
         var lat = marker.getPosition().lat();
         var lon = marker.getPosition().lng();
         console.log(lat);
         console.log(lon);
         }}*/
        },
        {
            id: 2,
            coords: {
                latitude: 40.197599080082135,
                longitude: -8.40803178197018
            },
            options: {
                draggable: true
            }/*,
         events: {
         dragend: function (marker, eventName, args) {
         console.log('marker dragend');
         var lat = marker.getPosition().lat();
         var lon = marker.getPosition().lng();
         console.log(lat);
         console.log(lon);
         }}*/
        },
        {
            id: 3,
            coords: {
                latitude: 40.194189902441465,
                longitude: -8.410563787280239
            },
            options: {
                draggable: true
            }/*,
         events: {
         dragend: function (marker, eventName, args) {
         console.log('marker dragend');
         var lat = marker.getPosition().lat();
         var lon = marker.getPosition().lng();
         console.log(lat);
         console.log(lon);
         }}*/
        },
        {
            id: 4,
            coords: {
                latitude: 40.195074993878436,
                longitude: -8.416571935473598
            },
            options: {
                draggable: true
            }/*,
         events: {
         dragend: function (marker, eventName, args) {
         console.log('marker dragend');
         var lat = marker.getPosition().lat();
         var lon = marker.getPosition().lng();
         console.log(lat);
         console.log(lon);
         }}*/
        },
        {
            id: 5,
            coords: {
                latitude: 40.19048550552698,
                longitude: -8.405242284594692
            },
            options: {
                draggable: true
            }/*,
         events: {
         dragend: function (marker, eventName, args) {
         console.log('marker dragend');
         var lat = marker.getPosition().lat();
         var lon = marker.getPosition().lng();
         console.log(lat);
         console.log(lon);
         }}*/
        },
        {
            id: 6,
            coords: {
                latitude: 40.191927949619156,
                longitude: -8.41730149632565
            },
            options: {
                draggable: true
            }/*,
         events: {
         dragend: function (marker, eventName, args) {
         console.log('marker dragend');
         var lat = marker.getPosition().lat();
         var lon = marker.getPosition().lng();
         console.log(lat);
         console.log(lon);
         }}*/
        },
        {
            id: 7,
            coords: {
                latitude: 40.19746796103455,
                longitude: -8.413653692065395
            },
            options: {
                draggable: true
            }/*,
         events: {
         dragend: function (marker, eventName, args) {
         console.log('marker dragend');
         var lat = marker.getPosition().lat();
         var lon = marker.getPosition().lng();
         console.log(lat);
         console.log(lon);
         }}*/
        }

    ];


    $scope.todos = [
        {
            face: '/img/list/60.jpeg',
            what: 'Erasmus Party!',
            category: 'Event',
            when: '3:08PM',
            notes: "Bigorna Bar",
            sponsored: true,
            recomended: false,
            tickets: false
        },
        {
            face: '/img/list/60.jpeg',
            what: 'City tour',
            category: 'Tourism',
            when: '3:08PM',
            notes: "City hall",
            sponsored: false,
            recomended: true,
            tickets: false
        },
        {
            face: '/img/list/60.jpeg',
            what: 'the Rolling Stones',
            category: 'Music',
            when: '3:08PM',
            notes: "TAGV",
            sponsored: false,
            recomended: false,
            tickets: true
        },
        {
            face: '/img/list/60.jpeg',
            what: 'A.A.C x S.L.Benfica',
            category: 'Sports',
            when: '3:08PM',
            notes: "Coimbra Stadium",
            sponsored: false,
            recomended: false,
            tickets: true
        },
        {
            face: '/img/list/60.jpeg',
            what: 'Check this street Artist!',
            category: 'Music',
            when: '3:08PM',
            notes: "Ferreira Borges Street",
            sponsored: false,
            recomended: false,
            tickets: false
        },
        {
            face: '/img/list/60.jpeg',
            what: '10% Discount - Pastéis de Nata',
            category: 'Promotions',
            when: '3:08PM',
            notes: "Portage Square",
            sponsored: false,
            recomended: false,
            tickets: false
        },
        {
            face: '/img/list/60.jpeg',
            what: 'Yard Sale',
            category: 'Community',
            when: '3:08PM',
            notes: "Back Street",
            sponsored: false,
            recomended: false,
            tickets: false
        }

    ];


    $scope.toggleLeft = function () {
        $materialSidenav('left').toggle();
    };

    $scope.showMap = true;

    $scope.$on('showMap', function (event, data) {
        // console.log("event "+data)
        $scope.showMap = data;
        $scope.toggleLeft();
    });

}]).
    controller('LeftCtrl', function ($scope, $rootScope, $materialSidenav) {


        $scope.show = function (page) {

            console.log(page);
            if (page == 'map') {

                $rootScope.$broadcast('showMap', true);
            }

            if (page == 'list') {
                $rootScope.$broadcast('showMap', false);
            }
        };

        $scope.close = function () {
            console.log("closing");
            $materialSidenav('left').close();
        };
    })
;
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

    ]

}]);
/**
 * Created by ultrix on 09/10/14.
 */

app.factory('geoService', ['$window', '$q', function ($window, $q) {

    return {
        getCurrentPosition: function () {

            var deffered = $q.defer();
            $window.navigator.geolocation.getCurrentPosition(function (pos) {
                deffered.resolve(pos);
            }, function (reason) {
                console.log("geoService: " + reason);
                deffered.reject(reason);
            });

            return deffered.promise;
        }
    }

}]);

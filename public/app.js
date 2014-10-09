var app = angular.module('YapApp', ['ngRoute', 'ngAria', 'ngAnimate', 'ngMaterial', 'google-maps']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'book.html',
            controller: 'BookController',
            resolve: {
                // I will cause a 1 second delay
                delay: function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 1000);
                    return delay.promise;
                }
            }
        })
        .when('/Book/:bookId/ch/:chapterId', {
            templateUrl: 'chapter.html',
            controller: 'ChapterController'
        });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});
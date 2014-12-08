angular.module('starter', ['ionic', 'akoenig.deckgrid', 'angular-velocity', 'starter.controllers', 'starter.service', 'leaflet-directive'])



    .config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.bonds', {
                url: "/bonds",
                views: {
                    'menuContent': {
                        templateUrl: "templates/bonds.html",
                        controller: 'BondsCtrl'
                    }
                }
            })

            .state('app.map', {
                url: "/map",
                views: {
                    'menuContent': {
                        templateUrl: "templates/map.html",
                        controller: 'MapsCtrl'
                    }
                }
            })


            .state('app.enkelebond', {
                url: "/bonds/whoami/:bondId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/bond.html",
                        controller: 'SingleBondCtrl'
                    }
                }
            })

            .state('app.pictures', {
                url: "/bonds/pics/:bondId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/bondpictures.html",
                        controller: 'SingleBondPictureCtrl'
                    }
                }
            })

            .state('app.moviesbond', {
                url: "/bonds/movies/:bondId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/bondmovies.html",
                        controller: 'SingleBondMovieCtrl'
                    }
                }
            })
            .state('app.cars', {
                url: "/cars",
                views: {
                    'menuContent': {
                        templateUrl: "templates/cars.html",
                        controller: 'CarsCtrl'
                    }
                }
            })

            .state('girls', {
                url: "/girls",
                abstract: true,
                templateUrl: "templates/menuGirl.html",
                controller: 'GirlsCtrl'
            })


            .state('girls.bondgirls', {
                url: "/bondgirls",
                views: {
                    'menuContent': {
                        templateUrl: "templates/girls.html",
                        controller: 'BondgirlsCtrl'
                    }
                }
            })

            .state('girls.enkelegirl', {
                url: "/bondgirls/whoami/:girlId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/girl.html",
                        controller: 'SingleGirlCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/bonds');
    }]);


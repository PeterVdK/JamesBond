// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','akoenig.deckgrid','ngAnimate','angular-whenScrolled', 'ionic.contrib.ui.tinderCards','starter.controllers','starter.service','leaflet-directive'])
   /* .directive('noScroll', function($document) {
        console.log($document);
        return {
            restrict: 'A',
            link: function($scope, $element, $attr) {

                $document.on('touchmove', function(e) {
                    e.preventDefault();
                });
            }
        }
    })*/
   /* .directive("whenScrolled", function(){
        return{

            restrict: 'A',
            link: function(scope, elem, attrs){
console.log(elem);
                // we get a list of elements of size 1 and need the first element
                var raw = elem[0];

                // we load more elements when scrolled past a limit

                raw.bind("scroll", function(){
                    if(raw.scrollTop+raw.offsetHeight+5 >= raw.scrollHeight){
                        scope.loading = true;

                        // we can give any function which loads more elements into the list
                        scope.$apply(attrs.whenScrolled);
                    }
                });
            }
        }
    })
*/
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  })


})



        .config(function($stateProvider, $urlRouterProvider) {
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
        'menuContent' :{
          templateUrl: "templates/bonds.html",
            controller: 'BondsCtrl'
        }
      }
    })

    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html",
            controller: 'MapsCtrl'
        }
      }
    })


    .state('app.enkelebond', {
      url: "/bonds/whoami/:bondId",
      views: {
        'menuContent' :{
          templateUrl: "templates/bond.html",
          controller: 'SingleBondCtrl'
        }
      }
    })

      .state('app.pictures', {
          url: "/bonds/pics/:bondId",
          views: {
              'menuContent' :{
                  templateUrl: "templates/bondpictures.html",
                  controller: 'SingleBondPictureCtrl'
              }
          }
      })

      .state('app.moviesbond', {
          url: "/bonds/movies/:bondId",
          views: {
              'menuContent' :{
                  templateUrl: "templates/bondmovies.html",
                  controller: 'SingleBondMovieCtrl'
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
              'menuContent' :{
                  templateUrl: "templates/girls.html",
                  controller: 'BondgirlsCtrl'
              }
          }
      })

      .state('girls.enkelegirl', {
          url: "/bondgirls/whoami/:girlId",
          views: {
              'menuContent' :{
                  templateUrl: "templates/girl.html",
                  controller: 'SingleGirlCtrl'
              }
          }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/bonds');
});


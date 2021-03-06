/**
 * Created by fabrice on 4/11/2014.
 */
angular.module('starter.service', [])

    .service('bondservice',['$http', '$q', function ($http, $q) {
        this.getsinglebond = function (bondid) {
            var deferred = $q.defer();

            $http.get('https://api.themoviedb.org/3/person/' + bondid + '?api_key=587a0b5335cd9ab61abe241c25591eb9').success(function (data) {
                deferred.resolve(data);

            });

            return deferred.promise;
        }

    }])

    .service('picturebondservice',['$http', '$q', function ($http, $q) {
        this.getpicturesbond = function (bondid) {
            var deferred = $q.defer();

            $http.get('https://api.themoviedb.org/3/person/' + bondid + '?api_key=587a0b5335cd9ab61abe241c25591eb9&append_to_response=images').success(function (data) {
                deferred.resolve(data.images.profiles);
                console.log(data.images.profiles)
                console.log("kk");

            });

            return deferred.promise;
        }
    }])


    .service('moviesbondservice',['$http', '$q', function ($http, $q) {
        this.getmoviesbond = function (bondid) {
            var deferred = $q.defer();

            $http.get('https://api.themoviedb.org/3/person/' + bondid + '?api_key=587a0b5335cd9ab61abe241c25591eb9&append_to_response=movie_credits').success(function (data) {
                deferred.resolve(data.movie_credits.cast);


            });

            return deferred.promise;
        }
    }])

    .service('bondgirlsservice',['$http', '$q', function ($http, $q) {
        this.getbondgirls = function (girlid) {


            var deferred = $q.defer();
            $http.get('https://api.themoviedb.org/3/person/' + girlid + '?api_key=587a0b5335cd9ab61abe241c25591eb9').success(function (data) {
                data["profile_path"] = "http://image.tmdb.org/t/p/w500/" + data["profile_path"];
                deferred.resolve(data);

            });
            return deferred.promise;
        }

    }])

    .service('girlservice', ['$http', '$q',function ($http, $q) {
        this.getsinglegirl = function (girlid) {
            var deferred = $q.defer();

            $http.get('https://api.themoviedb.org/3/person/' + girlid + '?api_key=587a0b5335cd9ab61abe241c25591eb9').success(function (data) {
                deferred.resolve(data);

            });

            return deferred.promise;
        }

    }])
    .service('girlratingservice', ['$http', '$q',function ($http, $q) {
        this.girlrating = function () {
            var deferred = $q.defer();
            $http({method: 'GET', url: './php/girl_rates.php'}).success(function (data) {

                console.log(data);
            });
            return deferred.promise;
        }

    }])



    .service('carsservice',['$http', '$q', function ($http, $q) {
        this.getcars = function () {
            var deferred = $q.defer();

            $http.get('./data_assets/cars.json').success(function (data) {
                deferred.resolve(data);

            });

            return deferred.promise;
        }

    }]);

















angular.module('starter.controllers', [])

//OK+MIN
    .controller('maincontroller',['$scope', '$ionicModal', '$timeout', '$location', function ($scope, $ionicModal, $timeout, $location) {
        var getvolume,volumelogo;

       $timeout(function () {
            $("#behind").addClass("hidden");
        }, 2500);
        $(".jbsiteall").velocity({opacity: 0}, 0);
        $(".outer").velocity({opacity: 1}, 0);
        $timeout(function () {
            $(".outer").velocity({opacity: 0}, 400);
            $("#balk").velocity({opacity: 0}, 300);
            $(".inner02").addClass("hidden");
            $timeout(function () {
                $("#balk").addClass("hidden");
                $(".outer").addClass("hidden");
            }, 200);

            $(".jbsiteall").velocity({opacity: 1}, 100);
        }, 2600);

        console.log("kk");
        $timeout(function () {
            document.getElementById("jbaudio").load();
            document.getElementById("jbaudio").pause();
            //document.getElementById("jbaudio").play();
            $scope.volumOnorOff = function () {
                getvolume = document.getElementById("volume");

                 volumelogo = getvolume.className;

                if (volumelogo == "button button-icon icon ion-volume-high activated") {
                    //console.log("volumelogo");
                    getvolume.className = "button button-icon icon ion-volume-mute";
                    document.getElementById("jbaudio").pause();
                }
                if (volumelogo == "button button-icon icon ion-volume-mute activated") {
                    //console.log("volumelogo");
                    getvolume.className = "button button-icon icon ion-volume-high";
                    document.getElementById("jbaudio").play();
                }
            };


        }, 200);

        $(document).ready(function(){
            var switched = false;
            $(".switch").click(function(){
                if(switched){
                    $(".toggle").animate({left:'0em'});
                    switched = false;
                }
                else{
                    $(".toggle").animate({left:'2em'});
                    switched = true;
                }
            });
        });

    }])

//OK+MIN
    .controller('AppCtrl',['$scope', '$ionicModal', '$timeout', '$location', function ($scope, $ionicModal, $timeout, $location) {
        //navigatie voor rode lijn
        //search for red line
        $("#navbond").velocity({ scale: 0, opacity: 0}, 0);
        $("#navgirl").velocity({ scale: 0, opacity: 0}, 0);
        $("#navcars").velocity({ scale: 0, opacity: 0}, 0);
        $("#navmap").velocity({ scale: 0, opacity: 0}, 0);
        $("#navbond").velocity({ scale: 1, opacity: 1}, 500);
        $timeout(function () {
            $("#navgirl").velocity({ scale: 1, opacity: 1}, 500);
            $timeout(function () {
                $("#navcars").velocity({ scale: 1, opacity: 1}, 500);
                $timeout(function () {
                    $("#navmap").velocity({ scale: 1, opacity: 1}, 500);
                }, 100);
            }, 100);

        }, 100);


        function redliner(numb) {
            var i, cname,getmenu,k;
            getmenu = document.getElementById("menuitemsjbsite");
            //console.log(getmenu.childNodes[0].childElementCount );
            for (i = 1; i <= (getmenu.childNodes[0].childElementCount * 2); i += 2) {
                //1 3 5 7
                if (i != numb) {


                    //console.log(getmenu.childNodes[0].childNodes[i].className);
                    switch (getmenu.childNodes[0].childNodes[i].className) {
                        case "navItemBond redline item":
                            getmenu.childNodes[0].childNodes[i].className = "navItemBond item";
                            break;
                        case "navItemBond item redline":
                            getmenu.childNodes[0].childNodes[i].className = "navItemBond item";
                            break;

                        case "navItemCars item redline":
                            getmenu.childNodes[0].childNodes[i].className = "navItemCars item";
                            break;
                        case "navItemMap item redline":
                            getmenu.childNodes[0].childNodes[i].className = "navItemMap item";
                            break;
                    }
                }


            }
            //console.log(getmenu.childNodes[0].childNodes[numb]);
            cname = getmenu.childNodes[0].childNodes[numb].className;
            k = cname.split(' ');
            if (k.length <= 2) {
                getmenu.childNodes[0].childNodes[numb].className = cname + " redline";
            }
        }


        $scope.updateline = function () {
            $timeout(function () {
                console.log($location.path());
                switch ($location.path()) {
                    case "/app/bonds":
                        redliner(1);
                        break;
                    case "/app/map":
                        redliner(7);
                        break;
                    case "/app/cars":
                        redliner(5);
                        break;


                }

            }, 200);

        };
    }])

//OK+MIN
    .controller('BondsCtrl',['$scope', function ($scope) {

        var img, i;


        $(".bar-stable").velocity({translateY: -50}, 0);

        $(".bar-stable").velocity({translateY: 0}, 400);

        $scope.bonds = [
            {"id": 0},
            {  "id": 1 },
            {  "id": 2 },
            { "id": 3 },
            {  "id": 4 },
            { "id": 5}
        ];
        $scope.jbnimber = 0;
        $scope.bonds[0].imagesrc = new Image();
        $scope.bonds[0].imagesrc.src = 'img/SeanConnery.png';
        $scope.bonds[1].imagesrc = new Image();
        $scope.bonds[1].imagesrc.src = 'img/GeorgeLazenby.png';
        $scope.bonds[2].imagesrc = new Image();
        $scope.bonds[2].imagesrc.src = 'img/TimothyDalton.png';
        $scope.bonds[3].imagesrc = new Image();
        $scope.bonds[3].imagesrc.src = 'img/RogerMoore.png';
        $scope.bonds[4].imagesrc = new Image();
        $scope.bonds[4].imagesrc.src = 'img/PierceBrosnan.png';
        $scope.bonds[5].imagesrc = new Image();
        $scope.bonds[5].imagesrc.src = 'img/DanielCraig.png';


        $scope.nextImage = function (element) {
            img = document.getElementById(element);

            for ( i = 0; i < $scope.bonds.length; i++) {

                if ($scope.bonds[i].imagesrc.src == img.src) {


                    $scope.jbnimber = i + 1;
                    //console.log($scope.jbnimber);
                   // console.log($scope.bonds);
                    if (i === $scope.bonds.length - 1) {
                        document.getElementById(element).className = "bondImage fade";
                        setTimeout(function () {
                            document.getElementById(element).src = $scope.bonds[0].imagesrc.src;
                        }, 200);
                        setTimeout(function () {
                            if (document.getElementById(element).className == "bondImage fade") {
                                document.getElementById(element).className = "bondImage fade-in-not-out";
                            }
                            else {

                                document.getElementById(element).className = "bondImage fade-in-not-out-in";

                            }
                            $scope.changeName(i);
                        }, 350);
                       // console.log(i);
                        break;
                    }


                   // console.log(document.getElementById(element));
                    document.getElementById(element).className = "bondImage fade";
                    setTimeout(function () {
                        document.getElementById(element).src = $scope.bonds[i + 1].imagesrc.src;
                    }, 200);
                    setTimeout(function () {
                        if (document.getElementById(element).className == "bondImage fade") {
                            document.getElementById(element).className = "bondImage fade-in-not-out";
                        }
                        else {

                            document.getElementById(element).className = "bondImage fade-in-not-out-in";

                        }
                        $scope.changeName(i);
                    }, 350);


                    break;
                }
            }
        }

        $scope.previousImage = function (element) {
            img = document.getElementById(element);

            for (var i = 0; i < $scope.bonds.length; i++) {
                if ($scope.bonds[i].imagesrc.src == img.src) {
                   // console.log($scope.jbnimber);
                    $scope.jbnimber = i - 1;
                    if ($scope.jbnimber == -1) {
                        $scope.jbnimber = 5;
                    }
                  //  console.log($scope.jbnimber);
                    if (i === 0) {
                     //   console.log("mm2");
                        document.getElementById(element).className = "bondImage fade";
                        setTimeout(function () {
                            document.getElementById(element).src = $scope.bonds[5].imagesrc.src;
                        }, 200);
                        setTimeout(function () {
                            if (document.getElementById(element).className == "bondImage fade") {
                                document.getElementById(element).className = "bondImage fade-in-not-out";
                            }
                            else {
                          //      console.log("mm3");
                                document.getElementById(element).className = "bondImage fade-in-not-out-in";

                            }
                            $scope.changeName($scope.bonds.length - 2);
                        }, 350);

                        break;
                    }

                    document.getElementById(element).className = "bondImage fade";

                    setTimeout(function () {
                        document.getElementById(element).src = $scope.bonds[i - 1].imagesrc.src;
                    }, 200);

                    setTimeout(function () {
                        if (document.getElementById(element).className == "bondImage fade") {
                            document.getElementById(element).className = "bondImage fade-in-not-out";
                        }
                        else {

                            document.getElementById(element).className = "bondImage fade-in-not-out-in";

                        }
                        $scope.changeName(i - 2);
                    }, 350);

                    //alert(i);
                    break;
                }
            }
        }

        $scope.changeName = function (i) {
            switch (i + 1) {
                case 1:
                    document.getElementById('firstname').innerHTML = "George";
                    document.getElementById('lastname').innerHTML = "Lazenby";
                    break;
                case 2:
                    document.getElementById('firstname').innerHTML = "Timothy";
                    document.getElementById('lastname').innerHTML = "Dalton";
                    break;
                case 3:
                    document.getElementById('firstname').innerHTML = "Roger";
                    document.getElementById('lastname').innerHTML = "Moore";
                    break;
                case 4:
                    document.getElementById('firstname').innerHTML = "Pierce";
                    document.getElementById('lastname').innerHTML = "Brosnan";
                    break;
                case 5:
                    document.getElementById('firstname').innerHTML = "Daniel";
                    document.getElementById('lastname').innerHTML = "Craig";
                    break;
                default:
                    document.getElementById('firstname').innerHTML = "Sean";
                    document.getElementById('lastname').innerHTML = "Connery";

                    break;
            }
        }
    }])

    //OK+MIN
    .controller('SingleBondCtrl',['$scope', '$http', 'bondservice', '$stateParams', function ($scope, $http, bondservice, $stateParams) {

        $(".card").velocity({translateY: -150}, 0);
        $(".card").velocity({translateY: 0}, 400);

        $scope.bonds = [];
        var retrievedObject1, retrievedObject2, retrievedObject3, retrievedObject4, retrievedObject5, retrievedObject6;

        $scope.ide = $stateParams.bondId;

        switch ($scope.ide) {
            case "0":

                GetTheBondbyId(738, retrievedObject1, 'bond1Storage');

                //undefined
                break;
            case "1":
                GetTheBondbyId(10167, retrievedObject2, 'bond2Storage');
                break;
            case "2":
                GetTheBondbyId(10669, retrievedObject3, 'bond3Storage');

                break;
            case "3":
                GetTheBondbyId(10222, retrievedObject4, 'bond4Storage');

                break;
            case "4":
                GetTheBondbyId(517, retrievedObject5, 'bond5Storage');

                break;
            case "5":
                GetTheBondbyId(8784, retrievedObject6, 'bond6Storage');

                break;
            case "0":
                GetTheBondbyId(738, retrievedObject1, 'bond1Storage');

                break;
        }


        function GetTheBondbyId(bondid, objectretriever, storager) {
            objectretriever = localStorage.getItem(storager);
            if (typeof objectretriever === 'undefined' || objectretriever === null) {

                bondservice.getsinglebond(bondid).then(function (data) {

                    $scope.bonds = data;

                    $scope.bonds.biografie = $scope.bonds['biography'];
                    $scope.bonds.profileimage = $scope.bonds['profile_path'];
                    $scope.bonds.birthday = $scope.bonds['birthday'];
                    $scope.bonds.name = $scope.bonds['name'];
                    $scope.bonds.imbdid = $scope.bonds['imdb_id'];
                   // console.log($scope.bonds.imbdid);
                   // console.log($scope.bonds.profileimage);
                  //  console.log("kkkk" + $scope.networkIcon);
                    $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];

                    storage = localStorage.setItem(storager, JSON.stringify($scope.bonds));
                });
            }
            else {

                $scope.bonds = JSON.parse(objectretriever);
               // console.log("kkk");
               // console.log('retrievedObject: ', JSON.parse(objectretriever));
            }


        }

        $scope.linkfunction = function () {
           // console.log("loplop");
        };


    }])
//OK+MIN
    .controller('SingleBondPictureCtrl',['$scope', '$http', 'picturebondservice', '$stateParams', '$timeout', function ($scope, $http, picturebondservice, $stateParams, $timeout) {
        $scope.tt = true;
        $scope.kk = false;
        $scope.ide = $stateParams.bondId;
        $scope.loading = true;
        var wallposters, i, time, q, teller;

        switch ($scope.ide) {
            case "0":

                GetTheBondbyId(738);

                //undefined
                break;
            case "1":
                GetTheBondbyId(10167);
                break;
            case "2":
                GetTheBondbyId(10669);

                break;
            case "3":
                GetTheBondbyId(10222);

                break;
            case "4":
                GetTheBondbyId(517);

                break;
            case "5":
                GetTheBondbyId(8784);

                break;
            case "0":
                GetTheBondbyId(738);

                break;
        }

        console.log("kk" + $scope.pictures);
        function GetTheBondbyId(bondid) {

            picturebondservice.getpicturesbond(bondid).then(function (data) {

             //   console.log("ss");

                $scope.pictures = data;
               // console.log($scope.pictures);
                $timeout(function () {
                    $scope.loading = false;
                }, 1000);
            });
        }

        //eerst deckgrid ophalen
        //daarvan de kolomen en van elk van die kolommen de posters

        teller = 1;

        $timeout(function () {
            wallposters = document.getElementsByClassName("deckgrid")[0];
            time = 500;

            for (q = 0; q < $scope.pictures.length; q++) {
                //console.log($scope.pictures[q]["id"]);
                teller = $scope.pictures[q]["id"];

                $(".cards" + teller).velocity({scale: 0}, 0);
                $(".cards" + teller).removeClass("hidden").addClass("show");

                $(".cards" + teller).velocity({scale: 1.1}, time);

                time += 200;
                $(".cards" + teller).velocity({scale: 1}, time - 300);
                time += 100;

            }
            $scope.kk = true;


        }, 1000);

    }])

    //OK+MIN
    .controller('SingleBondMovieCtrl',['$scope', '$http', '$q', 'moviesbondservice', '$stateParams', '$timeout', function ($scope, $http, $q, moviesbondservice, $stateParams, $timeout) {
       $scope.showwer=false;

        $timeout(function(){
            $scope.showwer=true;
        },500);

        var i, wallposters, time, q, teller, arr;
        $scope.tt = true;
        $scope.kk = false;
        $scope.bondfilm = false;
        $scope.titlexx = "";
        //........................................................
        // the array which represents the list
        $scope.items = ["1. Scroll the list to load more"];
        $scope.loading = true;

        // this function fetches a random text and adds it to array
        $scope.more = function () {
            $http({
                method: "GET",
                url: "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
            }).success(function (data, status, header, config) {

                // returned data contains an array of 2 sentences
                for (line in data) {
                    newItem = ($scope.items.length + 1) + ". " + data[line];
                    $scope.items.push(newItem);
                }
                $timeout(function () {

                    $scope.loading = false;
                }, 1000);
            });
        };

        // we call the function twice to populate the list
        $scope.more();

        //........................................................

        $scope.ide = $stateParams.bondId;
        switch ($scope.ide) {
            case "0":

                GetTheBondbyId(738);

                //undefined
                break;
            case "1":
                GetTheBondbyId(10167);
                break;
            case "2":
                GetTheBondbyId(10669);

                break;
            case "3":
                GetTheBondbyId(10222);

                break;
            case "4":
                GetTheBondbyId(517);

                break;
            case "5":
                GetTheBondbyId(8784);

                break;
            case "0":
                GetTheBondbyId(738);

                break;
        }

        function GetTheBondbyId(bondid) {

            $scope.movies = [];


            moviesbondservice.getmoviesbond(bondid).then(function (data) {

                // http://www.themoviedb.org/movie/1844-entrapment
                angular.forEach(data, function (key) {

                    if (key['poster_path'] == null) {
                        // console.log(key['poster_path']);
                        //console.log($scope.movies);
                    }
                    else {


                        $scope.movies.push(key);

                    }

                });



            });

        }

        //eerst deckgrid ophalen
        //daarvan de kolomen en van elk van die kolommen de posters

        teller = 1;

        $timeout(function () {
            wallposters = document.getElementsByClassName("deckgrid")[0];
            time = 500;

            for (q = 0; q < $scope.movies.length; q++) {
                //console.log($scope.movies[q]["id"]);
                teller = $scope.movies[q]["id"];
                $(".cards" + teller).velocity({scale: 0}, 0);
                $(".cards" + teller).velocity({opacity: 0}, 0);
                $(".cards" + teller).removeClass("hidden").addClass("show");
                $(".cards" + teller).velocity({scale: 1}, time);
                $(".cards" + teller).velocity({opacity: 1}, time);
                //for the hover
                $('.cards' + teller).mouseenter(function () {
                    $(this).addClass('hover');
                    $('.bondfoto').velocity({boxShadowBlur: 15}, {
                        duration: 50
                    });
                    //console.log(this.className + "  " +teller);
                    arr = this.className.split(" ");

                    arr = arr[1].split("s");

                    $(".hovere" + arr[1]).removeClass("hidden").addClass("show");
                    $('.hovere' + arr[1]).velocity('transition.perspectiveDownIn', {duration: 500});

                }).mouseleave(function () {

                    $('.hovere' + arr[1]).velocity("stop");
                    $('.hovere' + arr[1]).velocity('reverse', { duration: 2000 });
                    $(this).removeClass('hover');
                });


                time += 200;
            }
            $scope.kk = true;


        }, 1000);

    }])

//OK+MIN
    .controller('GirlsCtrl', ['$scope', '$stateParams', '$timeout',  function ($scope, $stateParams, $timeout) {
        //menu van de girls
        $("#girlslist").velocity({translateY: 900}, 0);

        $("#girlslist").velocity({translateY: 0}, 400);
        /* $("#menuitemsjbsite1") .velocity("fadeIn", { duration: 1000 })*/


    }])

//OK+MIN
    .controller('SingleGirlCtrl',['$scope', '$stateParams', 'girlservice', function ($scope, $stateParams, girlservice) {
        $(".card").velocity({translateY: -150}, 0);


        $(".card").velocity({translateY: 0}, 400);

        console.log($stateParams);
        //  [9871,9896,9907,9919,10070,10168,10190,10223,10341,10458,10475,10500,10342,10660,10670,10679,10695,1620,9205,4587,10912,18182,1030261];

var girl1, girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10,girl11,girl12,girl13,girl14,girl15,girl16,girl17,girl18,girl19,girl20,girl21,girl22,girl23,girl24;
        girl1 = document.getElementById("navGirl1");
        girl2 = document.getElementById("navGirl2");
        girl3 = document.getElementById("navGirl3");
        girl4 = document.getElementById("navGirl4");
         girl5 = document.getElementById("navGirl5");
        girl6 = document.getElementById("navGirl6");
        girl7 = document.getElementById("navGirl7");
        girl8 = document.getElementById("navGirl8");
         girl9 = document.getElementById("navGirl9");
         girl10 = document.getElementById("navGirl10");
         girl11 = document.getElementById("navGirl11");
         girl12 = document.getElementById("navGirl12");
         girl13 = document.getElementById("navGirl13");
         girl14 = document.getElementById("navGirl14");
         girl15 = document.getElementById("navGirl15");
         girl16 = document.getElementById("navGirl16");
         girl17 = document.getElementById("navGirl17");
         girl18 = document.getElementById("navGirl18");
         girl19 = document.getElementById("navGirl19");
         girl20 = document.getElementById("navGirl20");
         girl21 = document.getElementById("navGirl21");
         girl22 = document.getElementById("navGirl22");
         girl23 = document.getElementById("navGirl23");
         girl24 = document.getElementById("navGirl24");


        function RemoveUnderline() {
            girl1.style.borderBottom = "2px solid transparent";
            girl2.style.borderBottom = "2px solid transparent";
            girl3.style.borderBottom = "2px solid transparent";
            girl4.style.borderBottom = "2px solid transparent";
            girl5.style.borderBottom = "2px solid transparent";
            girl6.style.borderBottom = "2px solid transparent";
            girl7.style.borderBottom = "2px solid transparent";
            girl8.style.borderBottom = "2px solid transparent";
            girl9.style.borderBottom = "2px solid transparent";
            girl10.style.borderBottom = "2px solid transparent";
            girl11.style.borderBottom = "2px solid transparent";
            girl12.style.borderBottom = "2px solid transparent";
            girl13.style.borderBottom = "2px solid transparent";
            girl14.style.borderBottom = "2px solid transparent";
            girl15.style.borderBottom = "2px solid transparent";
            girl16.style.borderBottom = "2px solid transparent";
            girl17.style.borderBottom = "2px solid transparent";
            girl18.style.borderBottom = "2px solid transparent";
            girl19.style.borderBottom = "2px solid transparent";
            girl20.style.borderBottom = "2px solid transparent";
            girl21.style.borderBottom = "2px solid transparent";
            girl22.style.borderBottom = "2px solid transparent";
            girl23.style.borderBottom = "2px solid transparent";
            girl24.style.borderBottom = "2px solid transparent";
        }

        switch ($stateParams.girlId) {
            case "1":
                GetTheGirlbyId(9871);
                RemoveUnderline();
                girl1.style.borderBottom = "2px solid #b10a0a";
                //undefined
                break;
            case "2":
                GetTheGirlbyId(9896);
                RemoveUnderline();
                girl2.style.borderBottom = "2px solid #b10a0a";
                break;
            case "3":
                GetTheGirlbyId(9907);
                RemoveUnderline();
                girl3.style.borderBottom = "2px solid #b10a0a";
                break;
            case "4":
                GetTheGirlbyId(9919);
                RemoveUnderline();
                girl4.style.borderBottom = "2px solid #b10a0a";
                break;
            case "5":
                GetTheGirlbyId(10070);
                RemoveUnderline();
                girl5.style.borderBottom = "2px solid #b10a0a";
                break;
            case "6":
                GetTheGirlbyId(10168);
                RemoveUnderline();
                girl6.style.borderBottom = "2px solid #b10a0a";
                break;
            case "7":
                GetTheGirlbyId(10190);
                // 10223,10341,10458,10475,10500,10342,10660,10670,10679,10695,1620,9205,4587,10912,18182,1030261];
                RemoveUnderline();
                girl7.style.borderBottom = "2px solid #b10a0a";
                break;
            case "8":
                GetTheGirlbyId(10223);
                RemoveUnderline();
                girl8.style.borderBottom = "2px solid #b10a0a";
                //undefined
                break;
            case "9":
                GetTheGirlbyId(10341);
                RemoveUnderline();
                girl9.style.borderBottom = "2px solid #b10a0a";
                break;
            case "10":
                GetTheGirlbyId(10458);
                RemoveUnderline();
                girl10.style.borderBottom = "2px solid #b10a0a";
                break;
            case "11":
                GetTheGirlbyId(10475);
                RemoveUnderline();
                girl11.style.borderBottom = "2px solid #b10a0a";
                break;
            case "12":
                GetTheGirlbyId(10500);
                RemoveUnderline();
                girl12.style.borderBottom = "2px solid #b10a0a";
                break;
            case "13":
                GetTheGirlbyId(10342);
                RemoveUnderline();
                girl13.style.borderBottom = "2px solid #b10a0a";
                break;
            case "14":
                GetTheGirlbyId(10660);
                RemoveUnderline();
                girl14.style.borderBottom = "2px solid #b10a0a";
                break;
            case "15":
                // 10670,10679,10695,1620,9205,4587,10912,18182,1030261];
                GetTheGirlbyId(10670);
                RemoveUnderline();
                girl15.style.borderBottom = "2px solid #b10a0a";
                //undefined
                break;
            case "16":
                GetTheGirlbyId(10679);
                RemoveUnderline();
                girl16.style.borderBottom = "2px solid #b10a0a";
                break;
            case "17":
                GetTheGirlbyId(10695);
                RemoveUnderline();
                girl17.style.borderBottom = "2px solid #b10a0a";
                break;
            case "18":
                GetTheGirlbyId(1620);
                RemoveUnderline();
                girl18.style.borderBottom = "2px solid #b10a0a";
                break;
            case "19":
                GetTheGirlbyId(9205);
                RemoveUnderline();
                girl19.style.borderBottom = "2px solid #b10a0a";
                break;
            case "20":
                GetTheGirlbyId(4587);
                RemoveUnderline();
                girl20.style.borderBottom = "2px solid #b10a0a";
                break;
            case "21":
                GetTheGirlbyId(10912);
                RemoveUnderline();
                girl21.style.borderBottom = "2px solid #b10a0a";
                break;
            case "22":
                GetTheGirlbyId(18182);
                RemoveUnderline();
                girl22.style.borderBottom = "2px solid #b10a0a";
                break;
            case "23":
                GetTheGirlbyId(1030261);
                RemoveUnderline();
                girl23.style.borderBottom = "2px solid #b10a0a";
                break;
            case "24":
                GetTheGirlbyId(28782);
                RemoveUnderline();
                girl24.style.borderBottom = "2px solid #b10a0a";
                break;
        }

        $scope.allgirlinfo = [];

        function GetTheGirlbyId(girlid) {


            girlservice.getsinglegirl(girlid).then(function (data) {

               // console.log(data);

                $scope.checkerBIO=false;
                $scope.allgirlinfo = data;
                $scope.allgirlinfo.biografie = $scope.allgirlinfo['biography'];
                $scope.allgirlinfo.profileimage = $scope.allgirlinfo['profile_path'];
                $scope.allgirlinfo.birthday = $scope.allgirlinfo['birthday'];
                $scope.allgirlinfo.name = $scope.allgirlinfo['name'];
                $scope.allgirlinfo.imdbid = $scope.allgirlinfo['imdb_id'];

                $scope.allgirlinfo.place_of_birth = $scope.allgirlinfo['place_of_birth'];
                if($scope.allgirlinfo.biografie===" ")
                {
                    $scope.checkerBIO=true;
                  //  console.log("dqsdazdazdazeazzz");
                }

            });
        }
    }])

//OK+MIN



    .controller('BondgirlsCtrl', ["$scope", "$http","$q","$stateParams","bondgirlsservice","$timeout","girlratingservice",function($scope, $http,$q,$stateParams,bondgirlsservice,$timeout,girlratingservice) {
        $scope.showwer=false;

        $timeout(function(){
            $scope.showwer=true;
        },500);
        var d, n,i,Girl,random,getgirl,getgirlsss, getfirstgirl, thegirlname ,leeftijd,animationEndEvent,
            d = new Date();
        n = d.getFullYear();
        $scope.thegirls=new Array(24);
        $scope.thegirls=[9871,9896,9907,9919,10070,10168,10190,10223,10341,10458,10475,10500,10342,10660,10670,10679,10695,1620,9205,4587,10912,18182,1030261,28782];

        $scope.loading=true;
        $scope.cardTypes=[];

        for (i = 0; i < $scope.thegirls.length; i++) {
            bondgirlsservice.getbondgirls($scope.thegirls[i]).then(function (data) {
                $scope.cardTypes.push(data);
                if ($scope.cardTypes.length == 24) {
                    girls();
                    $timeout(function () {
                        $scope.loading = false;
                    }, 1000);
                }
                else {
                    $scope.loading = true;
                }


            });


        }

        function girls() {
            cardTypes = $scope.cardTypes;
            console.log(cardTypes);

            $scope.cards = Array.prototype.slice.call(cardTypes, 0);

            animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

            Girl = {
                wrap: $('#girls'),
                girls: $scope.cards,
                add: function () {

                    random = this.girls[Math.floor(Math.random() * this.girls.length)];
                    leeftijd = n - random.birthday.substring(0, 4);
                    this.wrap.append("<div class='girlCard'><img alt='" + random.name + "' src='" + random.profile_path + "' /><span>" + random.name + " , " + leeftijd + "</span></div>");
                }
            }

            var App = {
                yesButton: $('.button.yes .trigger'),
                noButton: $('.button.no .trigger'),
                blocked: false,
                like: function (liked) {
                    var animate = liked ? 'animateYes' : 'animateNo';
                    var self = this;
                    if (!this.blocked) {
                        this.blocked = true;
                        getgirl = document.getElementsByClassName("girlCard")[0];
                        $('.girlCard').eq(0).addClass(animate).one(animationEndEvent, function () {
                            //console.log("kkkk");
                            $(this).remove();

                            Girl.add();
                            self.blocked = false;
                        });
                    }
                }
            };
            $scope.naam = [];



            $scope.yesfunc = function () {
                App.like(true);
                getgirlsss = document.getElementById("girls");
                getfirstgirl = getgirlsss.firstChild;

                thegirlname = getfirstgirl.children[1].innerHTML;
                getfirstgirl = getgirlsss.firstChild;
                thegirlname = getfirstgirl.children[1].innerHTML;
                girlratingservice.girlrating().then(function (data) {

                    for (var i = 0; i < data.length; i++) {
                        //console.log(thegirlname + "   " + data[i].Naam);
                       // console.log("no");
                        if (data[i].Naam == thegirlname.split(" , ")[0]) {
                            var nieuwe_punten = parseFloat(data[i].Punten) + 1;
                            data[i].Punten = String(nieuwe_punten);
                            changeThemarks(data[i].Punten, i);


                            return console.log("ja" + data[i].Punten);
                        }
                    }
                });

                function changeThemarks(nieuwe_punten, id) {



                   // console.log("hier is het id" + id);
                }

                //console.log(thegirlname.split(" , ")[0]);

                pushtoarray(thegirlname.split(" , ")[0]);

                //console.log(Girl);
                console.log("yesbutton");
            };
            $scope.nofunc = function () {
                App.like(false);

                console.log("nobutton");
            };

            function pushtoarray(denaamvandegirl) {
                $scope.naam.push(denaamvandegirl);
               // console.log($scope.naam);
            }

            $(document).ready(function () {
                Girl.add();
                Girl.add();
                Girl.add();
                Girl.add();
            })

        }
    }])
//OK

    .controller('MapsCtrl',['$scope','$stateParams', '$ionicLoading', '$compile', 'leafletEvents', '$timeout' ,function ($scope, $stateParams, $ionicLoading, $compile, leafletEvents, $timeout) {
        $scope.showwer=false;

        $timeout(function(){
            $scope.showwer=true;
        },500);

        $scope.checker=false;

       // thegpsconsole

        $(".mapList").velocity({translateX: 300}, 0);
        $scope.menugps=function(){
            if(!$scope.checker)
            {
            $scope.checker=true;
            $(".mapList").velocity({translateX: 0}, 400);
            $(".buttonclicker").velocity({translateX: -300}, 400);
            }
            else
            {
                $timeout(function(){
                    $scope.checker=false;
                },400);

                $(".buttonclicker").velocity({translateX: 0}, 400);
                $(".mapList").velocity({translateX: 300}, 400);

            }
        };


        $('.flip').click(function() {
            $(this).find('span').toggleClass('active');
        });
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();

            $().tooltip({
                template: '<div class="tooltip infoTooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
            })
        })
        //console.log("kk");
        var map,MeIcon,hqIcon,greenIcon,redIcon,yellowIcon,purpleIcon,orangeIcon;
        var loadingMap = document.getElementById("loadingMap");

        $scope.loading = true;

        map = L.map('map');
        map.setView([0, 50], 2);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);

        hqIcon = L.icon({
            iconUrl: 'img/HQIcon.png',
            iconRetinaUrl: 'img/HQIcon.png',
            iconAnchor: [5, 20],
            popupAnchor: [0, -30],
            iconSize: [25, 25]
        });

        hq = L.marker([51.5073510, -0.1277580], {icon: hqIcon}).addTo(map).bindPopup('<b>UK (London)</b> <ul><li>HQ James Bond</li></ul>', {closeButton: false});

        hq.on('mouseover', function (e) {
            hq.openPopup();
        });
        hq.on('mouseout', function (e) {
            hq.closePopup();
        });

        MeIcon = L.icon({
            iconUrl: 'img/myLocation.png',
            iconRetinaUrl: 'img/myLocation.png',
            iconAnchor: [5, 20],
            popupAnchor: [0, -30],
            iconSize: [25, 25]
        });

        $scope.getLocation = function(){
            if (navigator.geolocation) {
                if($(window).width() > 1380){
                    loadingMap.style.display = "block";
                }
                else
                    loadingMap.style.display = "none";

                setTimeout(function () {
                    loadingMap.style.display = "none";
                    document.getElementById("off").style.pointerEvents = "auto";
                    document.getElementById("active").style.pointerEvents = "none";
                }, 7000);

                document.getElementById("off").style.pointerEvents = "none";
                document.getElementById("active").style.pointerEvents = "none";

                navigator.geolocation.getCurrentPosition(showPosition);

            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            myPos = L.marker([position.coords.latitude, position.coords.longitude], {icon: MeIcon}).addTo(map).bindPopup('<b>My location</b>', {closeButton: false});
            map.setView([position.coords.latitude, position.coords.longitude+2], 6);

            loadingMap.style.display = "none";
            document.getElementById("off").style.pointerEvents = "auto";

            myPos.on('mouseover', function (e) {
                myPos.openPopup();
            });
            myPos.on('mouseout', function (e) {
                myPos.closePopup();
            });
        }

        $scope.removeLocation = function(){
            map.removeLayer(myPos);
            map.setView([0, 50], 2);

        }

        //Markers Sean Connery
        $scope.markerSC = function (sc) {
            map.setView([0, 50], 2);
            // console.log(sc);
            if (sc) {
                jam = L.marker([18.1095810, -77.2975080], {icon: greenIcon}).addTo(map).bindPopup('<b>Jamaica</b> <ul><li>Dr. No</li></ul>', {closeButton: false}); //Jamaica
                srv = L.marker([44.0165210, 21.0058590], {icon: greenIcon}).addTo(map).bindPopup('<b>Serbia</b> <ul><li>From Russia With Love</li></ul>', {closeButton: false}); //Servië
                kro = L.marker([45.1000000, 15.2000000], {icon: greenIcon}).addTo(map).bindPopup('<b>Croatia</b> <ul><li>From Russia With Love</li></ul>', {closeButton: false}); //Kroatië
                trkSC = L.marker([38.9637450, 35.2433220], {icon: greenIcon}).addTo(map).bindPopup('<b>Turkey</b> <ul><li>From Russia With Love</li></ul>', {closeButton: false}); //Turkije
                usaSC = L.marker([37.0902400, -95.7128910], {icon: greenIcon}).addTo(map).bindPopup('<b>USA</b> <ul><li>Goldfinger</li><li>Diamonds Are Forever</li></ul>', {closeButton: false}); //USA
                zwiSC = L.marker([46.8181880, 8.2275120], {icon: greenIcon}).addTo(map).bindPopup('<b>Switzerland</b> <ul><li>Goldfinger</li></ul>', {closeButton: false}); //Zwitserland
                bahSC = L.marker([25.0342800, -77.3962800], {icon: greenIcon}).addTo(map).bindPopup('<b>Bahamas</b> <ul><li>Thunderball</li></ul>', {closeButton: false}); // Bahamas
                fraSC = L.marker([46.2276380, 2.2137490], {icon: greenIcon}).addTo(map).bindPopup('<b>France</b> <ul><li>Thunderball</li><li>Diamonds Are Forever</li></ul>', {closeButton: false}); //Frankrijk
                jap = L.marker([36.2048240, 138.2529240], {icon: greenIcon}).addTo(map).bindPopup('<b>Japan</b> <ul><li>You Only Live Twice</li></ul>', {closeButton: false}); // Japan
                mexSC = L.marker([23.6345010, -102.5527840], {icon: greenIcon}).addTo(map).bindPopup('<b>Mexico</b> <ul><li>Diamonds Are Forever</li></ul>', {closeButton: false}); // Mexico
                saf = L.marker([-30.5594820, 22.9375060], {icon: greenIcon}).addTo(map).bindPopup('<b>South Africa</b> <ul><li>Diamonds Are Forever</li></ul>', {closeButton: false}); // Zuid-Afrika
                egySC = L.marker([26.8205530, 30.8024980], {icon: greenIcon}).addTo(map).bindPopup('<b>Egypt</b> <ul><li>Diamonds Are Forever</li></ul>', {closeButton: false}); // Egypte
                net = L.marker([52.1326330, 5.2912660], {icon: greenIcon}).addTo(map).bindPopup('<b>Netherlands</b> <ul><li>Diamonds Are Forever</li></ul>', {closeButton: false}); // Nederland

            }
            else {
                map.removeLayer(jam);
                map.removeLayer(srv);
                map.removeLayer(kro);
                map.removeLayer(trkSC);
                map.removeLayer(usaSC);
                map.removeLayer(zwiSC);
                map.removeLayer(bahSC);
                map.removeLayer(fraSC);
                map.removeLayer(jap);
                map.removeLayer(mexSC);
                map.removeLayer(saf);
                map.removeLayer(egySC);
                map.removeLayer(net);
            }

            jam.on('mouseover', function (e) {
                jam.openPopup();
            });
            jam.on('mouseout', function (e) {
                jam.closePopup();
            });
            srv.on('mouseover', function (e) {
                srv.openPopup();
            });
            srv.on('mouseout', function (e) {
                srv.closePopup();
            });
            kro.on('mouseover', function (e) {
                kro.openPopup();
            });
            kro.on('mouseout', function (e) {
                kro.closePopup();
            });
            trkSC.on('mouseover', function (e) {
                trkSC.openPopup();
            });
            trkSC.on('mouseout', function (e) {
                trkSC.closePopup();
            });
            usaSC.on('mouseover', function (e) {
                usaSC.openPopup();
            });
            usaSC.on('mouseout', function (e) {
                usaSC.closePopup();
            });
            zwiSC.on('mouseover', function (e) {
                zwiSC.openPopup();
            });
            zwiSC.on('mouseout', function (e) {
                zwiSC.closePopup();
            });
            bahSC.on('mouseover', function (e) {
                bahSC.openPopup();
            });
            bahSC.on('mouseout', function (e) {
                bahSC.closePopup();
            });
            fraSC.on('mouseover', function (e) {
                fraSC.openPopup();
            });
            fraSC.on('mouseout', function (e) {
                trk.closePopup();
            });
            jap.on('mouseover', function (e) {
                jap.openPopup();
            });
            jap.on('mouseout', function (e) {
                jap.closePopup();
            });
            mexSC.on('mouseover', function (e) {
                mexSC.openPopup();
            });
            mexSC.on('mouseout', function (e) {
                mexSC.closePopup();
            });
            saf.on('mouseover', function (e) {
                saf.openPopup();
            });
            saf.on('mouseout', function (e) {
                saf.closePopup();
            });
            egySC.on('mouseover', function (e) {
                egySC.openPopup();
            });
            egySC.on('mouseout', function (e) {
                egySC.closePopup();
            });
            net.on('mouseover', function (e) {
                net.openPopup();
            });
            net.on('mouseout', function (e) {
                net.closePopup();
            });
        };

        greenIcon = L.icon({
            iconUrl: 'img/GreenIcon.png',
            iconRetinaUrl: 'img/GreenIcon.png',
            iconAnchor: [5, 40],
            popupAnchor: [0, -30],
            iconSize: [25, 41]
        });

        //Markers George Lazenby
        $scope.markerGL = function (gl) {
            map.setView([0, 50], 2);
            if (gl) {
                por = L.marker([39.3998720, -8.2244540]).addTo(map).bindPopup('<strong>Portugal</strong> <ul><li>On Her Majestys Service</li></ul>'); //Portugal
                zwiGL = L.marker([46.8181880, 9.2275120]).addTo(map).bindPopup('<strong>Switzerland</strong> <ul><li>On Her Majestys Service</li></ul>'); //Zwitserland
            }
            else {
                map.removeLayer(por);
                map.removeLayer(zwiGL);
            }

            por.on('mouseover', function (e) {
                por.openPopup();
            });
            por.on('mouseout', function (e) {
                por.closePopup();
            });
            zwiGL.on('mouseover', function (e) {
                zwiGL.openPopup();
            });
            zwiGL.on('mouseout', function (e) {
                zwiGL.closePopup();
            });
        };

        //Markers Roger Moore
        $scope.markerRM = function (rm) {
           // console.log(rm);
            if (rm) {
                usaRM = L.marker([37.0902400, -100.7128910], {icon: redIcon}).addTo(map).bindPopup('<b>USA</b> <ul><li>Live And Let Die</li><li>Moonraker</li></ul>', {closeButton: false}); //USA
                chnRM = L.marker([35.8616600, 104.1953970], {icon: redIcon}).addTo(map).bindPopup('<b>China</b> <ul><li>The Man With The Golden Gun</li></ul>', {closeButton: false}); //China
                thaRM = L.marker([15.8700320, 100.9925410], {icon: redIcon}).addTo(map).bindPopup('<b>Thailand</b> <ul><li>The Man With The Golden Gun</li></ul>', {closeButton: false}); //Thailand
                egyRM = L.marker([26.8205530, 28.8024980], {icon: redIcon}).addTo(map).bindPopup('<b>Egypt</b> <ul><li>The Spy Who Loved Me</li></ul>', {closeButton: false}); //Egypte
                itaRM = L.marker([41.8719400, 12.5673800], {icon: redIcon}).addTo(map).bindPopup('<b>Italy</b> <ul><li>The Spy Who Loved Me</li><li>Moonraker</li><li>For Your Eyes Only</li></ul>', {closeButton: false}); //Italië
                bra = L.marker([-14.2350040, -51.9252800], {icon: redIcon}).addTo(map).bindPopup('<b>Brazil</b> <ul><li>Moonraker</li></ul>', {closeButton: false}); //Brazilië
                fraRM = L.marker([43.2276380, 2.2137490], {icon: redIcon}).addTo(map).bindPopup('<b>France</b> <ul><li>Moonraker</li><li>A View To A Kill</li></ul>', {closeButton: false}); // Frankrijk
                spaRM = L.marker([40.4636670, -3.7492200], {icon: redIcon}).addTo(map).bindPopup('<b>Spain</b> <ul><li>For Your Eyes Only</li></ul>', {closeButton: false}); // Spanje
                gre = L.marker([39.0742080, 21.8243120], {icon: redIcon}).addTo(map).bindPopup('<b>Greece</b> <ul><li>For Your Eyes Only</li></ul>', {closeButton: false}); // Griekenland
                duiRM = L.marker([51.1656910, 10.4515260], {icon: redIcon}).addTo(map).bindPopup('<b>Germany</b> <ul><li>Octopussy</li></ul>', {closeButton: false}); // Duitsland
                ind = L.marker([20.5936840, 78.9628800], {icon: redIcon}).addTo(map).bindPopup('<b>India</b> <ul><li>Octopussy</li></ul>', {closeButton: false}); // India
                rusRM = L.marker([61.5240100, 105.3187560], {icon: redIcon}).addTo(map).bindPopup('<b>Russia</b> <ul><li>A View To A Kill</li></ul>', {closeButton: false}); // Rusland
                ijsRM = L.marker([64.9630510, -19.0208350], {icon: redIcon}).addTo(map).bindPopup('<b>Iceland</b> <ul><li>A View To A Kill</li></ul>', {closeButton: false}); // IJsland
            }
            else {
                map.removeLayer(usaRM);
                map.removeLayer(chnRM);
                map.removeLayer(thaRM);
                map.removeLayer(egyRM);
                map.removeLayer(itaRM);
                map.removeLayer(bra);
                map.removeLayer(fraRM);
                map.removeLayer(spaRM);
                map.removeLayer(gre);
                map.removeLayer(duiRM);
                map.removeLayer(ind);
                map.removeLayer(rusRM);
                map.removeLayer(ijsRM);
            }

            usaRM.on('mouseover', function (e) {
                usaRM.openPopup();
            });
            usaRM.on('mouseout', function (e) {
                usaRM.closePopup();
            });
            chnRM.on('mouseover', function (e) {
                chnRM.openPopup();
            });
            chnRM.on('mouseout', function (e) {
                chnRM.closePopup();
            });
            thaRM.on('mouseover', function (e) {
                thaRM.openPopup();
            });
            thaRM.on('mouseout', function (e) {
                thaRM.closePopup();
            });
            egyRM.on('mouseover', function (e) {
                egyRM.openPopup();
            });
            egyRM.on('mouseout', function (e) {
                egyRM.closePopup();
            });
            itaRM.on('mouseover', function (e) {
                itaRM.openPopup();
            });
            itaRM.on('mouseout', function (e) {
                itaRM.closePopup();
            });
            bra.on('mouseover', function (e) {
                bra.openPopup();
            });
            bra.on('mouseout', function (e) {
                bra.closePopup();
            });
            fraRM.on('mouseover', function (e) {
                fraRM.openPopup();
            });
            fraRM.on('mouseout', function (e) {
                fraRM.closePopup();
            });
            spaRM.on('mouseover', function (e) {
                spaRM.openPopup();
            });
            spaRM.on('mouseout', function (e) {
                spaRM.closePopup();
            });
            gre.on('mouseover', function (e) {
                gre.openPopup();
            });
            gre.on('mouseout', function (e) {
                gre.closePopup();
            });
            duiRM.on('mouseover', function (e) {
                duiRM.openPopup();
            });
            duiRM.on('mouseout', function (e) {
                duiRM.closePopup();
            });
            ind.on('mouseover', function (e) {
                ind.openPopup();
            });
            ind.on('mouseout', function (e) {
                ind.closePopup();
            });
            rusRM.on('mouseover', function (e) {
                rusRM.openPopup();
            });
            rusRM.on('mouseout', function (e) {
                rusRM.closePopup();
            });
            ijsRM.on('mouseover', function (e) {
                ijsRM.openPopup();
            });
            ijsRM.on('mouseout', function (e) {
                ijsRM.closePopup();
            });
        };

       redIcon = L.icon({
            iconUrl: 'img/RedIcon.png',
            iconRetinaUrl: 'img/RedIcon.png',
            iconAnchor: [5, 20],
            popupAnchor: [0, -30],
            iconSize: [25, 41]
        });

        //Markers Timothy Dalton
        $scope.markerTD = function (td) {
            map.setView([0, 50], 2);
            if (td) {
                var time = 0;
                mor = L.marker([31.7917020, -7.0926200], {icon: yellowIcon}).addTo(map).bindPopup('<b>Morocco</b> <ul><li>The Living Daylights</li></ul>', {closeButton: false}); //Marokko
                ausTD = L.marker([47.5162310, 14.5500720], {icon: yellowIcon}).addTo(map).bindPopup('<b>Austria</b> <ul><li>The Living Daylights</li></ul>', {closeButton: false}); //Oostenrijk
                svk = L.marker([48.6690260, 19.6990240], {icon: yellowIcon}).addTo(map).bindPopup('<b>Slovakia</b> <ul><li>The Living Daylights</li></ul>', {closeButton: false}); //Slovakije
                afgTD = L.marker([33.9391100, 67.7099530], {icon: yellowIcon}).addTo(map).bindPopup('<b>Afghanistan</b> <ul><li>The Living Daylights</li></ul>', {closeButton: false}); //Afghanistan
                usaTD = L.marker([37.0902400, -105.7128910], {icon: yellowIcon}).addTo(map).bindPopup('<b>USA</b> <ul><li>Licence To Kill</li></ul>', {closeButton: false}); //USA
                bahTD = L.marker([25.0342800, -73.3962800], {icon: yellowIcon}).addTo(map).bindPopup('<b>Bahamas</b> <ul><li>Licence To Kill</li></ul>', {closeButton: false}); //Bahamas
                mexTD = L.marker([20.6345010, -101.5527840], {icon: yellowIcon}).addTo(map).bindPopup('<b>Mexico</b> <ul><li>Licence To Kill</li></ul>', {closeButton: false}); // Mexico
            }
            else {
                map.removeLayer(mor);
                map.removeLayer(ausTD);
                map.removeLayer(svk);
                map.removeLayer(afgTD);
                map.removeLayer(usaTD);
                map.removeLayer(bahTD);
                map.removeLayer(mexTD);
            }

            mor.on('mouseover', function (e) {
                mor.openPopup();
            });
            mor.on('mouseout', function (e) {
                mor.closePopup();
            });
            ausTD.on('mouseover', function (e) {
                ausTD.openPopup();
            });
            ausTD.on('mouseout', function (e) {
                ausTD.closePopup();
            });
            svk.on('mouseover', function (e) {
                svk.openPopup();
            });
            svk.on('mouseout', function (e) {
                svk.closePopup();
            });
            afgTD.on('mouseover', function (e) {
                afgTD.openPopup();
            });
            afgTD.on('mouseout', function (e) {
                afgTD.closePopup();
            });
            usaTD.on('mouseover', function (e) {
                usaTD.openPopup();
            });
            usaTD.on('mouseout', function (e) {
                usaTD.closePopup();
            });
            bahTD.on('mouseover', function (e) {
                bahTD.openPopup();
            });
            bahTD.on('mouseout', function (e) {
                bahTD.closePopup();
            });
            mexTD.on('mouseover', function (e) {
                mexTD.openPopup();
            });
            mexTD.on('mouseout', function (e) {
                mexTD.closePopup();
            });
        };

        yellowIcon = L.icon({
            iconUrl: 'img/YellowIcon.png',
            iconRetinaUrl: 'img/YellowIcon.png',
            iconAnchor: [5, 20],
            popupAnchor: [0, -30],
            iconSize: [25, 41]
        });

        //Markers Pierce Brosnan
        $scope.markerPB = function (pb) {
            map.setView([0, 50], 2);
            if (pb) {


                cub = L.marker([21.5217570, -77.7811670], {icon: purpleIcon}).addTo(map).bindPopup('<b>Cuba</b> <ul><li>GoldenEye</li><li>Die Another Day</li></ul>', {closeButton: false}); //Cuba


                rusPB = L.marker([61.5240100, 70.3187560], {icon: purpleIcon}).addTo(map).bindPopup('<b>Russia</b> <ul><li>GoldenEye</li></ul>', {closeButton: false}); //Rusland


                fraPB = L.marker([44.2276380, 2.2137490], {icon: purpleIcon}).addTo(map).bindPopup('<b>France</b> <ul><li>GoldenEye</li></ul>', {closeButton: false}); //Frankrijk

                duiPB = L.marker([49.1387263, 10.4515280], {icon: purpleIcon}).addTo(map).bindPopup('<b>Germany</b> <ul><li>Tomorrow Never Dies</li></ul>', {closeButton: false}); //Duitsland

                afgPB = L.marker([31.8732074, 63.8427675], {icon: purpleIcon}).addTo(map).bindPopup('<b>Afghanistan</b> <ul><li>Tomorrow Never Dies</li></ul>', {closeButton: false}); //Afghanistan

                pak = L.marker([30.3753210, 69.3451160], {icon: purpleIcon}).addTo(map).bindPopup('<b>Pakistan</b> <ul><li>Tomorrow Never Dies</li></ul>', {closeButton: false}); //Pakistan

                chnPB = L.marker([34.7138312, 89.9571177], {icon: purpleIcon}).addTo(map).bindPopup('<b>China</b> <ul><li>Tomorrow Never Dies</li></ul>', {closeButton: false}); // China

                thaPB = L.marker([15.8700320, 103.4534805], {icon: purpleIcon}).addTo(map).bindPopup('<b>Thailand</b> <ul><li>Tomorrow Never Dies</li></ul>', {closeButton: false}); // Thailand

                vie = L.marker([14.0583240, 108.2771990], {icon: purpleIcon}).addTo(map).bindPopup('<b>Vietnam</b> <ul><li>Tomorrow Never Dies</li></ul>', {closeButton: false}); // Vietnam

                spaPB = L.marker([43.0134769, -2.7492180], {icon: purpleIcon}).addTo(map).bindPopup('<b>Spain</b> <ul><li>The World Is Not Enough</li></ul>', {closeButton: false}); // Spanje

                trkPB = L.marker([38.0005572, 29.9698865], {icon: purpleIcon}).addTo(map).bindPopup('<b>Turkey</b> <ul><li>The World Is Not Enough</li></ul>', {closeButton: false}); // Turkije

                aze = L.marker([40.1431050, 47.5769270], {icon: purpleIcon}).addTo(map).bindPopup('<b>Azerbaijan</b> <ul><li>The World Is Not Enough</li></ul>', {closeButton: false}); // Azerbeidzjan

                kaz = L.marker([48.0195730, 66.9236840], {icon: purpleIcon}).addTo(map).bindPopup('<b>Kazakhstan</b> <ul><li>The World Is Not Enough</li></ul>', {closeButton: false}); // Kazahkstan

                ijsPB = L.marker([63.9011058, -19.0208330], {icon: purpleIcon}).addTo(map).bindPopup('<b>Iceland</b> <ul><li>Die Another Day</li></ul>', {closeButton: false}); // IJsland

                nor = L.marker([78.5536040, 15.6702720], {icon: purpleIcon}).addTo(map).bindPopup('<b>Norway (Svalbarg)</b> <ul><li>Die Another Day</li></ul>', {closeButton: false}); // Noorwegen


            }
            else {
                map.removeLayer(cub);
                map.removeLayer(rusPB);
                map.removeLayer(fraPB);
                map.removeLayer(duiPB);
                map.removeLayer(afgPB);
                map.removeLayer(pak);
                map.removeLayer(chnPB);
                map.removeLayer(thaPB);
                map.removeLayer(vie);
                map.removeLayer(spaPB);
                map.removeLayer(trkPB);
                map.removeLayer(aze);
                map.removeLayer(kaz);
                map.removeLayer(ijsPB);
                map.removeLayer(nor);
            }

            cub.on('mouseover', function (e) {
                cub.openPopup();
            });
            cub.on('mouseout', function (e) {
                cub.closePopup();
            });
            rusPB.on('mouseover', function (e) {
                rusPB.openPopup();
            });
            rusPB.on('mouseout', function (e) {
                rusPB.closePopup();
            });
            fraPB.on('mouseover', function (e) {
                fraPB.openPopup();
            });
            fraPB.on('mouseout', function (e) {
                fraPB.closePopup();
            });
            duiPB.on('mouseover', function (e) {
                duiPB.openPopup();
            });
            duiPB.on('mouseout', function (e) {
                duiPB.closePopup();
            });
            afgPB.on('mouseover', function (e) {
                afgPB.openPopup();
            });
            afgPB.on('mouseout', function (e) {
                afgPB.closePopup();
            });
            pak.on('mouseover', function (e) {
                pak.openPopup();
            });
            pak.on('mouseout', function (e) {
                pak.closePopup();
            });
            chnPB.on('mouseover', function (e) {
                chnPB.openPopup();
            });
            chnPB.on('mouseout', function (e) {
                chnPB.closePopup();
            });
            thaPB.on('mouseover', function (e) {
                thaPB.openPopup();
            });
            thaPB.on('mouseout', function (e) {
                thaPB.closePopup();
            });
            vie.on('mouseover', function (e) {
                vie.openPopup();
            });
            vie.on('mouseout', function (e) {
                vie.closePopup();
            });
            spaPB.on('mouseover', function (e) {
                spaPB.openPopup();
            });
            spaPB.on('mouseout', function (e) {
                spaPB.closePopup();
            });
            trkPB.on('mouseover', function (e) {
                trkPB.openPopup();
            });
            trkPB.on('mouseout', function (e) {
                trkPB.closePopup();
            });
            aze.on('mouseover', function (e) {
                aze.openPopup();
            });
            aze.on('mouseout', function (e) {
                aze.closePopup();
            });
            kaz.on('mouseover', function (e) {
                kaz.openPopup();
            });
            kaz.on('mouseout', function (e) {
                kaz.closePopup();
            });
            ijsPB.on('mouseover', function (e) {
                ijsPB.openPopup();
            });
            ijsPB.on('mouseout', function (e) {
                ijsPB.closePopup();
            });
            nor.on('mouseover', function (e) {
                nor.openPopup();
            });
            nor.on('mouseout', function (e) {
                nor.closePopup();
            });
        };

         purpleIcon = L.icon({
            iconUrl: 'img/PurpleIcon.png',
            iconRetinaUrl: 'img/PurpleIcon.png',
            iconAnchor: [5, 20],
            popupAnchor: [0, -30],
            iconSize: [25, 41]
        });

        //Markers Daniel Craig
        $scope.markerDC = function (dc) {
            map.setView([0, 50], 2);
            if (dc) {

                usaDC = L.marker([37.0902400, -110.7128910], {icon: orangeIcon}).addTo(map).bindPopup('<b>USA</b> <ul><li>Casino Royale</li></ul>', {closeButton: false});

                mad = L.marker([-18.7669470, 46.8691070], {icon: orangeIcon}).addTo(map).bindPopup('<b>Madagascar</b> <ul><li>Casino Royale</li></ul>', {closeButton: false});

                uga = L.marker([1.3733330, 32.2902750], {icon: orangeIcon}).addTo(map).bindPopup('<b>Uganda</b> <ul><li>Casino Royale</li></ul>', {closeButton: false});

                itaDC = L.marker([41.8719400, 12.5673800], {icon: orangeIcon}).addTo(map).bindPopup('<b>Italy</b> <ul><li>Casino Royale</li></ul>', {closeButton: false});

                cze = L.marker([49.8174920, 15.4729620], {icon: orangeIcon}).addTo(map).bindPopup('<b>Czech Republic</b> <ul><li>Casino Royale</li></ul>', {closeButton: false});

                hti = L.marker([18.9711870, -72.2852150], {icon: orangeIcon}).addTo(map).bindPopup('<b>Haïti</b> <ul><li>Quantum Of Solace</li></ul>', {closeButton: false});

                rusDC = L.marker([66.0191392, 133.6195393], {icon: orangeIcon}).addTo(map).bindPopup('<b>Russia</b> <ul><li>Quantum Of Solace</li></ul>', {closeButton: false});

                bol = L.marker([-16.2901540, -63.5886530], {icon: orangeIcon}).addTo(map).bindPopup('<b>Bolivia</b> <ul><li>Quantum Of Solace</li></ul>', {closeButton: false});

                ausDC = L.marker([47.5162310, 14.5500720], {icon: orangeIcon}).addTo(map).bindPopup('<b>Austria</b> <ul><li>Quantum Of Solace</li></ul>', {closeButton: false});

                trkDC = L.marker([38.9637450, 35.2433220], {icon: orangeIcon}).addTo(map).bindPopup('<b>Turkey</b> <ul><li>Skyfall</li></ul>', {closeButton: false});

                chnDC = L.marker([35.8616600, 104.1953970], {icon: orangeIcon}).addTo(map).bindPopup('<b>China</b> <ul><li>Skyfall</li></ul>', {closeButton: false});


            }
            else {
                map.removeLayer(usaDC);
                map.removeLayer(mad);
                map.removeLayer(uga);
                map.removeLayer(itaDC);
                map.removeLayer(cze);
                map.removeLayer(hti);
                map.removeLayer(rusDC);
                map.removeLayer(bol);
                map.removeLayer(ausDC);
                map.removeLayer(trkDC);
                map.removeLayer(chnDC);
            }

            usaDC.on('mouseover', function (e) {
                usaDC.openPopup();
            });
            usaDC.on('mouseout', function (e) {
                usaDC.closePopup();
            });
            mad.on('mouseover', function (e) {
                mad.openPopup();
            });
            mad.on('mouseout', function (e) {
                mad.closePopup();
            });
            uga.on('mouseover', function (e) {
                uga.openPopup();
            });
            uga.on('mouseout', function (e) {
                uga.closePopup();
            });
            itaDC.on('mouseover', function (e) {
                itaDC.openPopup();
            });
            itaDC.on('mouseout', function (e) {
                itaDC.closePopup();
            });
            cze.on('mouseover', function (e) {
                cze.openPopup();
            });
            cze.on('mouseout', function (e) {
                cze.closePopup();
            });
            hti.on('mouseover', function (e) {
                hti.openPopup();
            });
            hti.on('mouseout', function (e) {
                hti.closePopup();
            });
            rusDC.on('mouseover', function (e) {
                rusDC.openPopup();
            });
            rusDC.on('mouseout', function (e) {
                rusDC.closePopup();
            });
            bol.on('mouseover', function (e) {
                bol.openPopup();
            });
            bol.on('mouseout', function (e) {
                bol.closePopup();
            });
            ausDC.on('mouseover', function (e) {
                ausDC.openPopup();
            });
            ausDC.on('mouseout', function (e) {
                ausDC.closePopup();
            });
            trkDC.on('mouseover', function (e) {
                trkDC.openPopup();
            });
            trkDC.on('mouseout', function (e) {
                trkDC.closePopup();
            });
            chnDC.on('mouseover', function (e) {
                chnDC.openPopup();
            });
            chnDC.on('mouseout', function (e) {
                chnDC.closePopup();
            });
        };

        orangeIcon = L.icon({
            iconUrl: 'img/OrangeIcon.png',
            iconRetinaUrl: 'img/OrangeIcon.png',
            iconAnchor: [5, 20],
            popupAnchor: [0, -30],
            iconSize: [25, 41]
        });

        $timeout(function () {
            $scope.loading = false;
        }, 1000);

    }])

    .controller('CarsCtrl', ['$scope', '$stateParams', 'carsservice', '$timeout' , function ($scope, $stateParams, carsservice, $timeout) {
        $scope.showwer=false;
$scope.zieverderpijl=false;
        $timeout(function(){
            $scope.showwer=true;
        },500);
        $scope.naam = [];
        $scope.carsfilms = [];




        var animationEndEvent,Car,random,App,getcarssss, getfirstcar, idcar, themovie, thecarmovie, i, d, n, leeftijd,
            d = new Date();
        n = d.getFullYear();
        $scope.cars = [];
        $scope.loading = true;


        carsservice.getcars().then(function (data) {
            $scope.cars = data;
           // console.log($scope.cars);

            if ($scope.cars.length == 22) {
                animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

                Car = {
                    wrap: $('#cars'),
                    cars: $scope.cars,
                    add: function () {

                        random = this.cars[Math.floor(Math.random() * this.cars.length)];

                        this.wrap.append("<div class='carCard'><img title='" + random.id + "' alt='" + random.name + "' src='" + random.image + "' /><span>" + random.merk + " " + random.serie + "</span></div>");
                    }
                }

                App = {
                    yesButton: $('.button.yes .trigger'),
                    noButton: $('.button.no .trigger'),
                    blocked: false,
                    like: function (liked) {
                        var animate = liked ? 'animateYes' : 'animateNo';
                        var self = this;
                        if (!this.blocked) {
                            this.blocked = true;
                            var getcar = document.getElementsByClassName("carCard")[0];
                            $('.carCard').eq(0).addClass(animate).one(animationEndEvent, function () {
                                //console.log("kkkk");
                                $(this).remove();

                                Car.add();
                                self.blocked = false;
                            });
                        }
                    }
                };

                $scope.showmoviescar = false;
                //console.log($scope.carsfilms);


                $scope.yesfunc = function () {
                    App.like(true);

                    getcarssss = document.getElementById("cars");
                    getfirstcar = getcarssss.firstChild;
                    //console.log(getfirstcar.childNodes[0].getAttribute("title"));
                    //1 2 3
                    idcar = parseFloat(getfirstcar.childNodes[0].getAttribute("title")) - 1;
                    themovie = $scope.cars[idcar].movie;
                    //console.log($scope.cars[idcar].movie);
                    var m = $scope.cars[idcar].movie.split(',');
                    for (i = 0; i < m.length; i++) {
                        //console.log(m[i]);
                        thecarmovie = $scope.carsfilms.indexOf(m[i]);
                        if (thecarmovie < 0) {
                            $scope.carsfilms.push(m[i]);
                           // console.log($scope.carsfilms);
                        }
                    }
                    if ($scope.carsfilms.length >= 1) {
                        $scope.showmoviescar = true;
                    }
                    console.log($scope.carsfilms.length);
                    if( $scope.carsfilms.length==7)
                    {
                        $scope.zieverderpijl=true;
$(".ion-arrow-up-c").velocity({opacity:1},800);

                        $timeout(function(){
                            $(".ion-arrow-up-c").velocity({opacity:0},800);
                            $timeout(function(){
                                $scope.zieverderpijl=false;
                            },800);

                        },2000);



                    }

                   // console.log("yesbutton");
                };
                $scope.nofunc = function () {
                    App.like(false);
                   // console.log("nobutton");
                };

                function pushtoarray(denaamvandecar) {
                    $scope.naam.push(denaamvandecar);
                   // console.log($scope.naam);
                }

                $(document).ready(function () {
                    Car.add();
                    Car.add();
                    Car.add();
                    Car.add();
                })

                $timeout(function () {
                    $scope.loading = false;
                }, 1000);
            }
            else {
                $scope.loading.true;
            }
        });
    }])




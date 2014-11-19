angular.module('starter.controllers', [])




.controller('AppCtrl', function($scope, $ionicModal, $timeout) {




       document.getElementById("jbaudio").load();
        document.getElementById("jbaudio").pause();
        //document.getElementById("jbaudio").play();
        $scope.volumOnorOff=function() {
            var getvolume = document.getElementById("volume");

            var volumelogo = getvolume.className;

            if (volumelogo == "button button-icon icon ion-volume-high activated") {
                console.log("volumelogo");
                getvolume.className = "button button-icon icon ion-volume-mute";
                document.getElementById("jbaudio").pause();
            }
            if (volumelogo == "button button-icon icon ion-volume-mute activated") {
                console.log("volumelogo");
                getvolume.className = "button button-icon icon ion-volume-high";
                document.getElementById("jbaudio").play();
            }
        };
})


    .controller('BondsCtrl', function($scope) {
        $scope.bonds = [
            {"id": 0},
            {  "id": 1 },
            {  "id": 2 },
            { "id": 3 },
            {  "id": 4 },
            { "id": 5}
        ];
        $scope.jbnimber=0;
        $scope.bonds[0].imagesrc=new Image();
        $scope.bonds[0].imagesrc.src='img/SeanConnery.png';
        $scope.bonds[1].imagesrc=new Image();
        $scope.bonds[1].imagesrc.src='img/GeorgeLazenby.png';
        $scope.bonds[2].imagesrc=new Image();
        $scope.bonds[2].imagesrc.src='img/TimothyDalton.png';
        $scope.bonds[3].imagesrc=new Image();
        $scope.bonds[3].imagesrc.src='img/RogerMoore.png';
        $scope.bonds[4].imagesrc=new Image();
        $scope.bonds[4].imagesrc.src='img/PierceBrosnan.png';
        $scope.bonds[5].imagesrc=new Image();
        $scope.bonds[5].imagesrc.src='img/DanielCraig.png';



        $scope.nextImage=function(element)
        {
            var img = document.getElementById(element);

            for(var i = 0; i < $scope.bonds.length;i++)
            {

                if($scope.bonds[i].imagesrc.src == img.src)
                {


                    $scope.jbnimber=i+1;
                    console.log($scope.jbnimber);
                    console.log( $scope.bonds);
                    if(i === $scope.bonds.length-1){
                        document.getElementById(element).className= "bondImage fade";
                        setTimeout(function(){ document.getElementById(element).src = $scope.bonds[0].imagesrc.src;},200);
                        setTimeout(function(){  if(document.getElementById(element).className=="bondImage fade")
                        {
                            document.getElementById(element).className= "bondImage fade-in-not-out";
                        }
                        else{

                            document.getElementById(element).className= "bondImage fade-in-not-out-in";

                        }
                            $scope.changeName(i);
                        },350);
                        console.log(i);
                        break;
                    }



                    console.log(document.getElementById(element));
                    document.getElementById(element).className= "bondImage fade";
                    setTimeout(function(){  document.getElementById(element).src = $scope.bonds[i+1].imagesrc.src;},200);
                    setTimeout(function(){  if(document.getElementById(element).className=="bondImage fade")
                    {
                        document.getElementById(element).className= "bondImage fade-in-not-out";
                    }
                    else{

                        document.getElementById(element).className= "bondImage fade-in-not-out-in";

                    }
                        $scope.changeName(i);
                    },350);


                    break;
                }
            }
        }

        $scope.previousImage=function(element)
        {
            var img = document.getElementById(element);

            for(var i = 0; i < $scope.bonds.length;i++)
            {
                if($scope.bonds[i].imagesrc.src == img.src)
                {
                  console.log($scope.jbnimber);
                    $scope.jbnimber=i-1;
                    if($scope.jbnimber==-1)
                    {
                        $scope.jbnimber=5;
                    }
                    console.log($scope.jbnimber);
                    if(i === 0){
                        console.log("mm2");
                        document.getElementById(element).className= "bondImage fade";
                        setTimeout(function(){  document.getElementById(element).src =$scope.bonds[5].imagesrc.src;},200);
                        setTimeout(function(){  if(document.getElementById(element).className=="bondImage fade")
                        {
                            document.getElementById(element).className= "bondImage fade-in-not-out";
                        }
                        else{
                            console.log("mm3");
                            document.getElementById(element).className= "bondImage fade-in-not-out-in";

                        }
                            $scope.changeName($scope.bonds.length - 2);
                        },350);

                        break;
                    }

                    document.getElementById(element).className= "bondImage fade";

                    setTimeout(function(){ document.getElementById(element).src = $scope.bonds[i-1].imagesrc.src;},200);

                    setTimeout(function(){  if(document.getElementById(element).className=="bondImage fade")
                    {
                        document.getElementById(element).className= "bondImage fade-in-not-out";
                    }
                    else{

                        document.getElementById(element).className= "bondImage fade-in-not-out-in";

                    }
                        $scope.changeName(i-2);
                    },350);

                    //alert(i);
                    break;
                }
            }
        }

        $scope.changeName =function (i){
            switch(i+1){
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
    })

    .controller('SingleBondCtrl', function($scope,$http,bondservice, $stateParams) {

        $scope.bonds=[];
        var retrievedObject1,  retrievedObject2, retrievedObject3,retrievedObject4,retrievedObject5,retrievedObject6;

        $scope.ide=$stateParams.bondId;

        switch ($scope.ide)
        {
            case "0":

                GetTheBondbyId(738,retrievedObject1,'bond1Storage');

                //undefined
                break;
            case "1":
                GetTheBondbyId(10167,retrievedObject2,'bond2Storage');
break;
            case "2":
                GetTheBondbyId(10669,retrievedObject3,'bond3Storage');

                break;
            case "3":
                GetTheBondbyId(10222,retrievedObject4,'bond4Storage');

                break;
            case "4":
                GetTheBondbyId(517,retrievedObject5,'bond5Storage');

                break;
            case "5":
                GetTheBondbyId(8784,retrievedObject6,'bond6Storage');

                break;
            case "0":
                GetTheBondbyId(738,retrievedObject1,'bond1Storage');

                break;
        }



        function GetTheBondbyId(bondid,objectretriever,storager) {
            objectretriever = localStorage.getItem(storager);
            if (typeof objectretriever === 'undefined' || objectretriever === null) {

                bondservice.getsinglebond(bondid).then(function (data) {

                    $scope.bonds = data;
                    $scope.bonds.biografie = $scope.bonds['biography'];
                    $scope.bonds.profileimage = $scope.bonds['profile_path'];
                    $scope.bonds.birthday = $scope.bonds['birthday'];
                    $scope.bonds.name = $scope.bonds['name'];
                    console.log($scope.bonds.profileimage);
                    console.log("kkkk" +$scope.networkIcon);
                    $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];

                    storage = localStorage.setItem(storager, JSON.stringify($scope.bonds));
                });
            }
            else {

                $scope.bonds = JSON.parse(objectretriever);
                console.log("kkk");
                console.log('retrievedObject: ', JSON.parse(objectretriever));
            }


        }
$scope.linkfunction=function(){
    console.log("loplop");
};


    })

    .controller('SingleBondPictureCtrl', function($scope,$http,picturebondservice, $stateParams) {



        $scope.ide=$stateParams.bondId;

        switch ($scope.ide)
        {
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

        console.log("kk"+$scope.pictures);
        function GetTheBondbyId(bondid) {

            picturebondservice.getpicturesbond(bondid).then(function (data) {

console.log("ss");

                $scope.pictures = data;




            });

        }



    })

    .controller('SingleBondMovieCtrl', function($scope, $http,$q,moviesbondservice ,$stateParams) {


        //........................................................
        // the array which represents the list
        $scope.items = ["1. Scroll the list to load more"];
        $scope.loading = true;

        // this function fetches a random text and adds it to array
        $scope.more = function(){
            $http({
                method: "GET",
                url: "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
            }).success(function(data, status, header, config){

                // returned data contains an array of 2 sentences
                for(line in data){
                    newItem = ($scope.items.length+1)+". "+data[line];
                    $scope.items.push(newItem);
                }
                $scope.loading = false;
            });
        };

        // we call the function twice to populate the list
        $scope.more();

        //........................................................

        $scope.ide=$stateParams.bondId;
        switch ($scope.ide)
        {
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

            $scope.movies=[];
            moviesbondservice.getmoviesbond(bondid).then(function (data) {


                angular.forEach(data,function (key) {

                    if(key['poster_path']==null)
                    {
                        console.log(key['poster_path']);

                    }
                    else {
                        console.log(key);
                        $scope.movies.push(key);
                    }
                });

            console.log($scope.movies.length);



            });
        }


    })


    .controller('GirlsCtrl', function($scope,$stateParams) {

//menu van de girls

    })



    .controller('SingleGirlCtrl', function($scope,$stateParams,girlservice) {

        console.log($stateParams);
        //  [9871,9896,9907,9919,10070,10168,10190,10223,10341,10458,10475,10500,10342,10660,10670,10679,10695,1620,9205,4587,10912,18182,1030261];
        switch ($stateParams.girlId)
        {
            case "1":

                GetTheGirlbyId(9871);

                //undefined
                break;
            case "2":
                GetTheGirlbyId(9896);
                break;
            case "3":
                GetTheGirlbyId(9907);

                break;
            case "4":
                GetTheGirlbyId(9919);

                break;
            case "5":
                GetTheGirlbyId(10070);

                break;
            case "6":
                GetTheGirlbyId(10168);

                break;
            case "7":
                GetTheGirlbyId(10190);
                // 10223,10341,10458,10475,10500,10342,10660,10670,10679,10695,1620,9205,4587,10912,18182,1030261];
                break;
            case "8":

                GetTheGirlbyId(10223);

                //undefined
                break;
            case "9":
                GetTheGirlbyId(10341);
                break;
            case "10":
                GetTheGirlbyId(10458);

                break;
            case "11":
                GetTheGirlbyId(10475);

                break;
            case "12":
                GetTheGirlbyId(10500);

                break;
            case "13":
                GetTheGirlbyId(10342);

                break;
            case "14":
                GetTheGirlbyId(10660);

                break;
            case "15":
                // 10670,10679,10695,1620,9205,4587,10912,18182,1030261];
                GetTheGirlbyId(10670);

                //undefined
                break;
            case "16":
                GetTheGirlbyId(10679);
                break;
            case "17":
                GetTheGirlbyId(10695);

                break;
            case "18":
                GetTheGirlbyId(1620);

                break;
            case "19":
                GetTheGirlbyId(9205);

                break;
            case "20":
                GetTheGirlbyId(4587);

                break;
            case "21":
                GetTheGirlbyId(10912);

                break;
            case "22":
                GetTheGirlbyId(18182);

                break;
            case "23":
                GetTheGirlbyId(1030261);

                break;


        }
        $scope.allgirlinfo=[];
        function GetTheGirlbyId(girlid) {


            girlservice.getsinglegirl(girlid).then(function (data) {

console.log(data);


                $scope.allgirlinfo=data;
                $scope.allgirlinfo.biografie = $scope.allgirlinfo['biography'];
                $scope.allgirlinfo.profileimage = $scope.allgirlinfo['profile_path'];
                $scope.allgirlinfo.birthday = $scope.allgirlinfo['birthday'];
                $scope.allgirlinfo.name = $scope.allgirlinfo['name'];

                $scope.allgirlinfo.place_of_birth = $scope.allgirlinfo['place_of_birth'];

            });
        }

    })



//card controller is een controller in de bondgirlctrl om aan de kaarten te kunnen


    .controller('CardCtrl', function($scope, TDCardDelegate,$timeout) {
        /*
        console.log("k");

$scope.lastgirl=document.getElementsByClassName("td-cards")[0].lastChild;


$timeout(function()
{

    var getid;



    $scope.destroythecard = function() {
         getid=$scope.lastgirl.previousElementSibling.className;
        //start 5 en eindig bij  8 7 6

        getid= getid.split("-",2);
        console.log(getid[1]);
        $scope.cardSwipedLeft(getid[1]);

        var no = document.getElementById("triggerNo");
        no.style.backgroundColor = "red";
    };

    $scope.addthecard = function() {
        getid=$scope.lastgirl.previousElementSibling.className;
        //start 5 en eindig bij  8 7 6

        getid= getid.split("-",2);
        console.log(getid[1]);
        $scope.cardSwipedRight(getid[1]);

        var yes = document.getElementById("triggerYes");
        yes.style.backgroundColor = "green";
    };

    $scope.cardSwipedLeft = function(index) {
        console.log('LEFT SWIPE');
        console.log(index);
        $scope.cardDestroyed(index);

    };
    $scope.cardSwipedRight = function(index) {
        console.log('RIGHT SWIPE');
        console.log(index);
        $scope.addCard(index);
    };


},0);



*/
    })


    .controller('BondgirlsCtrl', function($scope, $http,$q,$stateParams,bondgirlsservice,TDCardDelegate,$timeout) {
        var i;

        $scope.thegirls=new Array(22);
        $scope.thegirls=[9871,9896,9907,9919,10070,10168,10190,10223,10341,10458,10475,10500,10342,10660,10670,10679,10695,1620,9205,4587,10912,18182,1030261];

        $scope.loading=true;
        $scope.cardTypes=[];

        for (i = 0; i <  $scope.thegirls.length; i++) {
            console.log( "1");
            bondgirlsservice.getbondgirls($scope.thegirls[i]).then(function (data) {
                console.log(data + "    "+i);
                $scope.cardTypes.push(data);

                if($scope.cardTypes.length==23)
                {
                    girls();

                    $timeout(function(){$scope.loading=false;},1000) ;
                }
                else
                {
                    $scope.loading=true;
                }


            });


        }

        function girls(){
            cardTypes=$scope.cardTypes;
            console.log(cardTypes);


            $scope.cards = Array.prototype.slice.call(cardTypes, 0);

            /*
            $scope.cardDestroyed = function(index) {
                $scope.degirlid=index;
                $scope.cards.splice(index, 1);
            };

            $scope.addCard = function(index) {
                console.log("kkkkkk" + index);
                $scope.degirlid=index;


                var index2=index %cardTypes.length;
                if(index2==0)
                {
                    index2=1;
                }
                var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
                var saveCard = cardTypes[index2];
                newCard.id = Math.random();

                $scope.cards.push(angular.extend({},saveCard));
                $scope.cards.push(angular.extend({}, newCard));
            }
            */


            var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

            var Girl = {
                wrap: $('#girls'),
                girls: $scope.cards,
                add: function(){
                    var random = this.girls[Math.floor(Math.random() * this.girls.length)];
                    this.wrap.append("<div class='girlCard'><img alt='" + random.name + "' src='" + random.profile_path + "' /><span>" + random.name + "</span></div>");
                }
            }

            var App = {
                yesButton: $('.button.yes .trigger'),
                noButton: $('.button.no .trigger'),
                blocked: false,
                like: function(liked){
                    var animate = liked ? 'animateYes' : 'animateNo';
                    var self = this;
                    if(!this.blocked){
                        this.blocked = true;
                        $('.girlCard').eq(0).addClass(animate).one(animationEndEvent, function(){
                            $(this).remove();
                            Girl.add();
                            self.blocked = false;
                        });
                    }
                }
            };

            App.yesButton.on('mousedown', function(){
                App.like(true);
                console.log("yesbutton");
            });

            App.noButton.on('mousedown', function(){
                App.like(false);
                console.log("nobutton");
            });

            $(document).ready(function(){
                Girl.add();
                Girl.add();
                Girl.add();
                Girl.add();
            })
        }
    })


    .controller('MapsCtrl', function($scope, $stateParams,$ionicLoading, $compile,leafletEvents) {
        console.log("kk");


        var map = L.map('map').setView([
            39.905687,-75.166955], 2);

// add MapQuest tile layer, must give proper OpenStreetMap attribution according to MapQuest terms
       // 'http://{s}.tiles.mapbox.com/v3/moklick.gf03ihjf/{z}/{x}/{y}.png'


        L.tileLayer('http://otile4.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        $scope.checker=function(kk){
            console.log(kk);
if(kk) {
   m= L.marker([50.5, 30.5]).addTo(map);
}
            else{
    map.removeLayer(m);
}

        }
        var mapIcon = L.icon({
            iconUrl: 'http://profile.ak.fbcdn.net/hprofile-ak-ash4/373528_124230297591358_127600844_q.jpg',
            iconRetinaUrl: 'http://profile.ak.fbcdn.net/hprofile-ak-ash4/373528_124230297591358_127600844_q.jpg',
            iconSize: [50, 50],
            iconAnchor: [22, 50],
            popupAnchor: [0, -56],
            shadowUrl: '',
            shadowRetinaUrl: '',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        });


        L.marker([39.905687,-75.166955], {icon: mapIcon}).addTo(map).bindPopup('Baseball!!').openPopup();


    })




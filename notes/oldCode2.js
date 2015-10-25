var nflApp = angular.module('nfl_App', []);
nflApp.constant('NFL_URL', 'http://www.nfl.com/liveupdate/scorestrip/ss.xml');

nflApp.constant('NFL_URL_JSON', 'http://www.nfl.com/liveupdate/scorestrip/scorestrip.json');

nflApp.factory('gameInfoModel', ['$http', 'NFL_URL', function ($http, NFL_URL) {
    var gameInfoModel = {};
    gameInfoModel.getNflScores = function () {
        console.log(NFL_URL, "????");
        return $http.get(NFL_URL);
    };
    return gameInfoModel;
}]);

nflApp.controller('nflAppController', function($scope, $interval, gameInfoModel){
    //default url
    $scope.template = 'partials/teamScores.html';

    getGameData();

    function getGameData() {
        gameInfoModel.getNflScores()
            .success(function (data) {
                var x2js = new X2JS();
                var json = x2js.xml_str2json(data);
                $scope.gameInfoList = json.ss.gms.g;
                console.log($scope.gameInfoList);
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    //By default AngularJS already calls $digest() after the scheduled function call finishes
    $scope.intervalPromise = $interval(function(){   
        getGameData();
    }, 10000); 

});


var nflApp = angular.module('nfl_App', []);
nflApp.constant('NFL_URL', 'http://www.nfl.com/liveupdate/scorestrip/ss.xml');

nflApp.factory('gameInfoModel', ['$http', 'NFL_URL', function ($http, NFL_URL) {
    var gameInfoModel = {};
    gameInfoModel.getNflScores = function () {
        console.log(NFL_URL, "????");
        return $http.get(NFL_URL);
    };
    return gameInfoModel;
}]);

nflApp.controller('nflAppController', function($scope, $interval, gameInfoModel){
    //default url
    $scope.template = 'partials/teamScores.html';

    getNflScores();

    function getNflScores() {
        gameInfoModel.getNflScores()
            .success(function (data) {
                var x2js = new X2JS();
                var json = x2js.xml_str2json(data);
                $scope.gameInfoList = json.ss.gms.g;
                console.log($scope.gameInfoList);
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    //By default AngularJS already calls $digest() after the scheduled function call finishes
    $scope.intervalPromise = $interval(function(){   
        getNflScores();
    }, 10000); 

});

app.factory('myService', function ($http, $q){
  return {
    getItems: function (){
      return $http.get(NFL_URL)
      .then(function(results) {

        var gameInfo = {};
        var x2js = new X2JS();
        var json = x2js.xml_str2json(data);
        gameInfo = json.ss.gms.g;
        return gameInfo;
        console.log('data returned to factory.', gameInfoModel);
      });
    }
  };
});




/*
    $scope.getGameData2 = function (){

        console.log("getGameData2 fired?");
        gameInfoModel.getNflScores()
            .success(function (data) {
                var x2js = new X2JS();
                var json = x2js.xml_str2json(data);
                $scope.gameInfoList = json.ss.gms.g;
                console.log($scope.gameInfoList);
            })
            .error(function (error) {
                console.log("Unable to load football scores");
            });

    }


    $scope.billingDate = gameInfoModel.getNflScoresJson();
    $scope.billingDate.then(function(data) {

        $scope.info1 = data;
        console.log($scope.info1);

    }, function error() {
        console.log("Error loading billing date info");
    });
*/

//nflApp.constant('NFL_URL_JSON', 'http://www.nfl.com/liveupdate/scorestrip/scorestrip.json');

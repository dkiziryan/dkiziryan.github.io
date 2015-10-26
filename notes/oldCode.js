
    $scope.NflGameInfo = GeneralService.getNflGameInfo();
    $scope.NflGameInfo.then(function(data) {  
                var x2js = new X2JS();
                var json = x2js.xml_str2json(data);
                $scope.gameInfoList = json.ss.gms.g;
                console.log($scope.gameInfoList, NFL_URL);
            }, function error() {
                //will write something to handle error later.
                console.log = "Error loading nfl data";
    });
    
   

    $scope.intervalPromise = $interval(function(){   
        $scope.NflGameInfo = GeneralService.getNflGameInfo();
        $scope.NflGameInfo.then(function(data) {  
                    var x2js = new X2JS();
                    var json = x2js.xml_str2json(data);
                    $scope.gameInfoList = json.ss.gms.g;
                    console.log($scope.gameInfoList);
                }, function error() {
                    $scope.isError = false;
                    $scope.errorDescription = "Error loading nfl data";
            });
    }, $scope.interval); 
    $scope.intervalPromise();




    /*
http://localhost:8888/nflApp/

*/

var nflApp = angular.module('nfl_App', []);

nflApp.constant('NFL_URL', 'http://www.nfl.com/liveupdate/scorestrip/ss.xml');

nflApp.factory('gameInfoModel', ['$http', 'NFL_URL', function ($http, NFL_URL) {
    var gameInfoModel = {};
    gameInfoModel.loadGameInfoList = function () {
        return $http.get(NFL_URL).success(function (data, status, headers, config)
                {
                    gameInfoModel.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    console.log("Fail", data);
                    gameInfoModel.reject(data);
                });
    };
    return gameInfoModel;
}]);

nflApp.controller('nflAppController', function($scope, $interval, gameInfoModel){
    //default url
    $scope.template = 'partials/teamScores.html';

    //loadGameInfoList();

    $scope.gameInfoList= gameInfoModel.loadGameInfoList();
    $scope.gameInfoList.then(function(data) {  
                var x2js = new X2JS();
                var json = x2js.xml_str2json(data);
                $scope.gameInfoList = json.ss.gms.g;
                console.log($scope.gameInfoList, NFL_URL);
            }, function error() {
                //will write something to handle error later.
                console.log = "Error loading nfl data";
    });

 /*
    function loadGameInfoList() {
        gameInfoModel.loadGameInfoList();
    }

   
    $scope.intervalPromise = $interval(function(){   
        loadGameInfoList();
    }, 10000); 
    */
});


var nflApp = angular.module('nfl_App', []);
nflApp.constant('NFL_URL', 'http://www.nfl.com/liveupdate/scorestrip/ss.xml');

nflApp.factory('gameInfoModel', ['$http', 'NFL_URL', function ($http, NFL_URL) {
    var gameInfoModel = {};
    
    gameInfoModel.getNflScores = function () {
        return $http.get(NFL_URL)
            .success(function(data) {
                var x2js = new X2JS();
                var json = x2js.xml_str2json(data);
                gameInfoModel = json.ss.gms.g;
                console.log('data returned to factory.', gameInfoModel);
            })
            .error(function() {
            console.log('data retrieval failed.');
        });
    }
    return gameInfoModel;
}]);

nflApp.controller('nflAppController', function($scope, $interval, gameInfoModel){
    //default url
    $scope.template = 'partials/teamScores.html';

    $scope.gameInfoList = gameInfoModel.getNflScores();
    console.log($scope.gameInfoList);
    
});
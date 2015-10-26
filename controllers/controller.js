var nflApp = angular.module('nflApp.controller', []);

nflApp.controller('NflAppController',['$scope','$interval','GameInfoFactory', function($scope, $interval, GameInfoFactory){
    console.log('controller fired');

    $scope.template = 'partials/teamScores.html';
    $scope.isError = false;
    
    $scope.getGameData = function (){

        $scope.NflGameInfo = GameInfoFactory.getNflScores();
        $scope.NflGameInfo.then(function(response) {  
                    var x2js = new X2JS();
                    var json = x2js.xml_str2json(response.data);
                    $scope.gameInfoList = json.ss.gms.g; 
                    console.log("gameInfoList nfl data", json.ss.gms.g);               
                }, function error() {
                    $scope.isError = true;
                    $scope.errorMessage = "Error loading nfl data";
        });

    }

    $scope.getGameData();    
    
    $scope.intervalPromise = $interval(function(){   
        console.log("intervalPromise");
        $scope.getGameData();
    }, 15000);  


    
}]);
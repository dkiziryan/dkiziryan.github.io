var nflApp = angular.module('nflApp.factory', []);


nflApp.factory('GameInfoFactory',['$http','NFL_URL', function($http, NFL_URL) {
    console.log('factory fired');

    var gameInfoModel = {};

    gameInfoModel.getNflScores = function () {
        return $http.get(NFL_URL);
    };
    
    return gameInfoModel;
}]);
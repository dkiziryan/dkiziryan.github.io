var nflServices = angular.module('nfl_services', []);

nflServices.service('GeneralService', function ($http, $q) {

    return {
        getNflGameInfo: function () {
            var nflScores = $q.defer();
            var url = "http://www.nfl.com/liveupdate/scorestrip/ss.xml";

            $http({method: 'GET',
                url: url,
                headers: {'Content-Type': 'application/xml'}}).
                    success(function (data, status, headers, config)
                    {
                        nflScores.resolve(data);
                    }).
                    error(function (data, status, headers, config) {
                        console.log("Fail", data);
                        nflScores.reject(data);
                    });
            return nflScores.promise;
        },
        getNflGameInfo: function () {
            var nflScores = $q.defer();
            var url = "http://www.nfl.com/liveupdate/scorestrip/ss.xml";

            $http({method: 'GET',
                url: url,
                headers: {'Content-Type': 'application/xml'}}).
                    success(function (data, status, headers, config)
                    {
                        nflScores.resolve(data);
                    }).
                    error(function (data, status, headers, config) {
                        console.log("Fail", data);
                        nflScores.reject(data);
                    });
            return nflScores.promise;
        }
    };
});





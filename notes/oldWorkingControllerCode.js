    /*
    function getGameData() {
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
    /* By default AngularJS already calls $digest() after the scheduled function call finishes 
    $scope.intervalPromise = $interval(function(){   
        getGameData();
    }, 10000); */
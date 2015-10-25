var nflApp = angular.module('nflApp', ['nflApp.controller','nflApp.factory']).run(function () {
        console.log('app fired.');
    });

nflApp.constant('NFL_URL', 'http://www.nfl.com/liveupdate/scorestrip/ss.xml');

/*
Notes:
jscompress.com
*/
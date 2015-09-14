'use strict';

var ctrl = angular.module('myApp.controllers', []);
ctrl.controller('MainCtrl', ['$rootScope', '$scope',  function($rootScope, $scope) {

    $scope.urlRegex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    var urlArr = [];
    $scope.log= urlArr;
    console.log('fromCTRL');

    $scope.submitForm = function () {
        var newElem=$scope.getUrl;
        var cutHttp = newElem.replace(/(?:((?:\/\/)|^)http[s]?:\/\/)(?=[^/]*?\.)/i, "$1");
        var cutWww = cutHttp.replace(/(?:((?:\/\/)|^)www\.)(?=[^/]*?\.)/i, "$1");
        var cutRight = cutWww.split("/")[0];
        urlArr.unshift(cutRight);
        $scope.getUrl='';
    }
}]);






















'use strict';

var app = angular.module('myApp', [
        'myApp.controllers'
     ]);

app.config(['$routeProvider',  function ($routeProvider) {


    $routeProvider.
        when('/', {
            templateUrl: 'views/dashboard/chart.html',
            controller: 'DashChartCtrl',
            resolve: {
                dashboardchart: function (Main) {
                    return Main.dashboardchart();
                }
            }
        }).
        when('/myaccount/personal', {
            templateUrl: 'views/myaccount/personal.html',
            controller: 'MyAccPerCtrl',
            resolve: {
                getusersdata: function (Main) {
                    return Main.getusersdata();
                }
            }
        });
}])


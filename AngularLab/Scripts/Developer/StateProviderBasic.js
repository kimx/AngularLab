/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var app = angular.module("stateProviderApp", ["ui.compat"]);
app.controller("myCtrl", function ($scope) {
    $scope.name = "StateProvider";
});
app.config(function ($stateProvider) {
    //var home = {
    //    name: 'home',
    //    url: '/',
    //    templateUrl: 'content.html'
    //},
    //    red = {
    //        name: 'red',
    //        url: '/red',
    //        parent: home,
    //        templateUrl: 'content.red.html'
    //    },
    //    blue = {
    //        name: 'blue',
    //        url: '/blue',
    //        parent: home,
    //        templateUrl: 'content.blue.html'
    //    },
    //    green = {
    //        name: 'green',
    //        url: '/green',
    //        parent: home,
    //        templateUrl: 'content.green.html'
    //    };
    //$stateProvider.state(home);
    //$stateProvider.state(red);
    //$stateProvider.state(green);
    //$stateProvider.state(blue);
});

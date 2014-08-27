﻿/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

angular.module("staticTemplateApp", [])
    .controller("myCtrl", function ($scope) {
        $scope.customer = { name: "Naomi", address: "1600 Amphitheatre" }
})
    .directive("myCustomer", function () {
        var d: ng.IDirective = {
            template: 'Name:{{customer.name}} Address:{{customer.address}}'
        };
        return d;
    });

//Restrict
angular.module("restrictApp", [])
    .controller("myCtrl", function ($scope) {
        $scope.customer = { name: "Naomi-R", address: "1600 Amphitheatre-R" }
    })
    .directive("myCustomer", function () {
        var d: ng.IDirective = {
            restrict: "E",
            template: 'Name-R:{{customer.name}} Address-R:{{customer.address}}'
        };
        return d;
    });

//Isolating
angular.module("isoApp", [])
    .controller("myCtrl", function ($scope) {
        $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
        $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    })
    .directive("myCustomer", function () {
        var d: ng.IDirective = {
            restrict: "E",
            template: 'Name-I:{{customer.name}} Address-R:{{customer.address}}',
            scope: {
                customerInfo: "=info"//使用條件來區隔對應的model,例view,info=naomi
            },
        };
        return d;
    });

//Manipulates 
angular.module("manApp", [])
    .controller("myCtrl", function ($scope) {
        $scope.format = 'M/d/yy h:mm:ss a';
    })
    .directive("myCurrentTime", function ($interval: ng.IIntervalService, dateFilter) {
        function link(scope, element, attrs) {
            var format, timeoutId;

            function updateTime() {
                element.text(dateFilter(new Date(), format));
            }

            scope.$watch(attrs.myCurrentTime, function (newValue, oldValue) {
                format = newValue;
                updateTime();
            });

            //被移除事件
            element.on("$destroy", function () {
                $interval.cancel(timeoutId);
            });

            //save the timeoutId for canceling
            timeoutId = $interval(function () {
                updateTime();
            }, 1000);
        }


        var d: ng.IDirective = {
            link: link

        };
        return d;
    });

//Wraps Other Elements
angular.module("wrapApp", [])
    .controller("myCtrl", function ($scope) {
        $scope.name = "Kim";
    })
    .directive("myDialog", function () {
        var d:ng.IDirective = {
            restrict:"E",
            transclude: true,
            template: "<div class='kim' ng-transclude></div>",
        };
        return d;
    });

//一個網頁多個module的設定
angular.bootstrap(document.getElementById("restrictApp"), ['restrictApp']);
angular.bootstrap(document.getElementById("isoApp"), ['isoApp']);
angular.bootstrap(document.getElementById("manApp"), ['manApp']);
angular.bootstrap(document.getElementById("wrapApp"), ['wrapApp']);
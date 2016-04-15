/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.customer = { name: "Naomi", address: "1600 Amphitheatre" };
});

app.directive("myCustomer", function () {
    var d = {
        template: 'Name:{{customer.name}} Address:{{customer.address}}'
    };
    return d;
});
//# sourceMappingURL=Developer.js.map

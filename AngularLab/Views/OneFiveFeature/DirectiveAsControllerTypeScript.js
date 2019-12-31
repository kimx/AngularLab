var Lab;
(function (Lab) {
    var App = /** @class */ (function () {
        function App() {
            var app = angular.module("myApp", ['ngRoute']);
            app.config(function ($routeProvider) {
                $routeProvider
                    .when("/Index", { template: "<foo-comp></foo-comp>" })
                    .otherwise({ redirectTo: "/Index" });
            });
            app.component("fooComp", new mySplitComponent());
        }
        return App;
    }());
    Lab.App = App;
    var myComponent = /** @class */ (function () {
        function myComponent() {
            this.templateUrl = "/OneFiveFeature/DirectiveAsControllerMain";
            this.controller = function ($scope) {
                $scope.foo = 'myComponent';
                this.myFoo = "myComponent";
            };
            this.controllerAs = 'vm';
        }
        return myComponent;
    }());
    Lab.myComponent = myComponent;
    //同上使用方式,獨立Controller的寫法
    //   app.component("fooComp", new mySplitComponent());
    var mySplitComponent = /** @class */ (function () {
        function mySplitComponent() {
            this.templateUrl = "/OneFiveFeature/DirectiveAsControllerMain";
            this.controller = myController;
            this.controllerAs = 'vm';
        }
        return mySplitComponent;
    }());
    Lab.mySplitComponent = mySplitComponent;
    var myController = /** @class */ (function () {
        function myController($scope) {
            this.$scope = $scope;
            $scope.foo = 'myComponent Standalone';
            this.myFoo = "myComponent Standalone";
        }
        return myController;
    }());
})(Lab || (Lab = {}));
//# sourceMappingURL=DirectiveAsControllerTypeScript.js.map
var Lab;
(function (Lab) {
    var App = (function () {
        function App() {
            var app = angular.module("myApp", ['ngRoute']);
            app.config(function ($routeProvider) {
                $routeProvider
                    .when("/Index", { template: "<foo-comp></foo-comp>" })
                    .otherwise({ redirectTo: "/Index" });
            });
            app.component("fooComp", new myComponent());
        }
        return App;
    }());
    Lab.App = App;
    var myComponent = (function () {
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
    //同上使用方式
    var myComponentSplitController = (function () {
        function myComponentSplitController() {
            this.templateUrl = "/OneFiveFeature/DirectiveAsControllerMain";
            this.controller = myController;
            this.controllerAs = 'vm';
        }
        return myComponentSplitController;
    }());
    Lab.myComponentSplitController = myComponentSplitController;
    var myController = (function () {
        function myController($scope) {
            this.$scope = $scope;
            $scope.foo = 'myComponent Standalone';
            this.myFoo = "myComponent Standalone";
        }
        return myController;
    }());
    Lab.myController = myController;
})(Lab || (Lab = {}));
//# sourceMappingURL=DirectiveAsControllerTypeScript.js.map
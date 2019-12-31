namespace Lab {
    export class App {
        constructor() {

            var app = angular.module("myApp", ['ngRoute']);
            app.config(function ($routeProvider) {
                $routeProvider
                    .when("/Index", { template: "<foo-comp></foo-comp>" })
                    .otherwise({ redirectTo: "/Index" })
                    ;
            });
            app.component("fooComp", new mySplitComponent());
        }
    }

    export class myComponent {
        templateUrl = "/OneFiveFeature/DirectiveAsControllerMain";
        controller = function ($scope) {
            $scope.foo = 'myComponent';
            this.myFoo = "myComponent";
        };
        controllerAs = 'vm';
    }
    //同上使用方式,獨立Controller的寫法
    //   app.component("fooComp", new mySplitComponent());
    export class mySplitComponent {
        templateUrl = "/OneFiveFeature/DirectiveAsControllerMain";
        controller = myController;
        controllerAs = 'vm';
    }

     class myController {
        myFoo: string;
        constructor(private $scope) {
            $scope.foo = 'myComponent Standalone';
            this.myFoo = "myComponent Standalone";
        }
    }
}
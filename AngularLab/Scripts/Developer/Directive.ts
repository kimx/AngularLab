/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

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
        var d: ng.IDirective = {
            restrict: "E",
            transclude: true,
            template: "<div class='kim' ng-transclude></div>",
            //以下為此主題的第二範例
            scope: {},//重新定scope
            link: function (scope:any, element) {
                scope.name = "Kim 2";//不會顯示Kim 2因為上一行已重新定了scope
            }
        };
        return d;
    });

//Wraps Other Elements2 主要說明在scope用$attr可以公開屬性來繫結其他行為
angular.module("wrapAppAttr", [])
    .controller("myCtrl", function ($scope, $timeout: ng.ITimeoutService) {
        $scope.name = 'Tobias';
        $scope.hideDialog = function () {
            $scope.dialogIsHidden = true;
            $timeout(function () {
                $scope.dialogIsHidden = false;
            }, 2000);
        };
    })
    .directive("myDialog", function () {
        var d: ng.IDirective = {
            restrict: "E",
            transclude: true,
            template: "<div class='alert'>" +
            "<a href class='close' ng-click='close2()'>&times;</a>" +
            " <div ng-transclude></div>" +
            "</div>",
            scope: {
                //公開屬性讓on-close繫結行為
                //ng-click觸發close2-->觸發外層的on-close行為hideDialog
                close2: "&onClose"
            }
        };
        return d;
    })
;

//Creating a Directive that Adds Event Listeners
angular.module("evtApp", [])
    .directive("myDraggable", function ($document) {
        function link(scope, element, attr) {
            var startX = 0, startY = 0, x = 0, y = 0;
     
            element.css({
                position: 'relative',
                border: '1px solid red',
                backgroundColor: 'lightgrey',
                cursor: 'pointer'
            });

            element.on("mousedown", function (event) {
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on("mousemove", mousemove);
                $document.on("mouseup", mouseup);
            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                    top: y + "px",
                    left: x + "px",
                });
            }

            function mouseup() {
                $document.off("mousemove", mousemove);
                $document.off("mouseup", mouseup);
            }
        };

        var d: ng.IDirective = {
            link: link,
            restrict: "AE"//Default A
        };
        return d;
    });

//Creating Directives that Communicate
angular.module("comuApp", [])
    .directive("myTabs", function () {
        var d: ng.IDirective = {
            restrict: "E",
            transclude: true,
            scope: {},
            templateUrl: 'my-tabs.html',
            controller: function ($scope) {
                var panes = $scope.panes = [];
                $scope.select = function (currentPane) {
                    angular.forEach(panes, function (pane) {
                        pane.selected = false;
                    });
                    currentPane.selected = true;
                };

                this.addPane = function (pane) {
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            },
        };
        return d;
    })
    .directive("myPane", function () {
        var d: ng.IDirective = {
            require: "^myTabs",//^資料來源限制為父節點<my-tabs>,才取得到myTab的controller
            restrict: "E",
            transclude: true,
            scope: {
                title2: "@title",//寫@或@attr=@title為以繫來源attribute=title,my-pane有屬性title需作轉換
            },
            link: function (scope, element, attr, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            templateUrl: 'my-pane.html'
        };
        return d;
    })
;

//一個網頁多個module的設定
angular.bootstrap(document.getElementById("restrictApp"), ['restrictApp']);
angular.bootstrap(document.getElementById("isoApp"), ['isoApp']);
angular.bootstrap(document.getElementById("manApp"), ['manApp']);
angular.bootstrap(document.getElementById("wrapApp"), ['wrapApp']);
angular.bootstrap(document.getElementById("wrapAppAttr"), ['wrapAppAttr']);
angular.bootstrap(document.getElementById("evtApp"), ['evtApp']);
angular.bootstrap(document.getElementById("comuApp"), ['comuApp']);
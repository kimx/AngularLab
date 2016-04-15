var scModules;
(function (scModules) {
    var crudApp = (function () {
        function crudApp() {
            var app = angular.module("crudApp", []);
            app.controller("indexCtrl", indexCtrl);
        }
        return crudApp;
    })();
    scModules.crudApp = crudApp;

    var indexCtrl = (function () {
        function indexCtrl($scope) {
            this.$scope = $scope;
            $scope.event = this;
        }
        indexCtrl.prototype.test = function (url) {
            this.$scope.url = "test:" + url;
        };

        indexCtrl.prototype.init = function (url) {
            this.$scope.url = "init2:" + url;
        };
        return indexCtrl;
    })();
    scModules.indexCtrl = indexCtrl;
})(scModules || (scModules = {}));
//# sourceMappingURL=curdModule.js.map

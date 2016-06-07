//1.app一組進入的程式來區分，例:某訂單的列表、新增、刪除修改
//2.controller控制view
//
var scModules;
(function (scModules) {
    var app;
    (function (app_1) {
        var crudApp = (function () {
            function crudApp() {
                var app = angular.module("crudApp", []);
                app.service("indexService", scModules.service.indexService);
                app.controller("indexCtrl", scModules.controller.indexController);
            }
            return crudApp;
        }());
        app_1.crudApp = crudApp;
    })(app = scModules.app || (scModules.app = {}));
})(scModules || (scModules = {}));
//# sourceMappingURL=curdApp.js.map
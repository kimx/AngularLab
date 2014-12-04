//1.app一組進入的程式來區分，例:某訂單的列表、新增、刪除修改
//2.controller控制view
//
module scModules.app {
    export class crudApp {
        constructor() {
            var app = angular.module("crudApp", []);
            app.service("indexService", service.indexService);
            app.controller("indexCtrl", scModules.controller.indexController);
        }
    }
}
var crudApp = new scModules.app.crudApp();

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
var scModules;
(function (scModules) {
    var controller;
    (function (controller) {
        var indexController = /** @class */ (function () {
            function indexController($scope, indexService) {
                this.$scope = $scope;
                this.indexService = indexService;
                $scope.event = this;
                var scope = $scope;
            }
            indexController.prototype.init = function (url) {
                this.$scope.getCategoryUrl = url;
            };
            indexController.prototype.getCategorys = function () {
                var _this = this;
                this.indexService.getCategorys(this.$scope.getCategoryUrl, function (categorys) {
                    _this.$scope.categorys = categorys;
                });
            };
            return indexController;
        }());
        controller.indexController = indexController;
        //class indexCtrl {
        //    constructor(private $scope) {
        //        $scope.init = init;
        //        $scope.test = test;
        //        function test(url) {
        //            $scope.url = "test:" + url;
        //        }
        //        function init(url) {
        //            $scope.url = "init2:" + url;
        //        }
        //    }
        //}
    })(controller = scModules.controller || (scModules.controller = {}));
})(scModules || (scModules = {}));
//# sourceMappingURL=indexController.js.map
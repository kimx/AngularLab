var scModules;
(function (scModules) {
    var controller;
    (function (controller) {
        var indexController = (function () {
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
    })(controller = scModules.controller || (scModules.controller = {}));
})(scModules || (scModules = {}));

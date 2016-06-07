var scModules;
(function (scModules) {
    var service;
    (function (service) {
        var indexService = (function () {
            function indexService($http) {
                this.$http = $http;
            }
            indexService.prototype.getCategorys = function (url, success) {
                this.$http.get(url).success(success);
            };
            return indexService;
        }());
        service.indexService = indexService;
    })(service = scModules.service || (scModules.service = {}));
})(scModules || (scModules = {}));
//# sourceMappingURL=indexService.js.map
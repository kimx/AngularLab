module scModules.controller {
    export class indexController {
        constructor(private $scope: scope.indexScope, private indexService: service.indexService) {
            $scope.event = this;
        }

        init(url) {
            this.$scope.getCategoryUrl = url;
        }
        getCategorys() {
            this.indexService.getCategorys(this.$scope.getCategoryUrl,(categorys: Array<model.categoryModel>) => {
                this.$scope.categorys = categorys;
            })
        }

    }


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
}

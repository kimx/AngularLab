module scModules.service {
    export class indexService {
        constructor(private $http: ng.IHttpService) {

        }
        getCategorys( success: ng.IHttpPromiseCallback<Array<model.categoryModel>>) {
            this.$http.get("/Crud/GetCategorys").success(success);
        }
    }
} 
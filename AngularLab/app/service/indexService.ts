module scModules.service {
    export class indexService {
        constructor(private $http: ng.IHttpService) {
       
        }
        getCategorys(url: string, success: ng.IHttpPromiseCallback<Array<model.categoryModel>>) {
            this.$http.get(url).success(success);
        }
    }
} 
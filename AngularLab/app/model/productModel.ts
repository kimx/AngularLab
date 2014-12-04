module scModules.model {
    export class productModel {
        ProductId: number;
        CategoryId: number;
        ProductName: string;
        Qty: number;
        Price: number;
        CreateDate: Date;
        OnSaled: boolean;
    }
}
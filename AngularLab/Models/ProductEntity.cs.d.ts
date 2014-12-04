declare module server {
	interface ProductEntity {
		productId: number;
		categoryId: number;
		productName: string;
		qty: number;
		price: number;
		createDate: Date;
		onSaled: boolean;
	}
}

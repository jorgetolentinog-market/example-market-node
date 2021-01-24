import { ProductId } from "@/context/admin/product/domain/product-id";

export class ProductCategorySearcherRequest {
  private _productId: ProductId;

  constructor(productId: string) {
    this._productId = new ProductId(productId);
  }

  productId() {
    return this._productId;
  }
}

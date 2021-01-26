import { CategoryId } from "@/context/admin/category/domain/category-id";
import { ProductId } from "@/context/admin/product/domain/product-id";

export class ProductCategoryRemoverRequest {
  private _productId: ProductId;
  private _categoryId: CategoryId;

  constructor(productId: string, categoryId: string) {
    this._productId = new ProductId(productId);
    this._categoryId = new CategoryId(categoryId);
  }

  productId() {
    return this._productId;
  }

  categoryId() {
    return this._categoryId;
  }
}

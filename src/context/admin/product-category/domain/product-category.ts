import { CategoryId } from "@/context/admin/category/domain/category-id";
import { ProductId } from "@/context/admin/product/domain/product-id";

export class ProductCategory {
  constructor(
    private readonly _productId: ProductId,
    private readonly _categoryId: CategoryId
  ) {}

  productId() {
    return this._productId;
  }

  categoryId() {
    return this._categoryId;
  }
}

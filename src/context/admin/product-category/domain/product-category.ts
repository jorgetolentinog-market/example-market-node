import { CategoryId } from "@/context/admin/category/domain/category-id";
import { ProductId } from "@/context/admin/product/domain/product-id";
import { ProductCategoryId } from "./product-category-id";

export class ProductCategory {
  constructor(
    private readonly _id: ProductCategoryId,
    private readonly _productId: ProductId,
    private readonly _categoryId: CategoryId
  ) {}

  id() {
    return this._id;
  }

  productId() {
    return this._productId;
  }

  categoryId() {
    return this._categoryId;
  }
}

import { CategoryId } from "@/context/admin/category/domain/category-id";
import { ProductId } from "@/context/admin/product/domain/product-id";
import { ProductCategoryId } from "../../domain/product-category-id";

export class ProductCategoryCreatorRequest {
  private _id: ProductCategoryId;
  private _productId: ProductId;
  private _categoryId: CategoryId;

  constructor(id: string, productId: string, categoryId: string) {
    this._id = new ProductCategoryId(id);
    this._productId = new ProductId(productId);
    this._categoryId = new CategoryId(categoryId);
  }

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

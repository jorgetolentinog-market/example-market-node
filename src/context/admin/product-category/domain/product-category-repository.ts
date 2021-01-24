import { ProductCategory } from "./product-category";
import { ProductCategoryId } from "./product-category-id";

export interface ProductCategoryRepository {
  save(productCategory: ProductCategory): Promise<void>;
  find(id: ProductCategoryId): Promise<ProductCategory | undefined>;
}

import { ProductId } from "../../product/domain/product-id";
import { ProductCategory } from "./product-category";

export interface ProductCategoryRepository {
  save(productCategory: ProductCategory): Promise<void>;
  search(productId: ProductId): Promise<ProductCategory[]>;
  delete(productCategory: ProductCategory): Promise<void>;
}

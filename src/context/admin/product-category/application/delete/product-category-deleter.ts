import { ProductCategory } from "../../domain/product-category";
import { ProductCategoryRepository } from "../../domain/product-category-repository";
import { ProductCategoryDeleterRequest } from "./product-category-deleter-request";

export class ProductCategoryDeleter {
  constructor(private repository: ProductCategoryRepository) {}

  async delete(request: ProductCategoryDeleterRequest): Promise<void> {
    let productCategory = new ProductCategory(
      request.productId(),
      request.categoryId()
    );
    await this.repository.delete(productCategory);
  }
}

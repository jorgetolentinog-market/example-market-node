import { ProductCategory } from "../../domain/product-category";
import { ProductCategoryRepository } from "../../domain/product-category-repository";
import { ProductCategoryCreatorRequest } from "./product-category-creator-request";

export class ProductCategoryCreator {
  constructor(private repository: ProductCategoryRepository) {}

  async create(request: ProductCategoryCreatorRequest): Promise<void> {
    let productCategory = new ProductCategory(
      request.id(),
      request.productId(),
      request.categoryId()
    );
    await this.repository.save(productCategory);
  }
}

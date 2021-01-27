import { ProductRepository } from "../../domain/product-repository";
import { ProductCategoryRemoverRequest } from "./category-remover-requet";

export class ProductCategoryRemover {
  constructor(private repository: ProductRepository) {}

  async remove(request: ProductCategoryRemoverRequest): Promise<void> {
    await this.repository.removeCategory(request.productId, request.categoryId);
  }
}

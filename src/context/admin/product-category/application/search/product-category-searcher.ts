import { ProductCategoryRepository } from "../../domain/product-category-repository";
import { ProductCategorySearcherRequest } from "./product-category-searcher-request";
import { ProductCategorySearcherResponse } from "./product-category-searcher-response";

export class ProductCategorySearcher {
  constructor(private repository: ProductCategoryRepository) {}

  async search(
    request: ProductCategorySearcherRequest
  ): Promise<ProductCategorySearcherResponse> {
    let list = await this.repository.search(request.productId());
    return new ProductCategorySearcherResponse(list);
  }
}

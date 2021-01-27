import { ProductQueryRepository } from "../../domain/product-query-repository";
import { ProductSearcherResponse } from "./product-searcher-response";

export class ProductSearcher {
  constructor(private repository: ProductQueryRepository) {}

  async search(): Promise<ProductSearcherResponse> {
    let products = await this.repository.search();
    return new ProductSearcherResponse(products);
  }
}

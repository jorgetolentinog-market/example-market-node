import { ProductQueryRepository } from "../../domain/product-query-repository";
import { ProductQuerySearcherResponse } from "./product-query-searcher-response";

export class ProductQuerySearcher {
  constructor(private repository: ProductQueryRepository) {}

  async search(): Promise<ProductQuerySearcherResponse> {
    let products = await this.repository.search();
    return new ProductQuerySearcherResponse(products);
  }
}

import { ProductRepository } from "@/context/admin/product/domain/product-repository";
import { ProductSearcherResponse } from "./product-searcher-response";

export class ProductSearcher {
  constructor(private repository: ProductRepository) {}

  async search(): Promise<ProductSearcherResponse> {
    let products = await this.repository.search();
    return new ProductSearcherResponse(products)
  }
}

import { Product, ProductRepository } from "@market/product/domain";

export class ProductSearcher {
  constructor(private repository: ProductRepository) {}

  async search(): Promise<Product[]> {
    return this.repository.findAll();
  }
}

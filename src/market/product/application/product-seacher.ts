import { Product, ProductId, ProductRepository } from "@market/product/domain";

export class ProductSearcher {
  constructor(private repository: ProductRepository) {}

  async search(id: ProductId): Promise<Product | undefined> {
    return await this.repository.search(id);
  }
}

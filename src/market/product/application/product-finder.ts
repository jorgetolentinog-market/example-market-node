import { Product, ProductId, ProductRepository } from "@market/product/domain";

export class ProductFinder {
  constructor(private repository: ProductRepository) {}

  async find(id: ProductId): Promise<Product[]> {
    return this.repository.find(id);
  }
}

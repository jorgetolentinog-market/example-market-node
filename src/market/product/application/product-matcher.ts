import { Product, ProductRepository } from "@market/product/domain";

export class ProductMatcher {
  constructor(private repository: ProductRepository) {}

  async match(): Promise<Product[]> {
    return await this.repository.matching();
  }
}

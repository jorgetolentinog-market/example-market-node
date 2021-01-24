import { Product } from "@/context/market/product/domain/product";
import { ProductRepository } from "@/context/market/product/domain/product-repository";

export class ProductMatcher {
  constructor(private repository: ProductRepository) {}

  async match(): Promise<Product[]> {
    return await this.repository.matching();
  }
}

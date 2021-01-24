import { Product } from "@/context/admin/product/domain/product";
import { ProductRepository } from "@/context/admin/product/domain/product-repository";

export class ProductMatcher {
  constructor(private repository: ProductRepository) {}

  async match(): Promise<Product[]> {
    return await this.repository.matching();
  }
}
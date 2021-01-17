import { Product, ProductId, ProductRepository } from "@market/product/domain";

export class ProductFinder {
  constructor(private repository: ProductRepository) {}

  find(id: ProductId): Product[] {
    return this.repository.find(id);
  }
}

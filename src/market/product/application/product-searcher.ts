import { Product, ProductRepository } from "@market/product/domain";

export class ProductSearcher {
  constructor(private repository: ProductRepository) {}

  search(): Product[] {
    return this.repository.findAll();
  }
}

import { Product } from "@module/product/domain/product";
import { ProductRepository } from "@module/product/domain/product-repository";

export class ProductSearcher {
  constructor(private repository: ProductRepository) {}

  search(): Product[] {
    return this.repository.findAll();
  }
}

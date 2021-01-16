import { Product, ProductId } from "@app/module/product/domain/product";
import { ProductRepository } from "@app/module/product/domain/product-repository";

export class ProductFinder {
  constructor(private repository: ProductRepository) {}

  find(id: ProductId): Product[] {
    return this.repository.find(id);
  }
}

import { Product, ProductId } from "../domain/product";
import { ProductRepository } from "../domain/repository";

export class ProductFinder {
  constructor(private repository: ProductRepository) {}

  find(id: ProductId): Product[] {
    return this.repository.find(id);
  }
}

import { Product } from "../domain/product";
import { ProductRepository } from "../domain/repository";

export class ProductSearcher {
  constructor(private repository: ProductRepository) {}

  search(): Product[] {
    return this.repository.findAll();
  }
}

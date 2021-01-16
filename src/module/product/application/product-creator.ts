import { Product, ProductId, ProductName } from "../domain/product";
import { ProductRepository } from "../domain/repository";

export class ProductCreator {
  constructor(private repository: ProductRepository) {}

  create(id: ProductId, name: ProductName): void {
    let product = new Product(id, name);
    this.repository.save(product);
  }
}

import {
  Product,
  ProductId,
  ProductName,
} from "@app/module/product/domain/product";
import { ProductRepository } from "@app/module/product/domain/product-repository";

export class ProductCreator {
  constructor(private repository: ProductRepository) {}

  create(id: ProductId, name: ProductName): void {
    let product = new Product(id, name);
    this.repository.save(product);
  }
}

import {
  Product,
  ProductId,
  ProductName,
  ProductRepository,
} from "@market/product/domain";

export class ProductCreator {
  constructor(private repository: ProductRepository) {}

  create(id: ProductId, name: ProductName): void {
    let product = new Product(id, name);
    this.repository.save(product);
  }
}

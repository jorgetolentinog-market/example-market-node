import { Product, ProductId, ProductName } from "../../domain/product";
import { ProductRepository } from "../../domain/repository";

export class DynamoProductRepository implements ProductRepository {
  save(product: Product): void {
    console.log("product", product);
  }

  find(id: ProductId): Product[] {
    return [
      new Product(new ProductId("1"), new ProductName("Name 1")),
      new Product(new ProductId("2"), new ProductName("Name 2")),
    ];
  }

  findAll(): Product[] {
    return [
      new Product(new ProductId("3"), new ProductName("Name 3")),
      new Product(new ProductId("4"), new ProductName("Name 4")),
    ];
  }
}

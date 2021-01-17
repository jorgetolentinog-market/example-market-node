import {
  Product,
  ProductId,
  ProductName,
  ProductRepository,
} from "@market/product/domain";
import { v4 as uuidv4 } from "uuid";

export class DynamoProductRepository implements ProductRepository {
  save(product: Product): void {
    console.log("product", product);
  }

  find(id: ProductId): Product[] {
    return [
      new Product(new ProductId(uuidv4()), new ProductName("Name 1")),
      new Product(new ProductId(uuidv4()), new ProductName("Name 2")),
    ];
  }

  findAll(): Product[] {
    return [
      new Product(new ProductId(uuidv4()), new ProductName("Name 3")),
      new Product(new ProductId(uuidv4()), new ProductName("Name 4")),
    ];
  }
}

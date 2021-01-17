import {
  Product,
  ProductId,
  ProductName,
  ProductRepository,
} from "@market/product/domain";
import { v4 as uuidv4 } from "uuid";
import { client as ddbClient } from "@shared/infrasctructure/dynamodb";

export class DynamoProductRepository implements ProductRepository {
  async save(product: Product) {
    console.log("product", product);

    await ddbClient
      .put({
        TableName: "product",
        Item: {
          id: product.id().value(),
          name: product.name().value(),
        },
      })
      .promise();
  }

  async find(id: ProductId) {
    return [
      new Product(new ProductId(uuidv4()), new ProductName("Name 1")),
      new Product(new ProductId(uuidv4()), new ProductName("Name 2")),
    ];
  }

  async findAll() {
    return [
      new Product(new ProductId(uuidv4()), new ProductName("Name 3")),
      new Product(new ProductId(uuidv4()), new ProductName("Name 4")),
    ];
  }
}

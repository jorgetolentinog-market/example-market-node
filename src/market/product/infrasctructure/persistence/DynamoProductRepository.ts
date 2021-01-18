import {
  Product,
  ProductId,
  ProductName,
  ProductRepository,
} from "@market/product/domain";
import { client as document } from "@shared/infrasctructure/dynamodb";

export class DynamoProductRepository implements ProductRepository {
  async save(product: Product) {
    await document
      .put({
        TableName: "product",
        Item: {
          id: product.id().value(),
          name: product.name().value(),
        },
      })
      .promise();
  }

  async search(id: ProductId) {
    let result = await document
      .get({
        TableName: "product",
        Key: {
          id: id.value(),
        },
      })
      .promise();

    if (!result.Item) {
      return undefined;
    }

    return new Product(
      new ProductId(result.Item.id),
      new ProductName(result.Item.name)
    );
  }

  async matching() {
    let result = await document
      .scan({
        TableName: "product",
        Limit: 1000,
      })
      .promise();

    return result.Items!.map(
      (item) => new Product(new ProductId(item.id), new ProductName(item.name))
    );
  }
}

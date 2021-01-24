import { Product } from "@/context/market/product/domain/product";
import { ProductId } from "@/context/market/product/domain/product-id";
import { ProductName } from "@/context/market/product/domain/product-name";
import { ProductPrice } from "@/context/market/product/domain/product-price";
import { ProductRepository } from "@/context/market/product/domain/product-repository";
import { DynamoDBClient } from "@/context/shared/infrasctructure/dynamodb";

export class DynamoProductRepository implements ProductRepository {
  async save(product: Product) {
    await DynamoDBClient.put({
      TableName: "product",
      Item: {
        id: product.id().value(),
        name: product.name().value(),
        price: product.price().value(),
      },
    }).promise();
  }

  async search(id: ProductId) {
    let result = await DynamoDBClient.get({
      TableName: "product",
      Key: {
        id: id.value(),
      },
    }).promise();

    if (!result.Item) {
      return undefined;
    }

    return new Product(
      new ProductId(result.Item.id),
      new ProductName(result.Item.name),
      new ProductPrice(result.Item.price)
    );
  }

  async matching() {
    let result = await DynamoDBClient.scan({
      TableName: "product",
      Limit: 1000,
    }).promise();

    return result.Items!.map(
      (item) =>
        new Product(
          new ProductId(item.id),
          new ProductName(item.name),
          new ProductPrice(item.price)
        )
    );
  }
}

import { ProductId } from "@/context/admin/product/domain/product-id";
import { ProductName } from "@/context/admin/product/domain/product-name";
import { ProductPrice } from "@/context/admin/product/domain/product-price";
import { ProductRepository } from "@/context/admin/product/domain/product-repository";
import { DynamoDBClient } from "@/context/shared/infrasctructure/dynamodb";
import { Product } from "../domain/product";
import { ProductCategories } from "../domain/product-categories";

export class DynamoProductRepository implements ProductRepository {
  async save(product: Product) {
    await DynamoDBClient.put({
      TableName: "product",
      Item: {
        id: product.id().primitive(),
        name: product.name().primitive(),
        price: product.price().primitive(),
        categories: product.categories().primitive(),
      },
    }).promise();
  }

  async find(id: ProductId) {
    let result = await DynamoDBClient.get({
      TableName: "product",
      Key: {
        id: id.primitive(),
      },
    }).promise();

    if (!result.Item) {
      return undefined;
    }

    return new Product(
      new ProductId(result.Item.id),
      new ProductName(result.Item.name),
      new ProductPrice(result.Item.price),
      new ProductCategories(result.Item.categories)
    );
  }

  async search() {
    let result = await DynamoDBClient.scan({
      TableName: "product",
      Limit: 1000,
    }).promise();

    return result.Items!.map(
      (item) =>
        new Product(
          new ProductId(item.id),
          new ProductName(item.name),
          new ProductPrice(item.price),
          new ProductCategories(item.categories)
        )
    );
  }
}

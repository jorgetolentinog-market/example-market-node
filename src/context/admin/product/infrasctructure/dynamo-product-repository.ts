import { ProductRepository } from "@/context/admin/product/domain/product-repository";
import {
  Identifier,
  NumberValue,
  StringValue,
} from "@/shared/domain/value-object";
import { DynamoDBClient } from "@/shared/infrasctructure/dynamodb";
import { Product } from "../domain/product";
import { ProductCategoriesId } from "../domain/product-categories-id";

export class DynamoProductRepository implements ProductRepository {
  async save(product: Product) {
    await DynamoDBClient.put({
      TableName: "product",
      Item: {
        id: product.id.primitive(),
        name: product.name.primitive(),
        price: product.price.primitive(),
        categories: product.categories.primitive(),
      },
    }).promise();
  }

  async find(id: Identifier) {
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
      new Identifier(result.Item.id),
      new StringValue(result.Item.name),
      new NumberValue(result.Item.price),
      new ProductCategoriesId(result.Item.categories)
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
          new Identifier(item.id),
          new StringValue(item.name),
          new NumberValue(item.price),
          new ProductCategoriesId(item.categories)
        )
    );
  }

  async removeCategory(
    productId: Identifier,
    categoryId: Identifier
  ): Promise<void> {
    let product = await this.find(productId);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    let categories = product.categories.primitive();

    const index = categories.indexOf(categoryId.primitive());
    if (index > -1) {
      categories.splice(index, 1);
    }

    await DynamoDBClient.update({
      TableName: "product",
      Key: {
        id: product.id.primitive(),
      },
      UpdateExpression: "SET #categories = :categories",
      ExpressionAttributeNames: {
        "#categories": "categories",
      },
      ExpressionAttributeValues: {
        ":categories": categories,
      },
    }).promise();
  }
}

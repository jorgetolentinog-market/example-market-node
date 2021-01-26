import { ProductId } from "@/context/admin/product/domain/product-id";
import { ProductName } from "@/context/admin/product/domain/product-name";
import { ProductPrice } from "@/context/admin/product/domain/product-price";
import { ProductRepository } from "@/context/admin/product/domain/product-repository";
import { DynamoDBClient } from "@/context/shared/infrasctructure/dynamodb";
import { CategoryId } from "../../category/domain/category-id";
import { Product } from "../domain/product";
import { ProductCategoriesId } from "../domain/product-categories-id";

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
          new ProductId(item.id),
          new ProductName(item.name),
          new ProductPrice(item.price),
          new ProductCategoriesId(item.categories)
        )
    );
  }

  async removeCategory(
    productId: ProductId,
    categoryId: CategoryId
  ): Promise<void> {
    let product = await this.find(productId);
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    let categories = product.categories().primitive();

    const index = categories.indexOf(categoryId.primitive());
    if (index > -1) {
      categories.splice(index, 1);
    }

    await DynamoDBClient.update({
      TableName: "product",
      Key: {
        id: product.id().primitive(),
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

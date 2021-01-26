import { ProductId } from "@/context/admin/product/domain/product-id";
import { DynamoDBClient } from "@/shared/infrasctructure/dynamodb";
import { CategoryId } from "../../category/domain/category-id";
import { ProductCategory } from "../domain/product-category";
import { ProductCategoryRepository } from "../domain/product-category-repository";

export class DynamoProductCategoryRepository
  implements ProductCategoryRepository {
  async save(productCategory: ProductCategory) {
    await DynamoDBClient.put({
      TableName: "product-category",
      Item: {
        productId: productCategory.productId().value(),
        categoryId: productCategory.categoryId().value(),
      },
    }).promise();
  }

  async search(productId: ProductId) {
    let result = await DynamoDBClient.query({
      TableName: "product-category",
      KeyConditionExpression: "#productId = :productId",
      ExpressionAttributeNames: {
        "#productId": "productId",
      },
      ExpressionAttributeValues: {
        ":productId": productId.value(),
      },
      Limit: 1000,
    }).promise();

    return result.Items!.map(
      (item) =>
        new ProductCategory(
          new ProductId(item.productId),
          new CategoryId(item.categoryId)
        )
    );
  }

  async delete(productCategory: ProductCategory): Promise<void> {
    await DynamoDBClient.delete({
      TableName: "product-category",
      Key: {
        productId: productCategory.productId().value(),
        categoryId: productCategory.categoryId().value(),
      },
    }).promise();
  }
}

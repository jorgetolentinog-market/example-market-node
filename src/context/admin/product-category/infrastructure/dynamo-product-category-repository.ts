import { ProductId } from "@/context/admin/product/domain/product-id";
import { DynamoDBClient } from "@/context/shared/infrasctructure/dynamodb";
import { CategoryId } from "../../category/domain/category-id";
import { ProductCategory } from "../domain/product-category";
import { ProductCategoryId } from "../domain/product-category-id";
import { ProductCategoryRepository } from "../domain/product-category-repository";

export class DynamoProductCategoryRepository
  implements ProductCategoryRepository {
  async save(productCategory: ProductCategory) {
    await DynamoDBClient.put({
      TableName: "product-category",
      Item: {
        id: productCategory.id().value(),
        product: productCategory.productId().value(),
        category: productCategory.categoryId().value(),
      },
    }).promise();
  }

  async find(id: ProductCategoryId) {
    let result = await DynamoDBClient.get({
      TableName: "product-category",
      Key: {
        id: id.value(),
      },
    }).promise();

    if (!result.Item) {
      return undefined;
    }

    return new ProductCategory(
      new ProductCategoryId(result.Item.id),
      new ProductId(result.Item.name),
      new CategoryId(result.Item.price)
    );
  }
}

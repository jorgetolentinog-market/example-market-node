import { DynamoDBClient } from "@/context/shared/infrasctructure/dynamodb";
import { Category } from "../domain/category";
import { CategoryId } from "../domain/category-id";
import { CategoryName } from "../domain/category-name";
import { CategoryRepository } from "../domain/category-repository";

export class DynamoCategoryRepository implements CategoryRepository {
  async save(category: Category): Promise<void> {
    await DynamoDBClient.put({
      TableName: "category",
      Item: {
        id: category.id().value(),
        name: category.name().value(),
      },
    }).promise();
  }

  async find(id: CategoryId): Promise<Category | undefined> {
    let result = await DynamoDBClient.get({
      TableName: "category",
      Key: {
        id: id.value(),
      },
    }).promise();

    if (!result.Item) {
      return;
    }

    return new Category(
      new CategoryId(result.Item.id),
      new CategoryName(result.Item.name)
    );
  }

  async search(): Promise<Category[]> {
    let result = await DynamoDBClient.scan({
      TableName: "category",
      Limit: 1000,
    }).promise();

    return result.Items!.map(
      (item) =>
        new Category(new CategoryId(item.id), new CategoryName(item.name))
    );
  }
}

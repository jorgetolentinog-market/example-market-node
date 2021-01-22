import { DynamoDBClient } from "@shared/infrasctructure/dynamodb";
import { Store } from "../domain/store";
import { StoreCreatedAt } from "../domain/store-created-at";
import { StoreId } from "../domain/store-id";
import { StoreName } from "../domain/store-name";
import { StoreRepository } from "../domain/store-repository";

export class DynamoStoreRepository implements StoreRepository {
  async save(store: Store) {
    await DynamoDBClient.put({
      TableName: "store",
      Item: {
        id: store.id().value(),
        name: store.name().value(),
        createdAt: store.createdAt().value(),
      },
    }).promise();
  }

  async search(id: StoreId) {
    let result = await DynamoDBClient.get({
      TableName: "store",
      Key: {
        id: id.value(),
      },
    }).promise();

    if (!result.Item) {
      return undefined;
    }

    return new Store(
      new StoreId(result.Item.id),
      new StoreName(result.Item.name),
      new StoreCreatedAt(result.Item.createdAt)
    );
  }
}

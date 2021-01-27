import {
  Identifier,
  NumberValue,
  StringValue,
} from "@/shared/domain/value-object";
import { DynamoDBClient } from "@/shared/infrasctructure/dynamodb";
import { ProductQuery } from "../domain/product-query";
import { ProductQueryCategories } from "../domain/product-query-categories";
import { ProductQueryCategory } from "../domain/product-query-category";
import { ProductQueryRepository } from "../domain/product-query-repository";

export class DynamoProductQueryRepository implements ProductQueryRepository {
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

    let categories = await getCategoriesByIds(result.Item.categories);

    return new ProductQuery(
      new Identifier(result.Item.id),
      new StringValue(result.Item.name),
      new NumberValue(result.Item.price),
      new ProductQueryCategories(categories)
    );
  }

  async search() {
    let result = await DynamoDBClient.scan({
      TableName: "product",
      Limit: 1000,
    }).promise();

    let products = [];
    for (let item of result.Items!) {
      let categories = await getCategoriesByIds(item.categories);

      products.push(
        new ProductQuery(
          new Identifier(item.id),
          new StringValue(item.name),
          new NumberValue(item.price),
          new ProductQueryCategories(categories)
        )
      );
    }

    return products;
  }
}

async function getCategoriesByIds(ids: string[]) {
  let categories = [];
  for (let id of ids) {
    let category = await getCategoryById(id);
    if (!category) {
      continue;
    }
    categories.push(category);
  }

  return categories;
}

async function getCategoryById(id: string) {
  let result = await DynamoDBClient.get({
    TableName: "category",
    Key: {
      id: id,
    },
  }).promise();

  if (!result.Item) {
    return undefined;
  }
  return new ProductQueryCategory(
    new Identifier(result.Item.id),
    new StringValue(result.Item.name)
  );
}

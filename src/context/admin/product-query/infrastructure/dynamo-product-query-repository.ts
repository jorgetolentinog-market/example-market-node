import { ProductId } from "@/context/admin/product/domain/product-id";
import { ProductName } from "@/context/admin/product/domain/product-name";
import { ProductPrice } from "@/context/admin/product/domain/product-price";
import { DynamoDBClient } from "@/shared/infrasctructure/dynamodb";
import { Category } from "../../category/domain/category";
import { CategoryId } from "../../category/domain/category-id";
import { CategoryName } from "../../category/domain/category-name";
import { ProductQuery } from "../domain/product-query";
import { ProductQueryCategories } from "../domain/product-query-categories";
import { ProductQueryRepository } from "../domain/product-query-repository";

export class DynamoProductQueryRepository implements ProductQueryRepository {
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

    let categories = await getCategoriesById(result.Item.categories);

    return new ProductQuery(
      new ProductId(result.Item.id),
      new ProductName(result.Item.name),
      new ProductPrice(result.Item.price),
      new ProductQueryCategories(categories)
    );
  }

  async search() {
    let result = await DynamoDBClient.scan({
      TableName: "product",
      Limit: 1000,
    }).promise();

    if (!result.Items) {
      return [];
    }

    let products = [];
    for (let item of result.Items) {
      let categories = await getCategoriesById(item.categories);
      products.push(
        new ProductQuery(
          new ProductId(item.id),
          new ProductName(item.name),
          new ProductPrice(item.price),
          new ProductQueryCategories(categories)
        )
      );
    }

    return products;
  }
}

async function getCategoriesById(categoriesId: string[]) {
  let categories = [];
  for (let categoryId in categoriesId) {
    let category = await getCategoryById(categoryId);
    if (!category) {
      continue;
    }
    categories.push(category);
  }
  return categories;
}

async function getCategoryById(categoryId: string) {
  let result = await DynamoDBClient.get({
    TableName: "category",
    Key: {
      id: categoryId,
    },
  }).promise();

  if (!result.Item) {
    return undefined;
  }

  return new Category(
    new CategoryId(result.Item.id),
    new CategoryName(result.Item.id)
  );
}

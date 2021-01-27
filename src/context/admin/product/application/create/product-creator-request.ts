import {
  Identifier,
  NumberValue,
  StringValue,
} from "@/shared/domain/value-object";
import { ProductCategoriesId } from "../../domain/product-categories-id";

export class ProductCreatorRequest {
  public readonly id: Identifier;
  public readonly name: StringValue;
  public readonly price: NumberValue;
  public readonly categories: ProductCategoriesId;

  constructor(id: string, name: string, price: number, categories: string[]) {
    this.id = new Identifier(id);
    this.name = new StringValue(name);
    this.price = new NumberValue(price);
    this.categories = new ProductCategoriesId(categories);
  }
}

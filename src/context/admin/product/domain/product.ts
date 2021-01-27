import {
  Identifier,
  NumberValue,
  StringValue,
} from "@/shared/domain/value-object";
import { ProductCategoriesId } from "./product-categories-id";

export class Product {
  constructor(
    public readonly id: Identifier,
    public readonly name: StringValue,
    public readonly price: NumberValue,
    public readonly categories: ProductCategoriesId
  ) {}
}

import {
  Identifier,
  NumberValue,
  StringValue,
} from "@/shared/domain/value-object";
import { ProductQueryCategories } from "./product-query-categories";

export class ProductQuery {
  constructor(
    public readonly id: Identifier,
    public readonly name: StringValue,
    public readonly price: NumberValue,
    public readonly categories: ProductQueryCategories
  ) {}
}

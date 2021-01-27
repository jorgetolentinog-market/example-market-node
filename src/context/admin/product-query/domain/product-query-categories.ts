import { ValueObject } from "@/shared/domain/value-object";
import { ProductQueryCategory } from "./product-query-category";

export class ProductQueryCategories extends ValueObject<
  ProductQueryCategory[],
  ProductQueryCategory[]
> {
  primitive() {
    return this.value.map((v) => ({
      id: v.id.primitive(),
      name: v.name.primitive(),
    }));
  }
}

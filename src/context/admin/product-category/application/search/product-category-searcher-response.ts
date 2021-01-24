import { ProductCategory } from "../../domain/product-category";

export class ProductCategorySearcherResponse {
  constructor(private readonly input: ProductCategory[]) {}

  response() {
    return this.input.map((c) => ({
      categoryId: c.categoryId().value(),
    }));
  }
}

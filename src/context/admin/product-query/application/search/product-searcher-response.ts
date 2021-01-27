import { ProductQuery } from "../../domain/product-query";

export class ProductSearcherResponse {
  constructor(private readonly input: ProductQuery[]) {}

  response() {
    return this.input.map((obj) => ({
      id: obj.id.primitive(),
      name: obj.name.primitive(),
      price: obj.price.primitive(),
      categories: obj.categories.primitive(),
    }));
  }
}

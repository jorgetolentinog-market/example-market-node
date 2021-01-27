import { ProductQuery } from "../../domain/product-query";

export class ProductQueryFinderResponse {
  constructor(private readonly input: ProductQuery) {}

  response() {
    return {
      id: this.input.id.primitive(),
      name: this.input.name.primitive(),
      price: this.input.price.primitive(),
      categories: this.input.categories.primitive(),
    };
  }
}

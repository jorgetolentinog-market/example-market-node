import { Product } from "../../domain/product";

export class ProductFinderResponse {
  constructor(private readonly input: Product) {}

  response() {
    return {
      id: this.input.id().primitive(),
      name: this.input.name().primitive(),
      price: this.input.price().primitive(),
      categories: this.input.categories().primitive(),
    };
  }
}

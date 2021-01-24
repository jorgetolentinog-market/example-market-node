import { Product } from "../../domain/product";

export class ProductFinderResponse {
  constructor(private readonly input: Product) {}

  response() {
    return {
      id: this.input.id().value(),
      name: this.input.name().value(),
      price: this.input.price().value(),
    };
  }
}

import { ProductBase } from "../../domain/product-base";

export class ProductFinderResponse {
  constructor(private readonly input: ProductBase) {}

  response() {
    return {
      id: this.input.id().value(),
      name: this.input.name().value(),
      price: this.input.price().value(),
    };
  }
}

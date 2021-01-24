import { Product } from "../../domain/product";

export class ProductSearcherResponse {
  constructor(private readonly input: Product[]) {}

  response() {
    return this.input.map((c) => ({
      id: c.id().value(),
      name: c.name().value(),
      price: c.price().value(),
    }));
  }
}


import { ProductBase } from "../../domain/product-base";

export class ProductSearcherResponse {
  constructor(private readonly input: ProductBase[]) {}

  response() {
    return this.input.map((c) => ({
      id: c.id().value(),
      name: c.name().value(),
      price: c.price().value(),
    }));
  }
}


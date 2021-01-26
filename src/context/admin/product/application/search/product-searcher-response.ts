import { Product } from "../../domain/product";

export class ProductSearcherResponse {
  constructor(private readonly input: Product[]) {}

  response() {
    return this.input.map((obj) => ({
      id: obj.id().primitive(),
      name: obj.name().primitive(),
      price: obj.price().primitive(),
      categories: obj.categories().primitive(),
    }));
  }
}

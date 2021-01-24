import { Category } from "../../domain/category";

export class CategorySearcherResponse {
  constructor(private readonly input: Category[]) {}

  response() {
    return this.input.map((c) => ({
      id: c.id().value(),
      name: c.name().value(),
    }));
  }
}

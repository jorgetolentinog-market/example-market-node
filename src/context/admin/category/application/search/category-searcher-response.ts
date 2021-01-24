import { Category } from "../../domain/category";

export class CategorySearcherResponse {
  constructor(private readonly input: Category) {}

  category() {
    return {
      id: this.input.id().value(),
      name: this.input.name().value(),
    };
  }
}

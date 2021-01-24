import { Category } from "../../domain/category";

export class CategoryFinderResponse {
  constructor(private readonly input: Category) {}

  response() {
    return {
      id: this.input.id().value(),
      name: this.input.name().value(),
    };
  }
}

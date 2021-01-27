import { Category } from "../../domain/category";

export class CategoryFinderResponse {
  constructor(private readonly input: Category) {}

  toJSON() {
    return {
      id: this.input.id.value,
      name: this.input.name.value,
    };
  }
}

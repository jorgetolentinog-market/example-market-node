import { Category } from "../../domain/category";

export class CategorySearcherResponse {
  constructor(private readonly input: Category[]) {}

  toJSON() {
    return this.input.map((obj) => ({
      id: obj.id.value,
      name: obj.name.value,
    }));
  }
}

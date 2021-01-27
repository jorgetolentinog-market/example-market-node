import { CategoryRepository } from "../../domain/category-repository";
import { CategoryFinderRequest } from "./category-finder-request";
import { CategoryFinderResponse } from "./category-finder-response";

export class CategoryFinder {
  constructor(private repository: CategoryRepository) {}

  async find(request: CategoryFinderRequest): Promise<CategoryFinderResponse> {
    let category = await this.repository.find(request.id);

    if (!category) {
      throw new Error("Categoria no encontrada");
    }

    return new CategoryFinderResponse(category);
  }
}

import { CategoryRepository } from "../../domain/category-repository";
import { CategorySearcherRequest } from "./category-searcher-request";
import { CategorySearcherResponse } from "./category-searcher-response";

export class CategorySearcher {
  constructor(private repository: CategoryRepository) {}

  async search(
    request: CategorySearcherRequest
  ): Promise<CategorySearcherResponse> {
    let category = await this.repository.search(request.id());

    if (!category) {
      throw new Error("Categoria no encontrada");
    }

    return new CategorySearcherResponse(category);
  }
}

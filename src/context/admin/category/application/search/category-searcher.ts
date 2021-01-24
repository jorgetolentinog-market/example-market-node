import { CategoryRepository } from "../../domain/category-repository";
import { CategorySearcherResponse } from "./category-searcher-response";

export class CategorySearcher {
  constructor(private repository: CategoryRepository) {}

  async search(): Promise<CategorySearcherResponse> {
    let categories = await this.repository.search();
    return new CategorySearcherResponse(categories);
  }
}

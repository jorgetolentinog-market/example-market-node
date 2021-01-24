import { Category } from "../../domain/category";
import { CategoryRepository } from "../../domain/category-repository";
import { CategoryCreatorRequest } from "./category-creator-request";

export class CategoryCreator {
  constructor(private repository: CategoryRepository) {}

  async create(request: CategoryCreatorRequest): Promise<void> {
    let category = new Category(request.id(), request.name());
    await this.repository.save(category);
  }
}

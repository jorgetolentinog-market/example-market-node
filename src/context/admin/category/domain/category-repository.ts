import { Category } from "./category";
import { CategoryId } from "./category-id";

export interface CategoryRepository {
  save(category: Category): Promise<void>;
  find(id: CategoryId): Promise<Category | undefined>;
  search(): Promise<Category[]>;
}

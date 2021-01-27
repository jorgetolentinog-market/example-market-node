import { Identifier } from "@/shared/domain/value-object";
import { Category } from "./category";

export interface CategoryRepository {
  save(category: Category): Promise<void>;
  find(id: Identifier): Promise<Category | undefined>;
  search(): Promise<Category[]>;
}

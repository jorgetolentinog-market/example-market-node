import { CategoryId } from "@/context/admin/category/domain/category-id";

export class ProductCategories {
  private _categories: CategoryId[];

  constructor(categories: string[]) {
    for (let categoryId of categories) {
      this._categories.push(new CategoryId(categoryId));
    }
  }

  value() {
    return this._categories;
  }

  primitive() {
    return this._categories.map((obj) => obj.value());
  }
}

import { Category } from "../../category/domain/category";

export class ProductQueryCategories {
  constructor(private _categories: Category[]) {}

  value() {
    return this._categories;
  }
}

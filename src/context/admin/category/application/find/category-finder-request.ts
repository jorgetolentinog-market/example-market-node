import { CategoryId } from "../../domain/category-id";

export class CategoryFinderRequest {
  private readonly _id: CategoryId;

  constructor(id: string) {
    this._id = new CategoryId(id);
  }

  id() {
    return this._id;
  }
}

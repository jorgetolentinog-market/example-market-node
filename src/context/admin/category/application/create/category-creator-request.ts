import { CategoryId } from "../../domain/category-id";
import { CategoryName } from "../../domain/category-name";

export class CategoryCreatorRequest {
  private readonly _id: CategoryId;
  private readonly _name: CategoryName;

  constructor(id: string, name: string) {
    this._id = new CategoryId(id);
    this._name = new CategoryName(name);
  }

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }
}

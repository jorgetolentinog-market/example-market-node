import { CategoryId } from "./category-id";
import { CategoryName } from "./category-name";

export class Category {
  constructor(
    private readonly _id: CategoryId,
    private readonly _name: CategoryName
  ) {}

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }
}

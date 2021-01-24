import { StoreCreatedAt } from "./store-created-at";
import { StoreId } from "./store-id";
import { StoreName } from "./store-name";

export class Store {
  constructor(
    private readonly _id: StoreId,
    private readonly _name: StoreName,
    private readonly _createdAt: StoreCreatedAt
  ) {}

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }

  createdAt() {
    return this._createdAt;
  }
}

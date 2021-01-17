import { ProductId } from "./product-id";
import { ProductName } from "./product-name";

export class Product {
  constructor(
    private readonly _id: ProductId,
    private readonly _name: ProductName
  ) {}

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }
}

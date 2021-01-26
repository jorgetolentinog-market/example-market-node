import { ProductCategories } from "./product-categories";
import { ProductId } from "./product-id";
import { ProductName } from "./product-name";
import { ProductPrice } from "./product-price";

export class Product {
  constructor(
    private readonly _id: ProductId,
    private readonly _name: ProductName,
    private readonly _price: ProductPrice,
    private readonly _categories: ProductCategories
  ) {}

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }

  price() {
    return this._price;
  }

  categories() {
    return this._categories;
  }
}

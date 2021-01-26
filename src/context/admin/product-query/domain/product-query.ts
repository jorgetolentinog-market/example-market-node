import { ProductId } from "../../product/domain/product-id";
import { ProductName } from "../../product/domain/product-name";
import { ProductPrice } from "../../product/domain/product-price";
import { ProductQueryCategories } from "./product-query-categories";

export class ProductQuery {
  constructor(
    private readonly _id: ProductId,
    private readonly _name: ProductName,
    private readonly _price: ProductPrice,
    private readonly _categories: ProductQueryCategories
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

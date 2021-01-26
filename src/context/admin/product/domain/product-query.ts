import { Category } from "../../category/domain/category";
import { ProductBase } from "./product-base";
import { ProductId } from "./product-id";
import { ProductName } from "./product-name";
import { ProductPrice } from "./product-price";

export class ProductQuery extends ProductBase {
  constructor(
    id: ProductId,
    name: ProductName,
    price: ProductPrice,
    private readonly _categories: Category[]
  ) {
    super(id, name, price);
  }

  categories() {
    return this._categories;
  }
}

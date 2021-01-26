import { ProductBase } from "./product-base";
import { ProductCategories } from "./product-categories";
import { ProductId } from "./product-id";
import { ProductName } from "./product-name";
import { ProductPrice } from "./product-price";

export class ProductOld extends ProductBase {
  constructor(
    id: ProductId,
    name: ProductName,
    price: ProductPrice,
    private readonly _categories: ProductCategories
  ) {
    super(id, name, price);
  }

  categories() {
    return this._categories;
  }
}

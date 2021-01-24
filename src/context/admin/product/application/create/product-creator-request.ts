import { ProductId } from "@/context/admin/product/domain/product-id";
import { ProductName } from "@/context/admin/product/domain/product-name";
import { ProductPrice } from "@/context/admin/product/domain/product-price";

export class ProductCreatorRequest {
  private _id: ProductId;
  private _name: ProductName;
  private _price: ProductPrice;

  constructor(id: string, name: string, price: number) {
    this._id = new ProductId(id);
    this._name = new ProductName(name);
    this._price = new ProductPrice(price);
  }

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }

  price() {
    return this._price;
  }
}

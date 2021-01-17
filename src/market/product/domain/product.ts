import { ProductId } from "./product-id";
import { ProductName } from "./product-name";

export class Product {
  constructor(public id: ProductId, public name: ProductName) {}
}

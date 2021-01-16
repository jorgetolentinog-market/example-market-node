import { ValueObject, UUID } from "@shared/domain/value-object";

export class ProductId extends UUID<"ProductId"> {}
export class ProductName extends ValueObject<string, "ProductName"> {}

export class Product {
  constructor(public id: ProductId, public name: ProductName) {}
}

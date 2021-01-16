import { ValueObject } from "@app/shared/domain/value-object";

export class ProductId extends ValueObject<string> {}
export class ProductName extends ValueObject<string> {}

export class Product {
  constructor(public id: ProductId, public name: ProductName) {}
}

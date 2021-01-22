import { ValueObject } from "@shared/domain/value-object";

export class ProductPrice extends ValueObject<number, "ProductPrice"> {
  protected validate(price: number) {
    if (typeof price !== "number") {
      throw new Error("Precio inválido");
    }

    if (price < 0) {
      throw new Error("Precio de producto no puede ser negativo");
    }
  }
}

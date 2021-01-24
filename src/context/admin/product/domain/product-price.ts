import { NumberValueObject } from "@/context/shared/domain/value-object/number";

export class ProductPrice extends NumberValueObject<"ProductPrice"> {
  validate(price: number) {
    super.validate(price);

    if (price < 0) {
      throw new Error("Precio de producto no puede ser negativo");
    }
  }
}

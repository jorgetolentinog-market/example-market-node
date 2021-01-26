import { StringValueObject } from "@/shared/domain/value-object/string";

export class ProductName extends StringValueObject<"ProductName"> {
  validate(name: string) {
    super.validate(name);

    if (name.length < 3) {
      throw new Error("Nombre debe ser mayor a 3 caracteres");
    }
  }
}

import { ValueObject } from "@shared/domain/value-object";

export class ProductName extends ValueObject<string, "ProductName"> {
  protected validate(name: string) {
    if (typeof name !== "string") {
      throw new Error("Nombre inválido");
    }

    if (name.length < 3) {
      throw new Error("Nombre debe ser mayor a 3 caracteres");
    }
  }
}

import { ValueObject } from "./value-object";

export class NumberValue extends ValueObject<number, number> {
  cast() {
    if (typeof this.rawValue !== "number") {
      throw new Error("Número inválido");
    }

    return this.rawValue;
  }

  primitive() {
    return this.value;
  }
}

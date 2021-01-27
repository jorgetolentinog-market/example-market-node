import { ValueObject } from "./value-object";

export class StringValue extends ValueObject<string, string> {
  cast() {
    if (typeof this.rawValue !== "string") {
      throw new Error("Texto inválido");
    }

    return this.rawValue;
  }

  primitive() {
    return this.value;
  }
}

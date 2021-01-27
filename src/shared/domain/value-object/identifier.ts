import { validate as uuidValidate } from "uuid";
import { ValueObject } from "./value-object";

export class Identifier extends ValueObject<string, string> {
  cast() {
    if (!uuidValidate(this.rawValue)) {
      throw new Error("ID inválido");
    }
    return this.rawValue;
  }

  primitive() {
    return this.value;
  }
}

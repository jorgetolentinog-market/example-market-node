import { ValueObject } from "./value-object";
import { validate as uuidValidate } from "uuid";

export abstract class UUID<N extends string> extends ValueObject<string, N> {
  validate(v: string) {
    if (!uuidValidate(v)) {
      throw new Error("ID invalido");
    }
  }
}

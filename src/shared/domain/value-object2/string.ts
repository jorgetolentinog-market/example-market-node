import { ValueObject } from "./value-object";

export abstract class StringValueObject<N extends string> extends ValueObject<
  string,
  N
> {
  validate(value: string) {
    if (typeof value !== "string") {
      throw new Error("Texto inválido");
    }
  }
}

import { ValueObject } from "./value-object";

export abstract class NumberValueObject<N extends string> extends ValueObject<
  number,
  N
> {
  validate(value: number) {
    if (typeof value !== "number") {
      throw new Error("Número inválido");
    }
  }
}

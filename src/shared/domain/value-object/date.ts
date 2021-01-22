import moment from "moment";
import { ValueObject } from "./value-object";

export abstract class DateValueObject<N extends string> extends ValueObject<
  string,
  N
> {
  validate(value: string) {
    var m = moment(value);
    if (!m.isValid()) {
      throw new Error("Fecha inválida");
    }
  }
}

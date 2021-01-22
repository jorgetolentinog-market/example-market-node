import moment from "moment";
import { StringValueObject } from "./string";

export abstract class DateValueObject<
  N extends string
> extends StringValueObject<N> {
  validate(value: string) {
    super.validate(value);
    var m = moment(value);
    if (!m.isValid()) {
      throw new Error("Fecha inválida");
    }
  }
}

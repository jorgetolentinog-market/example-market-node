import moment from "moment";
import { StringValue } from "./string";

export abstract class DateValue extends StringValue {
  cast() {
    var m = moment(this.rawValue);
    if (!m.isValid()) {
      throw new Error("Fecha inválida");
    }
    return this.rawValue;
  }

  primitive() {
    return this.rawValue;
  }
}

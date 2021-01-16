export abstract class ValueObject<T> {
  constructor(private _value: T) {
    this.validate(_value);
  }

  get value(): T {
    return this._value;
  }

  set value(v: T) {
    this._value = v;
  }

  validate(_: T) {}

  toJSON(): T {
    return this._value;
  }
}

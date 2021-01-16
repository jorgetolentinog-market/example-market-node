export abstract class ValueObject<T, N extends string> {
  protected __nominal: N;

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

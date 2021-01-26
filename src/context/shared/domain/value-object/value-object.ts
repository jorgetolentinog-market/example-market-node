export abstract class ValueObject<T, N extends string> {
  protected __nominal: N;

  constructor(private readonly _value: T) {
    this.validate(_value);
  }

  value(): T {
    return this._value;
  }

  primitive(): T {
    return this._value;
  }

  validate(_: T) {}
}

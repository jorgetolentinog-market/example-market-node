export abstract class ValueObject<T, N extends string> {
  protected __nominal: N;

  constructor(private readonly _value: T) {
    this.validate(_value);
  }

  value(): T {
    return this._value;
  }

  toJSON(): T {
    return this.value();
  }

  toString(): string {
    console.log("asd")
    return String(this.value());
  }

  protected validate(_: T) {}
}

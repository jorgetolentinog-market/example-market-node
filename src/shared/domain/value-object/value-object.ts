export abstract class ValueObject<Input, Output> {
  public readonly value: Output;

  constructor(public readonly rawValue: Input) {
    this.value = this.cast();
  }

  cast(): Output {
    return (this.rawValue as unknown) as Output;
  }

  primitive(): any {
    throw new Error("Not implemented");
  }
}

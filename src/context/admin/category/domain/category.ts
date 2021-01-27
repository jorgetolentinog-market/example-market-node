import { Identifier, StringValue } from "@/shared/domain/value-object";

export class Category {
  constructor(
    public readonly id: Identifier,
    public readonly name: StringValue
  ) {}
}

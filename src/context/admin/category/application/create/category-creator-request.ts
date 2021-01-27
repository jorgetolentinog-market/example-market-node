import { Identifier, StringValue } from "@/shared/domain/value-object";

export class CategoryCreatorRequest {
  public readonly id: Identifier;
  public readonly name: StringValue;

  constructor(id: string, name: string) {
    this.id = new Identifier(id);
    this.name = new StringValue(name);
  }
}

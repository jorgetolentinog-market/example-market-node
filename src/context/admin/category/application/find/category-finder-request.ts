import { Identifier } from "@/shared/domain/value-object";

export class CategoryFinderRequest {
  public readonly id: Identifier;

  constructor(id: string) {
    this.id = new Identifier(id);
  }
}

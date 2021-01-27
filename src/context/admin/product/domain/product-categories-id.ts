import { Identifier, ValueObject } from "@/shared/domain/value-object";

export class ProductCategoriesId extends ValueObject<string[], Identifier[]> {
  cast() {
    if (!Array.isArray(this.rawValue)) {
      throw new Error("Categorias no es una lista");
    }

    let value: Identifier[] = [];
    for (let categoryId of this.rawValue) {
      value.push(new Identifier(categoryId));
    }

    return value;
  }

  primitive(): string[] {
    return this.value.map((v) => v.primitive());
  }
}

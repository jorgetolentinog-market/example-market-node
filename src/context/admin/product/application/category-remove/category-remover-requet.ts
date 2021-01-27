import { Identifier } from "@/shared/domain/value-object";

export class ProductCategoryRemoverRequest {
  public readonly productId: Identifier;
  public readonly categoryId: Identifier;

  constructor(productId: string, categoryId: string) {
    this.productId = new Identifier(productId);
    this.categoryId = new Identifier(categoryId);
  }
}

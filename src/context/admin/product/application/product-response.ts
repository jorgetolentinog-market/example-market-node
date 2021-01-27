import { Category } from "../../category/domain/category";
import { Product } from "../domain/product";

export type ProductCategoryResponse = {
  readonly id: string;
  readonly name: string;
};

export class ProductResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly categories: ProductCategoryResponse[]
  ) {}

  public static fromAgregate(product: Product, categories: Category[]) {
    let categoriesResponse = categories.map((obj) => ({
      id: obj.id.value,
      name: obj.name.value,
    }));

    return new ProductResponse(
      product.id.value,
      product.name.value,
      product.price.value,
      categoriesResponse
    );
  }
}

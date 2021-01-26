import { ProductId } from "../../product/domain/product-id";
import { ProductQuery } from "./product-query";

export interface ProductQueryRepository {
  find(id: ProductId): Promise<ProductQuery | undefined>;
  search(): Promise<ProductQuery[]>;
}

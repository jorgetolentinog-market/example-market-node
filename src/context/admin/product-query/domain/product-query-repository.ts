import { Identifier } from "@/shared/domain/value-object";
import { ProductQuery } from "./product-query";

export interface ProductQueryRepository {
  find(id: Identifier): Promise<ProductQuery | undefined>;
  search(): Promise<ProductQuery[]>;
}

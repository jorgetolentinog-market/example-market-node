import { Product } from "./product";
import { ProductId } from "./product-id";
import { ProductQuery } from "./product-query";

export interface ProductRepository {
  save(product: Product): Promise<void>;
  find(id: ProductId): Promise<ProductQuery | undefined>;
  search(): Promise<ProductQuery[]>;
}

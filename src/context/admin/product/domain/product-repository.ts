import { Identifier } from "@/shared/domain/value-object";
import { Product } from "./product";

export interface ProductRepository {
  save(product: Product): Promise<void>;
  find(id: Identifier): Promise<Product | undefined>;
  search(): Promise<Product[]>;
  removeCategory(productId: Identifier, categoryId: Identifier): Promise<void>;
}

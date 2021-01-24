import { Product } from "./product";
import { ProductId } from "./product-id";

export interface ProductRepository {
  save(product: Product): Promise<void>;
  find(id: ProductId): Promise<Product | undefined>;
  search(): Promise<Product[]>;
}

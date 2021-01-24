import { Product } from "./product";
import { ProductId } from "./product-id";

export interface ProductRepository {
  save(product: Product): Promise<void>;
  search(id: ProductId): Promise<Product | undefined>;
  matching(): Promise<Product[]>;
}

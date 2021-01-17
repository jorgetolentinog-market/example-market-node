import { Product } from "./product";
import { ProductId } from "./product-id";

export interface ProductRepository {
  save(product: Product): void;
  find(id: ProductId): Product[];
  findAll(): Product[];
}

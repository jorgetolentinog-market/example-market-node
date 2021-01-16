import { Product, ProductId } from "./product";

export interface ProductRepository {
  save(product: Product): void;
  find(id: ProductId): Product[];
  findAll(): Product[];
}

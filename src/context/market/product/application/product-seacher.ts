import { Product } from "@/context/market/product/domain/product";
import { ProductId } from "@/context/market/product/domain/product-id";
import { ProductRepository } from "@/context/market/product/domain/product-repository";

export class ProductSearcher {
  constructor(private repository: ProductRepository) {}

  async search(id: ProductId): Promise<Product | undefined> {
    let product = await this.repository.search(id);

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    return product;
  }
}

import { Product } from "@/context/admin/product/domain/product";
import { ProductRepository } from "@/context/admin/product/domain/product-repository";
import { ProductSearcherRequest } from "./product-searcher-request";

export class ProductSearcher {
  constructor(private repository: ProductRepository) {}

  async search(request: ProductSearcherRequest): Promise<Product | undefined> {
    let product = await this.repository.search(request.id());

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    return product;
  }
}

import { ProductQueryRepository } from "../../domain/product-query-repository";
import { ProductQueryFinderRequest } from "./product-query-finder-request";
import { ProductQueryFinderResponse } from "./product-query-finder-response";

export class ProductQueryFinder {
  constructor(private repository: ProductQueryRepository) {}

  async find(request: ProductQueryFinderRequest): Promise<ProductQueryFinderResponse> {
    let productQuery = await this.repository.find(request.id);

    if (!productQuery) {
      throw new Error("Producto no encontrado");
    }

    return new ProductQueryFinderResponse(productQuery);
  }
}

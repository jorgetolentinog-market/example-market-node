import { ProductQueryRepository } from "../../domain/product-query-repository";
import { ProductFinderRequest } from "./product-finder-request";
import { ProductFinderResponse } from "./product-finder-response";

export class ProductFinder {
  constructor(private repository: ProductQueryRepository) {}

  async find(request: ProductFinderRequest): Promise<ProductFinderResponse> {
    let productQuery = await this.repository.find(request.id);

    if (!productQuery) {
      throw new Error("Producto no encontrado");
    }

    return new ProductFinderResponse(productQuery);
  }
}

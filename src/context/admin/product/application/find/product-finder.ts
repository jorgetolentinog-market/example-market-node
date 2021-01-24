import { ProductRepository } from "@/context/admin/product/domain/product-repository";
import { ProductFinderRequest } from "./product-finder-request";
import { ProductFinderResponse } from "./product-finder-response";

export class ProductFinder {
  constructor(private repository: ProductRepository) {}

  async find(request: ProductFinderRequest): Promise<ProductFinderResponse> {
    let product = await this.repository.find(request.id());

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    return new ProductFinderResponse(product);
  }
}

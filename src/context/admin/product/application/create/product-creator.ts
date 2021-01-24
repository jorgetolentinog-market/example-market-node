import { Product } from "@/context/admin/product/domain/product";
import { ProductRepository } from "@/context/admin/product/domain/product-repository";
import { ProductCreatorRequest } from "./product-creator-request";

export class ProductCreator {
  constructor(private repository: ProductRepository) {}

  async create(request: ProductCreatorRequest): Promise<void> {
    let product = new Product(request.id(), request.name(), request.price());
    await this.repository.save(product);
  }
}

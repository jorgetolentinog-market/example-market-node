import { CategoryRepository } from "@/context/admin/category/domain/category-repository";
import { ProductRepository } from "../../domain/product-repository";
import { ProductResponse } from "../product-response";
import { ProductFinderRequest } from "./product-finder-request";

export class ProductFinder {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
  ) {}

  async find(request: ProductFinderRequest): Promise<ProductResponse> {
    let product = await this.productRepository.find(request.id);

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    let categories = [];
    for (let categoryId of product.categories.value) {
      let category = await this.categoryRepository.find(categoryId);
      if (!category) {
        continue;
      }
      categories.push(category);
    }

    return ProductResponse.fromAgregate(product, categories);
  }
}

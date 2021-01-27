import { CategoryRepository } from "@/context/admin/category/domain/category-repository";
import { ProductRepository } from "../../domain/product-repository";
import { ProductResponse } from "../product-response";

export class ProductSearcher {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
  ) {}

  async search(): Promise<ProductResponse[]> {
    let products = await this.productRepository.search();

    let items = [];
    for (let product of products) {
      let categories = [];
      for (let categoryId of product.categories.value) {
        let category = await this.categoryRepository.find(categoryId);
        if (!category) {
          continue;
        }
        categories.push(category);
      }

      items.push(ProductResponse.fromAgregate(product, categories));
    }

    return items;
  }
}

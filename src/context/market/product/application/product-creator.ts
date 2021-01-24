import { Product } from "@/context/market/product/domain/product";
import { ProductId } from "@/context/market/product/domain/product-id";
import { ProductName } from "@/context/market/product/domain/product-name";
import { ProductPrice } from "@/context/market/product/domain/product-price";
import { ProductRepository } from "@/context/market/product/domain/product-repository";

export class ProductCreator {
  constructor(private repository: ProductRepository) {}

  async create(
    id: ProductId,
    name: ProductName,
    price: ProductPrice
  ): Promise<void> {
    let product = new Product(id, name, price);
    await this.repository.save(product);
  }
}

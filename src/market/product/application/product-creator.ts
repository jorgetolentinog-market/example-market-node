import {
  Product,
  ProductId,
  ProductName,
  ProductPrice,
  ProductRepository,
} from "@market/product/domain";

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

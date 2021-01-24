import { Store } from "../domain/store";
import { StoreId } from "../domain/store-id";
import { StoreRepository } from "../domain/store-repository";

export class StoreSearcher {
  constructor(private repository: StoreRepository) {}

  async search(id: StoreId): Promise<Store | undefined> {
    let store = await this.repository.search(id);

    if (!store) {
      throw new Error("Tienda no encontrada");
    }

    return store;
  }
}

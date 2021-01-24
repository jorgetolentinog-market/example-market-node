import { Store } from "@/context/admin/store/domain/store";
import { StoreCreatedAt } from "@/context/admin/store/domain/store-created-at";
import { StoreId } from "@/context/admin/store/domain/store-id";
import { StoreName } from "@/context/admin/store/domain/store-name";
import { StoreRepository } from "@/context/admin/store/domain/store-repository";

export class StoreCreator {
  constructor(private repository: StoreRepository) {}

  async create(
    id: StoreId,
    name: StoreName,
    createdAt: StoreCreatedAt
  ): Promise<void> {
    let store = new Store(id, name, createdAt);
    await this.repository.save(store);
  }
}

import { Store } from "./store";
import { StoreId } from "./store-id";

export interface StoreRepository {
  save(store: Store): Promise<void>;
  search(id: StoreId): Promise<Store | undefined>;
}

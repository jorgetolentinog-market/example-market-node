import { StoreCreator } from "@/context/market/store/application/store-creator";
import { StoreSearcher } from "@/context/market/store/application/store-searcher";
import { StoreCreatedAt } from "@/context/market/store/domain/store-created-at";
import { StoreId } from "@/context/market/store/domain/store-id";
import { StoreName } from "@/context/market/store/domain/store-name";
import { DynamoStoreRepository } from "@/context/market/store/infrastructure/dynamo-store-repostory";
import { asyncHandler } from "@/context/shared/infrasctructure/express";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const storeRepository = new DynamoStoreRepository();

const storeRouter = Router();

storeRouter.get(
  "/store/:id",
  asyncHandler(async (req, res) => {
    let action = new StoreSearcher(storeRepository);
    let result = await action.search(new StoreId(req.params.id));
    res.send(result);
  })
);

storeRouter.post(
  "/store",
  asyncHandler(async (req, res) => {
    let identifier = uuidv4();
    let action = new StoreCreator(storeRepository);
    await action.create(
      new StoreId(identifier),
      new StoreName(req.body.name),
      new StoreCreatedAt(new Date().toISOString())
    );
    res.status(201).send({
      id: identifier,
    });
  })
);

export { storeRouter };

import { CategoryCreator } from "@/context/admin/category/application/create/category-creator";
import { CategoryCreatorRequest } from "@/context/admin/category/application/create/category-creator-request";
import { CategorySearcher } from "@/context/admin/category/application/search/category-searcher";
import { CategorySearcherRequest } from "@/context/admin/category/application/search/category-searcher-request";
import { DynamoCategoryRepository } from "@/context/admin/category/infrastructure/dynamo-category-repository";
import { asyncHandler } from "@/context/shared/infrasctructure/express";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const repository = new DynamoCategoryRepository();

const router = Router();

router.get(
  "/category/:id",
  asyncHandler(async (req, res) => {
    let action = new CategorySearcher(repository);
    let response = await action.search(
      new CategorySearcherRequest(req.params.id)
    );
    res.status(200).send(response.category());
  })
);

router.post(
  "/category",
  asyncHandler(async (req, res) => {
    let id = uuidv4();
    let action = new CategoryCreator(repository);
    await action.create(new CategoryCreatorRequest(id, req.body.name));
    res.status(201).send({
      id,
    });
  })
);

export { router };

import { CategoryCreator } from "@/context/admin/category/application/create/category-creator";
import { CategoryCreatorRequest } from "@/context/admin/category/application/create/category-creator-request";
import { CategoryFinder } from "@/context/admin/category/application/find/category-finder";
import { CategoryFinderRequest } from "@/context/admin/category/application/find/category-finder-request";
import { CategorySearcher } from "@/context/admin/category/application/search/category-searcher";
import { DynamoCategoryRepository } from "@/context/admin/category/infrastructure/dynamo-category-repository";
import { asyncHandler } from "@/shared/infrasctructure/express";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const repository = new DynamoCategoryRepository();

const router = Router();

router.get(
  "/category/:categoryId",
  asyncHandler(async (req, res) => {
    let finder = new CategoryFinder(repository);
    let result = await finder.find(
      new CategoryFinderRequest(req.params.categoryId)
    );
    res.status(200).send(result);
  })
);

router.get(
  "/category",
  asyncHandler(async (req, res) => {
    let searcher = new CategorySearcher(repository);
    let result = await searcher.search();
    res.status(200).send(result);
  })
);

router.post(
  "/category",
  asyncHandler(async (req, res) => {
    let id = uuidv4();
    let creator = new CategoryCreator(repository);
    await creator.create(new CategoryCreatorRequest(id, req.body.name));
    res.status(201).send({
      id,
    });
  })
);

export { router };

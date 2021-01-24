import { ProductCreator } from "@/context/admin/product/application/create/product-creator";
import { ProductCreatorRequest } from "@/context/admin/product/application/create/product-creator-request";
import { ProductFinder } from "@/context/admin/product/application/find/product-finder";
import { ProductFinderRequest } from "@/context/admin/product/application/find/product-finder-request";
import { ProductSearcher } from "@/context/admin/product/application/search/product-searcher";
import { DynamoProductRepository } from "@/context/admin/product/infrasctructure/dynamo-product-repository";
import { asyncHandler } from "@/context/shared/infrasctructure/express";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const productRepository = new DynamoProductRepository();
const router = Router();

router.get(
  "/product/:id",
  asyncHandler(async (req, res) => {
    let action = new ProductFinder(productRepository);
    let result = await action.find(new ProductFinderRequest(req.params.id));
    res.send(result.response());
  })
);

router.get(
  "/product",
  asyncHandler(async (req, res) => {
    let action = new ProductSearcher(productRepository);
    let result = await action.search();
    res.send(result.response());
  })
);

router.post(
  "/product",
  asyncHandler(async (req, res) => {
    let id = uuidv4();
    let action = new ProductCreator(productRepository);
    await action.create(
      new ProductCreatorRequest(id, req.body.name, req.body.price)
    );
    res.status(201).send({
      id,
    });
  })
);

export { router };

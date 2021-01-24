import { ProductCreator } from "@/context/admin/product/application/create/product-creator";
import { ProductCreatorRequest } from "@/context/admin/product/application/create/product-creator-request";
import { ProductMatcher } from "@/context/admin/product/application/match/product-matcher";
import { ProductSearcher } from "@/context/admin/product/application/search/product-seacher";
import { ProductSearcherRequest } from "@/context/admin/product/application/search/product-searcher-request";
import { DynamoProductRepository } from "@/context/admin/product/infrasctructure/dynamo-product-repository";
import { asyncHandler } from "@/context/shared/infrasctructure/express";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const productRepository = new DynamoProductRepository();

const productRouter = express.Router();

productRouter.get(
  "/product/:id",
  asyncHandler(async (req, res) => {
    let action = new ProductSearcher(productRepository);
    let result = await action.search(new ProductSearcherRequest(req.params.id));
    res.send(result);
  })
);

productRouter.get(
  "/product",
  asyncHandler(async (req, res) => {
    let action = new ProductMatcher(productRepository);
    let result = await action.match();
    res.send(result);
  })
);

productRouter.post(
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

export { productRouter };

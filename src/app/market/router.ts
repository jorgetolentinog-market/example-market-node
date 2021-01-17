import {
  ProductCreator,
  ProductFinder,
  ProductSearcher,
} from "@market/product/application";
import { ProductId, ProductName } from "@market/product/domain";
import { DynamoProductRepository } from "@market/product/infrasctructure/persistence";
import { asyncHandler } from "@shared/infrasctructure/express";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const productRepository = new DynamoProductRepository();

const router = express.Router();

router.get(
  "/health",
  asyncHandler(async (req, res) => {
    res.send({ market: true });
  })
);

router.get(
  "/product",
  asyncHandler(async (req, res) => {
    let searcher = new ProductSearcher(productRepository);
    let result = await searcher.search();
    res.send(result);
  })
);

router.get(
  "/product/create",
  asyncHandler(async (req, res) => {
    let creator = new ProductCreator(productRepository);
    await creator.create(new ProductId(uuidv4()), new ProductName("myname"));
    res.send({
      create: true,
    });
  })
);

router.get(
  "/product/:id",
  asyncHandler(async (req, res) => {
    let finder = new ProductFinder(productRepository);
    let result = await finder.find(new ProductId(req.params.id));
    res.send(result);
  })
);

export { router };

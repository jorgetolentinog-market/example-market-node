import {
  ProductCreator,
  ProductMatcher,
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
  "/product/:id",
  asyncHandler(async (req, res) => {
    let action = new ProductSearcher(productRepository);
    let result = await action.search(new ProductId(req.params.id));
    res.send(result);
  })
);

router.get(
  "/product",
  asyncHandler(async (req, res) => {
    let action = new ProductMatcher(productRepository);
    let result = await action.match();
    res.send(result);
  })
);

router.post(
  "/product",
  asyncHandler(async (req, res) => {
    let identifier = uuidv4();
    let action = new ProductCreator(productRepository);
    await action.create(new ProductId(identifier), new ProductName("myname"));
    res.send({
      id: identifier,
    });
  })
);

export { router };

import { ProductCreator } from "@/market/product/application/product-creator";
import { ProductMatcher } from "@/market/product/application/product-matcher";
import { ProductSearcher } from "@/market/product/application/product-seacher";
import { ProductId } from "@/market/product/domain/product-id";
import { ProductName } from "@/market/product/domain/product-name";
import { ProductPrice } from "@/market/product/domain/product-price";
import { DynamoProductRepository } from "@/market/product/infrasctructure/DynamoProductRepository";
import { asyncHandler } from "@/shared/infrasctructure/express";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const productRepository = new DynamoProductRepository();

const productRouter = express.Router();

productRouter.get(
  "/product/:id",
  asyncHandler(async (req, res) => {
    let action = new ProductSearcher(productRepository);
    let result = await action.search(new ProductId(req.params.id));
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
    let identifier = uuidv4();
    let action = new ProductCreator(productRepository);
    await action.create(
      new ProductId(identifier),
      new ProductName(req.body.name),
      new ProductPrice(req.body.price)
    );
    res.status(201).send({
      id: identifier,
    });
  })
);

export { productRouter };

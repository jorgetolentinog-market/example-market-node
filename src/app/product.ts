import {
  ProductCreator,
  ProductFinder,
  ProductSearcher,
} from "@module/product/application";
import { ProductId, ProductName } from "@module/product/domain/product";
import { DynamoProductRepository } from "@module/product/infrasctructure/repository";
import { asyncHandler } from "@shared/infrasctructure/express";
import express from "express";
import serverless from "serverless-http";
import { v4 as uuidv4 } from "uuid";

const app = express();

const productRepository = new DynamoProductRepository();

app.get(
  "/product",
  asyncHandler(async (req, res) => {
    let searcher = new ProductSearcher(productRepository);
    let result = searcher.search();
    res.send(result);
  })
);

app.get(
  "/product/create",
  asyncHandler(async (req, res) => {
    let creator = new ProductCreator(productRepository);
    creator.create(new ProductId(uuidv4()), new ProductName("myname"));
    res.send({
      create: true,
    });
  })
);

app.get(
  "/product/:id",
  asyncHandler(async (req, res) => {
    let finder = new ProductFinder(productRepository);
    let result = finder.find(new ProductId(req.params.id));
    res.send(result);
  })
);

export const handler = serverless(app);

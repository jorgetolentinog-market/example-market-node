import {
  ProductCreator,
  ProductFinder,
  ProductSearcher,
} from "@app/module/product/application";
import { ProductId, ProductName } from "@app/module/product/domain/product";
import { DynamoProductRepository } from "@app/module/product/infrasctructure/repository";
import { asyncHandler } from "@app/utils";
import express from "express";
import serverless from "serverless-http";

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

app.post(
  "/product",
  asyncHandler(async (req, res) => {
    let creator = new ProductCreator(productRepository);
    creator.create(new ProductId("myid"), new ProductName("myname"));
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

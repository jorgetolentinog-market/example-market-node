import { ProductCategoryCreator } from "@/context/admin/product-category/application/create/product-category-creator";
import { ProductCategoryCreatorRequest } from "@/context/admin/product-category/application/create/product-category-creator-request";
import { ProductCategorySearcher } from "@/context/admin/product-category/application/search/product-category-searcher";
import { ProductCategorySearcherRequest } from "@/context/admin/product-category/application/search/product-category-searcher-request";
import { DynamoProductCategoryRepository } from "@/context/admin/product-category/infrastructure/dynamo-product-category-repository";
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
const productCategoryRepository = new DynamoProductCategoryRepository();
const router = Router();

router.get(
  "/product/:productId",
  asyncHandler(async (req, res) => {
    let action = new ProductFinder(productRepository);
    let result = await action.find(
      new ProductFinderRequest(req.params.productId)
    );
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

router.get(
  "/product/:productId/category",
  asyncHandler(async (req, res) => {
    let action = new ProductCategorySearcher(productCategoryRepository);
    let result = await action.search(
      new ProductCategorySearcherRequest(req.params.productId)
    );
    res.status(200).send(result.response());
  })
);

router.post(
  "/product/:productId/category",
  asyncHandler(async (req, res) => {
    let action = new ProductCategoryCreator(productCategoryRepository);
    await action.create(
      new ProductCategoryCreatorRequest(
        req.params.productId,
        req.body.categoryId
      )
    );
    res.status(201).send({});
  })
);

export { router };

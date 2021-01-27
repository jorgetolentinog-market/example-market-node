import { ProductQueryFinder } from "@/context/admin/product-query/application/find/product-query-finder";
import { ProductQueryFinderRequest } from "@/context/admin/product-query/application/find/product-query-finder-request";
import { ProductQuerySearcher } from "@/context/admin/product-query/application/search/product-query-searcher";
import { DynamoProductQueryRepository } from "@/context/admin/product-query/infrastructure/dynamo-product-query-repository";
import { ProductCategoryRemover } from "@/context/admin/product/application/category-remove/category-remover";
import { ProductCategoryRemoverRequest } from "@/context/admin/product/application/category-remove/category-remover-requet";
import { ProductCreator } from "@/context/admin/product/application/create/product-creator";
import { ProductCreatorRequest } from "@/context/admin/product/application/create/product-creator-request";
import { DynamoProductRepository } from "@/context/admin/product/infrasctructure/dynamo-product-repository";
import { asyncHandler } from "@/shared/infrasctructure/express";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const productRepository = new DynamoProductRepository();
const productQueryRepository = new DynamoProductQueryRepository();
const router = Router();

router.get(
  "/product/:productId",
  asyncHandler(async (req, res) => {
    let action = new ProductQueryFinder(productQueryRepository);
    let result = await action.find(
      new ProductQueryFinderRequest(req.params.productId)
    );
    res.send(result.response());
  })
);

router.get(
  "/product",
  asyncHandler(async (req, res) => {
    let action = new ProductQuerySearcher(productQueryRepository);
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
      new ProductCreatorRequest(
        id,
        req.body.name,
        req.body.price,
        req.body.categories
      )
    );
    res.status(201).send({
      id,
    });
  })
);

router.delete(
  "/product/:productId/category/:categoryId",
  asyncHandler(async (req, res) => {
    let action = new ProductCategoryRemover(productRepository);
    await action.remove(
      new ProductCategoryRemoverRequest(
        req.params.productId,
        req.params.categoryId
      )
    );
    res.status(201).send({});
  })
);

export { router };

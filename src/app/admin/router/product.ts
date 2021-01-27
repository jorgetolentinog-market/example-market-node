import { DynamoCategoryRepository } from "@/context/admin/category/infrastructure/dynamo-category-repository";
import { ProductCategoryRemover } from "@/context/admin/product/application/category-remove/category-remover";
import { ProductCategoryRemoverRequest } from "@/context/admin/product/application/category-remove/category-remover-requet";
import { ProductCreator } from "@/context/admin/product/application/create/product-creator";
import { ProductCreatorRequest } from "@/context/admin/product/application/create/product-creator-request";
import { ProductFinder } from "@/context/admin/product/application/find/product-finder";
import { ProductFinderRequest } from "@/context/admin/product/application/find/product-finder-request";
import { ProductSearcher } from "@/context/admin/product/application/search/product-searcher";
import { DynamoProductRepository } from "@/context/admin/product/infrasctructure/dynamo-product-repository";
import { asyncHandler } from "@/shared/infrasctructure/express";
import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const productRepository = new DynamoProductRepository();
const categoryRepository = new DynamoCategoryRepository();
const router = Router();

router.get(
  "/product/:productId",
  asyncHandler(async (req, res) => {
    let action = new ProductFinder(productRepository, categoryRepository);
    let response = await action.find(
      new ProductFinderRequest(req.params.productId)
    );
    res.send(response);
  })
);

router.get(
  "/product",
  asyncHandler(async (req, res) => {
    let action = new ProductSearcher(productRepository, categoryRepository);
    let response = await action.search();
    res.send(response);
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

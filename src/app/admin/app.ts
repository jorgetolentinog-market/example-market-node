import bodyParser from "body-parser";
import express from "express";
import serverless from "serverless-http";
import { router as categoryRouter } from "./router/category";
import { router as productRouter } from "./router/product";

const app = express();
app.use(bodyParser.json());
app.use("/admin", categoryRouter, productRouter);

export const handler = serverless(app);

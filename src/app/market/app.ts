import bodyParser from "body-parser";
import express from "express";
import serverless from "serverless-http";
import { productRouter } from "./router/product";
import { storeRouter } from "./router/store";

const app = express();
app.use(bodyParser.json());

app.use("/market", productRouter, storeRouter);

export const handler = serverless(app);

import express from "express";
import serverless from "serverless-http";
import { router } from "./router";

const app = express();
app.use("/market", router);

export const handler = serverless(app);

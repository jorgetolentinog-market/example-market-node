import express from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";
import { router } from "./router";

const app = express();
app.use(bodyParser.json());

app.use("/market", router);

export const handler = serverless(app);

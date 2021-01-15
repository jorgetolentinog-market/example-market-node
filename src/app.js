// @flow
import { prueba } from "@app/prueba";
import { asyncHandler } from "@app/utils";
import express from "express";
import serverless from "serverless-http";

const app = express();

app.get(
  "/status",
  asyncHandler(async (req, res) => {
    let p = prueba();

    res.send({
      prueba: p,
    });
  })
);

export const handler: any = serverless(app);

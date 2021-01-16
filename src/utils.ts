import { NextFunction, Request, Response } from "express";

export const asyncHandler = (
  handler: (req: Request, res: Response) => Promise<void>
): ((req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
};

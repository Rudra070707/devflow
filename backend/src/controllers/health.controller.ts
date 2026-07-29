import { Request, Response } from "express";

export const healthCheck = (
  _req: Request,
  res: Response
): void => {
  res.status(200).json({
    success: true,
    application: "DevFlow",
    version: "1.0.0",
    database: "Connected",
    serverTime: new Date().toISOString(),
  });
};
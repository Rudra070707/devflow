import { Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { AuthRequest } from "../middleware/auth.middleware";
import { getCurrentUser } from "../services/user.service";

export const getMe = asyncHandler(async (req: AuthRequest, res: Response) => {
  const user = await getCurrentUser(req.user!.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});
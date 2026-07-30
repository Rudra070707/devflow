import { AppError } from "../utils/AppError";
import { getUserById } from "../repositories/user.repository";

export const getCurrentUser = async (userId: string) => {
  const user = await getUserById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};
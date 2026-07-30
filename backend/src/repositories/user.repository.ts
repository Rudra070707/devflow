import prisma from "../config/prisma";
import { User } from "@prisma/client";

export const getUserById = async (
  id: string
): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id },
  });
};
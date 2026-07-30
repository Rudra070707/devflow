import prisma from "../config/prisma";
import { Prisma, Project } from "@prisma/client";

export const createProject = async (
  data: Prisma.ProjectCreateInput
): Promise<Project> => {
  return prisma.project.create({
    data,
  });
};

export const getProjectsByOwner = async (
  ownerId: string
): Promise<Project[]> => {
  return prisma.project.findMany({
    where: {
      ownerId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
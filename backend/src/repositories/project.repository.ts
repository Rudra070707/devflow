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

export const getProjectById = async (
  id: string
): Promise<Project | null> => {
  return prisma.project.findUnique({
    where: {
      id,
    },
  });
};

export const updateProject = async (
  id: string,
  data: Prisma.ProjectUpdateInput
): Promise<Project> => {
  return prisma.project.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteProject = async (
  id: string
): Promise<Project> => {
  return prisma.project.delete({
    where: {
      id,
    },
  });
};
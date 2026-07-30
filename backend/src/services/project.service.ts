import { AppError } from "../utils/AppError";
import { CreateProjectInput } from "../schemas/project.schema";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjectsByOwner,
  updateProject,
} from "../repositories/project.repository";

export const createNewProject = async (
  ownerId: string,
  data: CreateProjectInput
) => {
  return createProject({
    name: data.name,
    description: data.description,
    owner: {
      connect: {
        id: ownerId,
      },
    },
  });
};

export const getAllProjects = async (
  ownerId: string
) => {
  return getProjectsByOwner(ownerId);
};

export const getSingleProject = async (
  id: string,
  ownerId: string
) => {
  const project = await getProjectById(id);

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  if (project.ownerId !== ownerId) {
    throw new AppError("Access denied", 403);
  }

  return project;
};

export const updateExistingProject = async (
  id: string,
  ownerId: string,
  data: CreateProjectInput
) => {
  const project = await getSingleProject(id, ownerId);

  return updateProject(project.id, {
    name: data.name,
    description: data.description,
  });
};

export const removeProject = async (
  id: string,
  ownerId: string
) => {
  const project = await getSingleProject(id, ownerId);

  return deleteProject(project.id);
};
import { CreateProjectInput } from "../schemas/project.schema";
import {
  createProject,
  getProjectsByOwner,
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

export const getAllProjects = async (ownerId: string) => {
  return getProjectsByOwner(ownerId);
};
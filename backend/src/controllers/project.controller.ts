import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { createProjectSchema } from "../schemas/project.schema";
import {
  createNewProject,
  getAllProjects,
  getSingleProject,
  removeProject,
  updateExistingProject,
} from "../services/project.service";

export const create = asyncHandler(async (req: AuthRequest, res: Response) => {
  const data = createProjectSchema.parse(req.body);

  const project = await createNewProject(req.user!.id, data);

  res.status(201).json({
    success: true,
    message: "Project created successfully",
    data: project,
  });
});

export const getAll = asyncHandler(async (req: AuthRequest, res: Response) => {
  const projects = await getAllProjects(req.user!.id);

  res.status(200).json({
    success: true,
    data: projects,
  });
});

export const getOne = asyncHandler(async (req: AuthRequest, res: Response) => {
  const projectId = req.params.id as string;

  const project = await getSingleProject(
    projectId,
    req.user!.id
  );

  res.status(200).json({
    success: true,
    data: project,
  });
});

export const update = asyncHandler(async (req: AuthRequest, res: Response) => {
  const projectId = req.params.id as string;
  const data = createProjectSchema.parse(req.body);

  const project = await updateExistingProject(
    projectId,
    req.user!.id,
    data
  );

  res.status(200).json({
    success: true,
    message: "Project updated successfully",
    data: project,
  });
});

export const remove = asyncHandler(async (req: AuthRequest, res: Response) => {
  const projectId = req.params.id as string;

  await removeProject(projectId, req.user!.id);

  res.status(200).json({
    success: true,
    message: "Project deleted successfully",
  });
});
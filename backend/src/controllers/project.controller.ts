import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { createProjectSchema } from "../schemas/project.schema";
import {
  createNewProject,
  getAllProjects,
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
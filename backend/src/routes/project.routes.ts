import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  create,
  getAll,
} from "../controllers/project.controller";

const router = Router();

router.use(authenticate);

router.post("/", create);
router.get("/", getAll);

export default router;
import { Router } from "express";
import { createCategory } from "../controllers/category/create-category";
import { getCategories } from "../controllers/category/get-food-category";
import { getCategoryById } from "../controllers/category/get-food-category-id";
import { updateCategory } from "../controllers/category/update-category";
import { deleteCategory } from "../controllers/category/delete-category";

import { authMiddleware } from "../middleware/auth";
import { isAdmin } from "../middleware/isAdmin";

const categoryRouter = Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategoryById);


categoryRouter.post("/", authMiddleware, isAdmin, createCategory);
categoryRouter.put("/:id", authMiddleware, isAdmin, updateCategory);
categoryRouter.delete("/:id", authMiddleware, isAdmin, deleteCategory);

export default categoryRouter;

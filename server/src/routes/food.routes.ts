import { Router } from "express";
import { createFood } from "../controllers/foods/create-food";
import { getFoods } from "../controllers/foods/get-foods";
import { getFoodById } from "../controllers/foods/get-food-id";
import { updateFood } from "../controllers/foods/update-food";
import { deleteFood } from "../controllers/foods/delete-food";

import { authMiddleware } from "../middleware/auth";
import { isAdmin } from "../middleware/isAdmin";

const foodsRouter = Router();


foodsRouter.get("/", getFoods);
foodsRouter.get("/:id", getFoodById);


foodsRouter.post("/", authMiddleware, isAdmin, createFood);
foodsRouter.put("/:id", authMiddleware, isAdmin, updateFood);
foodsRouter.delete("/:id", authMiddleware, isAdmin, deleteFood);

export default foodsRouter;

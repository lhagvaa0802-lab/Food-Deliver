import { Router } from "express";
import { createUser } from "../controllers/user/create-user";
import { getUsers } from "../controllers/user/get-user";
import { getUsersById } from "../controllers/user/get-users-id";
import { updateUser } from "../controllers/user/update-user";
import { deleteUser } from "../controllers/user/delete-user";

import { authMiddleware } from "../middleware/auth";
import { isAdmin } from "../middleware/isAdmin";

const userRouter = Router();


userRouter.post("/", createUser);


userRouter.get("/", authMiddleware, isAdmin, getUsers);
userRouter.delete("/:id", authMiddleware, isAdmin, deleteUser);


userRouter.get("/:id", authMiddleware, getUsersById);
userRouter.put("/:id", authMiddleware, updateUser);

export default userRouter;

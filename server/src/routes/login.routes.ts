import { Router } from "express";
import { login } from "../controllers/auth/login";

const loginRouter = Router();

loginRouter.post("/login", login);

export default loginRouter;

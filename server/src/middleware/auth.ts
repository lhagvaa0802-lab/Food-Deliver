import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

type Token = {
  userId: number;
  email: string;
  role: "USER" | "ADMIN";
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JSONWEB!) as Token;

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

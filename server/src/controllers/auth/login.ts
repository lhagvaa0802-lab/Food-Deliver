import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    if (!process.env.JSONWEB) {
      return res.status(500).json({
        message: "JWT secret is missing",
      });
    }

    const accessToken = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JSONWEB,
      { expiresIn: "40h" },
    );

    return res.status(200).json({
      message: "Login successful",
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Login failed",
      error,
    });
  }
};

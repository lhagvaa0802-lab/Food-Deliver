import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        age: true,
        phoneNumber: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return res.status(200).json({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch users",
      error,
    });
  }
};

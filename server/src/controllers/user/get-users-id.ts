import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getUsersById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid food id",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id },
    });
    console.log(user);

    if (!user) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get user",
      error,
    });
  }
};

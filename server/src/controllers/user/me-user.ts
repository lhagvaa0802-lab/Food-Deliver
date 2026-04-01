import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const meUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const user = await prisma.user.findUnique({
      where: { id: req.user?.userId },
      select: {
        email: true,
        phoneNumber: true,
      },
    });
    console.log(user);

    if (!user) {
      return res.status(404).json({
        message: "Not users",
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

import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const user = await prisma.user.delete({
      where: { id },
    });

    res.json({
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user",
      error,
    });
  }
};

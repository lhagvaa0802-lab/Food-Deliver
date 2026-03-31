import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "Invalid food id",
      });
    }

    const existingFood = await prisma.food.findUnique({
      where: { id },
    });

    if (!existingFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    await prisma.food.delete({
      where: { id },
    });

    return res.status(200).json({
      message: "Food deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete food",
      error,
    });
  }
};

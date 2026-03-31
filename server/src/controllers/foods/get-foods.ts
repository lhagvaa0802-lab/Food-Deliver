import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getFoods = async (_req: Request, res: Response) => {
  try {
    const foods = await prisma.food.findMany({
      include: {
        category: true,
      },
    });

    res.json(foods);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get foods",
      error,
    });
  }
};

import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await prisma.foodCategory.findMany({
      include: {
        foods: true,
      },
    });

    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get categories",
      error,
    });
  }
};

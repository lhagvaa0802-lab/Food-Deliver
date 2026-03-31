import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const category = await prisma.foodCategory.findUnique({
      where: { id },
      include: {
        foods: true,
      },
    });

    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get category",
      error,
    });
  }
};

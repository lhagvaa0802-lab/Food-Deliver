import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { categoryName } = req.body;

    const category = await prisma.foodCategory.update({
      where: { id },
      data: { categoryName },
    });

    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update category",
      error,
    });
  }
};

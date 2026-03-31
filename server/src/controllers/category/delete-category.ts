import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const category = await prisma.foodCategory.delete({
      where: { id },
    });

    res.json({
      message: "Category deleted successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete category",
      error,
    });
  }
};

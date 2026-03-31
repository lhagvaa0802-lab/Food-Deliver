import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({
        message: "categoryName is required",
      });
    }

    const category = await prisma.foodCategory.create({
      data: { categoryName },
    });

    return res.status(201).json({
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create category",
      error,
    });
  }
};

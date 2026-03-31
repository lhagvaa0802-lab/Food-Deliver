import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateFood = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { foodName, price, image, ingredients,description, category } = req.body;

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

    const updatedFood = await prisma.food.update({
      where: { id },
      data: {
        ...(foodName !== undefined && { foodName }),
        ...(price !== undefined && { price: Number(price) }),
        ...(image !== undefined && { image }),
        ...(ingredients !== undefined && { ingredients }),
        ...(category !== undefined && { category }),
        ...(description !== undefined && { description }),
      },
    });

    return res.status(200).json({
      message: "Food updated successfully",
      food: updatedFood,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update food",
      error,
    });
  }
};

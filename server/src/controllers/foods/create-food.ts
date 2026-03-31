import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const createFood = async (req: Request, res: Response) => {
  try {
    const { foodName, description, price, image, ingredients, categoryId } =
      req.body;

    if (
      !foodName ||
      !description || 
      price === undefined ||
      !image ||
      !ingredients ||
      categoryId === undefined
    ) {
      return res.status(400).json({
        message:
          "foodName, description, price, image, ingredients, and categoryId are required",
      });
    }

    const food = await prisma.food.create({
      data: {
        foodName: String(foodName).trim(),
        description: String(description).trim(),
        price: Number(price),
        image: String(image).trim(),
        ingredients: String(ingredients).trim(),
        categoryId: Number(categoryId),
      },
    });

    return res.status(201).json({
      message: "Food created successfully",
      food,
    });
  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to create food",
      error: error?.message ?? "Unknown error",
    });
  }
};

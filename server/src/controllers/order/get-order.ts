import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await prisma.foodOrder.findMany({
      include: {
        user: true,
        foodOrderItems: {
          include: {
            food: true,
          },
        },
      },
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get orders",
      error,
    });
  }
};

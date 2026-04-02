import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    const orders = await prisma.foodOrder.findMany({
      where: {
        ...(startDate && endDate
          ? {
              createdAt: {
                gte: new Date(startDate as string),
                lte: new Date(endDate as string),
              },
            }
          : {}),
      },
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

import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const order = await prisma.foodOrder.findUnique({
      where: { id },
      include: {
        foodOrderItems: {
          include: {
            food: true,
          },
        },
      },
    });

    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get order",
      error,
    });
  }
};

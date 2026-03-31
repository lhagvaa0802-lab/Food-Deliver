import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;

    const order = await prisma.foodOrder.update({
      where: { id },
      data: { status },
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update order",
      error,
    });
  }
};

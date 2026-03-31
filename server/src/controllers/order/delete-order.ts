import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.foodOrderItems.deleteMany({
      where: {
        foodOrderId: id,
      },
    });

    const order = await prisma.foodOrder.delete({
      where: { id },
    });

    res.json({
      message: "Order deleted successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete order",
      error,
    });
  }
};

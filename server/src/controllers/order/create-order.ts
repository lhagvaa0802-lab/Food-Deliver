import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";



interface AuthRequest extends Request {
  user?: {
    userId: number;
    email: string;
    role: "USER" | "ADMIN";
  };
}

export const createOrder = async (req: AuthRequest, res: Response) => {
  try {
    const { status, items } = req.body;

    const totalPriceValue = await calculateTotalPrice(items);

    const order = await prisma.foodOrder.create({
      data: {
        status,
        totalPrice: totalPriceValue,
        userId: req.user?.userId,
        foodOrderItems: {
          create: items.map((item: { foodId: number; quantity: number }) => ({
            quantity: item.quantity,
            food: {
              connect: { id: item.foodId },
            },
          })),
        },
      },
      include: {
        foodOrderItems: {
          include: {
            food: true,
          },
        },
      },
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create order",
      error,
    });
  }
};

const calculateTotalPrice = async (
  items: { foodId: number; quantity: number }[],
) => {
  const foodIds = items.map((item) => item.foodId);

  const foods = await prisma.food.findMany({
    where: {
      id: { in: foodIds },
    },
  });

  let total = 0;

  for (const item of items) {
    const food = foods.find((f) => f.id === item.foodId);
    if (food) {
      total += food.price * item.quantity;
    }
  }

  return total;
};

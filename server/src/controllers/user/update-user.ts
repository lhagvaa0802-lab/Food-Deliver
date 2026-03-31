import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { email, password, age, phoneNumber } = req.body;

    const user = await prisma.user.update({
      where: { id },
      data: {
        email,
        password,
        age,
        phoneNumber,
      },
    });

    res.json({
      message: "Updated Succesfully", user});
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      error,
    });
  }
};

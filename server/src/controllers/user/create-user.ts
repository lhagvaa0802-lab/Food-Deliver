import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, age, phoneNumber, role } = req.body;

    if (!email || !password || age === undefined || !phoneNumber) {
      return res.status(400).json({
        message: "email, password, age, phoneNumber are required",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        age,
        phoneNumber,
        role,
      },
    });

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.email,
        age: user.age,
        phoneNumber: user.phoneNumber,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to create user",
      error,
    });
  }
};

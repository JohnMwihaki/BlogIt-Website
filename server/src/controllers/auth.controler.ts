import client from "../config/prisma";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

function generateToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "2d" });
}

export default async function Register(req: Request, res: Response) {
  const { firstName, lastName, userName, emailAddress, password } = req.body;
  try {
    const userExist = await client.users.findFirst({
      where: {
        OR: [{ emailAddress }, { userName }],
      },
    });

    if (userExist) {
      return res.status(403).json({ message: "That user already exists" });
    }

    const hashPassword = await  bcrypt.hash(password, 10);

    const user = await client.users.create({
      data: {
        firstName,
        lastName,
        userName,
        emailAddress,
        password: hashPassword,
      },
    });

    const token = generateToken(user.id);

    res.status(201).json({ message: "User created successfully",
  user: {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    emailAddress: user.emailAddress,
  },
  token});
    
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to create new user", error });
  }
}
export async function Login(req: Request, res: Response) {
  const { identifier, password } = req.body;

  try {
    const user = await client.users.findFirst({
      where: {
        OR: [{ emailAddress: identifier }, { userName: identifier }],
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passMatch = await bcrypt.compare(password, user.password);

    if (!passMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user.id);

    res.status(200).json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddress: user.emailAddress,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed", error });
  }
}

export async function Logout(_req: Request, res: Response) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
}




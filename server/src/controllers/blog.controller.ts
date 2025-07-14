import { Request, Response } from "express";
import client from "../config/prisma";
import bcrypt from "bcrypt";

interface AuthRequest extends Request {
  userId?: string;
}

const includeAuthor = {
  user: {
    select: {
      firstName: true,
      lastName: true,
    },
  },
};

// Create Blog
export async function createBlog(req: AuthRequest, res: Response) {
  const { image, title, synopsis, content } = req.body;
  const userId = req.userId;

  try {
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const newBlog = await client.post.create({
      data: {
        image,
        title,
        synopsis,
        content,
        userId,
      },
      include: includeAuthor,
    });
    res.status(201).json(newBlog);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to create blog" });
  }
}

// Get All Blogs
export async function getAll(req: Request, res: Response) {
  try {
    const blogs = await client.post.findMany({
      where: { isDeleted: false },
      include: includeAuthor,
    });
    res.status(200).json(blogs);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
}

// Get Specific Blog
export async function getUnique(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const blog = await client.post.findUnique({
      where: { id },
      include: includeAuthor,
    });

    if (!blog || blog.isDeleted) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
}

// Update Blog
export async function updateBlogs(req: Request, res: Response) {
  const { id } = req.params;
  const { image, title, synopsis, content } = req.body;

  try {
    const updated = await client.post.update({
      where: { id },
      data: {
        image,
        title,
        synopsis,
        content,
        lastUpdatedAt: new Date(),
      },
      include: includeAuthor,
    });
    res.status(200).json(updated);
  } catch (e) {
    res.status(500).json({ error: "Failed to update blog" });
  }
}

// Delete Blog
export async function deleteBlog(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const deleted = await client.post.update({
      where: { id },
      data: {
        isDeleted: true,
      },
    });
    res.status(200).json({ message: "Deleted", deleted });
  } catch (e) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
}

// Update User Info
export async function updateUserInfo(req: Request, res: Response) {
  const { userId } = req.params;
  const { firstName, lastName, userName, emailAddress } = req.body;

  try {
    const updated = await client.users.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
        userName,
        emailAddress,
      },
    });
    res.status(200).json(updated);
  } catch (e) {
    res.status(500).json({ error: "Failed to update user info" });
  }
}

// Update Password
export async function updatePassword(req: Request, res: Response) {
  const { userId, currentPassword, newPassword } = req.body;


  try {
    const user = await client.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const match = await bcrypt.compare(currentPassword, user.password);

    if (!match) {
      return res.status(403).json({ error: "Incorrect current password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updated = await client.users.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: "Password updated", updated });
  } catch (e) {
    res.status(500).json({ error: "Failed to update password" });
  }
}

// Get All Blogs by User

export async function allBlogUser(req: AuthRequest, res: Response) {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const blogs = await client.post.findMany({
      where: {
        userId,
        isDeleted: false,
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
      },
    });
    res.status(200).json(blogs);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch user blogs" });
  }
}

export const loginuser= async (req:Request,res:Response)=>{
  res.send("hello world")
}
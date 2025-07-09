import { Request, Response } from "express";
import client from "../config/prisma";
import bcrypt from "bcrypt";

// Create Blog
export async function createBlog(req: Request, res: Response) {
  const { image, title, synopsis, content } = req.body;
  const {userId} = req.params;

  try {
    const newBlog = await client.post.create({
      data: {
        image,
        title,
        synopsis,
        content,
        userId: userId,
      },
    });
    res.status(201).json(newBlog);
  } catch (e) {
    res.status(500).json({ error: "Failed to create blog" });
  }
}

// Get All Blogs
export async function getAll(req: Request, res: Response) {
  try {
    const blogs = await client.post.findMany({
      where: { isDeleted: false },
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
  const {userId} = req.params;
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
  const {userId} = req.params;
  const { currentPassword, newPassword } = req.body;

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
export async function allBlogUser(req: Request, res: Response) {
  const {userId }= req.params;

  try {
    const blogs = await client.post.findMany({
      where: {
        userId: userId,
        isDeleted: false,
      },
    });
    res.status(200).json(blogs);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch user blogs" });
  }
}

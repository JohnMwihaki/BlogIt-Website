import { Router } from "express";

import {
  createBlog,
  getAll,
  getUnique,
  updateBlogs,
  deleteBlog,
  updateUserInfo,
  updatePassword,
  allBlogUser,
} from "../controllers/blog.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/api/blogs", authenticate, createBlog);
router.get("/api/blogs", getAll);
router.get("/api/blogs/:id", getUnique);
router.patch("/api/blogs/:id", updateBlogs);
router.delete("/api/blogs/:id", deleteBlog);
router.get("/api/user/blogs", authenticate, allBlogUser);
router.patch("/api/user/:userId", updateUserInfo);
router.patch("/api/user/password", updatePassword);

export default router;

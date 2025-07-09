import { Router } from "express";

import {
  createBlog,
  getAll,
  getUnique,
  updateBlogs,
  deleteBlog,
  updateUserInfo,
  updatePassword,
  allBlogUser
} from "../controllers/blog.controller";

const router = Router();


router.post("/api/blogs", createBlog);
router.get("/api/blogs", getAll);
router.get("/api/blogs/:id", getUnique);
router.patch("/api/blogs/:id", updateBlogs);
router.delete("/api/blogs/:id", deleteBlog);
router.get("/api/user/blogs", allBlogUser);
router.patch("/api/user", updateUserInfo);
router.patch("/api/user/password", updatePassword);

export default router;

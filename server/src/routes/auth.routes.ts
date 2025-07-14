import Register from "../controllers/auth.controler";
import { Login } from "../controllers/auth.controler";
import { Logout } from "../controllers/auth.controler";
import { Router } from "express";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);

export default router;

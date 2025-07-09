import Register  from "../controllers/auth.controler";
import { Login } from "../controllers/auth.controler";
import { Logout } from "../controllers/auth.controler";
import { Router } from "express";

const router=Router()

router.use("/",Register)
router.use("/",Login)
router.use("/",Logout)

export default router;
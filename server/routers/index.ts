import { Router } from "express";
import chatRoutes from "./chatRoutes";
import adminRoutes from "./accountAdminRouters";
import userRoutes from "./accountUserRoutes";

const router = Router();

router.use("/chat", chatRoutes);
router.use("/admin", adminRoutes);
router.use("/user", userRoutes);

export default router;

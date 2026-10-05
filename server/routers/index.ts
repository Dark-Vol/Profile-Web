import { Router } from "express";
import chatRoutes from "./chatRoutes";
import adminRoutes from "./accountAdminRouters";

const router = Router();

router.use("/chat", chatRoutes);
router.use("/admin", adminRoutes);

export default router;
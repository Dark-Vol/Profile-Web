import { Router } from "express";
import AdminController from "@controllers/adminController";

const router = Router();

router.get("/ticket", AdminController.showSupportTicket);

export default router;

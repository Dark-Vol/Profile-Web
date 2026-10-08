import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Message, Support } from "@models/models";

const JWT_SECRET = "secret_key";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readUserId(req: Request): number | null {
  const header = req.headers.authorization;
  if (!header) return null;
  const token = header.startsWith("Bearer ") ? header.slice(7) : header;
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id?: number };
    return decoded?.id ?? null;
  } catch {
    const decoded = jwt.decode(token) as { id?: number } | null;
    return decoded?.id ?? null;
  }
}

class ChatController {
  static async createSupportTicket(req: Request, res: Response): Promise<Response> {
    const name = String(req.body?.name ?? "").trim();
    const email = String(req.body?.email ?? "").trim();
    const body = String(req.body?.body ?? req.body?.message ?? "").trim();
    const title = String(req.body?.title ?? name).trim();

    if (!name || !email || !body) {
      return res.status(400).json({ error: "Name, email and message are required." });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: "Enter a valid email." });
    }
    if (body.length < 10) {
      return res.status(400).json({ error: "Describe the task in at least 10 characters." });
    }

    try {
      const ticket = await Support.create({ name, email, title, body });
      const ticketId = ticket.get("id") as number;
      await Message.create({
        text: body,
        room: ticketId,
        role: "User",
        SupportId: ticketId,
      });
      return res.status(201).json(ticket);
    } catch (error) {
      console.error("Error creating ticket:", error);
      return res.status(500).json({ error: "Server error. Try again later." });
    }
  }

  static async closeSupportTicket(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "Enter ticket ID" });
    }
    try {
      const ticket = await Support.findByPk(id);
      if (!ticket) {
        return res.status(404).json({ error: "Ticket not found" });
      }
      await ticket.update({ statusClose: true });
      return res.status(200).json({ message: "Ticket closed" });
    } catch (error) {
      console.error("Error closing ticket:", error);
      return res.status(500).json({ error: "Server error. Try again later." });
    }
  }

  static async getStateTicket(req: Request, res: Response): Promise<Response> {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!id) {
      return res.status(400).json({ error: "Enter ticket ID" });
    }
    try {
      const ticket = await Support.findByPk(id);
      if (!ticket) {
        return res.status(404).json({ error: "Ticket not found" });
      }
      return res.status(200).json({ statusClose: ticket.get("statusClose") });
    } catch (error) {
      console.error("Error reading ticket:", error);
      return res.status(500).json({ error: "Server error. Try again later." });
    }
  }

  static async saveMessage(req: Request, res: Response): Promise<Response> {
    const role = String(req.body?.role ?? "User");
    const text = String(req.body?.text ?? "").trim();
    const room = Number(req.body?.room);

    if (!text || !Number.isFinite(room)) {
      return res.status(400).json({ error: "Enter text and room number" });
    }

    try {
      const ticket = await Support.findByPk(room);
      if (!ticket) {
        return res.status(404).json({ error: "Ticket not found" });
      }
      if (ticket.get("statusClose")) {
        return res.status(400).json({ error: "Ticket is closed" });
      }

      const payload: {
        text: string;
        room: number;
        role: string;
        SupportId: number;
        UserId?: number;
        AdministratorId?: number;
      } = { text, room, role, SupportId: room };

      const id = readUserId(req);
      if (role === "admin") {
        if (!id) {
          return res.status(401).json({ error: "Token is missing" });
        }
        payload.AdministratorId = id;
      } else if (id) {
        payload.UserId = id;
      }

      const message = await Message.create(payload);
      return res.status(201).json({ message: "Message saved", data: message });
    } catch (error) {
      console.error("Error saving message:", error);
      return res.status(500).json({ error: "Server error. Try again later." });
    }
  }

  static async getMessages(req: Request, res: Response): Promise<Response> {
    const roomParam = Array.isArray(req.params.room) ? req.params.room[0] : req.params.room;
    const room = Number(roomParam);
    if (!Number.isFinite(room)) {
      return res.status(400).json({ error: "Enter room number" });
    }
    try {
      const messages = await Message.findAll({
        where: { room },
        order: [["createdAt", "ASC"]],
      });
      return res.status(200).json({ data: messages });
    } catch (error) {
      console.error("Error receiving messages:", error);
      return res.status(500).json({ error: "Server error. Try again later." });
    }
  }
}

export default ChatController;

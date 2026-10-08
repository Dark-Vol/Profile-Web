import http from "http";
import cors from "cors";
import express from "express";
import { Server } from "socket.io";
import sequelize from "@config/db";
import router from "./routers";
import "./models/models";

const PORT = Number(process.env.PORT) || 4000;
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: true,
    credentials: true,
  },
});

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/api", router);

io.on("connection", (socket) => {
  socket.on("joinRoom", (room: string | number) => {
    socket.join(String(room));
  });

  socket.on("sendMessage", (data: { room: number; role: string; text: string }) => {
    io.to(String(data.room)).emit("receiveMessage", data);
  });

  socket.on("closeTicket", (data: { room: number }) => {
    io.to(String(data.room)).emit("ticketClosed", data);
  });
});

async function start() {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
  server.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
  });
}

start().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

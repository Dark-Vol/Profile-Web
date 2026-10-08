"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { io, type Socket } from "socket.io-client";
import type { CreateTicketPayload, Message, ReceivedMessage, SupportTicket } from "@/types/chat";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL ?? "http://localhost:4000";
const ROOM_KEY = "roomId";

export default function useChat() {
  const socketRef = useRef<Socket | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ReceivedMessage[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [room, setRoom] = useState(-1);
  const [activeChat, setActiveChat] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getSocket = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!socketRef.current) {
      socketRef.current = io(SOCKET_URL, { autoConnect: true });
    }
    return socketRef.current;
  }, []);

  const joinRoom = useCallback(
    (id: number) => {
      setRoom(id);
      localStorage.setItem(ROOM_KEY, String(id));
      getSocket()?.emit("joinRoom", id);
    },
    [getSocket],
  );

  const createTicket = useCallback(async (payload: CreateTicketPayload) => {
    const response = await axios.post<SupportTicket>(`${API_URL}/api/chat/ticket`, {
      name: payload.name,
      email: payload.email,
      body: payload.message,
      title: payload.name,
    });
    return response.data;
  }, []);

  const sendTicket = useCallback(
    async (payload: CreateTicketPayload) => {
      setSending(true);
      setError(null);
      try {
        const ticket = await createTicket(payload);
        if (ticket.id) {
          joinRoom(ticket.id);
          setActiveChat(true);
          setIsChatOpen(true);
        }
        return ticket;
      } catch (err) {
        const next =
          axios.isAxiosError(err) && err.response?.data?.error
            ? String(err.response.data.error)
            : "Request failed";
        setError(next);
        throw err;
      } finally {
        setSending(false);
      }
    },
    [createTicket, joinRoom],
  );

  const sendMessage = useCallback(() => {
    if (!message.trim() || room === -1) return;
    const text = message.trim();
    const token = localStorage.getItem("token");
    axios
      .post(
        `${API_URL}/api/chat/message`,
        { role: "User", room, text },
        token ? { headers: { Authorization: token } } : undefined,
      )
      .then(() => {
        getSocket()?.emit("sendMessage", { room, role: "User", text });
        setMessage("");
      })
      .catch((err) => {
        console.error("Failed to save message:", err.response?.data);
      });
  }, [getSocket, message, room]);

  const closeTicket = useCallback(() => {
    if (room === -1) return;
    axios
      .post(`${API_URL}/api/chat/closeTicket`, { id: room })
      .then(() => {
        getSocket()?.emit("closeTicket", { room });
        setActiveChat(false);
        setIsChatOpen(false);
        setMessages([]);
        setRoom(-1);
        localStorage.removeItem(ROOM_KEY);
      })
      .catch((err) => {
        console.error("Failed to close ticket:", err);
      });
  }, [getSocket, room]);

  useEffect(() => {
    const saved = localStorage.getItem(ROOM_KEY);
    if (!saved) return;
    const id = Number(saved);
    if (!Number.isFinite(id)) return;
    joinRoom(id);
    setIsChatOpen(true);
    setActiveChat(true);
  }, [joinRoom]);

  useEffect(() => {
    if (room === -1) return;
    axios
      .get(`${API_URL}/api/chat/message/${room}`)
      .then((response) => {
        setMessages(response.data.data ?? []);
      })
      .catch((err) => {
        console.error("Failed to load messages:", err.response?.data);
      });
  }, [room]);

  useEffect(() => {
    if (room === -1) return;
    const socket = getSocket();
    if (!socket) return;

    const handleReceiveMessage = (data: ReceivedMessage) => {
      setMessages((prev) => [...prev, data]);
    };

    const handleTicketClosed = () => {
      setActiveChat(false);
      setIsChatOpen(false);
      localStorage.removeItem(ROOM_KEY);
    };

    socket.on("receiveMessage", handleReceiveMessage);
    socket.on("ticketClosed", handleTicketClosed);
    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
      socket.off("ticketClosed", handleTicketClosed);
    };
  }, [getSocket, room]);

  const getRole = (item: Message): string => {
    if (item.role) return item.role;
    return item.UserId ? "User" : "admin";
  };

  return {
    messages,
    message,
    setMessage,
    sendMessage,
    SendMasseg: sendMessage,
    createTicket,
    sendTicket,
    sending,
    error,
    activeChat,
    setActiveChat,
    isChatOpen,
    toggleChat: () => setIsChatOpen((prev) => !prev),
    setMessages,
    getRole,
    closeTicket,
    CloseTicket: closeTicket,
    startChat: sendTicket,
  };
}

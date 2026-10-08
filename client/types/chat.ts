export interface ReceivedMessage {
  role: string;
  room: number;
  text: string;
  UserId?: number;
  AdministratorId?: number;
}

export interface Message {
  role?: string;
  UserId?: number;
}

export interface CreateTicketPayload {
  name: string;
  email: string;
  message: string;
}

export interface SupportTicket {
  id: number;
  name: string;
  email: string;
  title: string;
  body: string;
  statusClose?: boolean;
}

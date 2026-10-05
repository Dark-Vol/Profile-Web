export interface Massage {
    id?: number;
    text: string;
    number: string;
}

export interface SupportAttributes {
  id?: number;
  title: string;
  body: string;
  statusClose?: boolean;
  statusAnswer?: boolean;
  answer?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MessageAttributes {
  id?: number;
  text: string;
  room: number;
  status?: boolean;
  isRead?: boolean;
  UserId?: number;
  AdministratorId?: number;
  SupportId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
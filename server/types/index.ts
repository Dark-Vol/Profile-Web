export interface SupportAttributes {
  id?: number;
  name: string;
  email: string;
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
  role?: string;
  status?: boolean;
  isRead?: boolean;
  UserId?: number | null;
  AdministratorId?: number | null;
  SupportId?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserAttributes {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  registrationDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AdministratorAttributes {
  id?: number;
  adminName: string;
  email: string;
  password: string;
  registrationDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

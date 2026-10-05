import { DataTypes, Model } from "sequelize";
import sequelize from "@config/db";
import {
  SupportAttributes,
  MessageAttributes,
  UserAttributes.
  AdministratorAttributes
} from "../types";

export const Support = sequelize.define<Model<SupportAttributes>>("Support", {
  title: { type: DataTypes.STRING(255), allowNull: false },
  body: { type: DataTypes.STRING(255), allowNull: false },
  statusClose: { type: DataTypes.BOOLEAN, defaultValue: false },
  statusAnswer: { type: DataTypes.BOOLEAN, defaultValue: false },
  answer: { type: DataTypes.STRING(255) },
});

export const Message = sequelize.define<Model<MessageAttributes>>("Message", {
  text: { type: DataTypes.TEXT, allowNull: false },
  room: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.BOOLEAN, defaultValue: false },
  isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export const User = sequelize.define<Model<UserAttributes>>("User", {
  firstName: { type: DataTypes.STRING(255), allowNull: false },
  lastName: { type: DataTypes.STRING(255), allowNull: false },
  email: { type: DataTypes.STRING(255), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  registrationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

export const Administrator = sequelize.define<Model<AdministratorAttributes>>("Administrator", {
  adminName: { type: DataTypes.STRING(255), allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  registrationDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

User.hasMany(Message);
Message.belongsTo(User);

Administrator.hasMany(Message);
Message.belongsTo(Administrator);

Support.hasMany(Message);
Message.belongsTo(Support);
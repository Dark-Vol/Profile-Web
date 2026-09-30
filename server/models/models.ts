import { DataTypes, Model } from 'sequelize';
import sequelize from '@config/db';
import { Massage } from '../types';


export const Message = sequelize.define<Model<Message>>("Message", {
  text: { type: DataTypes.TEXT, allowNull: false },
  room: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.BOOLEAN, defaultValue: false },
  isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
});
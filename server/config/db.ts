import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME ?? "Profile",
  process.env.DB_USER ?? "root",
  process.env.DB_PASSWORD ?? "",
  {
    dialect: "mysql",
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: Number(process.env.DB_PORT) || 3306,
  },
);

export default sequelize;
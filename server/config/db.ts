import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'Profile',
    'root',
    '', 
    {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
    }
);

export default sequelize;
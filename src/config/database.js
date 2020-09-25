require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.HOST || 'localhost',
  username: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || 'password',
  database: process.env.DATABASE || 'emecanica',
  define: {
    timestamps: true,
    underscored: true,
  },
};
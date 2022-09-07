import dotenv from 'dotenv';
dotenv.config();

export const authUserDB = {
  user: process.env.DB_USER,
  pwd: process.env.DB_PWD,
  ip: process.env.DB_PWD,
  port: process.env.DB_PWD,
};

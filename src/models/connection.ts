import 'dotenv/config';
import mysql from 'mysql2/promise';
import { PrismaClient } from '@prisma/client';

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export default connection;

export const prisma = new PrismaClient();
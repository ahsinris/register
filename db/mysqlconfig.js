import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const dbconn = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
}).promise()

export default dbconn

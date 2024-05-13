require('dotenv').config()

import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  entities: [User],
  logging: false,
  synchronize: true,
})
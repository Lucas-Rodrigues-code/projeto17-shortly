/* import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  
export default connection; */

import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};


 const connection = new Pool(configDatabase);

 export default connection;
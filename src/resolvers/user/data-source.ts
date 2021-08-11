require("dotenv").config();
import { Pool, QueryResult } from "pg";
import { User } from "../../interfaces/user";
import { selectUserByIdQuery, selectUsersQuery } from "./sql-queries";

const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.ENDPOINT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: parseInt(process.env.PORT as string),
});

export async function getAllUsers(): Promise<User[]> {
    try {
        const result: QueryResult<User> = await pool.query(selectUsersQuery);
        return result.rows;
    } catch (err) {
        throw (err);
    }
}

export async function getUserById(userId: number): Promise<User> {
    try {
        const result: QueryResult<User> = await pool.query(selectUserByIdQuery, [userId]);
        return result.rows[0];
    } catch (err) {
        throw (err);
    }
}

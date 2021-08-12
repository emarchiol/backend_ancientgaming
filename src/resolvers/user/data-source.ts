import { QueryResult } from "pg";
import { pool } from "../..";
import { User } from "../../interfaces/user";
import { selectUserByIdQuery, selectUsersQuery } from "./sql-queries";

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

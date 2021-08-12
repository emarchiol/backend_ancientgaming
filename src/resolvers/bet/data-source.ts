require("dotenv").config();
import { Bet } from "../../interfaces/bet";
import { Pool, QueryResult } from "pg";
import { insertBetQuery, selectBetByIdQuery, selectBetsQuery, updateUserBalance } from "./sql-queries";

const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.ENDPOINT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: parseInt(process.env.PORT as string),
});

export async function getAllBets(): Promise<Bet[]> {
    try {
        const result: QueryResult<Bet> = await pool.query(selectBetsQuery);
        return result.rows;
    } catch (err) {
        throw (err);
    }
}


export async function getBetById(betId: number): Promise<Bet> {
    try {
        const result: QueryResult<Bet> = await pool.query(selectBetByIdQuery, [betId]);
        return result.rows[0];
    } catch (err) {
        throw (err);
    }
}

export function getBestBetPerUser(limit: number): Bet[] {
    return [];
}

export async function addBet(userId: number, betAmount: number, chance: number, payout: number): Promise<Bet> {
    try {
        const randomChances: number = Math.random();
        const betResult: boolean = randomChances < (chance/100);

        const result: QueryResult<Bet> = await pool.query(insertBetQuery, [userId, betAmount, chance, payout, betResult]);
        await pool.query(updateUserBalance, [ betResult ? (betAmount*payout)-betAmount : -betAmount, userId]);

        return result.rows[0];
    } catch (err) {
        throw (err);
    }
}

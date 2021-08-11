require("dotenv").config();
import { Bet } from "../../interfaces/bet";
import { Pool, QueryResult } from "pg";
import { selectBetByIdQuery, selectBetsQuery } from "./sql-queries";

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

export function addBet(userId: number, betAmount: number, chance: number): Bet {
    return {
        id: 3,
        betAmount: betAmount,
        chance: chance,
        payout: 0,
        userId: userId,
        win: false
    };
}

import { pool } from "../../..";
import { getAllBets, getBestBetPerUser, getBetById } from "../data-source";
import { selectBestBets, selectBetByIdQuery, selectBetsQuery } from "../sql-queries";

describe("bet data-source", () => {
    describe("getBestBetPerUser", () => {
        it("should call pool.query with selectBestBets string and limit parameter", async () => {
            let betsMockRows = {rows: [[
                {
                    id: 1,
                    userId: 2,
                    betAmount: 10,
                    chance: 1,
                    payout: 100,
                    win: false 
                },
                {
                    id: 2,
                    userId: 3,
                    betAmount: 220,
                    chance: 60,
                    payout: 50,
                    win: true 
                }
            ]]};

            const querySpy = jest.spyOn(pool, "query");
            const mockImplementation = querySpy.mockImplementation(() => {return betsMockRows});

            expect(await getBestBetPerUser(2)).toEqual(betsMockRows.rows);
            expect(mockImplementation).toHaveBeenCalledWith(selectBestBets, [2]);
        });
    });

    describe("getBets", () => {
        it("should call pool.query with selectBetsQuery string", async () => {
            let allBetsMock = {rows: [[
                {
                    id: 1,
                    userId: 2,
                    betAmount: 10,
                    chance: 1,
                    payout: 100,
                    win: false 
                },
                {
                    id: 2,
                    userId: 3,
                    betAmount: 220,
                    chance: 60,
                    payout: 50,
                    win: true 
                }
            ]]};

            const querySpy = jest.spyOn(pool, "query");
            const mockImplementation = querySpy.mockImplementation(() => {return allBetsMock});
            
            expect(await getAllBets()).toEqual(allBetsMock.rows);
            expect(mockImplementation).toHaveBeenCalledWith(selectBetsQuery);
        });
    });

    describe("getBetById", () => {
        it("should call pool.query with selectBetByIdQuery string", async () => {
            let betById = {rows: [
                {
                    id: 1,
                    userId: 2,
                    betAmount: 10,
                    chance: 1,
                    payout: 100,
                    win: false 
                }
            ]};

            const querySpy = jest.spyOn(pool, "query");
            querySpy.mockImplementation(() => {return betById});
            
            expect(await getBetById(1)).toEqual(betById.rows[0]);
            expect(await pool.query).toHaveBeenCalledWith(selectBetByIdQuery, [1]);
        });
    });
});

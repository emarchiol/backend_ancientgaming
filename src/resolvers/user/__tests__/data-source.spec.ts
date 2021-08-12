import { pool } from "../../..";
import { getAllUsers, getUserById } from "../data-source";
import { selectUserByIdQuery, selectUsersQuery } from "../sql-queries";

describe("user data-source", () => {
    describe("getUsers", () => {
        it("should call pool.query with selectUsersQuery string", async () => {
            let allUsersMock = {rows: [[
                {
                    id: 1,
                    name: "Some guy",
                    balance: "10"
                },
                {
                    id: 2,
                    name: "The other guy",
                    balance: 5
                }
            ]]};

            const querySpy = jest.spyOn(pool, "query");
            const mockImplementation = querySpy.mockImplementation(() => {return allUsersMock});
            
            expect(await getAllUsers()).toEqual(allUsersMock.rows);
            expect(mockImplementation).toHaveBeenCalledWith(selectUsersQuery);
        });
    });

    describe("getUserById", () => {
        it("should call pool.query with selectUserByIdQuery string", async () => {
            let betById = {rows: [
                {
                    id: 2,
                    name: "The other guy",
                    balance: 5
                }
            ]};

            const querySpy = jest.spyOn(pool, "query");
            querySpy.mockImplementation(() => {return betById});
            
            expect(await getUserById(1)).toEqual(betById.rows[0]);
            expect(await pool.query).toHaveBeenCalledWith(selectUserByIdQuery, [1]);
        });
    });
});

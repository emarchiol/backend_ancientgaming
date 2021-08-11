import { Bet } from "../../interfaces/bet";
import { addBet, getAllBets, getBestBetPerUser, getBetById } from "./data-source";

export const betResolver = {
    Query: {
        getBetList: async () => await getAllBets(),
        getBet: async (_: any, {id}: any, ___: any ) => await getBetById(id),
        getBestBetPerUser: (_: any, {limit}: any, ___: any) => getBestBetPerUser(limit)
    },
    Mutation: {
        createBet: async (_: any, newBet: Bet, ___: any) => await addBet(newBet.userId, newBet.betAmount, newBet.chance)
    }
  };

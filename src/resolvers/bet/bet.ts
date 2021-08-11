import { Bet } from "../../interfaces/bet";
import { addBet, getAllBets, getBestBetPerUser, getBetById } from "./data-source";

export const betResolver = {
    Query: {
        getBetList: () => getAllBets,
        getBet: (_: any, {id}: any, ___: any ) => getBetById(id),
        getBestBetPerUser: (_: any, {limit}: any, ___: any) => getBestBetPerUser(limit)
    },
    Mutation: {
        createBet: (_: any, newBet: Bet, ___: any) => addBet(newBet.userId, newBet.betAmount, newBet.chance)
    }
  };

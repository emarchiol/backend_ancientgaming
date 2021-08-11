import { getAllBets, getBestBetPerUser, getBetById } from "./data-source";

export const betResolver = {
    Query: {
        getBetList: () => getAllBets,
        getBet: (_:any, {id}: any, ___:any ) => getBetById(id),
        getBestBetPerUser: (_:any, {limit}:any, ___:any) => getBestBetPerUser(limit)
    },
  };

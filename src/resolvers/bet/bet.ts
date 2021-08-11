import { getAllBets, getBetById } from "./data-source";

export const betResolver = {
    Query: {
        getBetList: () => getAllBets,
        getBet: (_:any, {id}: any, ___:any ) => getBetById(id)
    },
  };

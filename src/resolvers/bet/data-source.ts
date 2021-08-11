import { BreakingChangeType } from "graphql";
import { Bet } from "../../interfaces/bet";

// Mocked data-set.
const bets = [
    {
        id: 1,
        userId: 1,
        betAmount: 1200000,
        chance: 20,
        payout: 3,
        win: true
    }, {
        id: 2,
        userId: 2,
        betAmount: 12.25,
        chance: 10,
        payout: 1.5,
        win: false
    },
];


export function getAllBets(): Bet[] {
    return bets;
}


export function getBetById(betId: number): Bet {
    return bets[betId];
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

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

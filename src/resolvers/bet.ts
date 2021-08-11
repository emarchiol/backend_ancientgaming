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

export const betResolver = {
    Query: {
        getBetList: () => bets,
    },
  };

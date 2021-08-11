// Mocked data-set.
const users = [
    {
        id: 1,
        name: 'Show me the money guy',
        balance: 1200000
    }, {
        id: 2,
        name: 'Broke guy',
        balance: 12.25
    },
];

export const userResolver = {
    Query: {
        getUserList: () => users,
    },
  };

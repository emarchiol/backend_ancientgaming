import { getAllUsers, getUserById } from "./data-source";

export const userResolver = {
    Query: {
        getUserList: () => getAllUsers,
        getUser: (_: any, {id}: any, ___: any) => getUserById(id)
    },
  };

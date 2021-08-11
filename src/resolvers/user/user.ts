import { getAllUsers, getUserById } from "./data-source";

export const userResolver = {
    Query: {
        getUserList: async () => await getAllUsers(),
        getUser: async (_: any, {id}: any, ___: any) => await getUserById(id)
    },
  };

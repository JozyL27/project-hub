import { client } from "../ServiceHelpers/ServiceHelpers";
import { listQuery, listsQuery, listMutation } from "./ListsSchema";

export const getListById = async (id: string) => {
  const {
    data: { list },
  }: any = await client.query({ query: listQuery, variables: { id } });
  return list;
};

export const getUserLists = async (id: any, page: any) => {
  try {
    const {
      data: { lists },
    }: any = await client.query({
      query: listsQuery,
      variables: { id, page },
      fetchPolicy: "no-cache",
    });
    return lists;
  } catch (error) {
    throw new Error(error);
  }
};

export const createList = async (input: any) => {
  const {
    data: { list },
  }: any = await client.mutate({
    mutation: listMutation,
    variables: { input },
    update: (cache: any, { data }) => {
      cache.writeQuery({
        query: listQuery,
        variables: { id: data.list.id },
        data,
      });
    },
  });
  return list;
};

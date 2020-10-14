import { gql, client } from "../ServiceHelpers/ServiceHelpers";

export const getListById = async (id: string) => {
  const query = gql`
    query ListQuery($id: ID!) {
      list(id: $id) {
        id
        title
        author
      }
    }
  `;

  const {
    data: { list },
  }: any = await client.query({ query, variables: { id } });
  return list;
};

export const getUserLists = async (id: any) => {
  const query = gql`
    query ListsQuery($id: ID!) {
      lists(id: $id) {
        id
        title
        author
      }
    }
  `;

  const {
    data: { lists },
  }: any = await client.query({
    query,
    variables: { id },
    fetchPolicy: "no-cache",
  });
  return lists;
};

export const createList = async (input: any) => {
  const mutation = gql`
    mutation CreateList($input: CreateListInput) {
      list: createList(input: $input) {
        id
        title
        author
      }
    }
  `;

  const {
    data: { list },
  }: any = await client.mutate({ mutation, variables: { input } });
  return list;
};

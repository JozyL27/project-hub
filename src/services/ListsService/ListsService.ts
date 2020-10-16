import { gql, client } from "../ServiceHelpers/ServiceHelpers";

const listDetailFragment = gql`
  fragment ListDetail on List {
    id
    title
    author
  }
`;

const listQuery = gql`
  query ListQuery($id: ID!) {
    list(id: $id) {
      ...ListDetail
    }
  }
  ${listDetailFragment}
`;

const listsQuery = gql`
  query ListsQuery($id: ID!, $page: Int) {
    lists(id: $id, page: $page) {
      ...ListDetail
    }
  }
  ${listDetailFragment}
`;

const listMutation = gql`
  mutation CreateList($input: CreateListInput) {
    list: createList(input: $input) {
      ...ListDetail
    }
  }
  ${listDetailFragment}
`;

export const getListById = async (id: string) => {
  const {
    data: { list },
  }: any = await client.query({ query: listQuery, variables: { id } });
  return list;
};

export const getUserLists = async (id: any, page: any) => {
  const {
    data: { lists },
  }: any = await client.query({
    query: listsQuery,
    variables: { id, page },
    fetchPolicy: "no-cache",
  });
  return lists;
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

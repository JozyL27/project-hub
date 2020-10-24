import { gql } from "../ServiceHelpers/ServiceHelpers";

const listDetailFragment = gql`
  fragment ListDetail on List {
    id
    title
    author
  }
`;

export const listQuery = gql`
  query ListQuery($id: ID!) {
    list(id: $id) {
      ...ListDetail
    }
  }
  ${listDetailFragment}
`;

export const listsQuery = gql`
  query ListsQuery($id: ID!, $page: Int) {
    lists(id: $id, page: $page) {
      ...ListDetail
    }
  }
  ${listDetailFragment}
`;

export const listMutation = gql`
  mutation CreateList($input: CreateListInput) {
    list: createList(input: $input) {
      ...ListDetail
    }
  }
  ${listDetailFragment}
`;

export const deleteListMutation = gql`
  mutation deleteList($id: ID!) {
    deleteList(id: $id)
  }
`;

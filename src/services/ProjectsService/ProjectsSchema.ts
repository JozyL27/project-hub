import { gql } from "../ServiceHelpers/ServiceHelpers";

const projectDetailFragment = gql`
  fragment ProjectDetail on Project {
    id
    title
    description
    link
    list_id
  }
`;

export const projectQuery = gql`
  query ProjectQuery($id: ID!) {
    project(id: $id) {
      ...ProjectDetail
    }
  }
  ${projectDetailFragment}
`;

export const projectMutation = gql`
  mutation CreateProject($input: CreateProjectInput) {
    Project: createProject(input: $input) {
      ...ProjectDetail
    }
  }
  ${projectDetailFragment}
`;

import { gql, client } from "../ServiceHelpers/ServiceHelpers";
import { projectMutation, projectQuery } from "./ProjectsSchema";

export const getProjectsByListId = async (id: string) => {
  try {
    const query = gql`
      query ProjectsQuery($id: ID!) {
        projects(id: $id) {
          id
          title
          description
          link
          list_id
        }
      }
    `;
    const {
      data: { projects },
    }: any = await client.query({
      query,
      variables: { id },
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
    return projects;
  } catch (error) {
    console.log(error);
  }
};

export const getProjectById = async (id: string) => {
  const {
    data: { project },
  }: any = await client.query({ query: projectQuery, variables: { id } });
  return project;
};

export const addNewProject = async (input: object) => {
  const {
    data: { Project },
  }: any = await client.mutate({
    mutation: projectMutation,
    variables: { input },
    update: (cache: any, { data }: any) => {
      cache.writeQuery({
        query: projectQuery,
        variables: { id: data.Project.id },
        data,
      });
    },
  });
  return Project;
};

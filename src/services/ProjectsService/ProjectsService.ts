import config from "../../config";

const graphqlRequest = async (query: any, variables = {}) => {
  const res = await fetch(config.API_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const responseBody = await res.json();
  if (responseBody.errors) {
    const message = responseBody.errors
      .map((error: any) => error.message)
      .join("\n");
    throw new Error(message);
  }

  return responseBody.data;
};

export const getProjectsByListId = async (id: string) => {
  const query = `query ProjectsQuery($id: ID!) {
        projects(id: $id) {
          id
          title
          description
          link
          list_id
        }
    }`;

  const { projects } = await graphqlRequest(query, { id });
  return projects;
};

export const getProjectById = async (id: string) => {
  const query = `query ProjectQuery($id: ID!) {
        project(id: $id) {
          id
          title
          description
          link
          list_id
        }
    }`;

  const { project } = await graphqlRequest(query, { id });
  return project;
};

export const addNewProject = async (input: object) => {
  const query = `mutation CreateProject($input: CreateProjectInput) {
        Project: createProject(input: $input) {
            id
            title
            description
            link
            list_id
        }
    }`;

  const { project } = await graphqlRequest(query, { input });
  return project;
};

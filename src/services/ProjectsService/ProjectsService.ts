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

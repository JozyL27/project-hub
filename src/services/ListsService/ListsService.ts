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

export const getListById = async (id: string) => {
  const query = `query ListQuery($id: ID!){
        list(id: $id) {
          id
          title
          author
        }
    }`;

  const { list } = await graphqlRequest(query, { id });
  return list;
};

export const getUserLists = async (id: any) => {
  const query = `query ListsQuery($id: ID!){
        lists(id: $id) {
          id
          title
          author
        }
    }`;

  const { lists } = await graphqlRequest(query, { id });
  return lists;
};

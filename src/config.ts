export default {
  API_ENDPOINT:
    process.env.NODE_ENV === "production"
      ? ""
      : "http://localhost:8000/graphql",
  TOKEN_KEY:
    process.env.NODE_ENV === "production"
      ? "Super_Secret_Token"
      : "super-super-super-secret",
};

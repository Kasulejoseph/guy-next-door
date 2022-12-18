const env = process.env.NODE_ENV !== "production";

export const BASE_URL = env
  ? "http://localhost:3000/api"
  : "https://jsonplaceholder.typicode.com/posts";

import axios from "axios";

const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getAllPosts = async () => {
  const res = await baseUrl.get("/posts");
  const data = await res.data.posts;

  console.log(data);
};

import axios from "axios";

const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getAllPosts = async (setPosts) => {
  const res = await baseUrl.get("/posts");
  const data = await res.data.posts;

  setPosts(data);
};

export const getPost = async (postId, setPost) => {
  const res = await baseUrl.get(`/posts/${postId}`);
  const data = await res.data.post;

  setPost(data);
};

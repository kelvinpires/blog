import { api } from "../../lib/api";

export const searchPost = async (title, setPosts) => {
  const res = await api.post(`/posts/search?title=${title}`);
  const data = await res.data;

  return setPosts(data.posts);
};

export const getAllPosts = async (setPosts) => {
  const res = await api.get("/posts");
  const data = await res.data.posts;

  return setPosts(data);
};

export const getPost = async (title, setPost) => {
  try {
    const res = await api.get(`/posts/${title}`);
    const data = await res.data.post;

    return setPost(data);
  } catch (err) {
    return (location.href = "http://localhost:3000/404");
  }
};

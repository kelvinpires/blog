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

export const createPost = async (
  auth_token,
  postInfo,
  setPostId,
  setError,
  setSuccess
) => {
  const res = await api
    .post("/posts/create", postInfo, {
      headers: {
        token: `Bearer ${auth_token}`,
      },
    })
    .catch((err) => setError(err.response.data));
  console.log(res);

  const data = await res.data.post;
  setSuccess(res.data.message);
  setPostId(data._id);
};

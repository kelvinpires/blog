import React, { useEffect, useState } from "react";
import {
  PostData,
  PostLink,
  PostTextPrev,
  PostTitle,
} from "../../components/HomePosts/styles";
import { getAllPosts, searchPost } from "../../context/PostContext/apiCalls";
import {
  AllPostDescriptionContent,
  AllPostsContainer,
  AllPostsContent,
  AllPostsImageContent,
  AllPostsImg,
  Separator,
} from "./styles";

export const AllPostsPage = () => {
  const [posts, setPosts] = useState([]);

  let params = new URLSearchParams(location.search);
  let title = params.get("title");

  const getPost = () => {
    if (location.search) {
      return searchPost(title, setPosts);
    }
    return getAllPosts(setPosts);
  };

  useEffect(() => {
    getPost();
  }, [location.href]);
  return (
    <AllPostsContainer>
      {posts &&
        posts?.map((post) => {
          const { title, createdAt, _id, text, image } = post;
          const postData = new Date(createdAt).toLocaleDateString();
          const prevText =
            text.length > 200 ? text.slice(0, 200) + "..." : text;

          return (
            <PostLink key={_id} to={`/post/${_id}`}>
              <AllPostsContent>
                <AllPostsImageContent>
                  <AllPostsImg src={image} />
                </AllPostsImageContent>
                <AllPostDescriptionContent>
                  <PostData>{postData}</PostData>
                  <PostTitle>{title}</PostTitle>
                  <PostTextPrev>{prevText}</PostTextPrev>
                </AllPostDescriptionContent>
              </AllPostsContent>
              <Separator />
            </PostLink>
          );
        })}
    </AllPostsContainer>
  );
};

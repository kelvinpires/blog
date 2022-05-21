import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../../context/PostContext/apiCalls";
import { PostData, PostLink, PostTextPrev, PostTitle } from "../styles";
import {
  NewPostContent,
  NewPostImageContainer,
  NewPostImageContent,
  NewPostImg,
} from "./styles";

export const NewPost = () => {
  const [newPost, setNewPost] = useState([]);

  const prevText =
    newPost[1]?.text.length > 150
      ? newPost[1]?.text.slice(0, 150) + "..."
      : newPost[1]?.text;

  useEffect(() => {
    getAllPosts(setNewPost);
  }, []);
  return (
    <>
      {newPost && (
        <PostLink to={`/post/${newPost[1]?._id}`}>
          <NewPostContent>
            <NewPostImageContainer>
              <NewPostImageContent>
                <NewPostImg src={newPost[1]?.image} />
              </NewPostImageContent>
            </NewPostImageContainer>
            <PostData>
              {new Date(newPost[1]?.createdAt).toLocaleDateString()}
            </PostData>
            <PostTitle>{newPost[1]?.title}</PostTitle>
            <PostTextPrev>{prevText}</PostTextPrev>
          </NewPostContent>
        </PostLink>
      )}
    </>
  );
};

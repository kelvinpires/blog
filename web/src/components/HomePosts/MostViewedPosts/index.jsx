import React, { useEffect, useState } from "react";
import { MostViewedContent, MostViewedPostsContainer } from "./styles";
import { getAllPosts } from "../../../context/PostContext/apiCalls";
import { PostData, PostLink, PostTextPrev, PostTitle } from "../styles";
import { Separator } from "../../../pages/AllPostsPage/styles";

export const MostViewedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(setPosts);
  }, []);

  return (
    <MostViewedPostsContainer>
      {posts?.slice(2, 4).map((post) => {
        const { createdAt, title, text, _id } = post;

        const postData = new Date(createdAt).toLocaleDateString();
        const prevText = text.length > 200 ? text.slice(0, 200) + "..." : text;

        return (
          <div key={_id}>
            <PostLink to={`/post/${_id}`}>
              <MostViewedContent>
                <PostData>{postData}</PostData>
                <PostTitle>{title}</PostTitle>
                <PostTextPrev>{prevText}</PostTextPrev>
              </MostViewedContent>
            </PostLink>
            <Separator style={{ width: "100%" }} />
          </div>
        );
      })}
    </MostViewedPostsContainer>
  );
};

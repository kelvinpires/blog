import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getAllPosts } from "../../context/PostContext/apiCalls";
import { SeeMoreLink } from "../HomePosts/styles";
import {
  MainContainer,
  MainImageContainer,
  MainImageImg,
  MainTextContainer,
  MainTextDescription,
  MainTextTitle,
} from "./styles";

export const HomePrincipalPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(setPosts);
  }, []);

  return (
    <MainContainer>
      {posts && (
        <>
          <MainTextContainer>
            <SeeMoreLink to={`/post/${posts[0]?._id}`}>
              <MainTextTitle>{posts[0]?.title}</MainTextTitle>
            </SeeMoreLink>

            <MainTextDescription>
              {posts[0]?.text.length > 300
                ? posts[0]?.text.slice(0, 300) + "..."
                : posts[0]?.text}
            </MainTextDescription>
            <SeeMoreLink to={`/post/${posts[0]?._id}`}>
              Veja mais <FaArrowRight size="1.8rem" color="#4fff4b" />
            </SeeMoreLink>
          </MainTextContainer>
          <SeeMoreLink to={`/post/${posts[0]?._id}`}>
            <MainImageContainer>
              <MainImageImg src={posts[0]?.image} />
            </MainImageContainer>
          </SeeMoreLink>
        </>
      )}
    </MainContainer>
  );
};

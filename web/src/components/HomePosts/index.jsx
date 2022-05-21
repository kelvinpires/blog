import React from "react";
import { CarouselPosts } from "./CarouselPosts";
import { MostViewedPosts } from "./MostViewedPosts";
import { NewPost } from "./NewPost";
import { HomePostsContainer } from "./styles";

export const HomePosts = () => {
  return (
    <HomePostsContainer>
      <MostViewedPosts />
      <NewPost />
      <CarouselPosts />
    </HomePostsContainer>
  );
};

import React from "react";
import { HomePosts } from "../../components/HomePosts";
import { HomePrincipalPost } from "../../components/HomePrincipalPost";
import { Footer } from "../../components/Footer";

import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomePrincipalPost />
        <HomePosts />
      </HomeContainer>
    </>
  );
};

import React from "react";
import { PostTitle } from "../HomePosts/styles";
import { BackLink, NotFoundContainer, NotFoundContent } from "./styles";

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <PostTitle
          style={{ color: "#fbf6ff", fontSize: "5rem", textAlign: "center" }}
        >
          404 <br /> Not Found
        </PostTitle>
        <BackLink to="/">Voltar</BackLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

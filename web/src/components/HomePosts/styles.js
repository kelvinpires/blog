import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePostsContainer = styled.section`
  display: grid;
  grid-template-areas:
    "newpost viewed"
    "carousel carousel";
  gap: 6rem 5rem;
  background-color: var(--light-purple);
  padding: 6rem 13rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media screen and (max-width: 890px) {
    grid-template-areas:
      "viewed viewed"
      "newpost newpost"
      "carousel carousel";
  }
  @media screen and (max-width: 540px) {
    grid-template-areas:
      "viewed"
      "newpost"
      "carousel";
  }

  @media screen and (max-width: 1100px) {
    padding: 6rem 5rem;
  }
`;

export const SeeMoreLink = styled(Link)`
  text-decoration: none;
  color: var(--button-bg);
  font-size: 1.8rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--green);
  }
`;

export const PostData = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #000;
`;

export const PostTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  color: var(--purple-bg);
  &:hover {
    color: var(--button-bg);
  }
`;

export const PostTextPrev = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: #000;
`;

export const PostLink = styled(Link)`
  text-decoration: none;
`;

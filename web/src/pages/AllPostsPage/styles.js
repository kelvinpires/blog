import styled from "styled-components";

export const AllPostsContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 6rem 13rem;
  gap: 3rem;
  @media screen and (max-width: 425px) {
    padding: 6rem 5rem;
  }
`;

export const AllPostsContent = styled.div`
  display: flex;
  gap: 2rem;
`;

export const AllPostsImageContent = styled.div`
  width: 30rem;
  height: auto;
  border-radius: 0.3rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: grayscale(0.6);
  }
  @media screen and (max-width: 425px) {
    width: 60rem;
  }
`;

export const AllPostsImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
  object-fit: cover;
`;

export const AllPostDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.8rem;
  max-width: 50%;

  & > p {
    line-height: 1.5;
  }
`;

export const Separator = styled.div`
  height: 0.3rem;
  width: 80%;
  background-color: var(--button-bg);
  margin-top: 2rem;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

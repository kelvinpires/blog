import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: flex-start;
  padding: 3rem 10rem;
  gap: 6rem;
  background-color: var(--purple-bg);
  @media screen and (max-width: 767px) {
    padding: 3rem 5rem;
  }
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  max-width: 50%;
  @media screen and (max-width: 767px) {
    max-width: 40%;
  }
`;

export const MainTextTitle = styled.h1`
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  color: var(--button-bg);
  font-weight: 700;
`;

export const MainTextDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.5;
  color: var(--light-purple);
`;

export const MainImageContainer = styled.div`
  width: auto;
  height: 30rem;
  border-radius: 0.8rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: grayscale(0.6);
  }
`;

export const MainImageImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
`;

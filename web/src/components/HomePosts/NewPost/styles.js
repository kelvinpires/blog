import styled from "styled-components";

export const NewPostContent = styled.div`
  grid-area: newpost;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;
  width: 50rem;
`;

export const NewPostImageContainer = styled.div`
  width: auto;
  height: 30rem;
  border-radius: 0.8rem;
`;
export const NewPostImageContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: grayscale(0.6);
  }
`;

export const NewPostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
`;

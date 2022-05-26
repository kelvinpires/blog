import styled from "styled-components";

export const CarouselContainer = styled.div`
  grid-area: carousel;
  position: relative;
  overflow-x: hidden;
`;

export const CarouselContentSlide = styled.div`
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const CarouselContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  width: 80%;
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 30rem;
  @media screen and (max-width: 890px) {
    width: 25rem;
  }
`;

export const CarouselImageContainer = styled.div`
  width: auto;
  height: 20rem;
  border-radius: 0.8rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: grayscale(0.6);
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  object-fit: cover;
`;

export const ButtonSlide = styled.button`
  position: absolute;
  bottom: 50%;
  background-color: #1e1e2680;
  border-radius: 50%;
  border: none;
  height: max-content;
  width: 5rem;
  height: 5rem;
  z-index: 999;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    width: 8rem;
    height: 8rem;
  }
`;

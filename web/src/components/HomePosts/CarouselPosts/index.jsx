import React, { useEffect, useRef, useState } from "react";
import { getAllPosts } from "../../../context/PostContext/apiCalls";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  PostTitle,
  PostData,
  PostTextPrev,
  PostLink,
  SeeMoreLink,
} from "../styles";
import {
  CarouselContainer,
  CarouselContent,
  CarouselImageContainer,
  CarouselImg,
  CarouselItem,
  ButtonSlide,
  CarouselContentSlide,
} from "./styles";

export const CarouselPosts = () => {
  const [carouselPosts, setCarouselPosts] = useState([]);
  const carousel = useRef();

  const index = 1;

  const handleSlideRight = () => {
    carousel.current.scrollLeft +=
      Math.round(carousel.current.offsetWidth / 2) * index;
  };

  const handleSlideLeft = () => {
    carousel.current.scrollLeft -=
      Math.round(carousel.current.offsetWidth / 2) * index;
  };

  useEffect(() => {
    getAllPosts(setCarouselPosts);
  }, []);

  return (
    <CarouselContainer>
      <ButtonSlide onClick={handleSlideLeft} style={{ left: 0 }}>
        <FaArrowLeft size="3rem" color="white" />
      </ButtonSlide>
      <CarouselContentSlide ref={carousel}>
        {carouselPosts && (
          <CarouselContent>
            {carouselPosts.slice(0, 8).map((post) => {
              const { image, title, _id, text, createdAt } = post;

              const postData = new Date(createdAt).toLocaleDateString();
              const prevText =
                text.length > 100 ? text.slice(0, 100) + "..." : text;

              return (
                <PostLink key={_id} to={`/post/${_id}`}>
                  <CarouselItem>
                    <CarouselImageContainer>
                      <CarouselImg src={image} />
                    </CarouselImageContainer>
                    <PostData>{postData}</PostData>
                    <PostTitle style={{ fontSize: "1.8rem" }}>
                      {title}
                    </PostTitle>
                  </CarouselItem>
                </PostLink>
              );
            })}
          </CarouselContent>
        )}
        <ButtonSlide onClick={handleSlideRight} style={{ right: 0 }}>
          <FaArrowRight size="3rem" color="white" />
        </ButtonSlide>
      </CarouselContentSlide>
    </CarouselContainer>
  );
};

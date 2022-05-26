import styled from "styled-components";

export const PostPageContainer = styled.main`
  padding: 6rem 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--light-purple);
  @media screen and (max-width: 425px) {
    padding: 6rem 10rem;
  }
`;

export const PostPageContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const PostPageImageContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.8rem;
`;

export const PostPageImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
`;

export const PostVideo = styled.video`
  width: 100%;
  max-height: 40rem;
`;

export const PostDataContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UserImageContent = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 0.4rem solid var(--button-bg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserName = styled.h3`
  font-family: "Roboto", sans-serif;
  color: var(--purple-bg);
  font-size: 2rem;
`;

export const PostText = styled.p`
  font-size: 2rem;
  color: var(--text-color);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.6;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

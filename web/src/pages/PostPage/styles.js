import styled from "styled-components";

export const PostPageContainer = styled.main`
  padding: 6rem 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--light-purple);
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

import styled from "styled-components";

export const CreatePostContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
`;

export const CreatePostBox = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`;

export const CreatePostForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
`;

export const CreateInputBox = styled.div``;

export const CreatePostLabel = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--dark-bg);
`;

export const CreatePostInput = styled.input`
  height: 4rem;
  width: 100%;
  padding: 0.5rem 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  outline: none;
  margin-top: 0.5rem;
  border: 0.2rem solid var(--button-bg);
`;

export const CreatePostTextarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 20rem;
  padding: 0.5rem 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  outline: none;
  margin-top: 0.5rem;
  border: 0.2rem solid var(--button-bg);
`;

export const FileLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 0.2rem solid transparent;
  color: var(--text-color);
  border-radius: 0.8rem;

  &:hover {
    border-color: #ccc;
    background-color: #eb0f0f20;
    border-color: #eb0f0f;
    &:first-of-type {
      border-color: #13ec49;
      background-color: #13ec4920;
    }
  }
`;

export const UploadProgressContainer = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: #cccccc80;
`;

export const UploadProgressPercent = styled.div`
  height: 100%;
  background-color: var(--green);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--dark-bg);
`;

export const PostSubmit = styled.button`
  width: 40%;
  height: 5rem;
  background-color: var(--button-bg);
  color: var(--white);
  font-size: 1.6rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.4;
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthContainer = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: var(--purple-bg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthBox = styled.main`
  background-color: var(--light-purple);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
  border-radius: 0.8rem;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--dark-bg);
  width: 100%;
`;

export const AuthInput = styled.input`
  height: 4rem;
  width: 30rem;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  border: 0.2rem solid var(--button-bg);
  border-radius: 0.3rem;
  outline: none;

  &:focus-within {
    border-color: var(--purple-bg);
  }
`;

export const AuthSubmitButton = styled.button`
  @keyframes load {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  padding: 1rem 2rem;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  background-color: var(--button-bg);
  color: var(--light-purple);
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const SignupLink = styled(Link)`
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: var(--button-bg);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Strong = styled.strong``;

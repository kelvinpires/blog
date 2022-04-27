import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  padding: 4rem;
  border-radius: 0.5rem;
`;

export const LoginH2 = styled.h2`
  font-size: 3rem;
  color: var(--title);
  font-family: sans-serif;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  width: 30rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  border: 0.1rem solid #c9c9c9;
  border-radius: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 0.5rem;
  background-color: var(--login-button);
  height: 4rem;
  font-size: 1.6rem;
  margin-top: 3rem;
  color: #f2f2f2;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--login-button-hover);
  }
`;

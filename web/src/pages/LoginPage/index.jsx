import React, { useContext, useEffect, useState } from "react";
import { PostTitle } from "../../components/HomePosts/styles";
import {
  InputBox,
  Label,
  AuthBox,
  AuthContainer,
  AuthForm,
  AuthInput,
  AuthSubmitButton,
  SignupLink,
  Strong,
  AuthFailureContainer,
  AuthFailureText,
} from "../../components/AuthStyles/styles";
import { login } from "../../context/AuthContext/apiCalls";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { FaCircleNotch } from "react-icons/fa";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch, setError);
  };

  return (
    <AuthContainer>
      <AuthBox>
        <PostTitle>Faça seu login</PostTitle>
        <AuthForm>
          <InputBox>
            <Label htmlFor="email">Email</Label>
            <AuthInput
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="password">Senha</Label>
            <AuthInput
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              required
            />
          </InputBox>
          {error && (
            <AuthFailureContainer>
              <AuthFailureText>{error}</AuthFailureText>
            </AuthFailureContainer>
          )}
          <AuthSubmitButton
            disabled={isFetching}
            type="submit"
            onClick={handleLoginSubmit}
          >
            {isFetching ? (
              <FaCircleNotch style={{ animation: "load 1s infinite linear" }} />
            ) : (
              "Entrar"
            )}
          </AuthSubmitButton>
          <SignupLink to="/auth/signup">
            Não tem uma conta? <Strong>Registre-se</Strong>
          </SignupLink>
        </AuthForm>
      </AuthBox>
    </AuthContainer>
  );
};

import React, { useContext, useState } from "react";
import {
  AuthBox,
  AuthContainer,
  AuthFailureContainer,
  AuthFailureText,
  AuthForm,
  AuthInput,
  AuthSubmitButton,
  InputBox,
  Label,
  SignupLink,
} from "../../components/AuthStyles/styles";
import { PostTitle } from "../../components/HomePosts/styles";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { signup } from "../../context/AuthContext/apiCalls";
import { CircleNotch } from "phosphor-react";

export const SignupPage = () => {
  const { isFetching, dispatch } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signup(
      { firstName, surname, email, username, password },
      dispatch,
      setError
    );
  };

  return (
    <AuthContainer>
      <AuthBox>
        <PostTitle>Faça seu cadastro</PostTitle>
        <AuthForm>
          <InputBox style={{ flexDirection: "row" }}>
            <InputBox>
              <Label htmlFor="name">Nome</Label>
              <AuthInput
                type="text"
                placeholder="Nome"
                name="name"
                id="name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputBox>
            <InputBox>
              <Label htmlFor="surname">Sobrenome</Label>
              <AuthInput
                type="text"
                placeholder="Sobrenome"
                name="surname"
                id="surname"
                onChange={(e) => setSurname(e.target.value)}
              />
            </InputBox>
          </InputBox>
          <InputBox style={{ width: "100%" }}>
            <Label htmlFor="email">Email</Label>
            <AuthInput
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              style={{ width: "100%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputBox>
          <InputBox style={{ width: "100%" }}>
            <Label htmlFor="username">Nome de usuário</Label>
            <AuthInput
              type="text"
              name="username"
              placeholder="Nome de usuário"
              id="username"
              style={{ width: "100%" }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputBox>
          <InputBox style={{ width: "100%" }}>
            <Label htmlFor="password">Senha</Label>
            <AuthInput
              type="password"
              placeholder="Senha"
              name="password"
              id="password"
              style={{ width: "100%" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
          {error && (
            <AuthFailureContainer>
              <AuthFailureText>{error}</AuthFailureText>
            </AuthFailureContainer>
          )}
          <AuthSubmitButton type="submit" onClick={handleSignupSubmit}>
            {isFetching ? (
              <CircleNotch
                size={16}
                color="#f6f6ff"
                weight="bold"
                style={{ animation: "load 1s infinite linear" }}
              />
            ) : (
              "Criar nova conta"
            )}
          </AuthSubmitButton>
          <SignupLink to="/auth/login">Já tenho conta</SignupLink>
        </AuthForm>
      </AuthBox>
    </AuthContainer>
  );
};

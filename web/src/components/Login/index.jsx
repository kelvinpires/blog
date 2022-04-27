import React, { useContext, useState } from "react";
import { login } from "../../context/AuthContext/apiCalls";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import {
  Button,
  FormGroup,
  Input,
  Label,
  LoginContainer,
  LoginForm,
  LoginH2,
  LoginWrapper,
} from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  const submitLogin = (e) => {
    e.preventDefault();

    login({ email, password }, dispatch);
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginH2>Personal Blog</LoginH2>
        <LoginForm>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              placeholder="Senha"
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button onClick={submitLogin} type="submit">
            Entrar
          </Button>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
};

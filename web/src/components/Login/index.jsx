import React from "react";
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
            />
          </FormGroup>
          <Button type="submit">Entrar</Button>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
};

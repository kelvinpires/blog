import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 5rem 3rem 5rem;
  background-color: var(--purple-bg);
  gap: 1rem;
  width: 100%;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  @media screen and (max-width: 940px) {
    img {
      width: 15rem;
    }
  }
`;

export const Logo = styled.img``;

export const MenuHamburgerContainer = styled.div`
  display: none;
  @media screen and (max-width: 830px) {
    display: block;
    z-index: 11;
  }
`;

export const MenuHamburgerDiv = styled.div`
  width: 4rem;
  height: 0.6rem;
  background-color: var(--white);
  margin: 0.5rem 0;
  border-radius: 0.3rem;
  transition: 0.3s ease-in;

  &.on {
    opacity: 0;
    &:first-child {
      transform: rotate(45deg) translate(0.7rem, 0.7rem);
      opacity: 1;
    }
    &:last-child {
      transform: rotate(-45deg) translate(0.7rem, -0.9rem);
      opacity: 1;
    }
  }
`;

export const MenuContainer = styled.div`
  @media screen and (max-width: 830px) {
    display: none;
    &.on {
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--button-bg);
      z-index: 10;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 830px) {
    display: block;
    line-height: 8rem;
  }
`;

export const MenuLi = styled.li`
  font-size: 2.4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;

  color: var(--white);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--green);
  }
  @media screen and (max-width: 830px) {
    font-size: 5rem;
  }
`;

export const MenuLink = styled(Link)`
  color: var(--white);
  text-decoration: none;

  &:hover {
    color: var(--green);
  }
`;

export const MenuCategories = styled(MenuUl)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--light-purple);
  border-radius: 0.8rem;
  position: absolute;
  left: -25%;
  right: -25%;
  width: max-content;
  padding: 1rem 2rem;
  visibility: ${({ display }) => (display != "false" ? "visible" : "hidden")};
  opacity: ${({ display }) => (display != "false" ? 1 : 0)};
  margin-top: 1rem;
  transition: all 0.2s ease-in-out;
  gap: 3rem;
  box-shadow: 0rem 0.5rem 0.6rem #1e1e1e26;
  z-index: 999;
`;

export const MenuCategoriesLi = styled(MenuLi)`
  font-size: 2rem;
  padding: 0 1rem;
  width: 100%;
  @media screen and (max-width: 830px) {
    font-size: 5rem;
  }
`;

export const MenuCategoriesLink = styled(MenuLink)`
  color: var(--purple-bg);
  &:hover {
    color: var(--button-bg);
  }
`;

export const SearchContainer = styled.div``;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  height: 4rem;
`;

export const SearchInput = styled.input`
  height: 4rem;
  width: 28rem;
  border: none;
  outline: none;
  background-color: var(--dark-bg);
  color: var(--white);
  padding: 0.5rem 2rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  border-radius: 0.3rem 0 0 0.3rem;

  &::placeholder {
    color: var(--light-purple);
  }
`;

export const SearchButton = styled.button`
  width: 6rem;
  height: 100%;
  background-color: var(--button-bg);
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 0rem 0.3rem 0.3rem 0;

  &:hover {
    filter: brightness(1.3);
  }
`;

export const LoginBtn = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  color: var(--dark-bg);
  background-color: var(--white);
  text-decoration: none;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: opacity(0.8);
  }
`;
export const LogoutBtn = styled(LoginBtn)`
  background-color: transparent;
  color: var(--white);
  font-size: 1.8rem;
`;

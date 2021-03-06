import { MagnifyingGlass } from "phosphor-react";
import React, { useContext, useState } from "react";

import LogoImg from "../../assets/images/logo.svg";
import { handleLogout } from "../../context/AuthContext/apiCalls";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import {
  HeaderContainer,
  Logo,
  MenuUl,
  MenuLi,
  MenuLink,
  SearchForm,
  SearchInput,
  SearchButton,
  MenuContainer,
  SearchContainer,
  LogoLink,
  MenuCategories,
  MenuCategoriesLi,
  MenuCategoriesLink,
  LoginBtn,
  LogoutBtn,
  MenuHamburgerContainer,
  MenuHamburgerDiv,
} from "./styles";

export const Header = () => {
  const { user_id, auth_token, dispatch } = useContext(AuthContext);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [isMenuHambOn, setIsMenuHambOn] = useState(null);

  const handleMenu = () => {
    return setMenuDisplay(!menuDisplay);
  };

  const handleMenuHamb = () => {
    setIsMenuHambOn(!isMenuHambOn);

    if (!isMenuHambOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  };

  return (
    <>
      <HeaderContainer>
        <LogoLink to="/" onClick={() => setMenuDisplay(false)}>
          <Logo src={LogoImg} alt="The Blog logo" />
        </LogoLink>
        <MenuHamburgerContainer onClick={handleMenuHamb}>
          <MenuHamburgerDiv className={isMenuHambOn && "on"}></MenuHamburgerDiv>
          <MenuHamburgerDiv className={isMenuHambOn && "on"}></MenuHamburgerDiv>
          <MenuHamburgerDiv className={isMenuHambOn && "on"}></MenuHamburgerDiv>
        </MenuHamburgerContainer>
        <MenuContainer className={isMenuHambOn ? "on" : ""}>
          <MenuUl>
            <MenuLi
              onClick={() => {
                setMenuDisplay(false);
                setIsMenuHambOn(!isMenuHambOn);
              }}
            >
              <MenuLink to="/">Home</MenuLink>
            </MenuLi>
            <MenuLi
              onClick={() => {
                setMenuDisplay(false);
                setIsMenuHambOn(!isMenuHambOn);
              }}
            >
              <MenuLink to="/posts">Posts</MenuLink>
            </MenuLi>
            <MenuLi onClick={handleMenu} style={{ position: "relative" }}>
              Categorias
              <MenuCategories display={`${menuDisplay}`}>
                <MenuCategoriesLi>
                  <MenuCategoriesLink to="/categories/tech">
                    Tecnologia
                  </MenuCategoriesLink>
                </MenuCategoriesLi>
                <MenuCategoriesLi>
                  <MenuCategoriesLink to="/categories/tips">
                    Dicas
                  </MenuCategoriesLink>
                </MenuCategoriesLi>
                <MenuCategoriesLi>
                  <MenuCategoriesLink to="/categories/curiosities">
                    Curiosidades
                  </MenuCategoriesLink>
                </MenuCategoriesLi>
              </MenuCategories>
            </MenuLi>
            <MenuLi
              onClick={() => {
                setMenuDisplay(false);
                setIsMenuHambOn(!isMenuHambOn);
              }}
            >
              <MenuLink to="/about">Sobre</MenuLink>
            </MenuLi>
            {auth_token && user_id && (
              <MenuLi
                onClick={() => {
                  setMenuDisplay(false);
                  setIsMenuHambOn(!isMenuHambOn);
                }}
              >
                <MenuLink to="/painel">Criar Post</MenuLink>
              </MenuLi>
            )}
          </MenuUl>
        </MenuContainer>
        <SearchContainer>
          <SearchForm action="/search">
            <SearchInput name="title" type="search" placeholder="Buscar" />
            <SearchButton type="Submit">
              <MagnifyingGlass size={20} color="#f6f6ff" weight="duotone" />
            </SearchButton>
          </SearchForm>
        </SearchContainer>
        {auth_token && user_id ? (
          <LogoutBtn to="/" onClick={() => handleLogout(dispatch)}>
            Sair
          </LogoutBtn>
        ) : (
          <div style={{ display: "flex", gap: "1rem" }}>
            <LoginBtn to="/auth/login">Entrar</LoginBtn>
            <LoginBtn to="/auth/signup">Criar conta</LoginBtn>
          </div>
        )}
      </HeaderContainer>
    </>
  );
};

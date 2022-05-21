import React from "react";
import { AllRights, BackTop, FooterContainer, LogoHome } from "./styles";
import { FaArrowUp } from "react-icons/fa";
import LogoImg from "../../assets/images/logo.svg";

export const Footer = () => {
  const handleScroll = () => {
    return scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <LogoHome src={LogoImg} />
      <AllRights>&copy; The Blog - Todos os direitos reservados.</AllRights>
      <BackTop title="Voltar para o topo" onClick={handleScroll}>
        <FaArrowUp color="black" size="1.6rem" />
      </BackTop>
    </FooterContainer>
  );
};

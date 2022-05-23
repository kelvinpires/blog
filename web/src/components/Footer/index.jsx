import React from "react";
import { AllRights, BackTop, FooterContainer, LogoHome } from "./styles";
import LogoImg from "../../assets/images/logo.svg";
import { ArrowUp } from "phosphor-react";

export const Footer = () => {
  const handleScroll = () => {
    return scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <LogoHome src={LogoImg} />
      <AllRights>&copy; The Blog - Todos os direitos reservados.</AllRights>
      <BackTop title="Voltar para o topo" onClick={handleScroll}>
        <ArrowUp size={16} color="#f6f6ff" weight="bold" />
      </BackTop>
    </FooterContainer>
  );
};

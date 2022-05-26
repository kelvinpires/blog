import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 13rem;
  background-color: var(--purple-bg);
  position: absolute;
  bottom: auto;
  width: 100%;
`;

export const LogoHome = styled.img`
  @media screen and (max-width: 890px) {
    width: 15rem;
  }
`;

export const AllRights = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  color: var(--white);
  font-weight: 700;
`;

export const BackTop = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background-color: var(--green);
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: opacity(0.8);
  }
  @media screen and (max-width: 425px) {
    width: 8rem;
    height: 8rem;
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--purple-bg);
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;
`;

export const BackLink = styled(Link)`
  padding: 1rem 2rem;
  background-color: var(--button-bg);
  color: var(--white);
  border-radius: 0.3rem;
  text-decoration: none;
  font-size: 3rem;

  &:hover {
    filter: opacity(0.8);
  }
`;

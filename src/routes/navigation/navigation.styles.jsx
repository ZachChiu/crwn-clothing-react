import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  padding: 25px;
`;

export const LogoContainer = styled(Link)``;

export const NavLinksContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

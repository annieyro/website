import { Link } from 'gatsby';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Athiti;
  }
  b, h1 {
      font-weight: 600;
  }
  a {
    text-decoration: none;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavbarContainer = styled(RowContainer)`
  background: ${Colors.lighterRed};
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1.5em 0;
`;

export const NavbarCenterContainer = styled(RowContainer)`
  width: 70%;
  max-width: 800px;
  justify-content: space-between;
  align-items: center;
`;

export const SidebarContainer = styled(ColumnContainer)`
  justify-content: space-between;
  padding: 0.5em;
`;

export const HomeLink = styled(Link)`
  font-family: Arapey;
  font-size: 36px;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  text-decoration: none;
  color: ${Colors.darkText};
`;

export const NavLink = styled(Link)`
  font-family: Karla;
  font-size: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${Colors.darkText};
`;

import { Link } from 'gatsby';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Colors from '../constants/Colors';

export const GlobalStyle = createGlobalStyle`
  html {
   background: ${Colors.lightestRed} 
  }
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

export const HomeLink = styled(Link)`
  font-family: Arapey;
  font-size: 32px;
  letter-spacing: 0.03em;
  text-transform: lowercase;
  text-decoration: none;
  color: ${Colors.lightText};
`;

export const NavLink = styled(Link)`
  font-family: Karla;
  font-size: 18px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${Colors.lightText};
`;

export const LogoContainer = styled(RowContainer)`
  width: 188px;
  align-items: center;
  justify-content: space-between;
`;

// Navbar

export const NavbarContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 1px 2px 1px ${Colors.darkerGray};
  background: ${Colors.darkerGray};
  width: 100%;
  padding: 1em 0;
  max-height: 20vh;
`;

export const NavbarCenterContainer = styled(RowContainer)`
  width: 70%;
  max-width: 800px;
  justify-content: space-between;
  align-items: center;
`;

// Sidebar-specific

export const SidebarContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  box-shadow: 0px 1px 2px 1px ${Colors.darkerGray};
  background: ${Colors.darkerGray};

  height: 100vh;
  width: 18vw;
  min-width: 240px;
  padding: 1em 0;
`;

export const SidebarLeftContainer = styled(ColumnContainer)`
  align-items: flex-start;
  width: 80%;
  padding: 0 1vw;
`;

export const SidebarLinksContainer = styled(ColumnContainer)`
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 20vh;

  font-weight: normal;
  padding-top: 25vh;
  padding-left: 10%;
`;

// Footer
export const SocialContainer = styled(RowContainer)`
  min-width: 256px;
  width: 17%;
  align-items: center;
  justify-content: space-around;
  padding: 1.65em 0;
`;

export const FooterContainer = styled.footer`
  font-family: Arapey;
  font-weight: 400;
  text-decoration: italic;
  font-size: 18;
  letter-spacing: 0.03em;
  color: ${Colors.darkerGray};
`;

// width + max-width matches the navbar percentage. TODO make these constants!
export const PageCenterContainer = styled.div`
  margin: 0 auto;
  width: 70%;
`;

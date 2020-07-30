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
    color: ${Colors.darkerGray}
  }
  b, h1 {
      font-weight: 600;
  }
  a {
    text-decoration: none;
    color: ${Colors.darkerGray}
  }
  main {
    display: inline;
  }
`;

// Text
export const TitleSerif = styled.div`
  font-family: Lora;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 0.03em;
  color: ${Colors.activeText};
`;

export const CaptionSansSerif = styled.em`
  font-weight: 400;
  font-size: 18px;
  color: ${Colors.activeText};
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
  color: ${Colors.darkerGray};
`;

export const NavLink = styled(Link)`
  font-family: Karla;
  font-size: 18px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${Colors.darkerGray};
`;

export const LogoContainer = styled(RowContainer)`
  width: 188px;
  min-width: 188px;
  align-items: center;
  justify-content: space-between;
`;

// Navbar

// TODO add media queries for small screens
export const NavbarContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 1px 2px 1px ${Colors.lightestRed};
  background: ${Colors.lightestRed};
  width: 100%;
  padding-top: 20px;
  max-height: 20vh;
`;

export const NavbarCenterContainer = styled(RowContainer)`
  width: 70%;
  max-width: 800px;
  justify-content: space-between;
  align-items: center;
`;

// Footer
export const SocialContainer = styled(RowContainer)`
  min-width: 256px;
  width: 17%;
  align-items: center;
  justify-content: space-around;
`;

export const CopyrightContainer = styled.div`
  font-family: Arapey;
  font-weight: 400;
  text-decoration: italic;
  font-size: 18;
  letter-spacing: 0.03em;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  max-height: 12vh;
  color: ${Colors.darkerGray};
`;

// width + max-width matches the navbar percentage. TODO make these constants!
export const PageCenterContainer = styled.div`
  margin: 0 auto;
  width: 70%;
`;

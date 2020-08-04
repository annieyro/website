import { Link } from 'gatsby';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Colors from '../constants/Colors';

// Styling constants
export const viewingWidth = '80vw';

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

// Footer
export const SocialContainer = styled(RowContainer)`
  align-items: center;
  min-width: 256px;
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
  min-width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  max-height: 10vh;
  color: ${Colors.darkerGray};
`;

export const PageCenterContainer = styled.div`
  margin: 0 auto;
  width: ${viewingWidth}%;
`;

// Shared between amigurumi & photo-journal

//hacky way to get the flex-child to grow beyond its parent.
//not really sure why it works tbh lmao
export const WhiteBGCenteredContainer = styled(ColumnContainer)`
  justify-content: flex-start;
  align-items: center;
  background: white;

  width: 110%;
  margin: 0 auto;
  margin-left: 4%;
  height: 100%;
`;

export const HeadingContainer = styled(ColumnContainer)`
  padding-top: 20px;
  width: 70%;
  height: 20vh;
  justify-content: space-evenly;
  align-items: center;
`;

export const PostsContainer = styled(RowContainer)`
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

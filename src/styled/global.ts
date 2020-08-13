import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Colors from '../constants/Colors';

// Styling constants
export const viewingWidth = '80vw';
export const viewingMaxWidth = '800px';

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

// TODO: figure out how to get another font family to work lol, work sans?
export const LayoutStyle = createGlobalStyle`
body {
  font-family: Athiti;
  font-size: 14px;
  font-weight: 300;
}
`;

export const PostStyle = createGlobalStyle`
  body {
    font-family: Karla;
  }
  b, h1, h2, h3, h4 {
      font-weight: 600;
  }
  h1, h2, h3, h4 {
      font-family: Lora;
  }
`;

// Basic
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Shared nav elements
export const LogoContainer = styled(RowContainer)`
  width: 188px;
  min-width: 188px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 150px;
    min-width: 150px;
  }
`;

export const HomeLink = styled(Link)`
  font-family: Arapey;
  font-size: 32px;
  letter-spacing: 0.03em;
  text-transform: lowercase;
  text-decoration: none;
  color: ${Colors.darkerGray};

  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const NavLink = styled(Link)`
  font-family: Karla;
  font-size: 18px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: ${Colors.darkerGray};

  @media (max-width: 800px) {
    font-size: 1em;
  }
`;

// Footer
export const SocialContainer = styled(RowContainer)`
  align-items: center;
  min-width: 240px;
  justify-content: space-around;
`;

export const SidebarSocialContainer = styled(SocialContainer)`
  min-width: 212px;

  @media (max-width: 630px) {
    width: 156px;
    min-width: 156px;
  }
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
  width: ${viewingWidth};
  max-width: ${viewingMaxWidth};
`;

// Shared between amigurumi & photo-journal

//hacky way to get the flex-child to grow beyond its parent.
//not really sure why it works tbh lmao
export const WhiteBGCenteredContainer = styled(ColumnContainer)`
  justify-content: flex-start;
  align-items: center;
  background: white;

  height: 100%;
  width: 110%;
  margin: 0 auto;

  overflow-y: auto;
`;

export const ContentContainer = styled(ColumnContainer)`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const HeadingContainer = styled(ColumnContainer)`
  width: 70%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: ${(props) => props.marginTop || `16px`};
  margin-bottom: 3vh;

  @media (max-width: 450px) {
    height: ${(props) => (props.lineNum > 1 ? `150px` : `130px`)};
  }

  @media (max-width: 699px) {
    height: ${(props) => (props.lineNum > 1 ? `165px` : `140px`)};
  }

  @media (min-width: 900px) {
    height: ${(props) => (props.lineNum > 1 ? `180px` : `150px`)};
  }
`;

export const BodyContainer = styled.div`
  width: 70%;
  margin-bottom: 2vh;
`;

// Text
export const TitleSerif = styled.div`
  font-family: Lora;
  font-weight: ${(props) => props.fontWeight || `600`};
  font-size: 32px;
  letter-spacing: 0.03em;
  color: ${Colors.activeText};

  @media (max-width: 400px) {
    font-size: 1.2em;
  }

  @media (max-width: 700px) {
    font-size: 1.5em;
  }
`;

export const CaptionSansSerif = styled.em`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 1.2em;
  width: 82%;
  color: ${Colors.activeText};

  @media (max-width: 400px) {
    width: 110%;
    font-size: 0.7em;
  }

  @media (max-width: 700px) {
    width: 95%;
    font-size: 1em;
  }
`;

// Grid layout

export const PostsContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 4%;
  grid-row-gap: 2%;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 699px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

// TODO @media queries: max-width 699px --> 2 col

export const PostCard = styled.div``;

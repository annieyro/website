import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import {
  ColumnContainer,
  GlobalStyle,
  HomeLink,
  LogoContainer,
  NavLink,
  RowContainer,
  viewingMaxWidth,
  viewingWidth,
} from '../styled/global';
import Footer from './footer';
import Icon from './icon';
import useTitle from '../hooks/useTitle';

// --------------- Sidebar

const SidebarContainer = styled(ColumnContainer)`
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 1px 2px 1px ${Colors.lightestRed};
  background: ${Colors.lightestRed};

  min-height: 100vh;
  width: 14vw;
  min-width: 220px;
  padding-right: 1vw;

  @media (max-width: 630px) {
    min-width: 164px;
  }
`;

const SidebarLeftContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 60%;
  max-height: 380px;
`;

const SidebarLinksContainer = styled(ColumnContainer)`
  align-items: flex-start;
  justify-content: space-around;
  min-height: 128px;
  width: 100%;
  padding-top: 12vh;
  padding-left: 3vw;
  font-weight: normal;
`;

// TODO accept props for which link to bold / change color
const Sidebar = ({
  siteTitle,
  path,
}: {
  siteTitle: string;
  path: string;
}): JSX.Element => {
  // janky implementation while only two options in sidebar. will have to refactor with enums later
  const bold = path.includes('/photo-journal') ? 0 : 1;

  return (
    <SidebarContainer>
      <SidebarLeftContainer>
        <LogoContainer style={{ paddingTop: `20px` }}>
          <Icon />
          <HomeLink style={{ fontFamily: `Arapey` }} to="/">
            {siteTitle}
          </HomeLink>
        </LogoContainer>
        <SidebarLinksContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/photo-journal">
            {bold === 0 ? <b>Photo Journal</b> : 'Photo Journal'}
          </NavLink>
          <NavLink to="/amigurumi">
            {bold === 1 ? <b>Amigurumi</b> : 'Amigurumi'}
          </NavLink>
        </SidebarLinksContainer>
      </SidebarLeftContainer>
      <Footer
        fontSize={'22px'}
        style={{
          marginBottom: `2vh`,
        }}
        sidebar={true}
      />
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: ``,
};

// --------------- Layout

const CenterColumnContainer = styled(ColumnContainer)`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const ResponsiveRowContainer = styled(RowContainer)`
  flex: 1 0 auto;
  width: ${viewingWidth};
  max-width: ${viewingMaxWidth};
  min-height: 400px;
  align-items: flex-start;
  justify-content: space-between;
`;

const MainContentColumnContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70vw;
  min-height: 100vh;

  @media (min-width: 400px) {
    height: 100vh;
  }
`;

const SidebarLayout = ({
  children,
  location,
}: {
  children: JSX.Element;
  location: Location;
}): JSX.Element => {
  const title = useTitle();
  const path = location.pathname; // this is p jank, but otherwise need to use gatsby-plugin-layout

  return (
    <>
      <GlobalStyle />
      <CenterColumnContainer>
        <ResponsiveRowContainer>
          <Sidebar path={path} siteTitle={title}></Sidebar>
          <MainContentColumnContainer>{children}</MainContentColumnContainer>
        </ResponsiveRowContainer>
      </CenterColumnContainer>
    </>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarLayout;

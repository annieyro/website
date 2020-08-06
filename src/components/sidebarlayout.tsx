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
  viewingWidth,
} from '../styled/global';
import Footer from './footer';
import useTitle from './useTitle';

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
const Sidebar = ({ siteTitle }: { siteTitle: string }): JSX.Element => (
  <SidebarContainer>
    <SidebarLeftContainer>
      <LogoContainer style={{ paddingTop: `20px` }}>
        <span
          style={{
            background: `${Colors.lighterGray}`,
            height: `50px`,
            width: `50px`,
            borderRadius: `50%`,
          }}></span>
        <HomeLink style={{ fontFamily: `Arapey` }} to="/">
          {siteTitle}
        </HomeLink>
      </LogoContainer>
      <SidebarLinksContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/amigurumi/">Amigurumi</NavLink>
        <NavLink to="/photo-journal">Photo Journal</NavLink>
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
  max-width: 800px;
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

const SidebarLayout = ({ children }): JSX.Element => {
  const title = useTitle();

  return (
    <>
      <GlobalStyle />
      <CenterColumnContainer>
        <ResponsiveRowContainer>
          <Sidebar siteTitle={title}></Sidebar>
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

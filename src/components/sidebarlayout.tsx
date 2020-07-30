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
} from '../styled/global';
import Footer from './footer';
import useTitle from './useTitle';

// --------------- Sidebar

const SidebarContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  box-shadow: 0px 1px 2px 1px ${Colors.lightestRed};
  background: ${Colors.lightestRed};

  height: 100vh;
  width: 18vw;
  min-width: 240px;
  padding: 0;
`;

const SidebarLeftContainer = styled(ColumnContainer)`
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
  padding-top: 8px;
  padding-left: 36px;
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
        <NavLink to="/travel-log">Photo Journal</NavLink>
      </SidebarLinksContainer>
    </SidebarLeftContainer>
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
  width: 70%;
  max-width: 800px;
  min-height: 400px;
  align-items: flex-start;
  justify-content: space-between;
`;

const MainContentColumnContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
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
        <Footer
          style={{
            flexShrink: 0,
            height: `10vh`,
            marginBottom: `2vh`,
          }}
        />
      </CenterColumnContainer>
    </>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarLayout;

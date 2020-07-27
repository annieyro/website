import PropTypes from 'prop-types';
import React from 'react';

import Colors from '../constants/Colors';
import {
  ColumnContainer,
  GlobalStyle,
  HomeLink,
  LogoContainer,
  NavLink,
  RowContainer,
  SidebarContainer,
  SidebarLeftContainer,
  SidebarLinksContainer,
} from '../styled/global';
import Footer from './footer';
import useTitle from './useTitle';

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
        <NavLink to="/">Photo Journal</NavLink>
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

const SidebarLayout = ({ children }): JSX.Element => {
  const title = useTitle();

  return (
    <>
      <GlobalStyle />
      <RowContainer
        style={{
          justifyContent: `center`,
          alignItems: `center`,
          width: `100%`,
        }}>
        <ColumnContainer style={{ width: `70%`, maxWidth: `800px` }}>
          <RowContainer
            style={{
              width: `100%`,
              height: `80vh`,
              minHeight: `400px`,
              alignItems: `flex-start`,
              justifyContent: `space-between`,
            }}>
            <Sidebar siteTitle={title}></Sidebar>
            <ColumnContainer
              style={{
                justifyContent: `center`,
                alignItems: `flex-start`,
                width: `70vw`,
              }}>
              <main>{children}</main>
            </ColumnContainer>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
      <Footer
        style={{
          paddingTop: `2vh`,
          height: `10vh`,
        }}
      />
    </>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarLayout;

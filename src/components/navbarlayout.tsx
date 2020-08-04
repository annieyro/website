import PropTypes from 'prop-types';
import React from 'react';

import Colors from '../constants/Colors';
import { GlobalStyle } from '../styled/global';
import {
  HomeLink,
  LogoContainer,
  NavLink,
  RowContainer,
  viewingWidth,
} from '../styled/global';
import Footer from './footer';
import useTitle from './useTitle';
import styled from 'styled-components';

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
  width: ${viewingWidth};
  max-width: 800px;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = ({ siteTitle }: { siteTitle: string }): JSX.Element => (
  <NavbarContainer>
    <NavbarCenterContainer>
      <LogoContainer>
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
      <RowContainer
        style={{
          minWidth: `320px`,
          width: `45%`,
          alignItems: `center`,
          justifyContent: `space-around`,
        }}>
        <NavLink to="/">home</NavLink>
        <NavLink to="/amigurumi/">amigurumi</NavLink>
        <NavLink to="/photo-journal">photo journal</NavLink>
      </RowContainer>
    </NavbarCenterContainer>
  </NavbarContainer>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

const NavbarLayout = ({ children }): JSX.Element => {
  const title = useTitle();

  return (
    <>
      <GlobalStyle />
      <Navbar siteTitle={title} />

      <main>{children}</main>
      <Footer />
    </>
  );
};

NavbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarLayout;

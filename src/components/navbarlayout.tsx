import PropTypes from 'prop-types';
import React from 'react';

import Colors from '../constants/Colors';
import { GlobalStyle } from '../styled/global';
import {
  HomeLink,
  LogoContainer,
  NavbarCenterContainer,
  NavbarContainer,
  NavLink,
  RowContainer,
} from '../styled/global';
import Footer from './footer';
import useTitle from './useTitle';

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
        <NavLink to="/travel-log">travel log</NavLink>
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

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styled/global';
import Colors from '../constants/Colors';

import {
  HomeLink,
  LogoContainer,
  NavLink,
  RowContainer,
  viewingWidth,
  viewingMaxWidth,
} from '../styled/global';
import useTitle from './useTitle';
import Footer from './footer';
import Icon from './icon';

// Navbar

// TODO add media queries for small screens
export const NavbarContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${Colors.lightestRed};
  width: 100%;
  padding-top: 20px;
  max-height: 20vh;
`;

export const NavbarCenterContainer = styled(RowContainer)`
  width: ${viewingWidth};
  max-width: ${viewingMaxWidth};
  justify-content: space-between;
  align-items: center;
`;

const Navbar = ({ siteTitle }: { siteTitle: string }): JSX.Element => (
  <NavbarContainer>
    <NavbarCenterContainer>
      <LogoContainer>
        <Icon />
        <HomeLink style={{ fontFamily: `Arapey` }} to="/">
          {siteTitle}
        </HomeLink>
      </LogoContainer>
      <RowContainer
        style={{
          minWidth: `228px`,
          maxWidth: `320px`,
          width: `45%`,
          alignItems: `center`,
          justifyContent: `space-around`,
        }}>
        <NavLink to="/">home</NavLink>
        <NavLink to="/photo-journal">photo journal</NavLink>
        <NavLink to="/amigurumi/">♡</NavLink>
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
      <Footer style={{ marginTop: `20px` }} />
    </>
  );
};

NavbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Navbar as default, NavbarLayout };

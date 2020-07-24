import PropTypes from 'prop-types';
import React from 'react';
import Colors from '../constants/Colors';
import {
  HomeLink,
  NavbarCenterContainer,
  NavbarContainer,
  NavLink,
  RowContainer,
  LogoContainer,
} from '../styled/global';

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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/amigurumi/">Amigurumi</NavLink>
        <NavLink to="/">Travel Log</NavLink>
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

export default Navbar;

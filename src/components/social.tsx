import React from 'react';

import {
  HomeLink,
  NavbarCenterContainer,
  NavbarContainer,
  NavLink,
  RowContainer,
} from '../styled/global';

const Social = () => (
  <NavbarContainer>
    <NavbarCenterContainer>
      <HomeLink style={{ fontFamily: `Arapey` }} to="/"></HomeLink>
      <RowContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/amigurumi/">Amigurumi</NavLink>
      </RowContainer>
    </NavbarCenterContainer>
  </NavbarContainer>
);

export default Social;

import PropTypes from 'prop-types';
import React from 'react';
import Colors from '../constants/Colors';
import {
  HomeLink,
  SidebarLeftContainer,
  SidebarContainer,
  SidebarLinksContainer,
  NavLink,
  LogoContainer,
} from '../styled/global';

const Sidebar = ({ siteTitle }: { siteTitle: string }): JSX.Element => (
  <SidebarContainer>
    <SidebarLeftContainer>
      <LogoContainer style={{ paddingTop: `2vh` }}>
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
        <NavLink to="/">Travel Log</NavLink>
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

export default Sidebar;

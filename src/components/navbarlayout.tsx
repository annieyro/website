import PropTypes from 'prop-types';
import React from 'react';

import { ColumnContainer, GlobalStyle } from '../styled/global';
import Footer from './footer';
import Social from './social';
import Navbar from './navbar';

import useTitle from './useTitle';
const NavbarLayout = ({ children }): JSX.Element => {
  const title = useTitle();

  return (
    <>
      <GlobalStyle />
      <Navbar siteTitle={title} />

      <main>{children}</main>

      <ColumnContainer
        style={{ justifyContent: `center`, alignItems: `center` }}>
        <Social />
        <Footer></Footer>
      </ColumnContainer>
    </>
  );
};

NavbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarLayout;

import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { ColumnContainer, GlobalStyle } from '../styled/global';
import Footer from './footer';
import Social from './social';
import Navbar from './navbar';

const Layout = ({ children }): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Navbar siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <ColumnContainer
        style={{ justifyContent: `center`, alignItems: `center` }}>
        <Social />
        <Footer></Footer>
      </ColumnContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

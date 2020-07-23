import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ColumnContainer, GlobalStyle } from '../styled/global';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
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

      <main
        style={{
          margin: `0 auto`,
          width: `70%`,
          maxWidth: 800,
        }}>
        {children}
      </main>

      <ColumnContainer
        style={{ justifyContent: `center`, alignItems: `center` }}>
        <Footer></Footer>
      </ColumnContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

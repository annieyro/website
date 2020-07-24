import PropTypes from 'prop-types';
import React from 'react';

import { ColumnContainer, GlobalStyle, RowContainer } from '../styled/global';
import Footer from './footer';
import Social from './social';
import Sidebar from './sidebar';
import useTitle from './useTitle';

const SidebarLayout = ({ children }): JSX.Element => {
  const title = useTitle();

  return (
    <>
      <GlobalStyle />
      {/* TODO position: absolute the sidebar?? */}
      <RowContainer
        style={{ alignItems: `flex-start`, justifyContent: `space-between` }}>
        <Sidebar siteTitle={title}></Sidebar>
        <ColumnContainer
          style={{
            justifyContent: `center`,
            alignItems: `flex-start`,
            height: `100vh`,
            width: `70vw`,
          }}>
          <main style={{ height: `85vh` }}>{children}</main>
          <ColumnContainer
            style={{
              paddingTop: `4vh`,
              justifyContent: `center`,
              alignItems: `center`,
              height: `20vh`,
            }}>
            <Social />
            <Footer></Footer>
          </ColumnContainer>
        </ColumnContainer>
      </RowContainer>
    </>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarLayout;

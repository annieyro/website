import React from 'react';
import { Link } from 'gatsby';
import { PageCenterContainer, GlobalStyle } from '../styled/global';
import { NavbarLayout } from '../components/navbar';
import SEO from '../components/seo';

const NotFoundPage = (): JSX.Element => (
  <NavbarLayout>
    <GlobalStyle />
    <SEO title="404: not found" />
    <PageCenterContainer style={{ marginTop: `10vh`, marginBottom: `45vh` }}>
      <h1>not found</h1>
      <p style={{ fontFamily: `Arial` }}>(・人・)</p>
      <p>{` you just hit a route that doesn't exist!`}</p>

      <p>
        <t></t>
        <Link to={'/'}>
          try going <b>home</b>
        </Link>
      </p>
    </PageCenterContainer>
  </NavbarLayout>
);

export default NotFoundPage;

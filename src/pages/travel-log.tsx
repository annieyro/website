import { Link } from 'gatsby';
import React from 'react';

import SEO from '../components/seo';
import SidebarLayout from '../components/sidebarlayout';
import { PageCenterContainer } from '../styled/global';

const TravelLog = (): JSX.Element => (
  <SidebarLayout>
    <SEO title="amigurumi" />
    <PageCenterContainer>
      <h1>work in progress</h1>
      <p>welcome to page 3!!</p>
      <Link to="/">go back to the homepage</Link>
    </PageCenterContainer>
  </SidebarLayout>
);

export default TravelLog;

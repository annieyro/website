import React from 'react';
import { Link } from 'gatsby';
import { PageCenterContainer } from '../styled/global';
import SidebarLayout from '../components/sidebarlayout';
import SEO from '../components/seo';

const AmigurumiPage = (): JSX.Element => (
  <SidebarLayout>
    <SEO title="amigurumi" />
    <PageCenterContainer>
      <h1>hi from the second page</h1>
      <p>welcome to page 2</p>
      <Link to="/">go back to the homepage</Link>
    </PageCenterContainer>
  </SidebarLayout>
);

export default AmigurumiPage;

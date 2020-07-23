import { Link } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { RowContainer } from '../styled/global';
import { Intro } from '../styled/index';

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <RowContainer style={{ width: `100%` }}>
      <Intro>
        <p>
          hello! i'm <b>annie.</b>
          <br></br>i write code for a living<br></br>• currently @ twitter
        </p>
        <p>
          but mostly i made this website for myself{' '}
          <span style={{ fontFamily: `Arial` }}>(´ ▽ `) ヽ(・∀・)ﾉ</span>
        </p>
      </Intro>
      <div style={{ maxWidth: `300px` }}>
        <Image />
      </div>
    </RowContainer>
    <Link to="/amigurumi/">Go to page 2</Link> <br />
  </Layout>
);

export default IndexPage;

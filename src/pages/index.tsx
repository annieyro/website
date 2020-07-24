import React from 'react';

import Image from '../components/image';
import NavbarLayout from '../components/navbarlayout';
import SEO from '../components/seo';
import { RowContainer } from '../styled/global';
import { Intro, IntroContainer } from '../styled/index';

const IndexPage = (): JSX.Element => (
  <NavbarLayout>
    <SEO title="home" />
    <IntroContainer>
      <RowContainer
        style={{
          width: `90%`,
          justifyContent: `space-between`,
          alignItems: `center`,
          flexWrap: `wrap`,
        }}>
        <Intro>
          <p>
            hello! i'm <b>annie</b>.<br></br>i write code for a living •
            <br></br>
            currently @ twitter
          </p>
          <p>
            but mostly i made this website for myself{' '}
            <span style={{ fontFamily: `Arial` }}>(´ ▽ `)</span>
          </p>
        </Intro>
        <div style={{ width: `30%`, maxWidth: `300px` }}>
          <Image />
        </div>
      </RowContainer>
    </IntroContainer>
  </NavbarLayout>
);

export default IndexPage;

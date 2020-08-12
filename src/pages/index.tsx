import React from 'react';

import Image from '../components/image';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import SEO from '../components/seo';
import { RowContainer, GlobalStyle } from '../styled/global';
import Colors from '../constants/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Intro,
  IntroContainer,
  WindowContainer,
  SectionContainer,
  DownArrowContainer,
  SectionTitle,
  SectionText,
} from '../styled/index';
import useTitle from '../components/useTitle';
import Footer from '../components/footer';

interface SectionDetails {
  bg: string;
  bgTitle: string;
  title: string;
  text: string;
  left: string;
  right: string;
}

const details: SectionDetails[] = [
  {
    bg: Colors.lightestYellow,
    bgTitle: Colors.primaryYellow,
    title: 'code',
    text: 'lorem ipsum',
    left: '0',
    right: '',
  },
  {
    bg: Colors.lightestTeal,
    bgTitle: Colors.primaryTeal,
    title: 'berkeley',
    text: 'lorem ipsum',
    left: '',
    right: '0',
  },
  {
    bg: Colors.lightestRed,
    bgTitle: Colors.primaryRed,
    title: 'personal',
    text: 'lorem ipsum',
    left: '0',
    right: '',
  },
];

const Section = ({ details }: { details: SectionDetails }): JSX.Element => (
  <WindowContainer bg={details.bg}>
    <SectionContainer left={details.left} right={details.right}>
      <SectionTitle
        // Swap left & right
        style={{
          backgroundColor: details.bgTitle,
          right: details.left,
          left: details.right,
        }}>
        {details.title}
      </SectionTitle>
      <SectionText
        style={{
          left: details.right ? `12vw` : '',
          right: details.left ? `12vw` : '',
        }}>
        {details.text}
      </SectionText>
    </SectionContainer>

    <DownArrowContainer>
      <FontAwesomeIcon
        style={{
          fontSize: `26px`,
          color: Colors.darkerGray,
        }}
        icon={faChevronDown}
      />
    </DownArrowContainer>
  </WindowContainer>
);

const IndexPage = (): JSX.Element => {
  const title = useTitle();
  return (
    <>
      <GlobalStyle />
      <SEO title="home" />
      {/* Top section */}
      <WindowContainer>
        <Navbar siteTitle={title} />
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
                {`but mostly i made this website for myself `}
                <span style={{ fontFamily: `Arial` }}>(´ ▽ `)</span>
              </p>
            </Intro>
            {/* <div style={{ width: `30%`, maxWidth: `300px` }}>
          <Image />
        </div> */}
          </RowContainer>
        </IntroContainer>
        <DownArrowContainer>
          <FontAwesomeIcon
            style={{
              fontSize: `26px`,
              color: Colors.darkerGray,
            }}
            icon={faChevronDown}
          />
        </DownArrowContainer>
      </WindowContainer>
      {/* Detail Sections */}
      {details.map((detail: SectionDetails) => (
        <Section details={detail}></Section>
      ))}
      <Footer style={{ marginTop: `5vh` }} />
    </>
  );
};

export default IndexPage;

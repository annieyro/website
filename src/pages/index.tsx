import {
  faChevronDown,
  faChevronUp,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React from 'react';
import { Social, Copyright } from '../components/footer';
import Navbar from '../components/navbar';
import SEO from '../components/seo';
import useTitle from '../components/useTitle';
import Colors from '../constants/Colors';
import { GlobalStyle, ColumnContainer } from '../styled/global';
import {
  ArrowIcon,
  DownArrowContainer,
  Intro,
  IntroContainer,
  SectionContainer,
  SectionText,
  SectionTitle,
  ContactButton,
  WindowContainer,
} from '../styled/index';

const Arrow = ({
  icon,
  scrollToId,
  color,
  hoverColor,
}: {
  icon: IconDefinition;
  scrollToId: ScrollToOptions;
  color: string;
  hoverColor: string;
}): JSX.Element => {
  return (
    <DownArrowContainer>
      <ArrowIcon
        icon={icon}
        color={color}
        hoverColor={hoverColor}
        onClick={() => scrollTo(scrollToId)}
      />
    </DownArrowContainer>
  );
};

interface SectionDetails {
  index: number;
  bgColor: string;
  titleColor: string;
  accentColor: string;
  title: string;
  text: JSX.Element;
  left: string;
  right: string;
}

const allDetails: SectionDetails[] = [
  {
    index: 0,
    bgColor: Colors.lightestYellow,
    titleColor: Colors.primaryYellow,
    accentColor: Colors.darkerYellow,
    title: 'code',
    text: 'coming soon (i promise) (^:',
    left: '0',
    right: '',
  },
  {
    index: 1,
    bgColor: Colors.lightestTeal,
    titleColor: Colors.primaryTeal,
    accentColor: Colors.darkerTeal,
    title: 'berkeley',
    text: 'tbd: recap of orgs and things i did',
    left: '',
    right: '0',
  },
  {
    index: 2,
    bgColor: Colors.lightestRed,
    titleColor: Colors.primaryRed,
    accentColor: Colors.darkerRed,
    title: 'personal',
    text: 'favorites, recomendations, etc',
    left: '0',
    right: '',
  },
];

const Section = ({ details }: { details: SectionDetails }): JSX.Element => {
  const nextSectionId = '#'.concat(
    allDetails[(details.index + 1) % allDetails.length].title
  );

  return (
    <WindowContainer bg={details.bgColor} id={details.title}>
      <SectionContainer left={details.left} right={details.right}>
        <SectionTitle
          // Swap left & right
          style={{
            backgroundColor: details.titleColor,
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
      {/* Scroll to top button at bottom */}
      {details.index < allDetails.length - 1 ? (
        <Arrow
          icon={faChevronDown}
          color={details.accentColor}
          hoverColor={details.titleColor}
          scrollToId={nextSectionId}></Arrow>
      ) : (
        <Arrow
          icon={faChevronUp}
          color={details.accentColor}
          hoverColor={details.titleColor}
          scrollToId={'#intro'}></Arrow>
      )}
    </WindowContainer>
  );
};

const IndexPage = (): JSX.Element => {
  const title = useTitle();
  const firstSectionId = '#'.concat(allDetails[0].title);

  return (
    <>
      <GlobalStyle />
      <SEO title="home" />
      {/* Top section */}
      <WindowContainer id="intro">
        <Navbar path={window.location.pathname} siteTitle={title} />
        <IntroContainer>
          <ColumnContainer
            style={{
              width: `90%`,
              alignItems: `flex-start`,
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
              <p>
                <ContactButton onClick={() => scrollTo('#social')}>
                  <b>contact me</b>
                </ContactButton>
              </p>
            </Intro>
          </ColumnContainer>
        </IntroContainer>
        {/* Invisible div for small-screen spacing of the arrow */}
        <div style={{ height: `100px`, color: Colors.lightestRed }}>GOT7</div>
        <Arrow icon={faChevronDown} scrollToId={firstSectionId}></Arrow>
      </WindowContainer>
      {/* Detail Sections */}
      {allDetails.map((detail: SectionDetails) => (
        <Section key={detail.title} details={detail}></Section>
      ))}
      <Social
        style={{
          width: `60%`,
          maxWidth: `220px`,
          margin: `0 auto`,
          marginTop: `6vh`,
        }}
      />
      <Copyright
        style={{
          textAlign: `center`,
          marginTop: `2vh`,
          marginBottom: `6vh`,
        }}
      />
    </>
  );
};

export default IndexPage;

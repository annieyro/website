import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Colors from '../constants/Colors';
import {
  CopyrightContainer,
  FooterContainer,
  SocialContainer,
} from '../styled/global';

const Copyright: React.FC = (): JSX.Element => (
  <CopyrightContainer>© {new Date().getFullYear()} annieyro</CopyrightContainer>
);

const ClickableIcon = ({
  icon,
  href,
  fontSize,
}: {
  icon: IconDefinition;
  href: string;
  fontSize?: string;
}): JSX.Element => (
  <a href={href}>
    <FontAwesomeIcon
      style={{ fontSize: fontSize || `24px`, color: Colors.darkerGray }}
      icon={icon}
    />
  </a>
);

// TODO make an object for this, then map over to produce this list
const Social = ({
  style,
  fontSize,
}: {
  style?: React.CSSProperties;
  fontSize?: string;
}): JSX.Element => (
  <SocialContainer style={{ ...style }}>
    <ClickableIcon
      fontSize={fontSize}
      icon={faTwitter}
      href="https://twitter.com/annieyro"
    />
    <ClickableIcon
      fontSize={fontSize}
      icon={faInstagram}
      href="http://instagram.com/annieyro/"
    />
    <ClickableIcon
      fontSize={fontSize}
      icon={faMediumM}
      href="https://medium.com/@annieyro"
    />
    <ClickableIcon
      fontSize={fontSize}
      icon={faLinkedinIn}
      href="https://www.linkedin.com/in/anniero/"
    />
    <ClickableIcon
      fontSize={fontSize}
      icon={faGithub}
      href="https://github.com/annieyro"
    />
    <ClickableIcon
      fontSize={fontSize}
      icon={faEnvelope}
      href="mailto:anniero@berkeley.edu"
    />
  </SocialContainer>
);

const Footer = ({
  style,
  socialStyle,
  fontSize,
}: {
  style?: React.CSSProperties;
  socialStyle?: React.CSSProperties;
  fontSize?: string;
}): JSX.Element => (
  <FooterContainer style={{ ...style }}>
    <Social style={socialStyle} fontSize={fontSize || ''} />
    <Copyright />
  </FooterContainer>
);

export default Footer;

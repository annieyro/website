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
  ColumnContainer,
  FooterContainer,
  SocialContainer,
} from '../styled/global';

const Copyright: React.FC = (): JSX.Element => (
  <FooterContainer>© {new Date().getFullYear()} annieyro</FooterContainer>
);

const ClickableIcon = ({
  icon,
  href,
}: {
  icon: IconDefinition;
  href: string;
}): JSX.Element => (
  <a href={href}>
    <FontAwesomeIcon
      style={{ fontSize: `24px`, color: Colors.darkerGray }}
      icon={icon}
    />
  </a>
);

const Social = (): JSX.Element => (
  <SocialContainer>
    <ClickableIcon icon={faTwitter} href="https://twitter.com/annieyro" />
    <ClickableIcon icon={faInstagram} href="http://instagram.com/annieyro/" />
    <ClickableIcon icon={faMediumM} href="https://medium.com/@annieyro" />
    <ClickableIcon
      icon={faLinkedinIn}
      href="https://www.linkedin.com/in/anniero/"
    />
    <ClickableIcon icon={faGithub} href="https://github.com/annieyro" />
    <ClickableIcon icon={faEnvelope} href="mailto:anniero@berkeley.edu" />
  </SocialContainer>
);

const Footer = ({ style }: { style: React.CSSProperties }): JSX.Element => (
  <ColumnContainer
    style={{ ...style, justifyContent: `center`, alignItems: `center` }}>
    <Social />
    <Copyright />
  </ColumnContainer>
);

Footer.defaultProps = {
  style: null,
};

export default Footer;

import {
  faGithub,
  faInstagram,
  faLinkedinIn,
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
  SidebarSocialContainer,
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

// TODO make an object for icons, then map over to produce this list. so messy but whatever lmao
const Social = ({
  sidebar,
  fontSize,
}: {
  sidebar?: boolean;
  fontSize?: string;
}): JSX.Element => {
  if (sidebar)
    return (
      <SidebarSocialContainer>
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
      </SidebarSocialContainer>
    );
  else
    return (
      <SocialContainer>
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
};

const Footer = ({
  style,
  sidebar,
  fontSize,
}: {
  style?: React.CSSProperties;
  sidebar?: boolean;
  fontSize?: string;
}): JSX.Element => (
  <FooterContainer style={{ ...style }}>
    <Social sidebar={sidebar || false} fontSize={fontSize || ''} />
    <Copyright />
  </FooterContainer>
);

export default Footer;

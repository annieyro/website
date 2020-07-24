import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faMediumM,
  faInstagram,
  faLinkedinIn,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Colors from '../constants/Colors';

import { RowContainer } from '../styled/global';

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
  <RowContainer
    style={{
      minWidth: `256px`,
      width: `17%`,
      alignItems: `center`,
      justifyContent: `space-around`,
      padding: `1.65em 0`,
    }}>
    <ClickableIcon icon={faTwitter} href="https://twitter.com/annieyro" />
    <ClickableIcon icon={faInstagram} href="http://instagram.com/annieyro/" />
    <ClickableIcon icon={faMediumM} href="https://medium.com/@annieyro" />
    <ClickableIcon
      icon={faLinkedinIn}
      href="https://www.linkedin.com/in/anniero/"
    />
    <ClickableIcon icon={faGithub} href="https://github.com/annieyro" />
    <ClickableIcon icon={faEnvelope} href="mailto:anniero@berkeley.edu" />
  </RowContainer>
);

export default Social;

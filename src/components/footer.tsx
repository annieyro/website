import React from 'react';
import { FooterContainer } from '../styled/global';

const Footer: React.FC = (): JSX.Element => (
  <FooterContainer>© {new Date().getFullYear()} annieyro</FooterContainer>
);

export default Footer;

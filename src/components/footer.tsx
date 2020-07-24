import React from 'react';
import Colors from '../constants/Colors';

const Footer: React.FC = (): JSX.Element => (
  <footer
    style={{
      fontFamily: `Arapey`,
      fontWeight: 400,
      textDecoration: `italic`,
      fontSize: 18,
      letterSpacing: `0.03em`,
      color: Colors.darkerGray,
    }}>
    © {new Date().getFullYear()} annieyro
  </footer>
);

export default Footer;

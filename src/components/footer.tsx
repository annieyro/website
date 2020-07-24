import React from 'react';

const Footer: React.FC = (): JSX.Element => (
  <footer
    style={{
      fontFamily: `Arapey`,
      fontWeight: 400,
      textDecoration: `italic`,
      fontSize: 18,
      letterSpacing: `0.03em`,
    }}>
    © {new Date().getFullYear()} annieyro
  </footer>
);

export default Footer;

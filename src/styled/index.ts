import styled from 'styled-components';

import { PageCenterContainer, RowContainer, viewingMaxWidth } from './global';
import Colors from '../constants/Colors';

export const IntroContainer = styled(PageCenterContainer)`
  max-width: ${viewingMaxWidth};
  min-height: 80vh;
`;

export const Intro = styled.div`
  margin: 3em 0 2em 3em;
  width: 60%;
  max-width: 500px;
  font-size: 20px;
  font-weight: 300;
`;

export const WindowContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg || Colors.lightestRed};
  position: relative;
`;

export const SectionContainer = styled.div`
  width: 90vw;
  height: 86vh;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: ${(props) => props.left || 'default'};
  right: ${(props) => props.right || 'default'};
`;

export const DownArrowContainer = styled(RowContainer)`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${(props) => props.bottom || `24px`};
`;

export const SectionTitle = styled.div`
  color: ${Colors.lightestText};
  min-width: 140px;
  width: 18vw;
  margin: 44px;
  padding: 4px 0;
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  position: absolute;
`;

export const SectionText = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 30vh;
  left: 14vw;
  font-size: 20px;
`;

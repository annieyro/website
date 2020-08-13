import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import { PageCenterContainer, RowContainer, viewingMaxWidth } from './global';

export const IntroContainer = styled(PageCenterContainer)`
  max-width: ${viewingMaxWidth};
  height: 60vh;
`;

export const Intro = styled.div`
  margin: 3em 0 2em 3em;
  width: 60%;
  max-width: 500px;
  font-size: 20px;
  font-weight: 300;

  @media (max-height: 500px) {
    width: 90%;
    margin-top: 8px;
  }
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
  bottom: 32px;

  @media (max-height: 540px), (max-width: 540px) {
    bottom: 12px;
  }

  @media (max-height: 640px), (max-width: 699px) {
    bottom: 24px;
  }
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${(props) => props.color || Colors.darkerRed};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.hoverColor || Colors.primaryRed};
  }
`;

export const SectionTitle = styled.div`
  color: ${Colors.lightestText};
  min-width: 160px;
  width: 18vw;
  margin: 44px;
  padding: 4px 0;
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  position: absolute;

  @media (max-width: 450px) {
    margin: 24px;
    font-size: 20px;
    min-width: 140px;
  }

  @media (max-width: 699px) {
    margin: 32px;
    font-size: 22px;
    min-width: 148px;
  }
`;

export const SectionText = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 120px;
  left: 14vw;
  font-size: 20px;

  @media (max-width: 450px) {
    top: 64px;
    font-size: 16px;
  }

  @media (max-width: 699px) {
    top: 90px;
    font-size: 18px;
  }
`;

export const ContactButton = styled.div`
  color: ${Colors.darkerRed};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.hoverColor || Colors.primaryRed};
  }
`;

import styled from 'styled-components';
import { RowContainer, ColumnContainer } from './global';

//hacky way to get the flex-child to grow beyond its parent.
//not really sure why it works tbh lmao
export const WhiteBGCenteredContainer = styled(ColumnContainer)`
  justify-content: flex-start;
  align-items: center;

  background: white;
  width: 140%;
  margin-left: 4%;
  margin-bottom: 10%;
`;

export const HeadingContainer = styled(ColumnContainer)`
  width: 70%;
  height: 20vh;
  justify-content: space-evenly;
  align-items: center;
`;

export const PostsContainer = styled(RowContainer)`
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

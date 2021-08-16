import styled from 'styled-components';

export const VideoLayerContainer = styled.div`
  width: 80vw;
  height: 90vh;
  margin-left: 10vw;
  margin-top: 10vh;
  display: flex;
  position: relative;
  flex-flow: row wrap;
  justify-content: ${({ isLoading }) => (isLoading ? 'center' : 'flex-start')};
  align-items: center;
`;

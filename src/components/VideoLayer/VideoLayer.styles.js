import styled from 'styled-components';

export const VideoLayerContainer = styled.div`
  width: 80vw;
  margin-left: 10vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: ${({ isLoading }) => (isLoading ? 'center' : 'flex-start')};
  align-items: center;
`;

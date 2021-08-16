import styled from 'styled-components';
import { device } from '../../../styles/sizes';

export const VideoFrame = styled.iframe`
  width: 100%;
  max-height: 70vh;
  @media ${device.mobileXS} {
    height: 40vh;
  }
  @media ${device.mobileS} {
    height: 40vh;
  }
  @media ${device.mobileM} {
    height: 40vh;
  }
  @media ${device.mobileL} {
    height: 50vh;
  }
  @media ${device.tablet} {
    height: 50vh;
  }
  @media ${device.laptop} {
    height: 70vh;
  }
`;

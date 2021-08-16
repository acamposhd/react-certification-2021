import styled from 'styled-components';
import { device } from '../../../styles/sizes';

export const VideoSuggestedList = styled.div`
  width: 35vw;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media ${device.mobileXS} {
    height: 80vw;
  }
  @media ${device.mobileS} {
    height: 80vw;
  }
  @media ${device.mobileM} {
    height: 80vw;
  }
  @media ${device.mobileL} {
    height: 80vw;
  }
  @media ${device.tablet} {
    height: 80vw;
    overflow-y: scroll;
  }
  @media ${device.laptop} {
    height: 35vw;
    overflow-y: scroll;
  }
  @media ${device.laptopL} {
    height: 38vw;
    overflow-y: scroll;
  }
  @media ${device.desktop} {
    height: 28vw;
    overflow-y: scroll;
  }
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

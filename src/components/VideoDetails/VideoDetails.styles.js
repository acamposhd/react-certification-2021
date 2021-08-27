import styled from 'styled-components';
import { device } from '../../styles/sizes';

export const VideoDetailsLayer = styled.div`
  margin-left: 3vw;
  margin-top: 13vh;
  height: 90vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const VideoInfo = styled.div`
  width: 55vw;
  height: max-content;
  padding: 0 2vh 0 2vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media ${device.mobileXS} {
    width: 100vw;
  }
  @media ${device.mobileS} {
    width: 100vw;
  }
  @media ${device.mobileM} {
    width: 100vw;
  }
  @media ${device.mobileL} {
    width: 100vw;
  }
  @media ${device.tablet} {
    width: 60vw;
  }
  @media ${device.laptop} {
    width: 60vw;
  }
  @media ${device.laptopL} {
    width: 60vw;
  }
`;
export const VideoDescription = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const Title = styled.h2`
  margin-bottom: 0;
  font-weight: 500;
  letter-spacing: normal;
  color: ${({ theme }) => theme.text};
`;
export const SubTitle = styled.h5`
  margin-top: 0;
  font-weight: 200;
  line-height: 1.5em;
  color: ${({ theme }) => theme.textAccent};
`;

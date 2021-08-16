import styled from 'styled-components';
import { device } from '../../../../styles/sizes';

export const CardContainer = styled.div`
  width: 100vh;
  padding-left: 5px;
  padding-right: 5px;
  height: 120px;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  background-color: ${({ theme }) => theme.body};
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
`;
export const ImageContainer = styled.div`
  position: relative;
  border-radius: 5px;
  object-fit: cover;
  object-position: 50% 50%;
  height: 10vh;
  max-width: 100vw;
  &:hover {
    background-color: grey;
  }
  @media ${device.mobileXS} {
    width: 40vw;
  }
  @media ${device.mobileS} {
    width: 40vw;
  }
  @media ${device.mobileM} {
    width: 40vw;
  }
  @media ${device.mobileL} {
    width: 30vw;
  }
  @media ${device.tablet} {
    width: 20vw;
  }
  @media ${device.laptop} {
    width: 13vw;
  }
  @media ${device.laptopL} {
    width: 8vw;
  }
`;

export const VideoImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
`;
export const TitleContainer = styled.div`
  position: relative;
  min-width: 20vw;
  @media ${device.mobileXS} {
    width: 40vw;
  }
  @media ${device.mobileS} {
    width: 40vw;
  }
  @media ${device.mobileM} {
    width: 40vw;
  }
  @media ${device.mobileL} {
    width: 50vw;
  }
  @media ${device.tablet} {
    width: 10vw;
  }
  @media ${device.laptop} {
    width: 20vw;
  }
  @media ${device.laptopL} {
    width: 25vw;
  }
`;
export const Title = styled.h2`
  font-size: 0.9em;
  font-weight: 500;
  line-height: 20px;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const SubTitle = styled.h2`
  font-size: 0.7em;
  font-weight: 400;
  padding-left: 10px;
  line-height: 20px;
  margin-top: -1vh;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.textAccent};
`;

import styled from 'styled-components';
import { device } from '../../../styles/sizes';

export const CardContainer = styled.div`
  min-width: 18vw;
  max-width: 100vh;
  margin: 3vw 0 1vw 1.5vw;
  height: 250px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.bodyAccent};
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
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
    width: 35vw;
    margin: 3vw 2vw 2vw 3vw;
  }
  @media ${device.laptop} {
    width: 18vw;
    margin: 3vw 0 1vw 1.5vw;
  }
`;
export const ImageContainer = styled.div`
  top: 0%;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const VideoImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 150px;
  width: 100%;
`;
export const Title = styled.h2`
  font-size: clamp(1.4em, 1.4vw, 1.4em);
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 100;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.textAccent};
`;

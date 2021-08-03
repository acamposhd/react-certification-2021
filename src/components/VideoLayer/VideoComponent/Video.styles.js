import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 40vh;
  margin: 3vh 3vh 0 6vh;
  height: 350px;
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
`;
export const ImageContainer = styled.div`
  top: 0%;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
`;

export const VideoImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 150px;
  width: 100%;
`;
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 2px;
`;
export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 100;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 0;
  color: ${({ theme }) => theme.textAccent};
`;

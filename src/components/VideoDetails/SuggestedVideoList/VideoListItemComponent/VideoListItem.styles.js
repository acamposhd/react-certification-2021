import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  /* margin: 30px 10px 0 40px; */
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
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  /* &:hover {
    transform: scale(1.01);
  } */
`;
export const ImageContainer = styled.div`
  top: 0%;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 40%;
  border-radius: 5px;
`;

export const VideoImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 100px;
  width: 100%;
`;
export const TitleContainer = styled.div`
  top: 0%;
  left: 40%;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 50%;
  border-radius: 5px;
`;
export const SubTitleContainer = styled.div`
  margin-top: 6vh;
  left: 40%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  padding-left: 10px;
  /* padding-right: 10px; */
  /* margin-bottom: 2px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 100;
  padding-left: 10px;
  margin-top: -1vh;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.textAccent};
`;

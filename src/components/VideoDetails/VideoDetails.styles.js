import styled from 'styled-components';

export const VideoDetailsLayer = styled.div`
  width: 100%;
  /* padding: 0 10% 0 10%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
`;
export const VideoInfo = styled.div`
  width: 70%;
  height: max-content;
  padding: 0 2vh 0 2vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const VideoDescription = styled.div`
  width: 100%;
  text-align: left;
  /* padding: 0 10% 0 10%; */
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
  color: ${({ theme }) => theme.textAccent};
`;

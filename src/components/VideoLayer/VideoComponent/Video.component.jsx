import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 350px;
  margin: 30px 10px 0 40px;
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
const ImageContainer = styled.div`
  top: 0%;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
`;

const VideoImage = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 150px;
  width: 100%;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 2px;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 100;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 0;
  color: ${({ theme }) => theme.textAccent};
`;

const Video = (props) => {
  const { item } = props;

  return (
    <CardContainer>
      <ImageContainer>
        <VideoImage src={item.snippet.thumbnails.medium.url} />
        <Title>{item.snippet.title}</Title>
        <SubTitle>{item.snippet.description}</SubTitle>
      </ImageContainer>
    </CardContainer>
  );
};

export default Video;

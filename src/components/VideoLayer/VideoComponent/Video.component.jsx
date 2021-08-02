import React from 'react';
import {
  CardContainer,
  ImageContainer,
  SubTitle,
  Title,
  VideoImage,
} from './Video.styles';

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

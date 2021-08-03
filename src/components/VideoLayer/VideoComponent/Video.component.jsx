import React from 'react';
import { useHistory } from 'react-router';
import {
  CardContainer,
  ImageContainer,
  SubTitle,
  Title,
  VideoImage,
} from './Video.styles';
import useYoutubeAPI from '../../../hooks/useYoutubeAPI';

const Video = (props) => {
  const { item } = props;
  const { saveCurrentVideo } = useYoutubeAPI();
  const history = useHistory();
  const onClick = () => {
    saveCurrentVideo(item);
    history.push(`video/${item.id?.videoId}`);
  };

  return (
    <CardContainer onClick={onClick}>
      <ImageContainer>
        <VideoImage src={item?.snippet?.thumbnails?.medium?.url} />
        <Title>{item?.snippet?.title}</Title>
        <SubTitle>{item?.snippet?.description}</SubTitle>
      </ImageContainer>
    </CardContainer>
  );
};

export default Video;

import React from 'react';
import { useHistory } from 'react-router';
import {
  CardContainer,
  ImageContainer,
  Title,
  SubTitle,
  TitleContainer,
  SubTitleContainer,
  VideoImage,
} from './VideoListItem.styles';
import useYoutubeAPI from '../../../../hooks/useYoutubeAPI';
import { getRelativeDate, textTruncate } from '../../../../utils/fns';

const Video = (props) => {
  const { item } = props;
  const { saveCurrentVideo } = useYoutubeAPI();
  const history = useHistory();
  const onClick = () => {
    saveCurrentVideo(item);
    history.push(`${item.id?.videoId}`);
  };

  return (
    <>
      {item?.snippet && (
        <CardContainer onClick={onClick}>
          <ImageContainer>
            <VideoImage src={item.snippet?.thumbnails?.medium?.url} />{' '}
          </ImageContainer>
          <TitleContainer>
            <Title>{item?.snippet?.title}</Title>
          </TitleContainer>
          <SubTitleContainer>
            <SubTitle>{textTruncate(item?.snippet?.channelTitle, 20, '...')}</SubTitle>
            <SubTitle>{getRelativeDate(item?.snippet?.publishedAt)}</SubTitle>
          </SubTitleContainer>
        </CardContainer>
      )}
    </>
  );
};

export default Video;

import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
  CardContainer,
  ImageContainer,
  Title,
  SubTitle,
  TitleContainer,
  VideoImage,
} from './VideoListItem.styles';
import useYoutubeAPI from '../../../../hooks/useYoutubeAPI';
import { getRelativeDate, textTruncate } from '../../../../utils/fns';
import { StyledIcon } from '../../../VideoLayer/VideoComponent/Video.styles';

const Video = (props) => {
  const { item } = props;
  const favVideos = JSON.parse(localStorage.getItem('favoriteVideos'));
  const { saveCurrentVideo, toggleFavorite } = useYoutubeAPI();
  const onClick = () => {
    saveCurrentVideo(item);
  };
  const findFav = (video) => {
    const isFav = favVideos?.find((vid) => vid.id.videoId === video.id.videoId);
    return isFav;
  };

  return (
    <>
      {item?.snippet && (
        <CardContainer onClick={onClick}>
          <StyledIcon onClick={() => toggleFavorite(item)}>
            {findFav(item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </StyledIcon>
          <ImageContainer>
            <VideoImage src={item.snippet?.thumbnails?.medium?.url} />{' '}
          </ImageContainer>
          <TitleContainer>
            <Title>{item?.snippet?.title}</Title>
            <SubTitle>{textTruncate(item?.snippet?.channelTitle, 30, '...')}</SubTitle>
            <SubTitle>{getRelativeDate(item?.snippet?.publishedAt)}</SubTitle>
          </TitleContainer>
        </CardContainer>
      )}
    </>
  );
};

export default Video;

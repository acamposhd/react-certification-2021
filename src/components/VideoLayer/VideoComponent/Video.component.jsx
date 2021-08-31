import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router';
import {
  CardContainer,
  ImageContainer,
  StyledIcon,
  SubTitle,
  Title,
  VideoImage,
} from './Video.styles';
import useYoutubeAPI from '../../../hooks/useYoutubeAPI';

const Video = (props) => {
  const { item } = props;
  const favVideos = JSON.parse(localStorage.getItem('favoriteVideos'));
  const { saveCurrentVideo, toggleFavorite } = useYoutubeAPI();
  const history = useHistory();
  const onClick = () => {
    saveCurrentVideo(item);
    history.push(`video/${item.id?.videoId}`);
  };

  const findFav = (video) => {
    const isFav = favVideos?.find((vid) => vid.id.videoId === video.id.videoId);
    return isFav;
  };

  return (
    <CardContainer>
      <StyledIcon onClick={() => toggleFavorite(item)}>
        {findFav(item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </StyledIcon>
      <ImageContainer onClick={onClick}>
        <VideoImage src={item?.snippet?.thumbnails?.medium?.url} />
        <Title>{item?.snippet?.title}</Title>
        <SubTitle>{item?.snippet?.description}</SubTitle>
      </ImageContainer>
    </CardContainer>
  );
};

export default Video;

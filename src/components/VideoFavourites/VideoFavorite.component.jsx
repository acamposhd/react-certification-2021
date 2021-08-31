import React from 'react';
import NotFound from '../../assets/images/not_found.png';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import { textTruncate } from '../../utils/fns';
import VideoFavoriteList from './FavoriteList/VideoFavoriteList';
import {
  SubTitle,
  Title,
  VideoDescription,
  VideoDetailsLayer,
  VideoInfo,
} from './VideoFavorite.styles';
import VideoFrameComponent from './VideoFrame/VideoFrame';

const VideoDetailsComponent = () => {
  const { getCurrentVideo, favoriteVideos } = useYoutubeAPI();
  const currentVideo = getCurrentVideo();

  return (
    <>
      {favoriteVideos?.length > 0 ? (
        <VideoDetailsLayer>
          <VideoInfo>
            <VideoFrameComponent
              src={`https://www.youtube.com/embed/${currentVideo?.id?.videoId}`}
              key={currentVideo?.id?.videoId}
            />
            <VideoDescription>
              <Title>{currentVideo?.snippet?.title}</Title>
              <SubTitle>
                {textTruncate(getCurrentVideo()?.snippet?.description, 300, '...')}
              </SubTitle>
            </VideoDescription>
          </VideoInfo>
          <VideoFavoriteList favoriteVideos={favoriteVideos} />
        </VideoDetailsLayer>
      ) : (
        <img src={NotFound} style={{ marginTop: '20vh' }} alt="not-found" />
      )}
    </>
  );
};

export default VideoDetailsComponent;

import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import { textTruncate } from '../../utils/fns';
import VideoSuggestedList from './SuggestedVideoList/VideoSuggestedList';
import {
  SubTitle,
  Title,
  VideoDescription,
  VideoDetailsLayer,
  VideoInfo,
} from './VideoDetails.styles';
import VideoFrameComponent from './VideoFrame/VideoFrame';

const VideoDetailsComponent = () => {
  const { id } = useParams();
  const { getRelatedVideos, getCurrentVideo, relatedVideoList } = useYoutubeAPI();

  useEffect(() => {
    if (id) {
      getRelatedVideos(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <VideoDetailsLayer>
      <VideoInfo>
        <VideoFrameComponent src={`https://www.youtube.com/embed/${id}`} key={id} />
        <VideoDescription>
          <Title>{getCurrentVideo()?.snippet?.title}</Title>
          <SubTitle>
            {textTruncate(getCurrentVideo()?.snippet?.description, 300, '...')}
          </SubTitle>
        </VideoDescription>
      </VideoInfo>
      <VideoSuggestedList relatedVideos={relatedVideoList} />
    </VideoDetailsLayer>
  );
};

export default VideoDetailsComponent;

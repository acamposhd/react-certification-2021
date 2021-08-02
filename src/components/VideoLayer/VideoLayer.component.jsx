import React, { useContext } from 'react';
import Video from './VideoComponent/Video.component';
import { VideoLayerContainer } from './VideoLayer.styles';
import { VideoContextProvider } from '../../context/VideoContext';

const VideoLayer = () => {
  const { videoList } = useContext(VideoContextProvider);

  return (
    <VideoLayerContainer>
      {videoList?.items?.length > 0 &&
        videoList.items.map((item) => <Video item={item} key={item.etag} />)}
    </VideoLayerContainer>
  );
};

export default VideoLayer;

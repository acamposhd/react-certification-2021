import React, { useContext } from 'react';
import Video from './VideoComponent/Video.component';
import { VideoLayerContainer } from './VideoLayer.styles';
import { VideoContextProvider } from '../../context/VideoContext';
import Spinner from '../Spinner/Spinner.component';

const VideoLayer = () => {
  const { videoList, isLoading } = useContext(VideoContextProvider);

  return (
    <VideoLayerContainer isLoading={isLoading}>
      {isLoading && <Spinner />}
      {!isLoading &&
        videoList?.items?.length > 0 &&
        videoList.items.map((item) => <Video item={item} key={item.etag} />)}
    </VideoLayerContainer>
  );
};

export default VideoLayer;

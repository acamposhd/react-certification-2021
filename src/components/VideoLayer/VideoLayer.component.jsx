import React from 'react';
import Video from './VideoComponent/Video.component';
import { VideoLayerContainer } from './VideoLayer.styles';

const mockData = require('../../utils/mocks/youtube.json');

const VideoLayer = () => {
  return (
    <VideoLayerContainer>
      {mockData.items.map((item) => (
        <Video item={item} key={item.etag} />
      ))}
    </VideoLayerContainer>
  );
};

export default VideoLayer;

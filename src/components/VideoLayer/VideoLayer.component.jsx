import React from 'react';
import styled from 'styled-components';
import Video from './VideoComponent/Video.component';

const mockData = require('../../utils/mocks/youtube.json');

const VideoLayerContainer = styled.div`
  width: 100%;
  padding: 0 10% 0 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const VideoLayer = () => {
  return (
    <VideoLayerContainer>
      {mockData.items.map((item) => (
        <Video item={item} />
      ))}
    </VideoLayerContainer>
  );
};

export default VideoLayer;

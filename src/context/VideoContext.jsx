import React, { useState } from 'react';

export const VideoContextProvider = React.createContext();

const VideoContext = ({ children }) => {
  const [videoList, setVideoList] = useState([]);
  const [relatedVideoList, setRelatedVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <VideoContextProvider.Provider
      value={{
        videoList,
        setVideoList,
        currentVideo,
        setCurrentVideo,
        relatedVideoList,
        setRelatedVideoList,
      }}
    >
      {children}
    </VideoContextProvider.Provider>
  );
};

export default VideoContext;

import React, { useState } from 'react';

export const VideoContextProvider = React.createContext();

const VideoContext = ({ children }) => {
  const [videoList, setVideoList] = useState([]);
  const [relatedVideoList, setRelatedVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setLoading] = useState(false);

  return (
    <VideoContextProvider.Provider
      value={{
        videoList,
        setVideoList,
        currentVideo,
        setCurrentVideo,
        relatedVideoList,
        setRelatedVideoList,
        isLoading,
        setLoading,
      }}
    >
      {children}
    </VideoContextProvider.Provider>
  );
};

export default VideoContext;

import React, { useState } from 'react';

export const VideoContextProvider = React.createContext();

const VideoContext = ({ children }) => {
  const [videoList, setVideoList] = useState([]);

  return (
    <VideoContextProvider.Provider
      value={{
        videoList,
        setVideoList,
      }}
    >
      {children}
    </VideoContextProvider.Provider>
  );
};

export default VideoContext;

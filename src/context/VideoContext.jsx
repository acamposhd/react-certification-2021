import React, { useReducer, useState } from 'react';
import { reducerTypes } from '../utils/reducerTypes';

export const VideoContextProvider = React.createContext();
const lastQuery = localStorage.getItem('query');
const initialState = {
  query: lastQuery && lastQuery !== '' ? lastQuery : 'wizeline',
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case reducerTypes.SET_SEARCH: {
      const query = action.payload;
      return {
        ...currentState,
        query,
      };
    }
    default:
      return currentState;
  }
};

const VideoContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
        state,
        dispatch,
      }}
    >
      {children}
    </VideoContextProvider.Provider>
  );
};

export default VideoContext;

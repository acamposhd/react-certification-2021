import React, { useReducer, useState } from 'react';
import { reducerTypes } from '../utils/reducerTypes';

export const VideoContextProvider = React.createContext();
const lastQuery = localStorage.getItem('query');
const initialState = {
  query: lastQuery && lastQuery !== '' ? lastQuery : 'wizeline',
  isAuthenticated: false,
  loginError: false,
  modalOpened: false,
  userLogged: {},
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
    case reducerTypes.TOGGLE_MODAL: {
      return {
        ...currentState,
        modalOpened: action.payload,
      };
    }
    case reducerTypes.LOGIN: {
      let tempStatus = {};
      if (action.payload) {
        tempStatus = {
          ...currentState,
          userLogged: action.payload,
          loginError: false,
          isAuthenticated: true,
          modalOpened: false,
        };
      } else {
        tempStatus = {
          ...currentState,
          loginError: true,
        };
      }
      return tempStatus;
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

import React, { useReducer, useState } from 'react';
import { reducerTypes } from '../utils/reducerTypes';

export const VideoContextProvider = React.createContext();
const lastQuery = localStorage.getItem('query');
const currentFavVideos = JSON.parse(localStorage.getItem('favoriteVideos'));
const initialState = {
  query: lastQuery && lastQuery !== '' ? lastQuery : 'wizeline',
  isAuthenticated: false,
  loginError: false,
  modalOpened: false,
  userLogged: {},
  favoriteVideos: currentFavVideos ?? [],
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
    case reducerTypes.TOGGLE_FAVORITE: {
      const video = action.payload;
      const currentVid = JSON.parse(localStorage.getItem('currentVideo'));
      let newFav;

      const favoriteVideos = JSON.parse(localStorage.getItem('favoriteVideos'));
      if (favoriteVideos?.length > 0) {
        const videoExist = favoriteVideos.find(
          (vid) => vid.id.videoId === video.id.videoId
        );
        if (videoExist) {
          newFav = favoriteVideos.filter((vid) => vid.id.videoId !== video.id.videoId);
          localStorage.setItem('favoriteVideos', JSON.stringify(newFav));
          if (currentVid?.id?.videoId === video.id.videoId) {
            if (newFav.length > 0) {
              localStorage.setItem('currentVideo', JSON.stringify(newFav[0]));
            } else {
              localStorage.removeItem('currentVideo');
            }
          }
        } else {
          newFav = [...currentState.favoriteVideos, video];
          localStorage.setItem('favoriteVideos', JSON.stringify(newFav));
          localStorage.setItem('currentVideo', JSON.stringify(video));
        }
      } else {
        newFav = [...currentState.favoriteVideos, video];
        localStorage.setItem('favoriteVideos', JSON.stringify(newFav));
        localStorage.setItem('currentVideo', JSON.stringify(video));
      }
      return {
        ...currentState,
        favoriteVideos: newFav,
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

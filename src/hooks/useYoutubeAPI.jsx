import { useContext } from 'react';
import YoutubeAPI from '../apis/youtube';
import { VideoContextProvider } from '../context/VideoContext';
import { reducerTypes } from '../utils/reducerTypes';

const useYoutubeAPI = () => {
  const {
    setVideoList,
    setRelatedVideoList,
    setCurrentVideo,
    currentVideo,
    relatedVideoList,
    setLoading,
    state,
    dispatch,
  } = useContext(VideoContextProvider);
  const { query, favoriteVideos } = state;
  const lastQuery = localStorage.getItem('query');

  const searchVideos = async () => {
    const localVideos = localStorage.getItem('videos');
    setLoading((currentStatus) => !currentStatus);
    if (!lastQuery || lastQuery !== query) {
      const videos = await YoutubeAPI.searchVideos(query);
      localStorage.setItem('videos', JSON.stringify(videos.data));
      localStorage.setItem('query', query);
      setVideoList(videos.data);
    } else if (localVideos) {
      setVideoList(JSON.parse(localVideos));
    }
    setLoading((currentStatus) => !currentStatus);
  };
  const getRelatedVideos = async (vidId) => {
    const currentVidId = localStorage.getItem('currentVidId');
    const currentRelatedVideos = localStorage.getItem('currentRelatedVideos');
    if (!currentVidId || currentVidId !== vidId) {
      const videos = await YoutubeAPI.getRelatedVideos(vidId);
      localStorage.setItem('currentVidId', vidId);
      localStorage.setItem('currentRelatedVideos', JSON.stringify(videos.data));
      setRelatedVideoList(videos.data);
    } else if (currentRelatedVideos) {
      setRelatedVideoList(JSON.parse(currentRelatedVideos));
    }
  };
  const saveCurrentVideo = (video) => {
    setCurrentVideo(video);
    localStorage.setItem('currentVideo', JSON.stringify(video));
  };
  const getCurrentVideo = () => {
    const cv = JSON.parse(localStorage.getItem('currentVideo'));
    return cv ?? currentVideo;
  };
  const searchVideo = (term) => {
    dispatch({ type: reducerTypes.SET_SEARCH, payload: term });
  };
  const toggleFavorite = (video) => {
    dispatch({ type: reducerTypes.TOGGLE_FAVORITE, payload: video });
  };

  return {
    query,
    searchVideo,
    searchVideos,
    getRelatedVideos,
    saveCurrentVideo,
    getCurrentVideo,
    relatedVideoList,
    toggleFavorite,
    favoriteVideos,
  };
};

export default useYoutubeAPI;

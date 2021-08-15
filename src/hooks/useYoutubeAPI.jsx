import { useContext, useState } from 'react';
import YoutubeAPI from '../apis/youtube';
import { VideoContextProvider } from '../context/VideoContext';

const useYoutubeAPI = () => {
  const {
    setVideoList,
    setRelatedVideoList,
    setCurrentVideo,
    currentVideo,
    relatedVideoList,
    setLoading,
  } = useContext(VideoContextProvider);
  const lastQuery = localStorage.getItem('query');
  const [query, setQuery] = useState(lastQuery ?? 'wizeline');

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
    return currentVideo ?? cv;
  };

  return {
    setQuery,
    query,
    searchVideos,
    getRelatedVideos,
    saveCurrentVideo,
    getCurrentVideo,
    relatedVideoList,
  };
};

export default useYoutubeAPI;

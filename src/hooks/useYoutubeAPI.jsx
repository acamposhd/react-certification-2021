import { useContext, useState } from 'react';
import YoutubeAPI from '../apis';
import { VideoContextProvider } from '../context/VideoContext';

const useYoutubeAPI = () => {
  const { setVideoList } = useContext(VideoContextProvider);
  const [query, setQuery] = useState('wizeline');

  const searchVideos = async () => {
    const videos = await YoutubeAPI.searchVideos(query);
    setVideoList(videos.data);
  };

  return { setQuery, query, searchVideos };
};

export default useYoutubeAPI;

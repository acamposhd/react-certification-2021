import api from '../../config/axios/axios.api.config';

const searchVideos = (query) =>
  api.get('search', { part: 'id,snippet', maxResults: 12, q: query });
const getRelatedVideos = (vidId) =>
  api.get('search', { part: 'snippet', relatedToVideoId: vidId, type: 'video' });

export default {
  searchVideos,
  getRelatedVideos,
};

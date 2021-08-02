import api from '../config/axios/axios.api.config';

// const prefix = 'news';

// const getNews = () => api.get(`${prefix}`);

const searchVideos = (query) =>
  api.get('search', { part: 'snippet', maxResults: 12, q: query });

// const deleteNews = (id) => api.put(`${prefix}/${id}/delete`, { id });

// const publishNews = (id) => api.put(`${prefix}/${id}/publish`, { id });

// const duplicateNews = (data) => api.put(`${prefix}/${data.id}/duplicate`, data);

// const updateNews = (data, id) => api.put(`${prefix}/${id}`, data);

// const createNews = (data) => api.postJson(`${prefix}`, data);

// eslint-disable-next-line
export default {
  searchVideos,
};

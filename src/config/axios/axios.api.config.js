import axios from 'axios';

/**
 * @param baseUri : Define la dirección de servidor api
 */
const baseUri = `${process.env.REACT_APP_YOUTUBE_URL}`;
export const apiInstance = axios.create({ baseURL: baseUri });

/**
 * Headers : Objecto para definir headers de envío
 * @param json
 * @param formData
 */

const headers = {
  json: { headers: { 'Content-Type': 'application/json' } },
  formData: { headers: { 'Content-Type': 'multipart/form-data' } },
};

// apiInstance.defaults.headers.common.Authorization = auth.authTokenAccess;
const KEY_PARAM = `?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
const api = {
  baseUri,
  /**
   * @method GET
   * @param endpoint : recurso ejm. 'user/logout'
   * @param params : parametros que recibe
   */
  get: (endpoint, params = null) => {
    const url = new URL(`${baseUri}${endpoint}${KEY_PARAM}`);
    // console.log("url",url)
    if (params) {
      Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key]);
      });
    }
    return apiInstance.get(url.href, headers.json);
  },
  getFile: (endpoint, params = null) => {
    const url = new URL(baseUri + endpoint);
    if (params) {
      Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key]);
      });
    }
    return apiInstance.get(url.href, {
      responseType: 'blob',
    });
  },
  /**
   * @method FETCH
   * @param endpoint 'http://get.data', recibe una URL completa
   * @param params : parametros que recibe
   */
  fetch(endpoint, params = null) {
    const url = new URL(endpoint);
    if (params) {
      Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key]);
      });
    }
    return apiInstance.get(url.href, headers.json);
  },
  /**
   * @method POST
   * @param endpoint : recurso ejm. 'user/logout'
   * @param params : parametros que recibe formato Form-Data
   */
  postData: (endpoint, data) =>
    apiInstance.post(baseUri + endpoint, data, headers.formData),
  /**
   * @method POST
   * @param endpoint : recurso ejm. 'user/logout'
   * @param params : parametros que recibe formato JSON
   */
  postJson: (endpoint, data) => apiInstance.post(baseUri + endpoint, data, headers.json),
  /**
   * @method PUT
   * @param endpoint : recurso ejm. 'user/logout'
   * @param params : parametros que recibe formato JSON
   */
  put: (endpoint, data) => apiInstance.put(baseUri + endpoint, data, headers.json),
  /**
   * @method PATH
   * @param endpoint : recurso ejm. 'user/logout'
   */
  patch: (endpoint, data) => apiInstance.patch(baseUri + endpoint, data, headers.json),

  /**
   * @method POST
   * @param endpoint : recurso ejm. 'user/logout'
   */
  delete: (endpoint) => apiInstance.delete(baseUri + endpoint, headers.json),
};

export default api;

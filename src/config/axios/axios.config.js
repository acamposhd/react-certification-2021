import { apiInstance as axios } from './axios.api.config';

/**
 * @module observer
 * Verificación de errores en petición
 */

const config = {
  // eslint-disable-next-line consistent-return
  requestObserver: () =>
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const errorObject = {
          status: error.response.status,
          error: error.response.data.message,
        };

        switch (error.response.status) {
          case 401:
            if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
              // window.location.replace("/login");
            } else {
              // window.location.replace("/login");
            }
            break;
          case 500:
            // eslint-disable-next-line no-console
            return error.response.data;
          // console.warn('observer.js (define 500 return)', error.response.data);
          case 501:
            // eslint-disable-next-line no-console
            return error.response.data;
          // console.warn('observer.js (define 501 return)', error.response.data);
          default:
            throw errorObject;
        }
        return error;
      }
    ),
};

export default config;

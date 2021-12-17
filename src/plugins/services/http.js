/* -------------------------------------------------------------------------- */
/* SERVICES HTTP                                                              */
/* -------------------------------------------------------------------------- */

import axios from 'axios';
import { apiBaseDomain } from './helpers';

// Add token
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// Create axios instance
const axiosInstance = axios.create({
    baseURL: apiBaseDomain(),
});

// Create cancel token
axiosInstance.source = axios.CancelToken.source();

/**
 * Cancels every request
 * @function
 */
axiosInstance.cancelRequests = () => {
    axiosInstance.source.cancel({
        isCanceled: true,
        message   : 'Requests canceled',
    });
    axiosInstance.source = axios.CancelToken.source();
};

/**
 * returns if error is being caused by axios cancel
 * @function
 * @returns {Boolean} - true if the error caused by canceling the request
 */
axiosInstance.areRequestsCanceled = err => err && axios.isCancel(err);

/**
 * Parse error response
 * @function
 * @param {Error} error - Error to parse
 * @returns {Promise} - Contains the error object
 */
function parseError(error) {
    if (error.response) {
        return Promise.reject(error.response.data);
    }
    
    return Promise.reject(error);
}

/**
 * Set cancel token on every request
 */
axiosInstance.interceptors.request.use(request => {
    if (!request.cancelToken) {
        // eslint-disable-next-line no-param-reassign
        request.cancelToken = axiosInstance.source.token;
    }
    return request;
}, parseError);

export default axiosInstance;

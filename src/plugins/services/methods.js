/* -------------------------------------------------------------------------- */
/* SERVICES METHODS                                                           */
/* -------------------------------------------------------------------------- */

import Http from './http';

export default {
    
    /**
     * Return get request of axios
     *
     * @param endpoint
     * @param args
     * @returns {*}
     */
    get(endpoint, args) {
        const params = args[0] || {};
        const config = args[1] || undefined;
        return Http.get(endpoint, { params, ...config });
    },
    
    /**
     * Return post request of axios
     *
     * @param endpoint
     * @param args
     * @returns {*}
     */
    post(endpoint, args) {
        const params = args[0] || {};
        const config = args[1] || undefined;
        return Http.post(endpoint, params, config);
    },
    
    /**
     * Return put request of axios
     *
     * @param endpoint
     * @param args
     * @returns {*}
     */
    put(endpoint, args) {
        const params = args[0] || {};
        const config = args[1] || undefined;
        return Http.put(endpoint, params, config);
    },
    
    /**
     * Return patch request of axios
     *
     * @param endpoint
     * @param args
     * @returns {*}
     */
    patch(endpoint, args) {
        const params = args[0] || {};
        const config = args[1] || undefined;
        return Http.patch(endpoint, params, config);
    },
    
    /**
     * Return delete request of axios
     *
     * @param endpoint
     * @param args
     * @returns {*}
     */
    delete(endpoint, args) {
        const params = args[0] || {};
        const config = args[1] || undefined;
        return Http.delete(endpoint, { params, ...config });
    },
    
    /**
     * Default Axios instance to use directly
     */
    Http,
};

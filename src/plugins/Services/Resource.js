/*-----------------------------------------------------------------
- Resources
-----------------------------------------------------------------*/
import Http from './Http';
import { apiActionUrl } from './helpers';

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
        const version = args[1] || undefined;
        const mock = args[2] || false;
        const config = args[3] || {};
        return Http.get(apiActionUrl(endpoint, version, mock), { params, ...config });
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
        const version = args[1] || undefined;
        const mock = args[2] || false;
        const config = args[3] || undefined;
        return Http.post(apiActionUrl(endpoint, version, mock), params, config);
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
        const version = args[1] || undefined;
        const mock = args[2] || false;
        const config = args[3] || undefined;
        return Http.put(apiActionUrl(endpoint, version, mock), params, config);
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
        const version = args[1] || undefined;
        const mock = args[2] || false;
        const config = args[3] || undefined;
        return Http.patch(apiActionUrl(endpoint, version, mock), params, config);
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
        const version = args[1] || undefined;
        const mock = args[2] || false;
        const config = args[3] || {};
        return Http.delete(apiActionUrl(endpoint, version, mock), { params, ...config });
    },
    
    /**
     * Default Axios instance to use directly
     */
    Http,
};

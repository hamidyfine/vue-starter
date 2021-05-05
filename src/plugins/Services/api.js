/*-----------------------------------------------------------------
- API Helper
-----------------------------------------------------------------*/

/**
 * Update query string in url
 * @param uri
 * @param key
 * @param value
 * @returns {string}
 */
export const updateQueryString = (uri, key, value) => {
    if (typeof value === 'boolean') {
        value = 1; // eslint-disable-line
    }
    
    // Use window URL if no query string is provided
    if (!uri) {
        uri = window.location.href; // eslint-disable-line
    }
    
    if (uri.includes('?')) {
        return `${uri}&${key}=${value}`;
    }
    return `${uri}?${key}=${value}`;
};

/**
 * Return api action url
 * @param {string} action - http action
 * @param {number=} apiVersion - api version
 * @param {boolean=} mock - mock api
 * @returns {string}
 */
export const apiActionUrl = (action, apiVersion) => {
    const version = apiVersion;
    const url = `v${version}/${action}`;
    return url;
};

/**
 * Return api base domain
 * @returns {string}
 */
export const apiBaseDomain = () => {
    let domain = `${location.protocol}//${location.hostname}${location.port ? `:${location.port}` : ''}`; // eslint-disable-line
    if (process.env.NODE_ENV === 'production') {
        domain = process.env.VUE_APP_API ? process.env.VUE_APP_API : domain;
    }
    return domain.replace(/\/?$/, '/');
};

/**
 * Return api base url
 * @returns {string}
 */
export const apiBaseUrl = () => {
    const uri = '/api/';
    return apiBaseDomain() + uri.replace(/^\/?/, '');
};

/**
 * Return api url
 * @param {string} action - http action
 * @param {number=} apiVersion - api version
 * @param {boolean=} mock - mock api
 * @returns {string}
 */
export const apiUrl = (action, apiVersion) => {
    const version = apiVersion;
    return apiBaseUrl() + apiActionUrl(action, version);
};

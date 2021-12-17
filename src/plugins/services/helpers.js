/* -------------------------------------------------------------------------- */
/* SERVICES HELPERS                                                           */
/* -------------------------------------------------------------------------- */
/* eslint-disable import/prefer-default-export */

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

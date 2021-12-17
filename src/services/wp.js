/*-----------------------------------------------------------------
- Wordpress Services
-----------------------------------------------------------------*/
import Resource from '@plugins/services/methods';

const prefix = 'wp-json/wp/v2/';

/**
 * Add Prefix to the endpoint
 */
const addPrefix = (endpoint) => `${prefix}${endpoint}`;

export default {
    /* Posts -------------------------------------------------------------------- */
    postsList : (...args) => Resource.get(addPrefix('posts'), args),
    postSingle: (id, ...args) => Resource.get(addPrefix(`posts/${id}`), args),

    /* Pages -------------------------------------------------------------------- */
    pagesList : (...args) => Resource.get('pages', args),
    pageSingle: (id, ...args) => Resource.get(`pages/${id}`, args),

    /* Media -------------------------------------------------------------------- */
    mediaList  : (...args) => Resource.get('media', args),
    mediaSingle: (id, ...args) => Resource.get(`media/${id}`, args),
};

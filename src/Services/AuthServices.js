/*-----------------------------------------------------------------
- Person Services
-----------------------------------------------------------------*/
import { Resource } from '@/plugins/Services';

export default {

    /**
     * Persons  Login
     *
     * @returns {*}
     */
    login: (...args) => Resource.post('persons-login', args),
};

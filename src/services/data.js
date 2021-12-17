/*-----------------------------------------------------------------
- Cart Services
-----------------------------------------------------------------*/
import Resource from '@plugins/services/methods';

export default {
    /**
     * Get Test Data - Example
     *
     * @returns {*}
     */
    getTodo: (...args) => Resource.get('https://jsonplaceholder.typicode.com/todos/1', args),
};

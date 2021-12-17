/* -------------------------------------------------------------------------- */
/* LOAD SERVICES AND REGISTER THEM                                            */
/* -------------------------------------------------------------------------- */

import path from 'path';
import Resource from './methods';

const importedFiles = require.context('@/services', true, /\.js$/);

const importedServices = {};
importedFiles.keys().forEach((fileName) => {
    const file = path.basename(fileName, '.js');
    importedServices[file] = importedFiles(fileName).default;
});

const services = {
    ...Resource,
    ...importedServices,
};

export {
    services,
    Resource,
};

// Export plugin
export default {
    /**
     * Install plugin
     * @param Vue
     */
    install(Vue) {
        Vue.prototype.$services = services; // eslint-disable-line
    },
};

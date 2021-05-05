/*-----------------------------------------------------------------
- Load all services and share it into Vue instance
-----------------------------------------------------------------*/
import path from 'path';
import Resource from './Resource';

const importedServices = {};
const importedFiles = require.context('@/Services', true, /\.js$/);

importedFiles.keys().forEach((fileName) => {
    const file = path.basename(fileName, '.js').replace(/(\.\/|Services)/g, '');
    importedServices[file] = importedFiles(fileName).default;
});

// Export all services to use directly
const services = {
    ...importedServices,
    ...Resource,
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

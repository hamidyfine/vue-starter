/*-----------------------------------------------------------------
- Vue Configs
-----------------------------------------------------------------*/
// Utilities
const path = require('path');

// Backend url
const backendUrl = process.env.VUE_APP_API;

module.exports = {
    productionSourceMap: false,
    runtimeCompiler    : true,
    outputDir          : './build',
    pages              : {
        index: {
            entry   : 'src/main',
            template: 'public/index.html',
        },
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src'))
            .set('@plugins', path.resolve(__dirname, 'src/plugins'));
    },
    configureWebpack: {
        performance: {
            hints: false,
        },
        plugins: [],
    },
    devServer: {
        proxy: backendUrl,
    },
};

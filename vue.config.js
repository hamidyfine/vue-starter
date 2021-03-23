const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },

    configureWebpack: {
        performance: {
            hints: false,
        },
        plugins: [
            new ESLintPlugin({
                extensions: ['js', 'vue'],
                emitError: true,
                emitWarning: true,
                fix: process.env.NODE_ENV !== 'production',
            }),
        ],
    },
};

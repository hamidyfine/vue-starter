/*-----------------------------------------------------------------
- Load locales and register them
-----------------------------------------------------------------*/

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import deepMerge from 'deepmerge';

Vue.use(VueI18n);

const locales = ['en', 'fa'];

/**
 * Make locales empty object.
 * 
 * @returns {object}
 */
const makeLocalesObj = () => {
    const obj = {};
    locales.map((locale) => { // eslint-disable-line
        obj[locale] = {};
    });
    return obj;
};

// Default messages object
let messages = makeLocalesObj();

// Load files
const importedFiles = require.context('@/locales', true, /\.js$/);

// Merge messages
importedFiles.keys().forEach((fileName) => {
    const importedMessages = makeLocalesObj();
    let locale = null;
    let file = null;
    const content = importedFiles(fileName).default;

    locale = fileName.substr(2, 2);
    file = fileName.substring(5).replace('.js', '');

    if (locales.includes(locale)) {
        importedMessages[locale][file] = deepMerge(importedMessages[locale][file] || {}, content);
    }
    messages = deepMerge(importedMessages, messages);
});

// Defaults
const locale = locales[0] || 'fa';
const fallbackLocale = locales.length > 1 ? locales[1] : locale;

// Register messages
const i18n = new VueI18n({
    locale,
    fallbackLocale,
    messages,
    silentTranslationWarn: true,
});

export default i18n;

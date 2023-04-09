/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root     : true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'max-len'                                 : ['error', { code: 256 }],
        indent                                    : ['error', 4],
        'no-console'                              : process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'warn',
        'no-debugger'                             : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'padded-blocks'                           : ['error', 'never'],
        'linebreak-style'                         : ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'lines-between-class-members'             : ['error', 'always', { exceptAfterSingleLine: true }],
        'class-methods-use-this'                  : 'off',
        'no-trailing-spaces'                      : ['error', { skipBlankLines: true, ignoreComments: true }],
        'key-spacing'                             : ['error', { align: 'colon' }],
        'vue/script-indent'                       : ['error', 4, { baseIndent: 1 }],
        'vue/html-indent'                         : ['error', 4, { attribute: 1, baseIndent: 1, closeBracket: 0, alignAttributesVertically: true }],
        'arrow-parens'                            : 'off',
        'no-underscore-dangle'                    : 'off',
        'space-in-parens'                         : 'off',
        'no-prototype-builtins'                   : 'off',
        'import/no-unresolved'                    : 'off',
        'import/extensions'                       : 'off',
        'no-multiple-empty-lines'                 : 'off',
        'import/no-named-as-default'              : 'off',
        'import/no-extraneous-dependencies'       : 'off',
        'vue/experimental-script-setup-vars'      : 'off',
        'vue/require-default-prop'                : 'off',
        'vue/component-tags-order'                : ['error', { order: ['template', 'script', 'style'] }],
        'vue/no-v-html'                           : 'off',
        'vue/component-name-in-template-casing'   : ['error', 'kebab-case', { registeredComponentsOnly: true }],
        'vue/html-comment-content-spacing'        : ['error', 'always'],
        'vue/new-line-between-multi-line-property': 'off',
        'vue/no-boolean-default'                  : ['error', 'default-false'],
        'vue/no-empty-component-block'            : 'error',
        'vue/no-multiple-objects-in-class'        : 'error',
        'vue/no-static-inline-styles'             : 'error',
        'vue/no-template-target-blank'            : 'error',
        'vue/require-direct-export'               : 'off',
        'vue/require-name-property'               : 'error',
        'vue/v-for-delimiter-style'               : ['error', 'in'],
        'vue/v-on-function-call'                  : ['error', 'never'],
        'vue/no-deprecated-slot-attribute'        : 'off',
        'vue/multi-word-component-names'          : 'off',
        'vue/no-deprecated-slot-scope-attribute'  : 'warn',
        'vue/max-attributes-per-line'             : ['error', { singleline: { max: 1 }, multiline: { max: 1 } }],
        quotes                                    : ['error', 'single'],
        semi                                      : 'error',
        'eol-last'                                : ['error', 'always'],
        'no-unused-vars'                          : 'error',
        'require-jsdoc'                           : 'off',
        'jsx-quotes'                              : ['error', 'prefer-double']
    },

    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};

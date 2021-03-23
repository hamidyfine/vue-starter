module.exports = {
    root: true,
    env : {
        node: true,
    },
    extends      : ['plugin:vue/recommended', '@vue/airbnb', 'plugin:@intlify/vue-i18n/recommended', 'plugin:vue-scoped-css/recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'max-len': [
            'error',
            {
                code: 256,
            },
        ],
        indent           : ['error', 4],
        'no-console'     : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger'    : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'padded-blocks'  : ['error', 'never'],
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],

        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],

        'key-spacing': [
            'error',
            {
                align: 'colon',
            },
        ],

        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
            },
        ],

        'vue/html-indent': [
            'error',
            4,
            {
                attribute                : 1,
                baseIndent               : 1,
                closeBracket             : 0,
                alignAttributesVertically: true,
            },
        ],

        'arrow-parens'           : 'off',
        'no-underscore-dangle'   : 'off',
        'space-in-parens'        : 'off',
        'no-prototype-builtins'  : 'off',
        'import/no-unresolved'   : 'off',
        'import/extensions'      : 'off',
        'no-multiple-empty-lines': 'off',

        'require-jsdoc': [
            'warn',
            {
                require: {
                    FunctionDeclaration    : true,
                    MethodDefinition       : true,
                    ClassDeclaration       : true,
                    ArrowFunctionExpression: true,
                    FunctionExpression     : true,
                },
            },
        ],

        'import/no-named-as-default'        : 'off',
        'vue/experimental-script-setup-vars': 'off',
        'vue/require-default-prop'          : 'off',

        '@intlify/vue-i18n/no-html-messages': 'off',
        '@intlify/vue-i18n/no-missing-keys' : 'off',
        '@intlify/vue-i18n/no-v-html'       : 'off',

        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style'],
            },
        ],
        'vue/no-v-html'                        : 'off',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: true,
            },
        ],
        'vue/html-comment-content-spacing'        : ['error', 'always'],
        'vue/new-line-between-multi-line-property': 'off',
        'vue/no-boolean-default'                  : ['error', 'default-false'],
        'vue/no-empty-component-block'            : 'error',
        'vue/no-multiple-objects-in-class'        : 'error',
        'vue/no-static-inline-styles'             : 'error',
        'vue/no-template-target-blank'            : 'error',
        'vue/require-direct-export'               : 'error',
        'vue/require-name-property'               : 'error',
        'vue/v-for-delimiter-style'               : ['error', 'in'],
        'vue/v-on-function-call'                  : ['error', 'never'],
        'vue/no-deprecated-slot-attribute'        : 'off',
        'vue/no-deprecated-slot-scope-attribute'  : 'warn',
        'vue/max-attributes-per-line'             : [
            'error',
            {
                singleline: 1,
                multiline : {
                    max           : 1,
                    allowFirstLine: false,
                },
            },
        ],

        'vue-scoped-css/no-deprecated-v-enter-v-leave-class': 'warn',
        'vue-scoped-css/require-selector-used-inside'       : 'off',
        'vue-scoped-css/no-unused-selector'                 : 'off',

        // Temporary offed rules
        'vue/v-on-event-hyphenation': ['off', 'always', { autofix: false }],
        'vue/v-slot-style'          : 'off',
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
        {
            files: ['**/locales/**'],
            rules: {
                'max-len'                       : 'off',
                'v@intlify/vue-i18n/no-raw-text': 'off',
            },
        },
    ],
};

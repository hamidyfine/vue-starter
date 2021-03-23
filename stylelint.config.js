module.exports = {
    extends: ['stylelint-config-hudochenkov/full'],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules  : {
        indentation                : 4,
        'color-hex-case'           : 'upper',
        'color-hex-length'         : 'long',
        'no-descending-specificity': null,
        'at-rule-no-unknown'       : [
            true,
            {
                ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin', 'return', 'for', 'use', 'forward', 'debug', 'warn'],
            },
        ],
        'font-family-no-missing-generic-family-keyword': [
            true,
            {
                ignoreFontFamilies: ['icon-md', 'icon-mdi', 'Arial', 'VazirFD', 'IRANSans', 'Tahoma'],
            },
        ],

        'declaration-no-important'   : null, // It should be true
        'selector-max-type'          : null, // It should be 3
        'selector-max-id'            : null, // It should be 1
        'selector-no-qualifying-type': [ // It should not have ignore list
            true,
            {
                ignore: ['attribute', 'class', 'id'],
            },
        ],
        'unit-no-unknown': [
            true,
            {
                ignoreUnits: ['xs', 'sm', 'md', 'lg', 'xl'],
            },
        ],
    },
    syntax: 'scss',
};

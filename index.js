module.exports = {
    rules: {
        'arrow-body-style': [
            'error',
            'as-needed'
        ],
        'arrow-parens': 'error',
        'camelcase': "error",
        'comma-dangle': [
            'error',
            'always-multiline'
        ],
        'comma-spacing': 'error',
        complexity: 'off',
        curly: 'error',
        eqeqeq: [
            'error',
            'always',
            {
                null: "ignore"
            }
        ],
        'eol-last': 'error',
        'guard-for-in': 'error',
        indent: 'error',
        'keyword-spacing': [
            'error',
            {
                after: true
            }
        ],
        'max-classes-per-file': 'error',
        'max-len': [
            'error',
            {
                code: 120
            }
        ],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-debugger': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'off',
        'no-invalid-this': 'off',
        'no-labels': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new': 'error',
        'no-new-wrappers': 'error',
        'no-redeclare': [
            'error',
            {
                hoist: 'never'
            }
        ],
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unexpected-multiline': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        'no-use-before-define': 'off',
        'no-var': 'error',
        'object-shorthand': [
            'error',
            'always'
        ],
        'one-var': 'error',
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false
            }
        ],
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        quotes: [
            'error',
            'double',
            {
                avoidEscape: true
            }
        ],
        'quote-props': [
            'error',
            'consistent-as-needed'
        ],
        radix: 'error',
        'rest-spread-spacing': 'error',
        semi: 'error',
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never'
            }
        ],
        'spaced-comment': 'error',
        'space-infix-ops': 'error',
        'space-within-parens': [
            'error',
            'always'
        ],
        'sort-imports': 'error',
        'sort-keys': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'error',
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/class-name-casing': 'error',
        'typescript/no-explicit-any': 'off',
        'typescript/explicit-member-accessibility': 'error',
        'typescript/interface-name-prefix': [
            'error',
            'always'
        ],
        'typescript/member-ordering': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/no-empty-interface': 'error',
        'typescript/no-namespace': 'error',
        'typescript/no-parameter-properties': 'off',
        'typescript/no-triple-slash-reference': 'error',
        'typescript/no-type-alias': 'error',
        'typescript/no-var-requires': 'error',
        'typescript/prefer-namespace-keyword': 'error'
    }
};

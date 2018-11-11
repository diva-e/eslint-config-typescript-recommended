module.exports = {
    rules: {
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/class-name-casing': 'error',
        'typescript/interface-name-prefix': [
            'error',
            'always'
        ],
        'typescript/no-type-alias': 'error',
        'typescript/explicit-member-accessibility': 'error',
        'typescript/member-ordering': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/no-empty-interface': 'error',
        'typescript/prefer-namespace-keyword': 'error',
        'typescript/no-namespace': 'error',
        'typescript/no-parameter-properties': 'error',
        'typescript/no-triple-slash-reference': 'error',
        'typescript/no-var-requires': 'error',
        'arrow-parens': 'error',
        curly: 'error',
        eqeqeq: [
            'error',
            'always'
        ],
        'eol-last': 'error',
        'guard-for-in': 'error',
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-duplicate-imports': 'error',
        'no-eval': 'error',
        'no-labels': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new-wrappers': 'error',
        'no-return-await': 'error',
        'no-shadow': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-unused-expressions': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'one-var-declaration-per-line': 'error',
        'prefer-const': 'error',
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
        semi: [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error', {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never'
            }
        ],
        'valid-jsdoc': 'error'
    }
};

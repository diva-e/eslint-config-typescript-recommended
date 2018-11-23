module.exports = {
    root: true,
    env: {
        node: true,
        jest: true
    },
    plugins: [
        'jest'
    ],
    extends: [
        'plugin:jest/recommended',
        'eslint:recommended',
        "plugin:node/recommended"
    ]
};

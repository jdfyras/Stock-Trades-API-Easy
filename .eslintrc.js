module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 13
    },
    rules: {
        'prettier/prettier': 'off',
        'spaced-comment': 'off',
        'no-console': 'warn',
        'consistent-return': 'off',
        'func-names': 'off',
        'object-shorthand': 'off',
        'no-process-exit': 'off',
        'no-param-reassign': 'off',
        'no-return-await': 'off',
        'no-underscore-dangle': 'off',
        'class-methods-use-this': 'off',
        'prefer-destructuring': ['error', { object: true, array: false }],
        'no-unused-vars': ['error'],
        semi: 'off'
    }
}

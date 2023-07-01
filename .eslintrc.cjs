module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        // Disables the ESLint rules which will be handled by the "prettier"
        'eslint-config-prettier' // Always keep it last to overide the other configs
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {}
};

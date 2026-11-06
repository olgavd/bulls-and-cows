import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'no-var': 'error',
            'prefer-const': 'error',
            'no-console': 'warn',
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-var-requires": "error"
        },
    },
    {
        ignores: ['node_modules/', 'dist/'],
    },
);

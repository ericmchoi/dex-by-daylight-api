module.exports = {
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
      },
    },
  ],
};

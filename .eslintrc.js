module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  rules: {
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/tsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-var': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    'react/function-component-definition': ['off', {
      'namedComponents': ['function-declaration', 'function-expression', 'arrow-function', ['function-declaration', 'function-expression', 'arrow-function']],
      'unnamedComponents': ['function-expression', 'arrow-function', ['function-expression', 'arrow-function']]
    }],
    'jsx-a11y/label-has-associated-control': [ 'error', {
      'required': {
        'some': [ 'nesting', 'id'  ]
      }
    }],
    'jsx-a11y/label-has-for': [ 'error', {
      'required': {
        'some': [ 'nesting', 'id'  ]
      }
    }],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
      },
    ],
  },
  ignorePatterns: ['build/**', 'node_modules/**'],
}
